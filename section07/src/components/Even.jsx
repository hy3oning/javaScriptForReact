import { useEffect } from "react";
const Even = () => {
  //마운트될때와 언마운트될때
  useEffect(() => {
    console.log("Even Mount!");
    return () => {
      console.log("Even UnMount!!");
    };
  }, []);
  return (
    <>
      <div>
        <h1>짝수입니다.</h1>
      </div>
    </>
  );
};
export default Even;
