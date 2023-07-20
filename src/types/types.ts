import { MenuItemsEnum } from '@/constants/constants';

export type MenuItemType = {
  [MenuItemsEnum.ID]: string;
  [MenuItemsEnum.ATTRIBUTES]: {
    [MenuItemsEnum.TITLE]: string;
    [MenuItemsEnum.URL]: string;
  };
};

export type MenuItemsType = {
  [MenuItemsEnum.MENU_ITEMS]: { [MenuItemsEnum.DATA]: Array<MenuItemType> };
};

export type LayoutPropsType = { children: React.ReactNode };
