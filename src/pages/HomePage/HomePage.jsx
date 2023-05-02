import manDesktopX from 'assets/img/man_desktop.png';
import manDesktopXx from 'assets/img/man_desktop-2x.png';
import manTabletX from 'assets/img/man_tablet.png';
import manTabletXx from 'assets/img/man_tablet-2x.png';
import manMobileX from 'assets/img/man_mob.png';
import manMobileXx from 'assets/img/man_mob-2x.png';
import st from './HomePage.module.scss';

import { Outlet } from 'react-router-dom';

const BluredItem = ({ children }) => {
  return (
    <>
      <div className={st.bluredWrapper}>{children}</div>
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <div className={st.common}>
        <div className={st.imageBlock}>
          <div className={st.picWrapper}>
            <picture className={st.pic}>
              <source
                srcSet={`${manDesktopX} 1x, ${manDesktopXx} 2x`}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={`${manTabletX} 1x, ${manTabletXx} 2x`}
                media="(min-width: 768px)"
              />
              <source
                srcSet={`${manMobileX} 1x, ${manMobileXx} 2x`}
                media="(max-width: 767px)"
              />
              <img src={manDesktopX} alt="logo man" className={st.image} />
            </picture>

            <div className={st.bluredLeft}>
              <BluredItem>
                <p>
                  Payments that work{' '}
                  <span style={{ color: '#3A6AF5', fontWeight: '700' }}>
                    for you
                  </span>
                </p>
              </BluredItem>
            </div>

            <div className={st.bluredRight}>
              <BluredItem>
                <p>
                  <span style={{ color: '#3A6AF5', fontWeight: '700' }}>
                    Apartments
                  </span>
                  of your dreams
                </p>
              </BluredItem>
            </div>
          </div>
        </div>
        <div className={st.titleWrapper}>
          <div className="container">
            <h1 className={st.title}>
              <span className={st.titleBlue}>Planner</span>
              <span className={st.titleTwo}> for joint</span>
              <span className={st.titleText}> savings for an apartment</span>
            </h1>
          </div>
        </div>
      </div>

      <Outlet/>
    </>
  );
};

export default HomePage;
