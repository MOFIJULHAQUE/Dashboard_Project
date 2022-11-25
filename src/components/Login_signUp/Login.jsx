// import React, { useState } from "react";
// import { Button, Form, Input } from "antd";
// import { useNavigate } from "react-router-dom";

// import "./login.css";

// const Login = () => {
//   const onFinish = (values) => {
//     console.log("Success:", values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   // ---------------------------------------
//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//   });

//   const [data, setData] = useState([]); //this state use in localStorage

//   // console.log(inputValue);

//   // getting Data---------------------------------------onChange---------
//   const getData = (e) => {
//     // console.log(e.target.value);

//     const { value, name } = e.target;
//     // console.log(value, name);

//     setInputValue(() => {
//       return {
//         ...inputValue,
//         [name]: value,
//       };
//     });
//   };
//   // ------------------------------------

//   // console.log(new Date().getFullYear());

//   const redirectPage = useNavigate();

//   const addData = (e) => {
//     e.preventDefault();

//     // console.log(inputValue);

//     const getUserData = localStorage.getItem("user data");
//     // console.log(getArray);

//     const { email, password } = inputValue;

//     if (email === "") {
//       alert("Please enter your email address");
//     } else if (password === "") {
//       alert("Please enter valid password ");
//     } else if (password.length > 12) {
//       alert("Your password length is to high");
//     } else if (password.length < 6) {
//       alert("Your password length is too short");
//     } else {
//       if (getUserData && getUserData.length) {
//         const userData = JSON.parse(getUserData);
//         // console.log(userData);
//         const userLogin = userData.filter((element, index) => {
//           return element.email === email && element.password === password;
//         });
//         console.log(userLogin);
//         if (userLogin.length === 0) {
//           alert("Please enter valid details");
//         } else {
//           redirectPage("/dashboard");

//           localStorage.setItem("user_login", JSON.stringify(userLogin));

//           console.log("Login successfully");
//         }
//       }
//     }
//   };
//   return (
//     <div>
//       <div className="login_section_content">
//         <div className="login_section">
//           <div className="left_section">
//             <h1>Sign In</h1>

//             <Form
//               name="basic"
//               // labelCol={{
//               //   span: 8,
//               // }}
//               wrapperCol={{
//                 span: 50,
//               }}
//               initialValues={{
//                 remember: true,
//               }}
//               onFinish={onFinish}
//               onFinishFailed={onFinishFailed}
//               autoComplete="off"
//             >
//               <Form.Item
//                 name="email"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input your email!",
//                   },
//                 ]}
//               >
//                 <Input
//                   type="email"
//                   placeholder="Enter your email"
//                   onChange={getData}
//                   name="email"
//                 />
//               </Form.Item>

//               <Form.Item
//                 name="password"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input your password!",
//                   },
//                 ]}
//               >
//                 <Input.Password
//                   placeholder="Enter your password"
//                   onChange={getData}
//                   name="password"
//                 />
//               </Form.Item>

//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 className="login_btn"
//                 style={{ borderRadius: "5px" }}
//                 onClick={addData}
//               >
//                 Submit
//               </Button>
//             </Form>
//           </div>

//           <div className="right_section">
//             <div className="login_page_image">
//               <img src="./sign.svg" alt="" style={{ maxWidth: 400 }} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import Signup from "./Signup";

import sideImage from "../../Images/Stuck at Home - Stats and Graphs (1).png";

import "./signup.css";

function Login() {
  const Fullname = useRef();
  const email = useRef();
  const password = useRef();
  const ConfirmPassword = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  // const localConfirmPassword = localStorage.getItem("ConfirmPassword");
  const localName = localStorage.getItem("Fullname");
  const redirectPage = useNavigate();

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  });
  const handleClick = () => {
    if (
      Fullname.current.value &&
      email.current.value &&
      password.current.value &&
      ConfirmPassword.current.value
    ) {
      localStorage.setItem("Fullname", Fullname.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("ConfirmPassword", ConfirmPassword.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Account created successfully!!");
      window.location.reload();
      redirectPage("/dashboard");
    } else {
      alert("Please Enter Detalis");
    }
  };

  const handleSignIn = () => {
    if (
      email.current.value === localEmail &&
      password.current.value === localPassword
    ) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
      redirectPage("/dashboard");
    } else {
      alert("Please Enter valid Credential");
    }
  };
  return (
    <>
      <div>
        {showHome ? (
          <Signup />
        ) : show ? (
          <div className="main_log_in">

         

            <div className="log_in_right_section">
              <input placeholder="Email" type="email" ref={email} />

              <input placeholder="Password" type="password" ref={password} />
              <Button onClick={handleSignIn}>Sign In</Button>
            </div>



            <div className="log_in_left_section">
              <h1>Hello, {localName} </h1>
              <h1>Login To Your Account</h1>
            </div>

          </div>
        ) : (
          <div className="main_sign_up">
            <div className="sign_up_left_section">
              {/* <div className="SignUpPageProfile"></div> */}{" "}
              <h1>Create Account </h1> {/* <div className="input_space"> */}
              <input
                autofocus="false"
                minLength={7}
                placeholder="Full Name"
                type="text"
                ref={Fullname}
                required
              />
              {/* </div> */}
              {/* <div className="input_space">
            </div> */}
              <input placeholder="Email" type="email" ref={email} required />
              {/* <div className="input_space">
            </div> */}
              <input
                minLength={7}
                placeholder="Password"
                type="password"
                ref={password}
                required
              />
              {/* <div className="input_space">
            </div> */}
              <input
                // minLength={7}
                placeholder="Confirm Password"
                type="password"
                ref={ConfirmPassword}
                required
              />
              <div className="sign_up_btn">
                <Button onClick={handleClick}>Sign Up</Button>
              </div>
            </div>

            <div className="sign_up_right_section">
              <div className="login_page_image">
                <img src={sideImage} alt="" style={{ maxWidth: 400 }} />
              </div>
              {/* </div><div> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Login;
