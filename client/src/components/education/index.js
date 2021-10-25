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
      console.log(userInfo)
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
        {console.log(value.expertise)}
         <div className="skills">
          {/* <DiReact />
          <DiNodejs />
          
          <DiJava />
          <DiJavascript1 />
          <AiFillHtml5 />
           */}
           
          {/* {value.expertise.map(i => i === "css"? <DiCss3 /> : i==="sql"?<DiMysql /> : <> </>)} */}
          { value.expertise}
          
        </div> 
      </div>
    </div>
  );
};

export default Education;
