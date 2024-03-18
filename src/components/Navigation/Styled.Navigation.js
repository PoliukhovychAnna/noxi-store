import styled from 'styled-components';
import { ContainerWrapper } from 'components/Container/Styled.Container';

export const NavigationWrapper = styled(ContainerWrapper)`
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }

  /* @media screen and (min-width: 768px) {
    padding: 20px 30px;
  }

  @media screen and (min-width: 1440px) {
    padding: 30px 50px;
  } */
  display: flex;
  justify-content: space-between;
  /* padding: 20px 20px; */
  border-top: 2px solid var(--secondary-pink-color);
  border-bottom: 2px solid var(--secondary-pink-color);
  /* background-color: var(--main-blue-color); */
  background-color: var(--primary-white-color);
`;

export const SearchBar = styled.input`
  height: 35px;
  width: 230px;
  border-radius: 17px;
  /* border: 1px solid var(--secondary-pink-color); */
  padding: 15px;
  /* background-color: var(--main-pink-color); */
  /* color: var(--primary-white-color); */
  /* ::placeholder {
    color: var(--primary-white-color);
  } */
`;

export const NavigationButtons = styled.div`
  display: flex;
  align-items: center;
`;
