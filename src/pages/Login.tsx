import { useNavigate } from "react-router-dom";

import { LoginForm } from "../components/LoginForm";

const LoginPage = () => {

    const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    localStorage.setItem('loginStatus', 'true');
    navigate('/home');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{display: 'flex', height: '100vh', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
      <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
    </div>
  );
};

export default LoginPage;
