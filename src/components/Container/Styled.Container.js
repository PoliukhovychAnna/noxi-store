import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  @media screen and (max-width: 576px) {
    padding: 20px 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 20px 30px;
  }

  @media screen and (min-width: 1440px) {
    padding: 30px 50px;
  }
`;
