import "./ProcessLoader.scss";

const ProcessLoader = () => {
  return (
    <div className="progress_box">
      <div className="progress_process">
        <div className="filler"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default ProcessLoader;
