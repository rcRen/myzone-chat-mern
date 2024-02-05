import React, { useState } from "react";
import Typography from "../../components/UI/data-display/Typography";
import TextInput from "../../components/UI/inputs/TextInput";
import Button from "../../components/UI/inputs/Button";
import { register } from "../../slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Register = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const avatarList = [
    { name: "avatar1", src: "/avatars/avatar1.png" },
    { name: "avatar2", src: "/avatars/avatar2.png" },
    { name: "avatar3", src: "/avatars/avatar3.png" },
    { name: "avatar4", src: "/avatars/avatar4.png" },
    { name: "avatar5", src: "/avatars/avatar5.png" },
    { name: "avatar6", src: "/avatars/avatar6.png" },
  ];

  const initialData = {
    email: "",
    firstname: "",
    lastname: "",
    avatar: "",
    password: "",
    confirmPwd: "",
  };
  const [data, setData] = useState(initialData);
  const [avatar, setAvatar] = useState(avatarList[0]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      setAvatar(avatarList[e.target.selectedIndex]);
      console.info(e.target[e.target.selectedIndex].value);
      setData({
        ...data,
        [e.target.name]: e.target[e.target.selectedIndex].value,
      });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    console.info(data);
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
            <div className="mb-5 w-full flex">
              <div className="grid relative gap-1 w-1/2">
                <span className="mb-3 w-13 text-sm text-black opacity-60 font-semibold leading-4 tracking-[0.16px]">
                  Choose an avatar
                </span>
                <select
                  name="avatar"
                  className="appearance-none w-full row-start-2 col-start-1 p-4 h-9 rounded-sm text-opacity-70 bg-gray-50"
                  value={avatar?.src}
                  onChange={handleChange}
                >
                  {avatarList.map((avatar, index) => (
                    <option
                      key={index}
                      className="bg-white opacity-70"
                      value={avatar.src}
                    >
                      {avatar.name}
                    </option>
                  ))}
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-400 pointer-events-none row-start-2 col-start-1 absolute right-5 top-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="w-1/2">
                <img src={avatar?.src} className="w-13 h-13" />
              </div>
            </div>
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
  );
};

export default Register;
