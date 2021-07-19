import styled from "@emotion/styled";

export const FindBack = styled.div`
  top: 50px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  height: 0;
  margin: 0;
  padding: 0;
  border: 0;
  display: block;
  line-height: 1rem;
`;

export const FindBackLayout = styled.div`
  position: relative;
  height: 0%;
  max-height: 625px;
  background-color: #fff;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;
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
`;

export const ContentLink = styled.a`
  display: block;
  cursor: pointer;
  text-align: left;
  font-size: 0.8rem;
  line-height: 1rem;
`;
