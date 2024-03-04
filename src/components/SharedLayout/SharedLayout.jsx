import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';
import { Loader } from 'components/Loader/Loader';
import { Footer } from 'components/Footer/Footer';
import { Container } from './Styled.SharedLayout';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </Container>
  );
};
