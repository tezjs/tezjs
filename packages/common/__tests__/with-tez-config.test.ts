import { commonContainer } from "../src/const/container.const";
import { CommonPathResolver } from "../src/domain/common-path.resolver";
import { readFileSync } from "../src/functions/read-file-sync";
import { writeFileSync } from "../src/functions/write-file-sync";

const directoryPath = `${process.cwd()}\\@tezjs\\common\\__tests__\\mock-configuration`;
const expressFilePath =`${process.cwd()}\\express.index.js`;
let commonPathResolver:CommonPathResolver;
beforeAll(()=>{
    commonPathResolver = new CommonPathResolver();
})

  describe('strapi custom configuration', () => {
      beforeEach(()=>{
        commonContainer.setupConfig({  
          strapi: { 
              siteUrl:"http://localhost:4200",
              apiUri: "http://localhost:4100",  
              robots:{
                  environmentName:"prod"
              }, 
              optimization: {
                  sourcePagination:false,
              }
          } 
      }       );
      })
      it('should check tez config  strapi configuration', () => {
    expect(commonContainer.tezConfig.strapi).toBeDefined()
    expect(commonContainer.tezConfig.strapi.siteUrl).toBe("http://localhost:4200")
    expect(commonContainer.tezConfig.strapi.apiUri).toBe("http://localhost:4100")
    expect(commonContainer.tezConfig.strapi.robots).toBeDefined();
    expect(commonContainer.tezConfig.strapi.robots.environmentName).toBe("prod")
    expect(commonContainer.tezConfig.strapi.optimization).toBeDefined();
    expect(commonContainer.tezConfig.strapi.optimization.sourcePagination).toBeFalsy();
      })
});

describe('express custom configuration', () => {
    beforeEach(()=>{
        writeFileSync(expressFilePath,readFileSync(`${directoryPath}\\express.index.js.txt`,true),true);
        commonContainer.setupConfig({  
          express:{
              path:'express.index.js'
          }
      });
    })
    it('check tez config  express configuration', () => {
    expect(commonContainer.tezConfig.express).toBeDefined()
    expect(commonContainer.tezConfig.express.path).toBe("express.index.js")
    expect(commonContainer.expressConfig).toBeDefined();
    expect(commonContainer.expressConfig.path).toBe('/api');
    });
});


describe('PWA custom configuration', () => {
  beforeEach(()=>{
      commonContainer.setupConfig({  
        pwa:{
            "name": "Tez App",
            "short_name": "Tez",
            "start_url": "/",
            "display": "standalone",
            "orientation": "portrait",
            "background_color": "#fff",
            "theme_color": "#fff",
            "icons": [
              {
                "src": "icons/icon-72x72.png",
                "sizes": "72x72",
                "type": "image/png"
              }
            ]
          }
    }  );
  })
  it('check tez config  PWA configuration', () => {
  expect(commonContainer.tezConfig.pwa).toBeDefined()
  expect(commonContainer.tezConfig.pwa).toMatchObject({
    "name": "Tez App",
    "short_name": "Tez",
    "start_url": "/",
    "display": "standalone",
    "orientation": "portrait",
    "background_color": "#fff",
    "theme_color": "#fff",
    "icons": [
      {
        "src": "icons/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png"
      }
    ]
  })
  });
});

afterEach(() => {
    commonPathResolver.removeDirSync(expressFilePath)
  });  
