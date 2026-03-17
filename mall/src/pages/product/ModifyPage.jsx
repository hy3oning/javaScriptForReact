import Header from "../../include/Header";
import ModifyComponent from "../../components/product/ModifyComponent";
import { useParams } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";
import "./ModifyPage.css";
const ModifyPage = () => {
  const { pno } = useParams();
  const { moveToModifyList, moveToModifyRead } = useCustomMove();
  return (
    <div className="list-page-container">
      <Header />
      <main className="list-content-area">
        <div className="list-wrapper">
          <ModifyComponent
            pno={pno}
            moveToModifyList={moveToModifyList}
            moveToModifyRead={moveToModifyRead}
          />
        </div>
      </main>
    </div>
  );
};
export default ModifyPage;
