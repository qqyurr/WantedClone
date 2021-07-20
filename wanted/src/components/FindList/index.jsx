import React from "react";
import {
  Wrapper,
  CategoryWrap,
  Category,
  CategoryTitle,
  SubCategoryWrap,
  SubCategory,
  SubCategoryLink,
} from "./styles";

const FindList = ({ category, subCategory }) => {
  return (
    <Wrapper>
      {Array.isArray(category) ? (
        <CategoryWrap>
          {category.map(i => (
            <Category key={i.title}>
              <CategoryTitle>{i.title}</CategoryTitle>
            </Category>
          ))}
        </CategoryWrap>
      ) : (
        <>
          <Category>
            <CategoryTitle>{category.title}</CategoryTitle>
          </Category>
          <SubCategoryWrap>
            {subCategory.map(i => (
              <SubCategory key={i.title}>
                <SubCategoryLink>{i.title}</SubCategoryLink>
              </SubCategory>
            ))}
          </SubCategoryWrap>
        </>
      )}
    </Wrapper>
  );
};

export default FindList;
