import React from "react";
import { FindBack, Container } from "./styles";

const Find = ({ DropdownOpen, onMouseLeave }) => {
  return (
    <Container DropdownOpen={DropdownOpen} onMouseLeave={onMouseLeave}>
      <FindBack>하이</FindBack>
    </Container>
  );
};

export default Find;
