import { cache } from 'react';

import { apiUrl } from '@/constants/constants';
import { MenuItemsType } from '@/types/types';

export const getFetchedData: () => Promise<MenuItemsType> = cache(async () => {
  const response: Response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query {
          menuItems {
            data {
              id
              attributes {
                title
                url
              }
            }
          }
        }
      `,
    }),
    cache: 'force-cache',
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const { data }: { data: MenuItemsType } = await response.json();
  return data;
});

export function removeSlash(str: string): string {
  return str.includes('/') ? str.split('').slice(1).join('') : str;
}
