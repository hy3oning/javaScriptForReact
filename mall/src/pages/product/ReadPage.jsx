import Header from "../../include/Header";
import "./ReadPage.css";
import ReadComponent from "../../components/product/ReadComponent";
import { useParams } from "react-router-dom";
const ReadPage = () => {
  const { pno } = useParams();
  return (
    <div className="list-page-container">
      <Header />
      <main className="list-content-area">
        <div className="list-wrapper">
          <ReadComponent pno={pno} />
        </div>
      </main>
    </div>
  );
};
export default ReadPage;
