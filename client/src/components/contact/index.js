import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { useParams } from "react-router";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

import "./styles.scss";
const { Title } = Typography;

const Contact = ({value, setValue,response, setResponse}) => {
  
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
    
    })

    .catch((err) => console.log(err));
  }
  const onFinish = async (values) => {
    await axios.post("/contact", {values: values})
    .then((res) => {
        setResponse(res.data.message);
    })
    .catch((err) => {console.log(err)})
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  


  return (
    <div className="container contact">
      <div className="detailcontainer">
        <div className="contactdetail">
          <Title level={3} style={{ color: "white" }}>
            Get in Touch:
          </Title>
          <div>{value.email}</div>
          <div>{value.phone}</div>
          <div>{value.address}</div>
        </div>
        
      </div>
      <div>
        <Link
          to="https://www.linkedin.com/in/kiran-ghimire-bb82a61b8"
          target="_blank"
        >
          <AiFillLinkedin
            size={40}
            color="white"
            style={{ marginRight: "5px" }}
          />
        </Link>
        <Link to="https://github.com/Kiran-Ghimire" target="_blank">
          <AiFillGithub color="white" size={40} />
        </Link>
      </div>
      <div style={{ marginTop: "5px" }}>
        &copy; Copyright all rights reserved.
      </div>
    </div>
  );
};

export default Contact;
