import { navProvider, textProvider } from './language.provider';

describe('Language Provider', () => {
  it('should have a working navProvider function', () => {
    expect(navProvider()).toBeTruthy();
  });

  it('should have "en" and "hu" values in provided values via navProvider', () => {
    let passed = true;
    const results = navProvider();
    Object.keys(results).forEach((key) => {
      if (!results[key].hu || !results[key].en) {
        passed = false;
      }
    });
    expect(passed).toBeTrue();
  });

  it('should have a working textProvider function', () => {
    expect(textProvider()).toBeTruthy();
  });

  it('should have "en" and "hu" values in provided values via textProvider', () => {
    let passed = true;
    const results = textProvider();
    Object.keys(results).forEach((key) => {
      if (!results[key].hu || !results[key].en) {
        passed = false;
      }
    });
    expect(passed).toBeTrue();
  });
});
