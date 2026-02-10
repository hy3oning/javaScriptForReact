import "./../css/ListItem.css";

const ListItem = ({ student, onDelete, onEdit }) => {
  const { id, name, kor, eng, mat, date } = student;
  const total = kor + eng + mat;
  const avg = (total / 3).toFixed(1);

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{kor}</td>
      <td>{eng}</td>
      <td>{mat}</td>
      <td>{total}</td>
      <td>{avg}</td>
      <td>
        <button onClick={() => onEdit(student)}>수정</button>
      </td>
      <td>
        <button onClick={() => onDelete(id)}>삭제</button>
      </td>
      <td>{date}</td>
    </tr>
  );
};

export default ListItem;
