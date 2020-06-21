import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe;
  const value = 'One two three four five six seven eight nine ten';
  const limit = 25;
  const completeWords = false;
  const ellipsis = '...';

  beforeEach(() => {
    pipe = new TruncatePipe().transform;
  });

  afterEach(() => {
    pipe = null;
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate string', () => {
    expect(pipe(value, limit, completeWords, ellipsis)).toEqual(
      'One two three four five s...'
    );
  });

  it('should truncate string with default parameters', () => {
    expect(pipe(value)).toEqual('One two three four five s...');
  });

  it('should truncate string at complete words', () => {
    expect(pipe(value, limit, true, ellipsis)).toEqual(
      'One two three four five...'
    );
  });

  it('should not truncate string if value shorter than limit', () => {
    expect(pipe(value, 100, completeWords, ellipsis)).toEqual(value);
  });
});
