import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--main-pink-color);
  padding: 20px 20px;

  /* @media screen and (max-width: 576px) {
    padding: 20px 20px;
  } */

  /* @media screen and (min-width: 768px) {
    padding: 20px 30px;
  }

  @media screen and (min-width: 1440px) {
    padding: 30px 50px;
  } */
`;

export const LogoLink = styled.a`
  display: inline-block;
  outline: none;
`;

export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  /* margin: 10px; */
  border-radius: 50%;
  border: 1px solid var(--main-blue-color);
  background-color: var(--main-blue-color);

  @media screen and (max-width: 576px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 1440px) {
    width: 80px;
    height: 80px;
  }
`;

export const LogoTitle = styled.a`
  display: inline-block;
  outline: none;
  font-weight: 600;
  font-size: 20px;
  color: var(--primary-white-color);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
