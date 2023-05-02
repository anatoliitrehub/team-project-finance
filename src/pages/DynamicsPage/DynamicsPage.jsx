import style from './DynamicPage.module.scss';
import DynamicsList from 'components/Dynamics/DynamicsList/DynamicsList';
import DynamicsSelect from 'components/Dynamics/DynamicsSelect/DynamicsSelect';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Accumulate from 'components/Dynamics/AccumulateMore/AccumulateMore';
import InfoDynamics from 'components/Dynamics/InfoDynamics/InfoDynamics';
import DynamicTitle from 'components/Dynamics/DynamicsTitle/DynamicsTitle';
import { useDispatch, useSelector } from 'react-redux';
import { userChartInfo } from 'redux/Dynamics/dinamicsOperation';
import { useEffect } from 'react';
import { getPersonalPlan } from 'redux/PersonalPlan/personalPlanOperations';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DynamicsPage = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const selector = useSelector(state => state.dinamics);
  // eslint-disable-next-line
  const { statByYear, accumulatedProc } = selector;
  // console.log("DynamicsPage  statByYear:", statByYear[0].month)
  useEffect(() => {
    dispatch(getPersonalPlan());
    dispatch(userChartInfo());
  }, [dispatch]);

  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Accumulated',
        data: labels?.map((label, index) => {
          if (statByYear) {
            return (
              index + 1 === +statByYear[0].month &&
              statByYear[0]?.income * (accumulatedProc / 100)
            );
          }
          return [];
        }),
        backgroundColor: 'rgba(99, 89, 233, 1)',
      },
      {
        label: 'Expenses',
        data: labels?.map((label, index) => {
          if (statByYear) {
            return index + 1 === +statByYear[0].month && statByYear[0]?.expense;
          }
          return [];
        }),
        backgroundColor: 'rgba(58, 106, 245, 1)',
      },
      {
        label: 'Income',
        data: labels?.map((label, index) => {
          if (statByYear) {
            return index + 1 === +statByYear[0].month && statByYear[0]?.income;
          }
          return [];
        }),

        backgroundColor: 'rgba(243, 243, 243, 1)',
      },
    ],
  };

  const options = {
    indexAxis: 'x',
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          boxWidth: 11,
          boxHeight: 11,
          useBorderRadius: true,
          borderRadius: 5.5,
          textAlign: 'left',
          padding: 50,
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
        borderRadius: 10,
      },
    },
  };

  const optionsHorizontal = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          boxWidth: 11,
          boxHeight: 11,
          useBorderRadius: true,
          borderRadius: 5.5,
          textAlign: 'left',
          // padding: 50,
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
        borderRadius: 10,
      },
    },
  };

  const chartjsStyle = {
    width: '422px',
    height: '219px',
  };

  const chartjsStyleHorizontal = {
    width: '436px',
    height: '222px',
  };

  return (
    <>
      <div className="container">
        <div className={style.container}>
          <div className={style.diagramContainer}>
            <DynamicTitle />
            {window.innerWidth > 481 ? (
              <Bar style={chartjsStyle} data={data} options={options} />
            ) : (
              <Bar
                style={chartjsStyleHorizontal}
                data={data}
                options={optionsHorizontal}
              />
            )}
            <div className={style.containerSelect}>
              <DynamicsSelect />
              <DynamicsList />
            </div>
          </div>
          <div>
            <div>
              <InfoDynamics />
              <Accumulate />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicsPage;
