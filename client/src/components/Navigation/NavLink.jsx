import React from "react";
import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { activeSidebar, logout } from "../../slices";
const navbars = [
  { id: 1, title: "chats" },
  { id: 2, title: "contacts" },
];
const NavLink = (props) => {
  const dispatch = useDispatch();

  const handleClick = (sidebar) => {
    dispatch(activeSidebar(sidebar));
  };

  return (
    <nav aria-label="Main navigation">
      <ul className="xs:flex md:block xs:justify-end xs:items-center">
        {navbars.map((navbar) => (
          <li key={navbar.id}>
            <div className="xs:mb-0 md:mb-6 text-center">
              <button
                className="group relative focus:outline-none"
                onClick={() => handleClick(navbar.title)}
              >
                <Icon title={navbar.title} />
              </button>
            </div>
          </li>
        ))}
        <li>
          <div className="xs:mb-0 md:mb-6 text-center">
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
