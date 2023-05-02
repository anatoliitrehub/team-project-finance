import { useDropzone } from 'react-dropzone';
import { useEffect, useState } from 'react';
import style from './InfoDynamics.module.scss';
import floorPlan from '../../../assets/img/floor_plan-x1.png';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, userChartInfo } from 'redux/Dynamics/dinamicsOperation';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';

const InfoDynamics = () => {
  const [image] = useState(floorPlan);
  const dispatch = useDispatch();
  const selector = useSelector(state => state.dinamics);
  const selectorFootage = useSelector(state => state.plan);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': [],
      'image/jpg': [],
    },
  });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const formData = new FormData();
      formData.append('image', acceptedFiles[0]);
      dispatch(uploadImage(formData));
      dispatch(userChartInfo());
    }
  }, [acceptedFiles, dispatch]);

  const footageProcent = Math?.round(
    (+selector.squareМeters / selectorFootage.footage) * 100
  );

  return (
    <div className={style.containerInfo}>
      <div>
        <p
          className={style.periodOfAccumulating}
        >{`After ${selector.year} years ${selector.month} month`}</p>
        <div className={style.accumulatBlock}>
          <p className={style.accumulatText}>
            Accumulated, %:{' '}
            <span className={style.accumulatValue}>
              {selector.accumulatedProc}%
            </span>
          </p>
          <p className={style.accumulatText}>
            Accumulated, UAH:
            <span className={style.accumulatValue}>
              {selector.accumulatedUah} &#8372;
            </span>
          </p>
          <p className={style.accumulatText}>
            And this:{' '}
            <span className={style.accumulatValue}>
              {selector.squareМeters && +selector.squareМeters} кв. м
            </span>
          </p>
        </div>
        <p className={style.accumulatBar}>
          <span>{selector.squareМeters && +selector.squareМeters}</span> out of{' '}
          <span>{selectorFootage.footage}</span> sq.m accumulated
        </p>
        <div style={{ height: '8px' }}>
          <ProgressBar planInProcent={footageProcent} />
        </div>
      </div>

      <div className={style.picture}>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <img
            src={selector.image || image}
            alt=""
            width="254px"
            height="202px"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoDynamics;
