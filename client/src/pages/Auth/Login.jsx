import React, { useState } from "react";
import logo from "../../assets/logo/primary-logo.png";
import Typography from "../../components/UI/data-display/Typography";
import TextInput from "../../components/UI/inputs/TextInput";
import Button from "../../components/UI/inputs/Button";
import Auth from "./Auth";
import { login } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialData = {
    email: "",
    password: "",
  };
  const [data, setDate] = useState(initialData);
  const [Loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setDate({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login(data))
      .unwrap()
      .then(() => navigate("/"))
      .catch(() => setLoading(false));
  };
  return (
    <Auth>
      <div className="p-5 md:basis-1/2 xs:basis-full flex flex-col justify-center items-center">
        <div className="w-full md:px-[26%] xs:px-[10%]">
          {/* --header-- */}
          <div className="mb-6 flex flex-col">
            <img src={logo} className="w-[50px] h-[50px] mb-4 opacity-70" />
            <Typography variant="heading-2" className="mb-4">
              Welcome back
            </Typography>
            <Typography variant="body-3" className="text-opacity-75 font-light">
              Sign in to start using messaging!
            </Typography>
          </div>
          <div className="mb-6">
            <TextInput
              label="Email"
              placeholder="Enter your email"
              className="mb-5"
              name="email"
              onChange={handleChange}
            />
            <TextInput
              label="Password"
              placeholder="Enter your password"
              type="password"
              className="pr-[40px]"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <Button className="w-full mb-4" onClick={handleSubmit}>
              Sign in
            </Button>
          </div>
          {/* --bottom text-- */}
          <div className="flex justify-center">
            <Typography variant="body-2">
              Don’t have an account ?{" "}
              <a href="/auth/sign-up" className="text-indigo-400 opacity-100">
                Sign up
              </a>
            </Typography>
          </div>
        </div>
      </div>
    </Auth>
  );
};

export default Login;
