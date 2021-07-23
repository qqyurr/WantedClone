import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
`;
export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 40em rgba(0, 0, 0, 0.5);
  margin-top: 0em;
`;
export const CategoryWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 106rem;
  margin: 0 auto;
`;
