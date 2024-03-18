import styled from 'styled-components';
import { ContainerWrapper } from 'components/Container/Styled.Container';

export const FilterCategoriesWrapper = styled(ContainerWrapper)`
  display: flex;
  border-bottom: 2px solid var(--secondary-pink-color);

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CategoryButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 576px) {
    gap: 10px 20px;
  }

  @media screen and (min-width: 768px) {
    column-gap: 10px;
    align-items: center;
  }
`;

export const CategoryButton = styled.button`
  border-radius: 50%;

  @media screen and (max-width: 576px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (min-width: 1440px) {
    width: 70px;
    height: 70px;
  }
`;

export const PreOrderGoodsButton = styled.a`
  border-radius: 50%;

  @media screen and (max-width: 576px) {
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
    margin-left: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 150px;
    height: 150px;
  }
`;
