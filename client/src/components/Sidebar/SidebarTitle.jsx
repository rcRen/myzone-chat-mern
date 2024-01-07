import Typography from "../UI/data-display/Typography";
import { upperFirst } from "lodash";
const SidebarTitle = (props) => {
  const title = upperFirst(props.title);
  return (
    <div className="w-full min-h-[80px] max-h-fit px-5 py-6 flex justify-between items-center">
      <Typography variant="heading-1" className="outline-none">
        {title}
      </Typography>
    </div>
  );
};
export default SidebarTitle;
