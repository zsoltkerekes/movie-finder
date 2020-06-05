export type TBy =
  | 'release_date'
  | 'order'
  | 'job'
  | 'vote_average'
  | 'popularity'
  | 'title'
  | 'name';
export type TOrder = 'asc' | 'desc';

export interface ISort {
  [key: string]: string | number;
}

export const setSortBy = (key: TBy, by: TOrder = 'desc'): any =>
  by === 'desc'
    ? function (a: ISort, b: ISort): number {
        if (a[key] < b[key]) {
          return 1;
        }
        if (a[key] > b[key]) {
          return -1;
        }
        return 0;
      }
    : function (a: ISort, b: ISort): number {
        if (a[key] > b[key]) {
          return 1;
        }
        if (a[key] < b[key]) {
          return -1;
        }
        return 0;
      };
