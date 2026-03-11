import Header from "../../include/Header";
import ModifyComponent from "../../components/todo/ModifyComponent";
import { useParams } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";
import "./ModifyPage.css";
const ModifyPage = () => {
  const { tno } = useParams();
  const { moveToList, moveToRead } = useCustomMove();
  return (
    <div className="list-page-container">
      <Header />
      <main className="list-content-area">
        <div className="list-wrapper">
          <ModifyComponent
            tno={tno}
            moveToList={moveToList}
            moveToRead={moveToRead}
          />
        </div>
      </main>
    </div>
  );
};
export default ModifyPage;
