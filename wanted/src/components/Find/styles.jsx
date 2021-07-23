import styled from "@emotion/styled";

export const Container = styled.div`
  display: ${({ DropdownOpen }) => (DropdownOpen ? "flex" : "none")}
  position: absolute;
  top: 50px;
  width: 100%
`;

export const FindBack = styled.div`
  width: 100%
  background-color: #fff;
  paddin: 3rem;
`;

export const FindBackLayout = styled.div`
  position: relative;
  height: 0%;
  max-height: 625px;
  background-color: blue;
  display: block;
  line-height: 1rem;
`;

export const FindBackContainer = styled.div`
  margin: 0 auto;
  max-width: 1060px;
  padding: 0;
  width: 90%;
  display: block;
  border: 0;
  font-size: 0.8rem;
  line-height: 1rem;
  display: table;
`;

export const FindContent = styled.div`
  margin-right: -2opx;
  margin: 0
  padding: 0
  border: 0
  box-sizing: border-box;
  display: block;
  font-size: 0.8rem;
  line-height: 1rem;
`;

export const RightContent = styled.div`
  float: left;
  width: 16%;
  height: 270px;
  padding: 40px 20px 0 0;
  text-align: left;
  margin: 0;
  border: 0;
  display: block;
  font-size: 0.8rem;
  line-height: 1rem;
  transition: width 2s, height 2s, background-color 2s, transform 2s;
  background-color: green;
`;

export const ContentLink = styled.a`
  display: block;
  cursor: pointer;
  text-align: left;
  font-size: 0.8rem;
  line-height: 1rem;
`;
