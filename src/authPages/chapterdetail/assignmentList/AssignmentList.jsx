import { Fragment, useEffect, useState } from "react";
import "./AssignmentList.scss";
import axios from "axios";
import { baseUrl, getAssignmentList } from "../../../utils/apidata";

const AssignmentList = ({activeTab}) => {

const [assignmentData, setAssignmentData] = useState([]);

  const getAssignment = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.get(`${baseUrl}/${getAssignmentList}`,{headers}, {chapterId:`${activeTab}`});
      if(response?.data?.success){
        setAssignmentData(response?.data?.data);
      }else{
        setAssignmentData([]);
      }
      // console.log("Assignment List :::===>", response);
    } catch (error) {
      console.log(error);
      setAssignmentData([]);
    }
  };

  useEffect(()=>{
    getAssignment();
  }, []);

  return (
    <Fragment>
      <h6 className="assignment">Assignment</h6>
    </Fragment>
  );
};

export default AssignmentList;
