import styled from "@emotion/styled";

export const Back = styled.div`
  position: fixed;
  padding-right: initial;
  width: 100%;
  z-index: 100;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  display: block;
  line-height: 1rem;
`;

export const MenuBack = styled.div`
  margin: 0 auto;
  height: 3rem;
  width: 90%
  position: relative;
  max-width: 1060px;
  display: block;
  box-sizing: border-box;
  line-height: 1rem;
`;

export const NavigationBack = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
`;

export const HomeLogo = styled.img`
  display: block;
  cursor: pointer;
  box-sizing: border-box;
  padding-right: initial;
  width: 5vw;
`;

export const Menus = styled.ul`
  display: block;
  flex-direction: row;
  list-style: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  // padding-inline-start: 40px;
}
`;

export const MenuItem = styled.li`
  height: inherit;
  display: inline-block;
  list-style: none;
`;

export const Item = styled.a`
  position: relative;
  font-size: 0.8rem;
  line-height: 0rem;
  font-weight: 600;
  padding: 0.6rem;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

export const User = styled.aside`
  padding: 0.5rem 0;
  height: 100%;
  display: block;
  margin: 0;
  border: 0;
  font-size: 0.8rem;
  line-height: 1rem;
`;

export const UserList = styled.ul`
  height: 100%;
  margin: 0;
  list-style: none;
  padding: 0;
  border: 0;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  // padding-inline-start: 40px;
  line-height: 1rem;
`;

export const UserListItem = styled.li`
  position: relative;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  border: 0;
  line-height: 1rem;
`;

export const UserBtn = styled.button`
  position: relative;
  margin-top: 5px;
  height: 100%;
  padding: 0 10px;
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1rem;
  margin: 0;
  border: 0;
  background: none;
  cursor: pointer;
`;
export const UserBtn2 = styled.button`
  position: relative;
  height: 100%;
  padding: 0 10px;
  font-size: 0.8rem;
  line-height: 1.3rem;
  background-color: transparent;
  margin: 0 0 0 15px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  cursor: pointer;
  font-weight: 400;
  display: inline-block;
  vertical-align: bottom;
`;
