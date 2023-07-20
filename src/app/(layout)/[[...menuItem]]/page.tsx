import { Suspense } from 'react';

import MenuItems from '@/components/MenuItems/MenuItems';
import { MenuItemsEnum } from '@/constants/constants';
import { getFetchedData, removeSlash } from '@/utils/utils';

type ParamsType = {
  menuItem?: string[];
};

type PropsType = {
  params: ParamsType;
};

export async function generateStaticParams(): Promise<ParamsType[]> {
  const data = await getFetchedData();
  return data[MenuItemsEnum.MENU_ITEMS][MenuItemsEnum.DATA].map(item => {
    let menuItem = item[MenuItemsEnum.ATTRIBUTES][MenuItemsEnum.URL];
    menuItem = removeSlash(menuItem);
    return { menuItem: menuItem ? [menuItem] : undefined };
  });
}

export default async function Page({ params }: PropsType) {
  const data = await getFetchedData();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MenuItems
        data={data[MenuItemsEnum.MENU_ITEMS][MenuItemsEnum.DATA]}
        menuItem={params.menuItem?.[0]}
      />
    </Suspense>
  );
}
