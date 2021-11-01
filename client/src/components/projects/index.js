import React, {useEffect} from "react";
import { Card, Row, Col } from "antd";
import { useParams } from "react-router";
import axios from "axios";

const { Meta } = Card;

const Projects = ({value, setValue}) => {
  const {id} = useParams();
  console.log(id);

  useEffect(() => {
    
    getUserInfo();
    console.log("hereValue", value);

}, []);

  const getUserInfo = () => {
    axios.get(`/admin/${id}`)
    .then((res) => {const userInfo = res.data.result;
      console.log("hereres",res);
      // console.log("response", res.data.result)
      console.log("Valu", JSON.parse(res.data.result.projects[0]))
      setValue(userInfo); 
      console.log("userInfo", userInfo)
      
    })
    .catch((err) => console.log(err));
  }
   const parseData= JSON.parse(value.projects[0]);
  return (

    <div className="container">
      <h1 style={{ marginTop: "6px" }}>Some of My Projects</h1>
      <Row>
      <Col sm={8}>
          <Card
            hoverable
            style={{ width: 240 }} 
            // cover={
            //   <img
            //     alt="example"
            //     src={project.photo}
            //   />
            // }
          >
            
            {
            value.projects[0].length !== 0 &&
            
            parseData.map((e) => {
              console.log(e);
              return(
                <>
                <div>{e.projectname} </div>
                <div>{e.projectdescription}</div>
                {/* <Meta title={value.projectname} description={value.projectdescription}/> */}
                </>
              )

            })}
          </Card>
        </Col>
        <Col sm={8}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col sm={8}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
