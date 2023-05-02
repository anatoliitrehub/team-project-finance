import style from './AccumulateMore.module.scss';
import device from '../../../assets/img/device-2x.png';
import { useSelector } from 'react-redux';

const Accumulate = () => {
  const { squareМeters } = useSelector(state => state.dinamics);
  const { cost, footage = 1 } = useSelector(state => state.plan);
  const pricePerOneSqMeter = cost / footage;


  const oneMoreSqMeter = (pricePerOneSqMeter, squareМeters) => {
    const needAccumulate = Math.round(pricePerOneSqMeter * (Math.ceil(squareМeters) - squareМeters));
    return needAccumulate === 0 ? pricePerOneSqMeter : needAccumulate;
  };

  return (
    <div className={style.container}>
      <div>
        <p className={style.text}>
          To add more <span className={style.addSqm}>1 sq.m</span> for planning,
          it remains to accumulate
        </p>
        <p className={style.cash}>{oneMoreSqMeter(pricePerOneSqMeter, squareМeters)} &#8372;</p>
      </div>
      <div>
        <img src={device} alt="accumulate" className={style.img} />
      </div>
    </div>
  );
};

export default Accumulate;
