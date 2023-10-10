import { useEffect, useState } from "react";
import "./admin.css";
import { Route, Routes } from "react-router";
import AdminMember from "./AdminMember";
import AdminReport from "./AdminReport";
import { Link, useNavigate } from "react-router-dom";
//import { MySideMenu } from "../mypage/Mypage";
import axios from "axios";
import Swal from "sweetalert2";
import { MySideMenu } from "../mypage/Mypage";

const AdminMain = (props) => {
  const navigate = useNavigate();
  const isLogin = props.isLogin;
  const setIsLogin = props.setIsLogin;
  const token = window.localStorage.getItem("token");
  const [member, setMember] = useState({});
  const [adminMenus, setAdminMenus] = useState([
    { url: "list", text: "회원 목록 조회", active: false },
    { url: "report", text: "신고 내역 조회", active: false },
  ]);

  useEffect(() => {
    axios
      .post("/member/getMember", null, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setMember(res.data);
        document.querySelectorAll(".adminmenu a")[0].click();
      })
      .catch((res) => {
        if (res.response.status === 403) {
          Swal.fire({
            title: "로그인이 필요한 서비스 입니다.",
            text: "로그인 페이지로 이동합니다.",
            icon: "info",
          }).then(() => {
            navigate("/login");
          });
        }
      });
  }, []);

  if (!isLogin) {
    Swal.fire({
      title: "로그인이 필요한 서비스 입니다.",
      text: "로그인 페이지로 이동합니다.",
      icon: "info",
    }).then(() => {
      navigate("/login");
    });
  }
  {
    /* 
  const myfeed = () => {
    navigate("/feed");
  };
  */
  }

  return (
    <div className="admin-page-all-wrap">
      {/* 
      <div className="mypage-title">
        <h2>Admin Page</h2>
      </div>
      <div className="mypage-intro">
        <div className="mypage-name">
          <div className="material-icons">face</div>
          <div>
            <span>{member.memberName}</span>
          </div>
        </div>
        
        <div className="mypage-buttons">
          <div className="mypage-myfeed a" onClick={myfeed}>
            <div className="material-icons">interests</div>
            <div className="texta">내 피드</div>
          </div>
          <div className="mypage-myfeed b">
            <div className="material-icons">chat_bubble</div>
            <div className="textb">내 채팅</div>
          </div>
        </div>
        
      </div>
      */}
      <div className="admin-content">
        <div className="admin-current-content">
          <AdminMenu adminMenus={adminMenus} setAdminMenus={setAdminMenus} />
          {/* 
          <div className="links">
            <Link to="list">회원 목록 조회</Link>
            <Link to="report">신고 내역 조회</Link>
          </div>
          */}
          <Routes>
            <Route path="report" element={<AdminReport />} />
            <Route path="list" element={<AdminMember />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const AdminMenu = (props) => {
  const navigate = useNavigate();
  const adminMenus = props.adminMenus;
  const setAdminMenus = props.setAdminMenus;

  const activeTab = (index) => {
    adminMenus.forEach((item) => {
      item.active = false;
    });
    adminMenus[index].active = true;
    setAdminMenus([...adminMenus]);
  };

  return (
    <div className="adminmenu">
      <ul>
        {adminMenus.map((adminMenu, index) => {
          return (
            <li key={"adminMenu" + index}>
              {adminMenu.active ? (
                <Link
                  to={adminMenu.url}
                  className="active-side"
                  onClick={() => {
                    activeTab(index);
                  }}
                >
                  {adminMenu.text}
                </Link>
              ) : (
                <Link
                  to={adminMenu.url}
                  onClick={() => {
                    activeTab(index);
                  }}
                >
                  {adminMenu.text}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminMain;
