import { useState, useEffect } from 'react';
import s from './GhostBox.module.scss';

function GhostBox() {
  const [xAxis, setXAxis] = useState(-100);
  const [yAxis, setYAxis] = useState(-150);

  useEffect(() => {
    const handleMouseMove = event => {
      const pageX = window.innerWidth;
      const pageY = window.innerHeight;
      const mouseY = event.pageY;
      const mouseX = event.pageX / -pageX;

      setYAxis(((pageY / 2 - mouseY) / pageY) * 300);
      setXAxis(-mouseX * 100 - 100);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.box}>
        <div className={s.boxGhost}>
          {[...Array(6)].map((_, i) => (
            <div className={s.symbol} key={i} />
          ))}

          <div className={s.ghostContainer}>
            <div className={s.boxGhostEyes}>
              <div
                className={s.boxEyeLeft}
                style={{ transform: `translate(${xAxis}%, -${yAxis}%)` }}
              />
              <div
                className={s.boxEyeRight}
                style={{ transform: `translate(${xAxis}%, -${yAxis}%)` }}
              />
            </div>
            <div className={s.boxGhostBottom}>
              {[...Array(5)].map((_, i) => (
                <div key={i} />
              ))}
            </div>
          </div>

          <div className={s.boxGhostShadow}></div>
        </div>

        <div className={s.boxDescription}>
          <div className={s.descriptionContainer}>
            <div className={s.descriptionTitle}>Whoops!</div>
            <div className={s.descriptionText}>
              It seems like we couldn't find the page you were looking for
            </div>
          </div>

          <a
            href="https://aratskov.github.io/project/plan"
            target="_blank"
            rel="noopener noreferrer"
            className={s.boxBtn}
          >
            Go back
          </a>
        </div>
      </div>
    </div>
  );
}

export default GhostBox;
