import React, { useEffect } from "react";
import Icon from "./Icon";
import { useDispatch, useSelector } from "react-redux";
import { activeSidebar, logout } from "../../slices";
import { UserCircleIcon } from "@heroicons/react/24/solid";
const navbars = [
  { id: 1, title: "contacts" },
  { id: 2, title: "chats" },
];
const NavLink = ({ setProfileInfo }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.user);

  const handleClick = (sidebar) => {
    dispatch(activeSidebar(sidebar));
  };

  useEffect(() => {
    return () => setProfileInfo();
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className="h-full flex flex-col h-full justify-between items-center"
    >
      <ul>
        {navbars.map((navbar) => (
          <li key={navbar.id}>
            <div className="mb-6 text-center">
              <button
                className="group relative focus:outline-none"
                onClick={() => handleClick(navbar.title)}
              >
                <Icon title={navbar.title} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        <li className="self-end pt-3">
          <div className="mb-6 text-center">
            <button
              className="group relative focus:outline-none"
              onClick={() => setProfileInfo(user)}
            >
              <UserCircleIcon className={`w-7 h-7 hover:text-indigo-400`} />
            </button>
          </div>
        </li>
        <li className="self-end pt-3 border-t border-gray-300">
          <div className="mb-6 text-center">
            <button
              className="group relative focus:outline-none"
              onClick={() => dispatch(logout())}
            >
              <Icon title="logout" />
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default NavLink;
