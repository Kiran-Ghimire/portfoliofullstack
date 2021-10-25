import React, {useEffect} from "react";
import { Card, Row, Col } from "antd";
import { useParams } from "react-router";
import axios from "axios";

const { Meta } = Card;

const Projects = ({project, setProject}) => {
  const {id} = useParams();
  console.log(id);

  useEffect(() => {
    
    getUserInfo();

}, []);

  const getUserInfo = () => {
    axios.get(`/admin/projects/${id}`)
    .then((res) => {const userInfo = res.data.result;
      //console.log(res);
      setProject(userInfo); 
    
    })

    .catch((err) => console.log(err));
  }
  return (
    <div className="container">
      <h1 style={{ marginTop: "6px" }}>Some of My Projects</h1>
      <Row>
        <Col sm={8}>
          {/* <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src={project.photo}
              />
            }
          >
            <Meta title={project.projectname} description={project.description}/>
          </Card> */}
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
