import { useState } from "react";
import { T } from "../../../lib/types/common";
import { Messages } from "../../../lib/config";
import { LoginInput, MemberInput } from "../../../lib/types/member";
import MemberService from "../../services/MemberService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { useGlobals } from "../../hooks/useGlobals";
import { Backdrop, Fab, Fade, Modal, Stack, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

interface AuthenticationModalProps {
  signupOpen: boolean;
  loginOpen: boolean;
  handleSignupClose: () => void;
  handleLoginClose: () => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const { signupOpen, loginOpen, handleSignupClose, handleLoginClose } = props;
  const classes = useStyles();
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
    if (e.key === "Enter" && signupOpen) {
      handleSignupRequest().then();
    } else if (e.key === "Enter" && loginOpen) {
      handleLoginRequest();
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
      handleSignupClose();
    } catch (err) {
      console.log(err);
      handleSignupClose();
      sweetErrorHandling(err).then();
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
      handleLoginClose();
    } catch (err) {
      console.log(err);
      handleLoginClose();
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        sx={classes.modal}
        open={signupOpen}
        onClose={handleSignupClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={signupOpen}>
          <Stack
            sx={{ ...classes.paper, width: "800px" }}
            direction={"row"}
          >
            <img src={"/img/auth.webp"} alt="camera" style={{ width: "200px", borderRadius: "8px" }} />
            <Stack sx={{ marginLeft: "69px", alignItems: "center" }}>
              <h2>Signup Form</h2>
              <TextField
                sx={{ marginTop: "7px" }}
                id="outlined-basic"
                label="username"
                variant="outlined"
                onChange={handleUsername}
              />
              <TextField
                sx={{ my: "17px" }}
                id="outlined-basic"
                label="phone number"
                variant="outlined"
                onChange={handlePhone}
              />
              <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
              />
              <Fab
                sx={{ marginTop: "30px", width: "120px" }}
                variant="extended"
                color="primary"
                onClick={handleSignupRequest}
              >
                <LoginIcon sx={{ mr: 1 }} />
                Signup
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        sx={classes.modal}
        open={loginOpen}
        onClose={handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={loginOpen}>
          <>
            <Stack
              sx={{ ...classes.paper, width: "700px" }}
              direction={"row"}
            >
              <img src={"/img/auth.webp"} alt="camera" style={{ width: "200px", borderRadius: "8px" }} />
              <Stack
                sx={{
                  marginLeft: "65px",
                  marginTop: "25px",
                  alignItems: "center",
                }}
              >
                <h2>Login Form</h2>
                <TextField
                  id="outlined-basic"
                  label="username"
                  variant="outlined"
                  sx={{ my: "10px" }}
                  onChange={handleUsername}
                />
                <TextField
                  id={"outlined-basic"}
                  label={"password"}
                  variant={"outlined"}
                  type={"password"}
                  onChange={handlePassword}
                  onKeyDown={handlePasswordKeyDown}
                />
                <Fab
                  sx={{ marginTop: "27px", width: "120px" }}
                  variant={"extended"}
                  color={"primary"}
                  onClick={handleLoginRequest}
                >
                  <LoginIcon sx={{ mr: 1 }} />
                  Login
                </Fab>
              </Stack>
            </Stack>
          </>
        </Fade>
      </Modal>
    </div>
  );
}
function useStyles() {
  return {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: "#fff",
      border: "2px solid #000",
      boxShadow: 24,
      padding: "32px 24px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
    },
  };
}
