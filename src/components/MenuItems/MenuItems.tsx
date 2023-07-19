import Link from 'next/link';

import { MenuItemsEnum } from '@/constants/constants';
import { MenuItemsType } from '@/types/types';

type Props = {
  data: MenuItemsType;
};

export default function MenuItems({ data }: Props) {
  return (
    <>
      {data[MenuItemsEnum.MENU_ITEMS][MenuItemsEnum.DATA].map(item => {
        const id = item[MenuItemsEnum.ID];
        let { [MenuItemsEnum.TITLE]: title, [MenuItemsEnum.URL]: url } =
          item[MenuItemsEnum.ATTRIBUTES];
        url = url.includes('/') ? url : '/' + url;
        return (
          <Link key={id} href={url}>
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
