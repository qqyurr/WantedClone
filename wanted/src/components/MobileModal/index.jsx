import React from "react";
import {
  Wrapper,
  Container,
  ModalMenu,
  ModalItemList,
  ModalItem,
  CloseBtn,
  BtnArea,
} from "./styles";

const MOBILE_NAV = [
  {
    title: "로그인",
  },
  {
    title: "이력서",
  },
  {
    title: "매치업",
  },
  {
    title: "추천",
  },
  {
    title: "프리랜서",
  },
  {
    title: "직군별 연봉",
  },
  {
    title: "커리어 성장",
  },
];

const MobileModal = props => {
  const { open, close } = props;
  return (
    <Wrapper isOpen={open}>
      <Container>
        <BtnArea>
          <CloseBtn onClick={close}>X</CloseBtn>
        </BtnArea>
        <ModalMenu>
          {MOBILE_NAV.map(item => (
            <ModalItemList key={item.title} title={item.title}>
              <ModalItem>{item.title}</ModalItem>
            </ModalItemList>
          ))}
        </ModalMenu>
      </Container>
    </Wrapper>
  );
};

export default MobileModal;
