import { Route, Routes } from "react-router-dom";
import MeetingCreate from "./MeetingCreate";
import MeetingView from "./MeetingView";
import MeetingModify from "./MeetingModify";

const MeetingMain = (props) => {
  const isLogin = props.isLogin;
  const setIsLogin = props.setIsLogin;
  return (
    <Routes>
      <Route
        path="create"
        element={<MeetingCreate isLogin={isLogin} setIsLogin={setIsLogin} />}
      />
      <Route
        path="view"
        element={<MeetingView isLogin={isLogin} setIsLogin={setIsLogin} />}
      />
      <Route
        path="modify"
        element={<MeetingModify isLogin={isLogin} setIsLogin={setIsLogin} />}
      />
    </Routes>
  );
};

export default MeetingMain;
