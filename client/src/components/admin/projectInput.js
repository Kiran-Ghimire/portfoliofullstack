import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Form, Input, Button, Upload } from "antd";

import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

const ProjectInput = () => {
  let history = useHistory();
  const [id, setId] = useState([]);
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
    let data = new FormData();
    
    data.append("description", values.description);
    data.append("projectname", values.projectname);

    data.append("photo", values.photo[0].originFileObj);

    axios
      .post("/admin/projects", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setId(res.data.result._id);
        console.log("ID", res);
        if(res.data.result._id) 
        {history.push(`/admin/projects/${res.data.result._id}`)}
      })
      .catch((errors) => console.log(errors));
    console.log(values);
    // console.log(image);
  };
  const handleUpload = (file) => {
    setImage(file);
  };

  const handleRemove = () => {
    setImage();
  };
  return (
    <div className="container">
      <Form
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
      </Form>
    </div>
  );
};

export default ProjectInput;
