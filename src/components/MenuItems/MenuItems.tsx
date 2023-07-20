'use client';

import Link from 'next/link';

import { MenuItemsEnum } from '@/constants/constants';
import { MenuItemType } from '@/types/types';
import { removeSlash } from '@/utils/utils';

type PropsType = {
  data: MenuItemType[];
  menuItem?: string;
};

export default function MenuItems({ data, menuItem }: PropsType) {
  return (
    <>
      {data.map(item => {
        const id = item[MenuItemsEnum.ID];
        let { [MenuItemsEnum.TITLE]: title, [MenuItemsEnum.URL]: url } =
          item[MenuItemsEnum.ATTRIBUTES];
        url = removeSlash(url);
        return (
          <Link key={id} href="/[...menuItem]]" as={`/${url}`}>
            {title.length <= 11 ? (
              <p>{title}</p>
            ) : (
              title.split(' ').map((t, i) => <p key={i}>{t}</p>)
            )}
          </Link>
        );
      })}
    </>
  );
}
