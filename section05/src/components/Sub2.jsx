const Sub2 = () => {
  const user = { name: "김동진", isLogin: true };
  return <>{user.isLogin === true ? <div>로그아웃</div> : <div>로그인</div>}</>;
};
export default Sub2;
