// onClick={filterproducts(category)}
import {
  FilterCategoriesWrapper,
  CategoryButtonsWrapper,
  CategoryButton,
  PreOrderGoodsButton,
} from './Styled.Filter';

export const Filter = () => {
  return (
    <FilterCategoriesWrapper>
      <CategoryButtonsWrapper>
        <CategoryButton type="button">Все</CategoryButton>
        <CategoryButton type="button">Нічники</CategoryButton>
        <CategoryButton type="button">Проектори</CategoryButton>
        <CategoryButton type="button">Лампи</CategoryButton>
        <CategoryButton type="button">Зволожувачі повітря</CategoryButton>
      </CategoryButtonsWrapper>
      <PreOrderGoodsButton href="/noxi-store/pre-order-goods">
        Товари під замовлення
      </PreOrderGoodsButton>
    </FilterCategoriesWrapper>
  );
};
