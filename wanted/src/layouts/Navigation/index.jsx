import React, { useState } from "react";
import {
  NavigationBack,
  HomeLogo,
  MenuItem,
  Menus,
  MenuBack,
  Back,
  Item,
  UserList,
  UserListItem,
  UserBtn,
  UserBtn2,
  Line,
} from "./styles.jsx";
import { useMediaQuery } from "react-responsive";
import { BsSearch, BsBell } from "react-icons/bs";
import { IoPersonCircle } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown from "../../components/Dropdown/index.jsx";
import MobileModal from "../../components/MobileModal/index.jsx";

export const NAV = [
  {
    title: "탐색",
  },
  {
    title: "커리어 성장",
  },
  {
    title: "직군별 연봉",
  },
  {
    title: "이력서",
  },
  {
    title: "매치업",
  },
  {
    title: "프리랜서",
  },
  {
    title: "Ai 합격예측",
  },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const openModal = () => {
    setIsMobileModalOpen(true);
  };
  const closeModal = () => {
    setIsMobileModalOpen(false);
  };
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
      {/* desktop */}
      <Desktop>
        <Back>
          <MenuBack>
            <NavigationBack>
              <HomeLogo
                src="https://theme.zdassets.com/theme_assets/9309779/480a35976bf401a88dd7388d8f5c19d77227cd35.png"
                alt="wanted"
              />
              <Menus>
                {NAV.map(item => (
                  <MenuItem
                    key={item.title}
                    title={item.title}
                    onMouseEnter={() =>
                      item.title === "탐색" ? setIsOpen(true) : setIsOpen(false)
                    }
                  >
                    <Item>{item.title}</Item>
                  </MenuItem>
                ))}
              </Menus>
              <Dropdown isOpen={isOpen} onMouseLeave={() => setIsOpen(false)} />
              <UserList>
                <UserListItem>
                  <UserBtn>
                    <BsSearch />
                  </UserBtn>
                </UserListItem>
                <UserListItem>
                  <UserBtn>
                    <BsBell />
                  </UserBtn>
                </UserListItem>
                <UserListItem>
                  <UserBtn>
                    <IoPersonCircle fontSize="25px" color="grey" />
                  </UserBtn>
                </UserListItem>
                <UserListItem>
                  <Line>|</Line>
                </UserListItem>
                <UserListItem>
                  <UserBtn2>기업 서비스</UserBtn2>
                </UserListItem>
              </UserList>
            </NavigationBack>
          </MenuBack>
        </Back>
      </Desktop>
      {/* mobile */}
      <Mobile>
        <Back>
          <MenuBack>
            <NavigationBack>
              <Menus>
                <MenuItem>
                  <Item>홈</Item>
                </MenuItem>
                <MenuItem>
                  <Item>탐색</Item>
                </MenuItem>
                <MenuItem>
                  <Item>커리어</Item>
                </MenuItem>
              </Menus>
              <UserList>
                <UserListItem>
                  <UserBtn>
                    <BsSearch />
                  </UserBtn>
                </UserListItem>
                <UserListItem>
                  <UserBtn>
                    <BsBell />
                  </UserBtn>
                </UserListItem>
                <UserListItem>
                  <UserBtn onClick={openModal}>
                    <GiHamburgerMenu />
                  </UserBtn>
                </UserListItem>
              </UserList>
              <MobileModal open={isMobileModalOpen} close={closeModal} />
            </NavigationBack>
          </MenuBack>
        </Back>
      </Mobile>
    </div>
  );
}

export default Navigation;
