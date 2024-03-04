import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--main-pink-color);
`;

export const LogoLink = styled.a`
  display: inline-block;
  outline: none;
`;

export const LogoImg = styled.img`
  border-radius: 50%;
  /* border: 1px solid var(--main-blue-color); */
  width: 100px;
  height: 100px;
`;

export const LogoTitle = styled.h1`
  margin-left: auto;
  margin-right: auto - 100px;
  color: var(--primary-white-color);
`;
