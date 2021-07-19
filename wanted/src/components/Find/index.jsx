import React from "react";
import {
  FindBack,
  FindBackContainer,
  FindBackLayout,
  FindContent,
  RightContent,
  ContentLink,
} from "./styles.jsx";
import { useMediaQuery } from "react-responsive";

function Find() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 992 });
    return isMobile ? children : null;
  };
  return (
    <div>
      <Desktop>
        <FindBack>
          <FindBackLayout>
            <FindBackContainer>
              <FindContent>
                <RightContent>
                  <ContentLink>금융</ContentLink>
                  <ContentLink>제조</ContentLink>
                  <ContentLink>생산</ContentLink>
                  <ContentLink>의류</ContentLink>
                  <ContentLink>교육</ContentLink>
                </RightContent>
              </FindContent>
            </FindBackContainer>
          </FindBackLayout>
        </FindBack>
      </Desktop>
      <Mobile>
        <FindBack>
          <FindBackLayout>
            <FindBackContainer>
              <FindContent>
                <RightContent>
                  <ContentLink>금융</ContentLink>
                  <ContentLink>제조</ContentLink>
                  <ContentLink>생산</ContentLink>
                  <ContentLink>의류</ContentLink>
                  <ContentLink>교육</ContentLink>
                </RightContent>
              </FindContent>
            </FindBackContainer>
          </FindBackLayout>
        </FindBack>
      </Mobile>
    </div>
  );
}

export default Find;
