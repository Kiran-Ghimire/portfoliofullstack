import React from "react";
import Intro from "./components/intro";
import "./app.scss";
import { useParams } from "react-router";
import Contact from "./components/contact";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Projects from "./components/projects";
import Education from "./components/education";
import Admin from "./components/admin/index";
import ProjectInput from "./components/admin/projectInput";
import axios from "axios";

function App() {

  const [value, setValue] = React.useState([]);
  const [project, setProject]= React.useState([]);
  const [response, setResponse]= React.useState([]);
//   React.useEffect(() => {
    
//     getUserInfo();

// }, []);        

  
//   const getUserInfo = () => {
//     axios.get("/admin")
//     .then((res) => {const userInfo = res.data.result;
//       console.log(res);
//       setValue(userInfo); 
    
//     })

//     .catch((err) => console.log(err));
//   }
  
//   console.log(value);
  return (
    <BrowserRouter>
      <div>
        <Route path="/portfolio/:id" exact>
          <Intro value={value} setValue={setValue} />
         <Education value={value} setValue={setValue} />
         <Projects   value={value} setValue={setValue}/>
          <Contact value={value} setValue={setValue} response={response} setResponse={setResponse}/>
          
        </Route>

        <Route path="/" exact>
          <Admin />
        </Route>
        <Route path="/admin/projects">
          <ProjectInput  />
        </Route>
        {/* <Route path="/admin" exact>
        
        </Route> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
