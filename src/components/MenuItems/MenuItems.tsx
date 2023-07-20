'use client';

import Link from 'next/link';
import { useContext, useEffect } from 'react';

import Context, { contextObject } from '@/app/(layout)/Context';
import styles from '@/components/MenuItems/menu-items.module.sass';
import { MenuItemsEnum } from '@/constants/constants';
import { MenuItemType } from '@/types/types';
import { removeSlash } from '@/utils/utils';

type PropsType = {
  data: MenuItemType[];
  menuItem?: string;
};

export default function MenuItems({ data, menuItem }: PropsType) {
  const selected = menuItem ?? '';
  const { context, setContext } = useContext(Context);

  useEffect(() => {
    if (menuItem) {
      setContext.call(contextObject, selected);
    }
  }, [menuItem, selected, setContext]);

  return (
    <>
      {data.map(item => {
        const id = item[MenuItemsEnum.ID];
        const { [MenuItemsEnum.TITLE]: title } = item[MenuItemsEnum.ATTRIBUTES];
        let { [MenuItemsEnum.URL]: url } = item[MenuItemsEnum.ATTRIBUTES];
        url = removeSlash(url);
        const className: 'collapsed' | 'expanded' | undefined =
          selected === url ? 'collapsed' : context === url ? 'expanded' : undefined;
        return (
          <Link
            key={id}
            href="/[...menuItem]]"
            as={`/${url}`}
            className={className ? styles[className] : undefined}
          >
            {title.length <= 11 ? (
              <p>{title}</p>
            ) : (
              title.split(' ').map((t, i, arr) => (
                <p style={{ marginBottom: i === arr.length - 1 ? 4 : 0 }} key={i}>
                  {t}
                </p>
              ))
            )}
          </Link>
        );
      })}
    </>
  );
}
