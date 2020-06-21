import { setSortBy } from './sort.helper';

describe('setSortBy helper', () => {
  const testArray = [
    { popularity: 1 },
    { popularity: 4 },
    { popularity: 5 },
    { popularity: 3 },
    { popularity: 2 },
    { popularity: 1 },
  ];
  const sortedTestArrayDesc = [
    { popularity: 5 },
    { popularity: 4 },
    { popularity: 3 },
    { popularity: 2 },
    { popularity: 1 },
    { popularity: 1 },
  ];
  const sortedTestArrayAsc = [
    { popularity: 1 },
    { popularity: 1 },
    { popularity: 2 },
    { popularity: 3 },
    { popularity: 4 },
    { popularity: 5 },
  ];

  const sortBy = (cb) => [...testArray].sort(cb);

  it('should return a desc sorted array with one argument', () => {
    const result = sortBy(setSortBy('popularity'));
    expect(result).toEqual(sortedTestArrayDesc);
  });

  it('should return a desc sorted array with additional "desc" argument', () => {
    const result = sortBy(setSortBy('popularity', 'desc'));
    expect(result).toEqual(sortedTestArrayDesc);
  });

  it('should return an asc sorted array with additional "asc" argument', () => {
    const result = sortBy(setSortBy('popularity', 'asc'));
    expect(result).toEqual(sortedTestArrayAsc);
  });
});
