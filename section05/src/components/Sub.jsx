import "./../css/Sub.css";
const Sub = () => {
  const user = { name: "김동진", isLogin: true };
  if (user.isLogin === true) {
    return (
      <>
        <div>
          <h1 className="h1-login">{user.name}님 로그아웃해주세요</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1 id="h1-logout">{user.name}님 로그인해주세요</h1>
      </>
    );
  }
};
export default Sub;
