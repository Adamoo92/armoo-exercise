import React, { useEffect, useState } from "react";
import { IconApple, IconGoogle, IconLogo, IconWeibo } from "./Icon";
import { motion } from "framer-motion";

import { IllustratorLogin } from "./Illustrator";
import LoginEmail from "./LoginEmail";
import LoginPhone from "./LoginPhone";

const tabs = ["手机登录", "邮箱登录"];

const Login = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [divScaleX, setDivScaleX] = useState(0);

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
        <LoginPhone />
        {/* <LoginEmail
          divScaleX={divScaleX}
          setDivScaleX={setDivScaleX}
          inputValue={inputValue}
          setInputValue={setInputValue}
        /> */}
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

export default Login;
