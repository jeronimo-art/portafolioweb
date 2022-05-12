import React from "react";
import { Btn } from "../components/btn";
import { Link } from "react-scroll";
import logo from "../img/logo-vector.svg";
 
export const Page = (props) => {
  return (
    <div className="page">
      <header className="header">
        <div className={"header-text_first " + props.titleClass}>
          <h1 className={props.classtitle + " " + " item"}>{props.titleText}</h1>
          <img className="item" alt="logo" src={logo} />
        </div>
        <h3 className="description">{props.description}</h3>
        <img
          className={"picture " + props.imgClass}
          alt="jeronimo"
          src={props.infoImg}
        />
        <p className="name">{props.textInfo}</p>
      </header>
      <Link offset={-50} className="scroll" to={props.btnTo} smooth={true}>
        <Btn content={props.btnText} class="ver" />
      </Link>
    </div>
  );
};
