import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Form, Input, Button, Upload, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

const ProjectInput = ({project, setProject}) => {
  let history = useHistory();
  // const [id, setId] = useState([]);
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
  const onFinish = (values) => {
    console.log("VAL",values)
    // let data = new FormData();

    // const projectValues= {projectdescription: values.users,
    // projectname: values.users}
    
    // const projectValues= {projectdescription: values.users[0].projectdescription,
    //    projectname: values.users[0].projectname}
    //  projectphoto: values.users[0].photo[0].originFileObj 
    // data.append("projectdescription", values.users[0].projectdescription);
    // data.append("projectname", values.users[0].projectname);
    // console.log("projectname", values.users[0].projectname);
    // data.append("projectphoto", values.users[0].photo[0].originFileObj);
    // console.log("photo", values.users[0].photo[0].originFileObj)
    // axios
    //   .post("/admin/projects", data, {
    //     headers: {
    //       "Content-Type": "multipart/form-data", 
    //     },
    //   })
    //   .then((res) => {
    //     setId(res.data.result._id);
    //     console.log("ID", res);
    //     if(res.data.result._id) 
    //     {history.push(`/admin/projects/${res.data.result._id}`)}
    //   })
    //   .catch((errors) => console.log(errors));
    //  console.log(values);
    // // console.log(image);
    setProject(values.users);
    console.log("here", values.users)
  };
  const handleUpload = (file) => {
    setImage(file);
  };

  const handleRemove = () => {
    setImage();
  };
  return (
    <div className="container">
      

<Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" onSubmit={e => e.preventDefault()} labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        >
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space key={key} style={{  marginBottom: 8 }} align="baseline">
                 
                <Form.Item
                  {...restField}
                  name={[name, 'projectname']}
                  fieldKey={[fieldKey, 'projectname']}
                  rules={[{ required: true, message: 'Missing project name' }]}
                >
                  <Input placeholder="Project Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'projectdescription']}
                  fieldKey={[fieldKey, 'description']}
                  rules={[{ required: true, message: 'Missing project description' }]}
                >
                  <Input.TextArea placeholder="Description" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Project
        </Button>
      </Form.Item>
    </Form>
     
    </div>
  );
};

export default ProjectInput;


{/* <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={onFinish}
      >
        <Form.Item
          name="photo"
          label="Photo"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="photo"
          rules={[{ required: true, message: "Photo is required!" }]}
          type="image"
        >
          <Upload
            name="logo"
            action="/upload.do"
            listType="picture"
            accept="image/*"
            fileList={file}
            progress={{ type: "line" }}
            maxCount={1}
            beforeUpload={() => false}
            onChange={handleUpload}
            onRemove={handleRemove}
            style={{ display: "flex" }}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          label="ProjectName"
          name="projectname"
          rules={[
            { required: true, message: "Please input your project Name!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your project description!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form> */}