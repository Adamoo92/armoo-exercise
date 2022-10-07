import React, { useEffect, useState } from "react";
import {
  IconApple,
  IconCheck,
  IconCircleMultiply,
  IconEye,
  IconEyeSlash,
  IconGoogle,
  IconLogo,
  IconWeibo,
} from "./Icon";
import { motion, useTime, useTransform } from "framer-motion";
import { Color } from "./Color";
import { IllustratorLogin } from "./Illustrator";

const tabs = ["手机登录", "邮箱登录"];

const ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const LoginEmail = () => {
  const [divScaleX, setDivScaleX] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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
      setMessage((prev) => ({ ...prev, email: "邮箱地址不能为空" }));
      setError((prev) => ({ ...prev, email: true }));
    } else if (!ePattern.test(inputValue.email)) {
      setMessage((prev) => ({ ...prev, email: "邮箱格式不正确" }));
      setError((prev) => ({ ...prev, email: true }));
    } else {
      setMessage((prev) => ({ ...prev, email: "" }));
      setError((prev) => ({ ...prev, email: false }));
    }
    if (inputValue.password === "") {
      setMessage((prev) => ({ ...prev, password: "密码不能为空" }));
      setError((prev) => ({ ...prev, password: true }));
    }
  };

  const handleVerifyPassword = () => {
    if (inputValue.password === "") {
      setMessage((prev) => ({ ...prev, password: "密码不能为空" }));
      setError((prev) => ({ ...prev, password: true }));
    }
    setMessage((prev) => ({ ...prev, password: "" }));
    setError((prev) => ({ ...prev, password: false }));
  };

  console.log(inputValue);

  return (
    <>
      <div className="logincontainer">
        <div className="progress">
          <motion.div
            style={{ originX: 0 }}
            animate={{ scaleX: divScaleX }}
            transition={{ ease: "easeInOut", duration: 1 }}
          />
        </div>
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
            <div
              className="input-container"
              style={{
                color: error.email ? Color.Red : Color.Gray01,
              }}
            >
              <input
                placeholder="请输入密码"
                name="password"
                onBlur={handleVerifyPassword}
                onChange={handleChange}
                type={isVisible ? "text" : "password"}
                style={{
                  borderColor: error.password ? Color.Red : "",
                  backgroundColor: error.password
                    ? "rgba(250, 77, 86, 0.05)"
                    : "",
                }}
              />
              <i
                onClick={() => setIsVisible(isVisible ? false : true)}
                style={{ color: error.password ? Color.Red : "" }}
              >
                {isVisible ? <IconEye /> : <IconEyeSlash />}
              </i>
            </div>
            <span
              className="message"
              style={{ color: error.password ? Color.Red : "" }}
            >
              {message.password}
            </span>
            <span isbutton="true">忘记密码？</span>
          </div>
          <button
            type="button"
            canClick={
              !inputValue.email ||
              !inputValue.password ||
              error.email ||
              error.password
                ? "false"
                : "true"
            }
            onClick={() => setDivScaleX(1)}
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
      <IllustratorLogin />
    </>
  );
};

export default LoginEmail;
