import { apiUrl } from '@/constants/constants';
import { MenuItemsType } from '@/types/types';

export default async function fetchData(): Promise<MenuItemsType> {
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
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const { data }: { data: MenuItemsType } = await response.json();
  return data;
}
