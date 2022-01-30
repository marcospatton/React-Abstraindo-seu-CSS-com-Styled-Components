import React from "react";
import styled from 'styled-components'

const Titulo = styled.h1 `
`

const Titulo = ({ children }) => {
  return <h1 className="titulo">{children}</h1>;
};
export default Titulo;
