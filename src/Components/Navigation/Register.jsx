import { useState, useRef, useEffect } from "react";
//mostly should be done in backend
// const USER_REGEX = /^[a-zA-Z0-9]{3,20}+([._]?[a-zA-Z0-9]+)*$/;
// const PASS_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const Register = () => {
  //   const userRef = useRef();
  //   const errorRef = useRef();

  //   const [user, setUser] = useState("");
  //   const [validName, setValidName] = useState(false);
  //   const [userFocus, setUserFocus] = useState(false);

  //   const [pass, setPass] = useState("");
  //   const [validPass, setValidPass] = useState(false);
  //   const [passFocus, setPassFocus] = useState(false);

  //   const [matchPass, setMatchPass] = useState("");
  //   const [validMatch, setValidMatch] = useState(false);
  //   const [matchFocus, setMatchFocus] = useState(false);

  //   const [err, setErr] = useState("");
  //   const [success, setSuccess] = useState(false);

  //   useEffect(() => {
  //     const result = USER_REGEX.test(user);
  //     setValidName(result);
  //   }, [user]);
  //   useEffect(() => {
  //     const result = PASS_REGEX.test(pass);
  //     setValidPass(result);
  //     const match = pass === matchPass;

  //     setValidMatch(match);
  //   }, [pass, matchPass]);

  return <div>Registration</div>;
};

export default Register;
