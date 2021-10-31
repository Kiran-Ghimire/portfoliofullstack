import React, { useEffect } from "react";
import { Timeline } from "antd";
import { useParams } from "react-router";
import {
  DiReact,
  DiNodejs,
  DiMysql,
  DiJava,
  DiJavascript1,
  DiCss3,
} from "react-icons/di";
import axios from "axios";
import { AiFillHtml5 } from "react-icons/ai";
import "./styles.scss";

const Education = ({value, setValue}) => {
  const {id} = useParams();
  console.log(id);

  useEffect(() => {
    
    getUserInfo();
    
}, []);

  const getUserInfo = () => {
    axios.get(`/admin/${id}`)
    .then((res) => {const userInfo = res.data.result;
      //console.log(res);
      setValue(userInfo); 
      console.log("education", userInfo)
    })

    .catch((err) => console.log(err));
    
  } 
  
  return (
    <div className="container education">
      <h1 style={{ marginBottom: "50px" }}>Education</h1>
      <Timeline mode="alternate">
        <Timeline.Item color="#f84525">
          <h2 style={{ color: "#f84525" }}>Bachelors (2018 - 2021)</h2>
          <h3 style={{ marginTop: "-0.4rem" }}>{value.college}</h3>
        </Timeline.Item>
        <Timeline.Item color="#f84525">
          <h2 style={{ color: "#f84525" }}>Highschool (2018 - 2021)</h2>
          <h3 style={{ marginTop: "-0.4rem" }}>{value.highschool}</h3>
        </Timeline.Item>
        <Timeline.Item color="#f84525">
          <h2 style={{ color: "#f84525" }}>School (2018 - 2021)</h2>
          <h3 style={{ marginTop: "-0.4rem" }}>{value.school}</h3>
        </Timeline.Item>
      </Timeline>
      <div className="top_expertise">
        <h1 style={{ marginBottom: "50px" }}>TOP EXPERTISE</h1>
        
         <div className="skills">
          
          { value?.expertise?.split(",").map(i => i === "react"? <DiReact /> : i === "javascript"?<DiJavascript1  /> :  i === "node" ? <DiNodejs /> : i === "java" ? <DiJava />: i === "html" ? <AiFillHtml5 />: i === "css" ? <DiCss3 /> : i === "sql" ? <DiMysql />: "")}
          
        </div> 
      </div>
    </div>
  );
};

export default Education;

