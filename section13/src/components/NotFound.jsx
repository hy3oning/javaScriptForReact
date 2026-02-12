import Header from "./Header";
import Button from "./Button";
const NotFound = () => {
  return (
    <>
      <Header
        title={"HEADER"}
        leftChild={
          <Button
            text={"LEFT"}
            type={"POSITIVE"}
            onClick={(e) => {
              alert(e.target.innerText);
            }}
          />
        }
        rightChild={
          <Button
            text={"RIGHT"}
            type={"NEGATIVE"}
            onClick={(e) => {
              alert(e.target.innerText);
            }}
          />
        }
      />
      <h1>NotFound</h1>
    </>
  );
};
export default NotFound;
