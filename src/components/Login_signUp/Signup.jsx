// import React, { useState } from "react";
// import { Button, Form, Input } from "antd";
// import { NavLink } from "react-router-dom";

// import "./signup.css";

// // Ant deign
// const Signup = () => {
//   const onFinish = (values) => {
//     console.log("Success:", values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   // ---------------------------------------
//   const [inputValue, setInputValue] = useState({
//     name: "",
//     email: "",
//     date: "",
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

//   // on
//   const addData = (e) => {
//     e.preventDefault();

//     // console.log(inputValue);

//     const { name, email, date, password } = inputValue;

//     if (name === "") {
//       alert("Please enter your name");
//     } else if (email === "") {
//       alert("Please enter your email address");
//     } else if (date === "") {
//       alert("Please enter your Date of Birth");
//     } else if (password === "") {
//       alert("Please enter valid password ");
//     } else if (password.length > 12) {
//       alert("Your password length is to high");
//     } else if (password.length < 6) {
//       alert("Your password length is too short");
//     } else {
//       console.log(inputValue, "Your account is successfully created");

//       localStorage.setItem("user data", JSON.stringify([...data, inputValue]));
//     }
//   };

//   return (
//     <>
//       <div className="signup_section_contentt">
//         <div className="signup_sectionn">
//           <div className="right_section_signupp">
//             <div className="signup_page_imagee">
//               <h1>Welcome Back!</h1>
//               <p>
//                 To keep connectted with us please
//                 <br />
//                 login with your personal info
//               </p>
//               <div className="login_btnn">
//                 <NavLink to="/login">
//                   <Button
//                     // className="login_btn"
//                     style={{ borderRadius: "50px" }}
//                     type="primary"
//                     htmlType="submit"
//                     // onClick={addData}
//                   >
//                     SIGN IN
//                   </Button>
//                 </NavLink>
//               </div>
//             </div>
//           </div>

//           <div className="left_section">
//             <h1>Create Account</h1>
//             <Form
//               name="basic"
//               // labelCol={{
//               //   span: 18,
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
//                 name="username"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input your username!",
//                   },
//                 ]}
//               >
//                 <Input
//                   placeholder="Enter your name"
//                   onChange={getData}
//                   name="name"
//                 />
//               </Form.Item>

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
//                 name="date"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input your DOB!",
//                   },
//                 ]}
//               >
//                 <Input
//                   type="date"
//                   placeholder="Enter your DOB"
//                   onChange={getData}
//                   name="date"
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
//               <div className="Sign_up_btn">
//                 <Button
//                   style={{ borderRadius: "50px" }}
//                   type="primary"
//                   htmlType="submit"
//                   className="btn"
//                   onClick={addData}
//                 >
//                   SIGN UP
//                 </Button>
//               </div>
//             </Form>
//             {/* </div> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;

//home.jsx
// import React from "react";

// import './Login.css';
import { Button } from "antd";



import "./logout_delete.css";

const Signup = () => {
  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };
  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="log_out_delete_section">
      <div className="Home-Container">
        <div className="log_out_delete_heading">
          <h1>Welcome to Crypto World</h1>
          <h3>Welcome {localStorage.getItem("Fullname")} </h3>
        </div>
        <div className="log_out_delete_btn">
          <Button onClick={logout} className="logout">
            LogOut
          </Button>
          <Button onClick={deleteAccount} className="delete">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Signup;
