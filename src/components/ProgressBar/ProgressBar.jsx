import st from './ProgressBar.module.scss';

const ProgressBar = ({ planInProcent = 20 }) => {
  const plan = `${planInProcent}%`;


  return (
    <div className={st.outsideBox}>
      <div className={st.insideBox} style={{ width: plan }}></div>
    </div>
  );
};

export default ProgressBar;

// {/* <div style={{ width: '200px', height: '8px' }}>
//   <ProgressBar planInProcent={55} />
// </div>; */}
