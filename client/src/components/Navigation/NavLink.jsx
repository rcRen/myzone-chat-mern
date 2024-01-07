import React from "react";
import Icon from "./Icon";
import { useDispatch } from "react-redux";
// import { activeSidebar } from "../../store/actions/SidebarAction";
const navbars = [
  { id: 1, title: "messages" },
  { id: 2, title: "contacts" },
];
const NavLink = (props) => {
  const dispatch = useDispatch();

  return (
    <nav aria-label="Main navigation">
      <ul className="xs:flex md:block xs:justify-between xs:items-center">
        {navbars.map((navbar) => (
          <li key={navbar.id}>
            <div className="xs:mb-0 md:mb-6 text-center">
              <button
                className="group relative focus:outline-none"
                // onClick={}
              >
                <Icon title={navbar.title} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavLink;
