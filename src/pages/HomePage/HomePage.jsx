import { Filter } from 'components/Filter/Filter';
import { Banner } from 'components/Banner/Banner';
import { ListOfProducts } from 'components/ListOfProducts/ListOfProducts';

export const HomePage = () => {
  return (
    <>
      <Filter />
      <Banner />
      <ListOfProducts />
    </>
  );
};
