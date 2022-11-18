import React, { useState } from "react";
import { Button, Form, Input } from "antd";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // ---------------------------------------
  const [inputValue, setInputValue] = useState({
    email: "",
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

  // console.log(new Date().getFullYear());

  // on
  const addData = (e) => {
    e.preventDefault();

    // console.log(inputValue);

    const getArray = localStorage.getItem("user data");
    // console.log(getArray);

    const { email, password } = inputValue;

    if (email === "") {
      alert("Please enter your email address");
    } else if (password === "") {
      alert("Please enter valid password ");
    } else if (password.length > 12) {
      alert("Your password length is to high");
    } else if (password.length < 6) {
      alert("Your password length is too short");
    } else {
      if (getArray && getArray.length) {
        const userData = JSON.parse(getArray);
        // console.log(userData);
        const userLogin = userData.filter((element, index) => {
          return element.email === email && element.password === password;
        });
        console.log(userLogin);
        if (userLogin.length === 0) {
          alert("Please enter valid details");
        } else {
          console.log("Login successfully");
        }
      }
    }
  };
  return (
    <div>
      <h1>Login component check</h1>

      <div className="login_section_content">
        <h1>Sign In</h1>
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
              Already have an account <span>Sign In</span>
            </p>
          </div>

          <div className="right_section">
            <div className="login_page_image">
              <img src="./sign.svg" alt="" style={{ maxWidth: 400 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Login;
