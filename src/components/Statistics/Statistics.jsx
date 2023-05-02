import MonthPeriod from './MonthPeriod/MonthPeriod';
import StatisticPageNav from './StatisticPageNav/StatisticPageNav';
import s from './Statistics.module.css';
import wave_desktop from '../../assets/img/wave_desktop.png';
import wave_desktop2 from '../../assets/img/wave_desktop-2x.png';
import wave_tablet from '../../assets/img/wave_tablet.png';
import wave_tablet2 from '../../assets/img/wave_tablet-2x.png';
// import { bottom } from '@popperjs/core';

const Statistics = () => {
  return (
    <>
      <div className={s.style}>
        <StatisticPageNav />
        <MonthPeriod />
      </div>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          bottom: '0',
          zIndex: '-5',
        }}
      >
        <picture>
          <source
            srcSet={`${wave_desktop} 1x, ${wave_desktop2} 2x`}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={`${wave_tablet} 1x, ${wave_tablet2} 2x`}
            media="(min-width: 768px)"
          />
          <source srcSet={null} media="(max-width: 767px)" />

          <img src={wave_desktop} alt="wave" media="(min-width: 768px)" />
        </picture>
      </div>
    </>
  );
};

export default Statistics;
