import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

import "./loginSignup.css";

const Signup = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // ---------------------------------------
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]); //this state use in localStorage

  // console.log(inputValue);

  // getting Data---------------------------------------onChange---------
  const getData = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value, name);

    setInputValue(() => {
      return {
        ...inputValue,
        [name]: value,
      };
    });
  };
  // ------------------------------------


  const addData = (e) => {
    e.preventDefault();

    // console.log(inputValue);

    const { name, email, date, password } = inputValue;

    if (name === "") {
      alert("Please enter your name");
    } else if (email === "") {
      alert("Please enter your email address");
    } else if (date === "") {
      alert("Please enter your Date of Birth");
    } else if (password === "") {
      alert("Please enter valid password ");
    } else if (password.length > 12) {
      alert("Your password length is to high");
    } else if (password.length < 6) {
      alert("Your password length is too short");
    } else {
      console.log(inputValue, "Your account is successfully created");

      localStorage.setItem(
        "user data",
        JSON.stringify([...data, inputValue])
      );
    }
  };

  return (
    <>
      <div className="login_section_content">
        <h1>Signup</h1>
        <div className="login_section">
          <div className="left_section">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your name"
                  onChange={getData}
                  name="name"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  onChange={getData}
                  name="email"
                />
              </Form.Item>

              <Form.Item
                name="date"
                rules={[
                  {
                    required: true,
                    message: "Please input your DOB!",
                  },
                ]}
              >
                <Input
                  type="date"
                  placeholder="Enter your DOB"
                  onChange={getData}
                  name="date"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Enter your password"
                  onChange={getData}
                  name="password"
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                className="login_btn"
                style={{ borderRadius: "5px" }}
                onClick={addData}
              >
                Submit
              </Button>
            </Form>

            <p>
              Already have an account <b><span><Link to="/login">Sign In</Link></span></b>
            </p>
          </div>

          <div className="right_section">
            <div className="login_page_image">
              <img src="./sign.svg" alt="" style={{ maxWidth: 400 }} />
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Signup;
