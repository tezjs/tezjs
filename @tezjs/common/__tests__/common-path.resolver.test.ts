import { CommonPathResolver } from "../src/domain/common-path.resolver";
import { existsSync } from 'fs'
let commonPathResolver:CommonPathResolver = null;
beforeEach(() => {
    commonPathResolver = new CommonPathResolver();
  });

test('tez cache directory must be exists', () => {
    expect(existsSync(commonPathResolver.cachePath)).toBe(true);
  });