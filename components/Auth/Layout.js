import { useSelector } from "react-redux";
import LoginEmail from "./LoginEmail";

const Layout = ({ children }) => {
  const isLogin = useSelector((state) => state.auth.valid_token);
  

  return (
    <div className="content">
      {isLogin? {children}:
      <LoginEmail />}
    </div>
  );
};

export default Layout;
