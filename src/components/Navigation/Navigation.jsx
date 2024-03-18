import {
  NavigationWrapper,
  SearchBar,
  NavigationButtons,
} from './Styled.Navigation';

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <SearchBar
        type="text"
        name="searchFilter"
        placeholder="Пошук"
        // value={}
        // onChange={this.handleChange}
      />
      <NavigationButtons>
        <a href="/noxi-store/favorites">Обране</a>
        <a href="/noxi-store/shopping-cart">Кошик</a>
        <button type="button">Увійти</button>
        <button type="button">Зареєструватися</button>
      </NavigationButtons>
    </NavigationWrapper>
  );
};
