import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  let pipe;
  const testValue = 'test';
  const noValue = 'no';

  beforeEach(() => {
    pipe = new SearchPipe().transform;
  });

  afterEach(() => {
    pipe = null;
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should not give result by searching if nothing found', () => {
    expect(pipe([], testValue)).toEqual([]);
  });

  it('should return array untouched if no search phrase provided', () => {
    expect(pipe([1, 2, 3, 4], '')).toEqual([1, 2, 3, 4]);
  });

  it('should give result by searching by job', () => {
    const testArray = [{ job: testValue }, { job: noValue }];
    expect(pipe(testArray, testValue)).toEqual([{ job: testValue }]);
  });

  it('should give result by searching by title', () => {
    const testArray = [{ title: testValue }, { title: noValue }];
    expect(pipe(testArray, testValue)).toEqual([{ title: testValue }]);
  });

  it('should give result by searching by name', () => {
    const testArray = [{ name: testValue }, { name: noValue }];
    expect(pipe(testArray, testValue)).toEqual([{ name: testValue }]);
  });

  it('should give result by searching by original_title', () => {
    const testArray = [
      { original_title: testValue },
      { original_title: noValue },
    ];
    expect(pipe(testArray, testValue)).toEqual([{ original_title: testValue }]);
  });

  it('should give result by searching by original_name', () => {
    const testArray = [
      { original_name: testValue },
      { original_name: noValue },
    ];
    expect(pipe(testArray, testValue)).toEqual([{ original_name: testValue }]);
  });

  it('should give result by searching by character', () => {
    const testArray = [{ character: testValue }, { character: noValue }];
    expect(pipe(testArray, testValue)).toEqual([{ character: testValue }]);
  });
});
