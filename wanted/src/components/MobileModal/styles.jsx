import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  width: 100%;
  flex-direction: column;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
`;

export const ModalMenu = styled.ul`
  display: flex;
  height: 50vh;
  flex-direction: column;
  padding: 1em;
  margin: 1em;
`;

export const ModalItemList = styled.li`
  height: inherit;
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const ModalItem = styled.a`
  position: relative;
  font-size: 1em;
  cursor: pointer;
`;

export const BtnArea = styled.div`
  position: absolute;
  right: 10%;
  transform: translateY(50%);
`;

export const CloseBtn = styled.a`
  font-size: 1.5rem;
  font-weight: 300;
  width: 2rem;
  cursor: pointer;
`;
