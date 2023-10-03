import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Css/register.css";
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

  return (
    <div className="flex flex-col  justify-center items-center min-h-screen bg-amber-300 ">
      <div
        className="reg bg-red-500 p-3  md:p-8 flex flex-col gap-y-4 rounded-md w-[220px] sm:w-[500px] md:w-[500px]
      lg:w-[500px] ">
        <h1>Registration</h1>

        <form action="" className="flex flex-col  gap-y-2">
          <input
            type="email"
            required
            placeholder="Ex. user@gmail.com"
            className="p-2 bg-white"
          />
          <input
            type="password"
            required
            placeholder="*******"
            className="p-2 bg-white"
          />
          <input
            type="user"
            required
            placeholder="name"
            className="p-2 bg-white"
          />
          <button className="bg-gray-600 ">Submit</button>
        </form>
        <p className="text-sm">
          Already have an account?{" "}
          <Link to={"/login"} className="ml-2 text-sm">
            click here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
