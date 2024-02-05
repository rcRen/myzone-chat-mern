import React, { useEffect, useState } from "react";
import ChatBox from "../components/ChatBox/ChatBox";
import Navigation from "../components/Navigation/Navigation";
import Sidebar from "../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Profile from "../components/Profile/Profile";
const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { sidebar } = useSelector((state) => state.active);
  const [profileInfo, setProfileInfo] = useState(null);
  useEffect(() => {
    return () => {
      setProfileInfo(null);
    };
  }, [sidebar]);
  return !isLoggedIn ? (
    <Navigate to="/auth/sign-in" />
  ) : (
    // set dark mode here
    <div>
      <div className="bg-white h-screen">
        <div className="flex relative divide divide-x h-full">
          <Navigation setProfileInfo={setProfileInfo} className="sticky top-0 h-full" />
          <Sidebar
            className="pr-5 sticky top-0 h-full"
            setProfileInfo={setProfileInfo}
          />
          <div className="grow">
            {profileInfo ? <Profile person={profileInfo} /> : <ChatBox />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
