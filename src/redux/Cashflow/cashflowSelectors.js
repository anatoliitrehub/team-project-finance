import svg from '../../assets/icons/sprite.svg';

export const getPresevingSelect = state => state.cashflow.presaving;

export const selectCategories = state => state.cashflow.category;
export const selectCategoriesWithIcons = state => {
  const categories = selectCategories(state);
  return categories.map(category => {
    const categoryWithIcon = { ...category, icon: '' };
    switch (category.name) {
      case 'products':
        categoryWithIcon.icon = `${svg}#icon-fish`;
        break;
      case 'clothing':
        categoryWithIcon.icon = `${svg}#icon-checkroom`;
        break;
      case 'cafes':
        categoryWithIcon.icon = `${svg}#icon-restaurant`;
        break;
      case 'beauty':
        categoryWithIcon.icon = `${svg}#icon-medical`;
        break;
      case 'health':
        categoryWithIcon.icon = `${svg}#icon-spa`;
        break;
      case 'transport':
        categoryWithIcon.icon = `${svg}#icon-car`;
        break;
      case 'house':
        categoryWithIcon.icon = `${svg}#icon-house`;
        break;
      case 'other':
        categoryWithIcon.icon = `${svg}#icon-settings`;
        break;
      default:
        break;
    }
    return categoryWithIcon;
  });
};
