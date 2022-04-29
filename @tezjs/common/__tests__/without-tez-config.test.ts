import { commonContainer } from "../src/const/container.const";

test('without tez config check strapi default configuration', () => {
    commonContainer.setupConfig();
    expect(commonContainer.tezConfig.strapi).toBeDefined()
    expect(commonContainer.tezConfig.strapi.version).toBe(4)
    expect(commonContainer.tezConfig.strapi.siteUrl).toBe("http://localhost:3000")
    expect(commonContainer.tezConfig.strapi.apiUri).toBe("http://localhost:1337")
    expect(commonContainer.tezConfig.strapi.robots).toBeDefined();
    expect(commonContainer.tezConfig.strapi.robots.environmentName).toBe("Dev")
    expect(commonContainer.tezConfig.strapi.optimization).toBeDefined();
    expect(commonContainer.tezConfig.strapi.optimization.sourcePagination).toBeTruthy();
});





