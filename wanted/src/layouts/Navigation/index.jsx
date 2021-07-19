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
} from "./styles.jsx";
import Find from "../../components/Find/index";
import { useMediaQuery } from "react-responsive";

function Navigation() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  // const toggleDropdown = () => {
  //   setDropdownVisible(!dropdownVisible);
  // };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 992 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };
  return (
    <div>
      <Desktop>
        <Back>
          <MenuBack>
            <NavigationBack>
              <HomeLogo
                src="https://theme.zdassets.com/theme_assets/9309779/480a35976bf401a88dd7388d8f5c19d77227cd35.png"
                alt="wanted"
              />
              <Menus>
                <MenuItem>
                  <Item
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                  >
                    탐색
                  </Item>
                  {dropdownVisible && <Find></Find>}
                </MenuItem>
                <MenuItem>
                  <Item>커리어 성장</Item>
                </MenuItem>
                <MenuItem>
                  <Item>직군별 연봉</Item>
                </MenuItem>
                <MenuItem>
                  <Item>이력서</Item>
                </MenuItem>
                <MenuItem>
                  <Item>매치업</Item>
                </MenuItem>
                <MenuItem>
                  <Item>프리랜서</Item>
                </MenuItem>
                <MenuItem>
                  <Item>Ai 합격예측</Item>
                </MenuItem>
              </Menus>
              <UserList>
                <UserListItem>
                  <UserBtn>돋보기</UserBtn>
                </UserListItem>
                <UserListItem>
                  <UserBtn>알람</UserBtn>
                </UserListItem>
                <UserListItem>
                  <UserBtn>프로필</UserBtn>
                </UserListItem>
                <UserListItem>
                  <UserBtn2>기업 서비스</UserBtn2>
                </UserListItem>
              </UserList>
            </NavigationBack>
          </MenuBack>
        </Back>
      </Desktop>
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
                  <UserBtn>돋보기</UserBtn>
                </UserListItem>
                <UserListItem>
                  <UserBtn>알람</UserBtn>
                </UserListItem>
                <UserListItem>
                  <UserBtn>햄버거</UserBtn>
                </UserListItem>
              </UserList>
            </NavigationBack>
          </MenuBack>
        </Back>
      </Mobile>
      {/* <Default>Not mobile (desktop or laptop or tablet)</Default> */}
    </div>
  );
}

export default Navigation;
