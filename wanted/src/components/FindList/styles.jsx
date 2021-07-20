import styled from "@emotion/styled";

export const Wrapper = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 15%;
  text-decoration: none;
`;
export const CategoryWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Category = styled.a`
  padding-bottom: 1.5rem;
  cursor: pointer;
  text-decoration: none;
`;
export const CategoryTitle = styled.h3`
  position: relative;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 0.1em;
  text-align: left;
  margin-left: 2.5em;
  color: #000;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 1rem;
    height: 1rem;
    transform: translateY(-50%);
  }
`;
export const SubCategoryWrap = styled.ul`
  list-style: none;
`;
export const SubCategory = styled.li`
  padding: 0.5rem 0;
  text-decoration: none;

  &:last-child > a::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 1rem;
    height: 1rem;
    transform: translateY(-50%);
  }
`;
export const SubCategoryLink = styled.a`
  position: relative;
  display: flex;
  width: 100%;
  font-size: 0.9rem;
  line-height: 1.1;
  color: #bdbdbd;
  text-decoration: none;
`;
