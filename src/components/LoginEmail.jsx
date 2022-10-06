import React, { useEffect, useState } from "react";
import {
  IconApple,
  IconCheck,
  IconCircleMultiply,
  IconEye,
  IconGoogle,
  IconLogo,
  IconWeibo,
} from "./Icon";
import { motion } from "framer-motion";
import { Color } from "./Color";

const tabs = ["手机登录", "邮箱登录"];

const ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const LoginEmail = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleVerify = () => {
    if (inputValue.email === "") {
      setMessage({ email: "邮箱地址不能为空" });
      setError({ email: true });
    } else if (!ePattern.test(inputValue.email)) {
      setMessage({ email: "邮箱格式不正确" });
      setError({ email: true });
    } else {
      setMessage(null);
      setError({ email: false });
    }
    if (inputValue.password === "") {
      setMessage({ password: "密码不能为空" });
    }
  };

  console.log(inputValue);

  return (
    <div className="logincontainer">
      <IconLogo />
      <ul className="tabs">
        {tabs.map((item, i) => (
          <li
            key={i}
            className={i === selectedTab ? "selected" : ""}
            onClick={() => setSelectedTab(i)}
          >
            {item}
            {i === selectedTab ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </li>
        ))}
      </ul>
      <form>
        <div className="textfield-container">
          <div
            className="input-container"
            style={{
              color: error.email ? Color.Red : Color.Gray01,
            }}
          >
            <input
              placeholder="请输入邮箱"
              name="email"
              onChange={handleChange}
              onBlur={handleVerify}
              style={{
                borderColor: error.email ? Color.Red : "",
                backgroundColor: error.email ? "rgba(250, 77, 86, 0.05)" : "",
              }}
            />
            {error.email ? <IconCircleMultiply /> : null}
          </div>
          <span
            className="message"
            style={{ color: error.email ? Color.Red : "" }}
          >
            {message.email}
          </span>
        </div>
        <div className="textfield-container">
          <div className="input-container">
            <input
              placeholder="请输入密码"
              name="password"
              onBlur={handleVerify}
              onChange={handleChange}
            />
            <IconEye />
          </div>
          <span
            className="message"
            style={{ color: error.email ? Color.Red : "" }}
          >
            {message.password}
          </span>
          <span isbutton="true">忘记密码？</span>
        </div>
        <button
          type="button"
          disabled={error.email && error.password ? false : true}
        >
          登 录
        </button>
      </form>
      <div className="signup">
        没有账户？ <span>创建一个</span>
      </div>
      <div className="divider">
        <i></i>
        <span>其他登录方式</span>
        <i></i>
      </div>
      <div className="othersignin">
        <i>
          <IconGoogle />
        </i>
        <i>
          <IconApple />
        </i>
        <i>
          <IconWeibo />
        </i>
      </div>
    </div>
  );
};

export default LoginEmail;
