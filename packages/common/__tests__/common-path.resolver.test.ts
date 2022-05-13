import { CommonPathResolver } from "../src/domain/common-path.resolver";
import { existsSync } from 'fs'
import { commonContainer } from "../src/const/container.const";
let commonPathResolver:CommonPathResolver = null;
beforeEach(() => {
    commonPathResolver = new CommonPathResolver();
  });

test('tez cache directory must be exists', () => {
    expect(existsSync(commonPathResolver.cachePath)).toBe(true);
});

test('match working directory path', () => {
  expect(commonPathResolver.rootPath).toBe(process.cwd());
});

test('cache path should be in .cache directory', () => {
  expect(commonPathResolver.cachePath).toBe(`${process.cwd()}\\node_modules\\.cache\\tez`);
});

test('route json should be in tez cache directory', () => {
  expect(commonPathResolver.routesJsonPath).toBe(`${process.cwd()}\\node_modules\\.cache\\tez\\routes.json`);
});

test('redirect routes json should be in tez cache directory', () => {
  expect(commonPathResolver.redirectRoutesJsonPath).toBe(`${process.cwd()}\\node_modules\\.cache\\tez\\redirect-routes.json`);
});

test('payload folder name should be "public" ', () => {
  commonContainer.setupConfig();
  expect(commonPathResolver.payloadPath).toBe(`${process.cwd()}\\public`);
});

test('image folder path should be in public folder ', () => {
  commonContainer.setupConfig();
  let folderPath = commonPathResolver.imageFolderPath;
  expect(commonPathResolver.pathExists(`${process.cwd()}\\public\\uploads`)).toBeTruthy();
  expect(folderPath).toBe(`${process.cwd()}\\public`);
});

afterAll(() => {
  return removeDirectory();
});
function removeDirectory(){
  let folderPath = commonPathResolver.payloadPath;
  if(commonPathResolver.pathExists(folderPath))
    commonPathResolver.removeDirSync(folderPath)
    commonPathResolver.removeDirSync(commonPathResolver.cachePath)
}