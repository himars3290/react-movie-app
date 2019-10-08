import React from "react";

const Header = (props) => {
  return (
    <header>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header;
