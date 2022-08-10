import React, { useState } from "react";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { BiShowAlt, BiUserCircle } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import {
  Form,
  IconBox,
  ImageContainer,
  InputContainer,
  InputPassword,
  InputText,
  LoginButton,
  LogoContainer,
  LogoText,
  LogoText2,
  ShowButton,
} from "../../GlobalStyles";
import { SignInContainer } from ".././signIn/SignIn.styled";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/UserSlice";
import { SignUpText } from "./SignUp.styled";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfimPass, setShowConfirmPass] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [invalidPass, setInvalidPass] = useState("");

  const dispatch = useDispatch();

  const showPassword = (e) => {
    setShowPass(!showPass);
  };

  const showConfirmPassword = (e) => {
    setShowConfirmPass(!showConfimPass);
  };

  const submit = (e) => {
    const payload = { fullname, email, password };
    e.preventDefault();
    if (password === confirmPassword) {
      setInvalidPass("");
      dispatch(addUser(payload));
    } else {
      setInvalidPass("password does not match");
    }
  };

  return (
    <>
      <ImageContainer>
        <LogoContainer Acenter="center" LogoPadding="1.5rem 1.5rem 0 0">
          <LogoText
            fsize="2rem"
            size="3rem"
            lineheight="20px"
            medialineheight="35px"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            blue
          </LogoText>
          <LogoText2
            fsize="2rem"
            size="3rem"
            mgleft="3.5rem"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            watch
          </LogoText2>
        </LogoContainer>
        <SignInContainer>
          <Form>
            <InputContainer>
              <IconBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <BiUserCircle />
              </IconBox>
              <InputText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                type="text"
                placeholder="Full name.."
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <IconBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <AiOutlineMail />
              </IconBox>
              <InputText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                type="email"
                placeholder="Email address.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <IconBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <AiOutlineUnlock />
              </IconBox>
              <InputPassword
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPass ? "text" : "password"}
                placeholder="Password.."
              />
              <ShowButton
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={showPassword}
              >
                <BiShowAlt />
              </ShowButton>
            </InputContainer>
            <InputContainer>
              <IconBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <AiOutlineLock />
              </IconBox>
              <InputPassword
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={showConfimPass ? "text" : "password"}
                placeholder="Confirm Password.."
              />
              <ShowButton
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={showConfirmPassword}
              >
                <BiShowAlt />
              </ShowButton>
            </InputContainer>
            <SignUpText>{invalidPass}</SignUpText>
            <InputContainer justifyC="center" margin="2rem 0 0 0 ">
              <LoginButton
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, scale: { delay: 0 } }}
                whileHover={{ scale: 1.07 }}
                type="submit"
                onClick={submit}
              >
                create account
              </LoginButton>
            </InputContainer>
          </Form>
        </SignInContainer>
      </ImageContainer>
    </>
  );
};

export default SignUp;
