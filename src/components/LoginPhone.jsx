import React, { useState } from "react";
import { Color } from "./Color";
import { IconCircleMultiply } from "./Icon";

let mPattern = /^1[34578]\d{9}$/;

const LoginPhone = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [canGetCode, SetCanGetCode] = useState(false);
  const [message, setMessage] = useState({
    phoneMessage: "",
    codeMessage: "",
  });
  const [error, setError] = useState({
    phoneError: false,
    codeError: false,
  });
  //   console.log(inputValue);
  //   console.log(message.phoneMessage, error.phoneError);

  const handleVerifyPhone = () => {
    if (inputValue === "") {
      setMessage((prev) => ({ ...prev, phoneMessage: "手机号不能为空" }));
      setError((prev) => ({ ...prev, phoneError: true }));
      SetCanGetCode(false);
    } else if (!mPattern.test(inputValue)) {
      setMessage((prev) => ({ ...prev, phoneMessage: "手机号不正确" }));
      setError((prev) => ({ ...prev, phoneError: true }));
      SetCanGetCode(false);
    } else {
      setMessage((prev) => ({ ...prev, phoneMessage: "" }));
      setError((prev) => ({ ...prev, phoneError: false }));
      SetCanGetCode(true);
    }
  };

  return (
    <form>
      <div className="textfield-container">
        <label
          className="input-container"
          style={{
            color: error.phoneError ? Color.Red : "",
          }}
        >
          <input
            placeholder="请输入手机号"
            name="phonenumber"
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleVerifyPhone}
            style={{
              borderColor: error.phoneError ? Color.Red : "",
              color: error.phoneError ? Color.Red : "",
            }}
          />
          {error.phoneError ? <IconCircleMultiply /> : null}
        </label>
        <span
          className="message"
          style={{ color: error.phoneError ? Color.Red : "" }}
        >
          {message.phoneMessage}
        </span>
      </div>
      <div className="textfield-container">
        <div className="input-container">
          <input placeholder="请输入验证码" name="phonenumber" />
          {!canGetCode ? (
            <button
              canclick={canGetCode ? "true" : "false"}
              onClick={() => console.log("can click")}
              disabled
            >
              获取验证码
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setRandomNumber(
                  Math.ceil(Math.random() * 100000000)
                    .toString()
                    .slice(0, 6)
                );
              }}
            >
              获取验证码
            </button>
          )}
        </div>
      </div>
      <button type="button">登 录</button>
    </form>
  );
};

export default LoginPhone;
