const Viewer = ({ count }) => {
  return (
    <>
      <div className="viewer">
        <h1>현재카운트</h1>
        <h2>{count}</h2>
      </div>
    </>
  );
};
export default Viewer;
