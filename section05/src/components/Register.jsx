import { useState } from "react";
import { useRef } from "react";
//회원가입폼
//1.이름 2.생년월일, 3.국적, 4.자기소개

const Register = () => {
  // const [name, setName] = useState("이름입력");
  // const [birth, setBirth] = useState("");
  // const [national, setNational] = useState("");
  // const [bio, setBio] = useState("자기소개하시오");
  // const onChangeName = (e) => {
  //   console.log(e);
  //   setInput({ ...input, name: e.target.value });
  // };
  // const onChangeBirth = (e) => {
  //   setInput({ ...input, birth: e.target.value });
  // };
  // const onChangeNational = (e) => {
  //   setInput({ ...input, national: e.target.value });
  // };
  // const onChangeBio = (e) => {
  //   setInput({ ...input, bio: e.target.value });
  // };
  //통합 (상태관리) useState
  const [input, setInput] = useState({
    name: "",
    birth: "",
    national: "",
    bio: "",
  });

  // useRef
  const countRef = useRef(0);
  const inputNameRef = useRef();
  const inputBioRef = useRef();

  //이벤트정의
  const onChange = (e) => {
    // countRef.current++; 카운트
    // console.log(countRef.current); 카운트
    console.log(`current =${countRef.current}`);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    if (input.name === "") {
      inputNameRef.current.focus();
      console.log(inputNameRef);
    } else if (input.bio === "") {
      inputBioRef.current.focus();
      console.log(inputBioRef);
    }
  };
  return (
    <>
      <div>
        <label htmlFor="name">성명</label>
        <input
          value={input.name}
          ref={inputNameRef}
          type="text"
          name="name"
          id="name"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="birth">생년월일</label>
        <input
          value={input.birth}
          type="date"
          name="birth"
          id="birth"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="national">국적</label>
        <select
          value={input.national}
          name="national"
          id="national"
          onChange={onChange}
        >
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="jp">일본</option>
        </select>
      </div>
      <div>
        <label htmlFor="bio">자기소개</label>
        <textarea
          value={input.bio}
          ref={inputBioRef}
          name="bio"
          id="bio"
          cols={30}
          rows={10}
          onChange={onChange}
        ></textarea>
      </div>
      <div>
        <button type="button" onClick={onSubmit}>
          제출
        </button>
      </div>
    </>
  );
};
export default Register;
