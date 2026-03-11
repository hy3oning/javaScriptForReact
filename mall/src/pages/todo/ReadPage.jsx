import Header from "../../include/Header";
import "./ReadPage.css";
import ReadComponent from "../../components/todo/ReadComponent";
import { useParams } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";
const ReadPage = () => {
  const { tno } = useParams();
  //?page=1&size=10
  const { moveToList, moveToModify } = useCustomMove();
  return (
    <div className="main-container">
      <Header />
      <ReadComponent
        tno={tno}
        moveToList={moveToList}
        moveToModify={moveToModify}
      />
    </div>
  );
};
export default ReadPage;
