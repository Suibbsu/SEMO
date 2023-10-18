import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import ReportFrm from "./ReportFrm";

const MypageReport = () => {
  const location = useLocation();
  const group = location.state.group;
  const member = location.state.member;
  console.log(group);
  console.log(member);

  const [reportContent, setReportContent] = useState("");

  const navigate = useNavigate();
  const report = () => {
    console.log(reportContent);
    if (reportContent !== "") {
      const form = new FormData();
      form.append("reportContent", reportContent);
      form.append("groupNo", group.groupNo);
      form.append("memberName", member.memberNo);
      const token = window.localStorage.getItem("token");
      axios
        .post("/report/insert", form, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data > 0) {
            Swal.fire("신고가 접수되었습니다.");
            navigate("/mygroup");
          }
        })
        .catch((res) => [console.log(res.response.status)]);
    } else {
      Swal.fire("에러가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };
  return (
    <div>
      <div className="report-frm-title">모임 신고</div>
      <ReportFrm
        group={group}
        member={member}
        reportContent={reportContent}
        setReportContent={setReportContent}
        buttonEvent={report}
      />
    </div>
  );
};

export default MypageReport;