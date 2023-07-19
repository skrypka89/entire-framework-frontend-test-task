import { MenuItemsEnum } from '@/constants/constants';

export type MenuItemsType = {
  [MenuItemsEnum.MENU_ITEMS]: {
    [MenuItemsEnum.DATA]: Array<{
      [MenuItemsEnum.ID]: string;
      [MenuItemsEnum.ATTRIBUTES]: {
        [MenuItemsEnum.TITLE]: string;
        [MenuItemsEnum.URL]: string;
      };
    }>;
  };
};
