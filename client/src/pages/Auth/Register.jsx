import React, { useState } from "react";
import Typography from "../../components/UI/data-display/Typography";
import Auth from "./Auth";
import TextInput from "../../components/UI/inputs/TextInput";
import Button from "../../components/UI/inputs/Button";
import { register } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Register = (props) => {
  const initialData = {
    email: "",
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPwd: "",
  };
  const [data, setData] = useState(initialData);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password === data.confirmPwd) {
      dispatch(register(data))
        .unwrap()
        .then(() => navigate("/auth/sign-in"));
    } else {
      setMessage("different password.");
    }
  };
  return (
    <Auth>
      <div className="p-5 md:basis-1/2 xs:basis-full flex flex-col justify-center items-center">
        <div className="w-full md:px-[26%] xs:px-[10%]">
          {/* --header-- */}
          <div className="mb-6 flex flex-col">
            <Typography variant="heading-2" className="mb-4">
              Get started with MyZone
            </Typography>
            <Typography variant="body-3" className="text-opacity-75 font-light">
              Create an account a start messaging now!
            </Typography>
          </div>
          {/* --form section-- */}
          <div>
            <div className="mb-5">
              <TextInput
                label="Email"
                placeholder="Enter your email"
                className="mb-5"
                name="email"
                onChange={handleChange}
              />
              <TextInput
                label="Username"
                placeholder="Enter a specail username"
                className="mb-5"
                name="username"
                onChange={handleChange}
              />
              <TextInput
                label="First Name"
                placeholder="Enter your first name"
                className="mb-5"
                name="firstname"
                onChange={handleChange}
              />
              <TextInput
                label="Last Name"
                placeholder="Enter your last name"
                className="mb-5"
                name="lastname"
                onChange={handleChange}
              />
              <TextInput
                label="Password"
                className="pr-[40px] mb-5"
                placeholder="Enter your password"
                type="password"
                name="password"
                onChange={handleChange}
              />
              <TextInput
                label="Confirm Password"
                className="pr-[40px] mb-5"
                placeholder="Enter your password"
                type="password"
                name="confirmPwd"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* --control button-- */}
          <div className="mb-5">
            <Button className="w-full mb-4" onClick={handleSubmit}>
              Sign up
            </Button>
          </div>
          {/* --bottom text-- */}
          <div className="flex justify-center">
            <Typography variant="body-2">
              Already have an account ?{" "}
              <a href="/auth/sign-in" className="text-indigo-400 opacity-100">
                Sign in
              </a>
            </Typography>
          </div>
        </div>
      </div>
    </Auth>
  );
};

export default Register;
