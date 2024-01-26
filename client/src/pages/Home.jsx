import React from "react";
import ChatBox from "../components/ChatBox/ChatBox";
import Navigation from "../components/Navigation/Navigation";
import Sidebar from "../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Home = () => {
  const height = `${window.innerHeight}px`;
  const { isLoggedIn } = useSelector((state) => state.auth);

  return !isLoggedIn ? (
    <Navigate to="/auth/sign-in" />
  ) : (
    // set dark mode here
    <div>
      <div
        className="bg-white dark:bg-gray-800 transition-colors duration-500"
        style={{ height }}
      >
        <div className="xs:relative md:static h-full flex xs:flex-col md:flex-row overflow-hidden">
          <Navigation className="xs:order-1 md:-order-none" />
          <Sidebar className="xs:grow-1 md:grow-0 xs:overflow-y-scroll md:overflow-visible scrollbar-hidden" />
          <div className="xs:absolute xs:z-10 md:static grow h-full xs:w-full md:w-fit scrollbar-hidden bg-white dark:bg-gray-800 transition-all duration-500">
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
