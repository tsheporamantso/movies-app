import React from "react";
import Person from "./Person";
const PersonComponent = () => {
  return (
    <div>
      <Person Name={"Tshepo"} Last_Name={"Ramantso"} Age={39} />
      <Person Name={"Dumi"} Last_Name={"Ramantso"} Age={33} />
      <Person Name={"Lebo"} Last_Name={"Ramantso"} Age={38} />
    </div>
  );
};

export default PersonComponent;
