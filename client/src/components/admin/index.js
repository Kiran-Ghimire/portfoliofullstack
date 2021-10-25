import React, { useState } from "react";
import axios from "axios";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Upload,
  Checkbox,
  Row,
  Col,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import {
  DiReact,
  DiNodejs,
  DiMysql,
  DiJava,
  DiJavascript1,
  DiCss3,
} from "react-icons/di";
import { Link , useHistory } from "react-router-dom";
import { AiFillHtml5 } from "react-icons/ai";
const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 80,
      }}
    >
      <Option value="977">+977</Option>
    </Select>
  </Form.Item>
);

const Admin = () => {
  let history = useHistory();
  const [id, setId] = React.useState([]);
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const [componentSize, setComponentSize] = useState("default");

  const normFile = (e) => {
    // console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish = (values) => {
    let data = new FormData();
    data.append("fullname", values.fullname);
    data.append("description", values.description);

    data.append("photo", values.photo[0].originFileObj);
    data.append("college", values.college);
    data.append("highschool", values.highschool);
    data.append("school", values.school);
    data.append("expertise", values.expertise);
    data.append("email", values.email);
    data.append("phone", values.phone);
    data.append("address", values.address);
    console.log("values", values)
    axios
      .post("/admin", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setId(res.data.result._id);
        console.log("ID", res);
        if(res.data.result._id) 
        {history.push(`/portfolio/${res.data.result._id}`)}
      })
      .catch((errors) => console.log(errors));
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
          label="FullName"
          name="fullname"
          rules={[{ required: true, message: "Please input your FullName!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
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
          label="College"
          name="college"
          rules={[{ required: true, message: "College name is required!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Date" style={{ marginBottom: 0 }}>
          <Form.Item
            help="Please select the starting date"
            style={{ display: "inline-block", width: "calc(50% - 12px)" }}
          >
            <DatePicker />
          </Form.Item>
          <span
            style={{
              display: "inline-block",
              width: "24px",
              lineHeight: "32px",
              textAlign: "center",
            }}
          >
            -
          </span>
          <Form.Item
            style={{ display: "inline-block", width: "calc(50% - 12px)" }}
            help="Please select the ending date"
          >
            <DatePicker />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Highschool"
          name="highschool"
          rules={[{ required: true, message: "Highschool name is required!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Date" style={{ marginBottom: 0 }}>
          <Form.Item
            help="Please select the starting date"
            style={{ display: "inline-block", width: "calc(50% - 12px)" }}
          >
            <DatePicker />
          </Form.Item>
          <span
            style={{
              display: "inline-block",
              width: "24px",
              lineHeight: "32px",
              textAlign: "center",
            }}
          >
            -
          </span>
          <Form.Item
            style={{ display: "inline-block", width: "calc(50% - 12px)" }}
            help="Please select the ending date"
          >
            <DatePicker />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="School"
          name="school"
          rules={[{ required: true, message: "School name is required!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Date" style={{ marginBottom: 0 }}>
          <Form.Item
            help="Please select the starting date"
            style={{ display: "inline-block", width: "calc(50% - 12px)" }}
          >
            <DatePicker />
          </Form.Item>
          <span
            style={{
              display: "inline-block",
              width: "24px",
              lineHeight: "32px",
              textAlign: "center",
            }}
          >
            -
          </span>
          <Form.Item
            style={{ display: "inline-block", width: "calc(50% - 12px)" }}
            help="Please select the ending date"
          >
            <DatePicker />
          </Form.Item>
        </Form.Item>
        <Form.Item
          name="expertise"
          label="Top Expertise"
          rules={[{ required: true, message: "PLease select atleast one!" }]}
        >
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox
                  value="react"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  <DiReact />
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="node"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  <DiNodejs />
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="sql"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  <DiMysql />
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="java"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  <DiJava />
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="javascript"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  <DiJavascript1 />
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="html"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  <AiFillHtml5 />
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="css"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  <DiCss3 />
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Admin;
