import React from "react";
import logo from "../images/logo.png";
import { Button } from "reactstrap";
function Header() {
  return (
    <div className="d-flex justify-content-between container">
      <div className="d-flex align-items-center">
        <img src={logo} alt="logo" />
        <h6 className="align-self-center">Due Today, Do Tomorrow </h6>
      </div>
      <div className="d-flex  align-items-center ">
        <Button className="mx-3">Login</Button>
        <Button>Home</Button>
      </div>
    </div>
  );
}
export default Header;
