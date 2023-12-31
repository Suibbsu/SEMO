import { useState } from "react";
import NoticeFrm from "./NoticeFrm";
import "./notice.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const NoticeWrite = () => {
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeContent, setNoticeContent] = useState("");

  const navigate = useNavigate();
  const write = () => {
    if (
      noticeTitle !== "" &&
      noticeContent !== "" &&
      noticeContent !== "<p><br></p>"
    ) {
      const form = new FormData();
      form.append("noticeTitle", noticeTitle);
      form.append("noticeContent", noticeContent);
      const token = window.localStorage.getItem("token");
      axios
        .post("/notice/insert", form, {
          headers: {
            contentType: "multipart/form-data",
            processData: false,
            //상단 두 줄은 파일 첨부해야 할 경우를 위한 코드
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          if (res.data > 0) {
            navigate("/notice");
          } else {
            Swal.fire("잠시 후 다시 시도해주세요.");
          }
        })
        .catch((res) => {
          console.log(res.response.status);
        });
    } else {
      Swal.fire({
        icon: "warning",
        html: "내용을 입력해주세요.",
      });
    }
  };
  return (
    <div className="notice-frm-wrap">
      <div className="notice-frm-title">공지사항 작성</div>
      <NoticeFrm
        noticeTitle={noticeTitle}
        setNoticeTitle={setNoticeTitle}
        noticeContent={noticeContent}
        setNoticeContent={setNoticeContent}
        buttonEvent={write}
        type="write"
      />
    </div>
  );
};

export default NoticeWrite;
