import logo from "../../assets/logo/primary-logo.png";
const Logo = () => {
  return (
    <div className="mb-9 h-7 xs:hidden md:block">
      <button className="outline-none">
        <img src={logo} className="w-8" />
      </button>
    </div>
  );
};
export default Logo;
