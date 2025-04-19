import loginImg from "../../../assets/images/thumb/login.png";
import logoHeader from "../../../assets/images/logo/logo-header.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import MemberService from "../../services/MemberService";
import { Messages } from "../../../lib/config";
import { MemberInput } from "../../../lib/types/member";
import { T } from "../../../lib/types/common";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { useGlobals } from "../../hooks/useGlobals";

export default function SignUp() {
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberPhone, setMemberPhone] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const { setAuthMember } = useGlobals();

  /** HANDLERS **/

  const handleUsername = (e: T) => {
    console.log(e.target.value);
    setMemberNick(e.target.value);
  };

  const handlePhone = (e: T) => {
    console.log(e.target.value);
    setMemberPhone(e.target.value);
  };

  const handlePassword = (e: T) => {
    console.log(e.target.value);
    setMemberPassword(e.target.value);
  };

  const handlePasswordKeyDown = (e: T) => {
    if (e.key === "Enter") {
      handleSignupRequest().then();
    }
  };

  const handleSignupRequest = async () => {
    try {
      const isFulFill =
        memberNick !== "" && memberPhone !== "" && memberPassword !== "";
      if (!isFulFill) throw new Error(Messages.error3);

      const signupInput: MemberInput = {
        memberNick: memberNick,
        memberPhone: memberPhone,
        memberPassword: memberPassword,
      };

      const member = new MemberService();
      const result = await member.signup(signupInput);

      setAuthMember(result);
    } catch (err) {
      console.log("err:", err);
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
            <img src={logoHeader} alt="logo" />
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
                Phone Number
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Phone Number"
                onChange={handlePhone}
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
                <Link to="" onClick={handleSignupRequest}>
                  Sign Up
                </Link>
              </div>

              <p>
                Do you already have an account?
                <Link to="/login">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
