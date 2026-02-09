const Viewer = ({ calculate }) => {
  return (
    <>
      <div className="viewer">
        <h1>결과</h1>
        <h2>{calculate}</h2>
      </div>
    </>
  );
};
export default Viewer;
