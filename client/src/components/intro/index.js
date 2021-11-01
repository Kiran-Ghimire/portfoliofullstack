import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./styles.scss";
import axios from "axios";
import Typewriter from "typewriter-effect";

const Intro = ({value, setValue}) => {
  
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
  return (
    <div className="container intro">
      <div className="userdetail">
        <div
          style={{
            color: "#EA4123",
            lineHeight: 0.1,
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          <Typewriter
            options={{
              strings: [
                "Node Developer",
                "React Developer",
                "Database Designer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div>
          <h1 style={{ color: "white", marginTop: "6px" }}>
            Hi, I'm {value.fullname}
          </h1>
        </div>

        <div>
          <div>
            <p style={{ textAlign: "justify" }}>
              {value.description}
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "50%" }}>
        <img
          height="400"
          width="300"
          style={{ objectFit: "cover" }}
          src={`http://localhost:8888/${value.photo}`}
        />
      </div>
    </div>
  );
};

export default Intro;
