import loginImg from "../../assets/images/thumb/login.png";
import logoHeader from "../../assets/images/logo/logo-header.svg";
import { Link, useNavigate } from "react-router-dom";
import { useGlobals } from "../hooks/useGlobals";
import { useState } from "react";
import { T } from "../../lib/types/common";
import { LoginInput } from "../../lib/types/member";
import { Messages } from "../../lib/config";
import MemberService from "../services/MemberService";
import { sweetErrorHandling } from "../../lib/sweetAlert";

function SignIn() {
  const navigate = useNavigate();
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const { setAuthMember } = useGlobals();

  const handleUsername = (e: T) => {
    console.log(e.target.value);
    setMemberNick(e.target.value);
  };

  const handlePassword = (e: T) => {
    console.log(e.target.value);
    setMemberPassword(e.target.value);
  };

  const handlePasswordKeyDown = (e: T) => {
    if (e.key === "Enter") {
      handleLoginRequest().then();
    }
  };

  const handleLoginRequest = async () => {
    try {
      const isFulFill = memberNick !== "" && memberPassword !== "";
      if (!isFulFill) throw new Error(Messages.error3);

      const loginInput: LoginInput = {
        memberNick: memberNick,
        memberPassword: memberPassword,
      };

      const member = new MemberService();
      const result = await member.login(loginInput);

      setAuthMember(result);
      navigate("/");
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="sign-up-top">
      <div className="sign-up-main-two">
        <div className="sign-up-main-two-item">
          <div className="sign-up-img">
            <Link to="/">
              <img src={loginImg} alt="img" />
            </Link>
            <div className="sign-up-main-two-item-text">
              <p>
                You agree to Gusto <span>Terms of Use & Privacy Policy.</span>
                You don't need to consent as a condition of food, or buying any
                other goods or services. Message/data rates may apply.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sign-up-main">
        <div className="sign-up-logo">
          <Link to="/">
            <img
              src={logoHeader}
              alt="logo"
              style={{
                height: "46px",
                width: "auto",
                maxWidth: "200px",
                objectFit: "cover",
                objectPosition: "center",
                margin: "0",
              }}
            />
          </Link>
        </div>
        <div className="sign-up-text">
          <h2>Welcome!</h2>
          <p>Please enter your details.</p>
        </div>

        <div className="sign-up-from">
          <div className="sign-up-from-item">
            <div className="sign-up-from-inner">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput"
                placeholder="Name"
                onChange={handleUsername}
              />
            </div>
            <div className="sign-up-from-inner">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Password"
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
              />
            </div>

            <div className="sign-up-btn">
              <div className="main-btn-four">
                <Link to="" onClick={handleLoginRequest}>
                  Log In
                </Link>
              </div>

              <p>
                Don’t have an account?
                <Link to="/sign-up">Sign up for free</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
