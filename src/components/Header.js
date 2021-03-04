import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, tagleAddTask, shoAdd }) => {
  //   function clickMe() {
  //     console.log("clicked");
  //   }
  const location = useLocation();
  return (
    <div className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          onClick={tagleAddTask}
          color={shoAdd ? "red" : "green"}
          text={shoAdd ? "Close" : "Add"}
        />
      )}
    </div>
  );
};

Header.defaultProps = {
  title: "Namaste duniya",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
