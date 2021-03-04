import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#000", color: "#fff" }}>
      <p>This is the footer of React</p>
      <Link to="/about">Copywrite @copy 2021</Link>
    </div>
  );
};

export default Footer;
