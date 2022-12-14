import React from "react";
import "./styled/SassComponent.scss";
import styles from "./styled/cssModule.module.scss";

const SassComponent = () => {
  return (
    <div className={`${styles.SassComponent} SassComponent`}>
      <div className="box red" />
      <div className="box orange" />
      <div className="box yellow" />
      <div className="box green" />
      <div className="box blue" />
    </div>
  );
};

export default SassComponent;
