# 1.0.0-beta.4 (2022-09-06)


### Bug Fixes

* **vite:** cache only success response [#56](https://github.com/tezjs/tez.js/issues/56) ([c952a02](https://github.com/tezjs/tez.js/commit/c952a028ed3d12767a86415aa4a87038904ba1b5))


### Features

* **vite:** inline font css and serve fonts from same origin ([8f75648](https://github.com/tezjs/tez.js/commit/8f75648035e3bea74611ff3cb7eac733a68a687b))
* **vue:** load third party libs once application is in idle state ([ac7c76e](https://github.com/tezjs/tez.js/commit/ac7c76e9ff1d3a0bd36c0465b3c3133992a54f66))



# 1.0.0-beta.3 (2022-09-02)


### Bug Fixes

* **payload:** authenticate api user [#34](https://github.com/tezjs/tez.js/issues/34) ([ffc6e56](https://github.com/tezjs/tez.js/commit/ffc6e56b4ddefeaf41b9bc3e6f6f46194fe90ed6))
* **vite:** infinite loads the page [#29](https://github.com/tezjs/tez.js/issues/29) ([48dd512](https://github.com/tezjs/tez.js/commit/48dd512f1792ea67c59af257d159c63ce1d9e627))
* **vite:** isImageImmutableCacheEnable undefined ([784c4f6](https://github.com/tezjs/tez.js/commit/784c4f68699f36e3b686c773e3384d33b0c0fb0a))
* **vite:** page content not visible during pre-bundle the deps [#48](https://github.com/tezjs/tez.js/issues/48) ([b8547cd](https://github.com/tezjs/tez.js/commit/b8547cde1aa9e797b3edde8496bbb90be11ff0ab))
* **vite:** service worker cache assets [#41](https://github.com/tezjs/tez.js/issues/41) ([515ba34](https://github.com/tezjs/tez.js/commit/515ba342de38eacf94e5abb7f074075c02e85f3d))
* **vite:** tez development environment check for tzjs path [#20](https://github.com/tezjs/tez.js/issues/20) ([207819e](https://github.com/tezjs/tez.js/commit/207819e5e12b4bf3a100d1fe358b40a5243f8026))
* **vue:** HMR reload [#7](https://github.com/tezjs/tez.js/issues/7) ([000516c](https://github.com/tezjs/tez.js/commit/000516c2559fdafe1e79ee72224c138d200c8a6f))
* **vue:** resolve dynamic route content [#50](https://github.com/tezjs/tez.js/issues/50) ([e0ff4ee](https://github.com/tezjs/tez.js/commit/e0ff4eedb93dce0993b4ec8e44376355385b814d))


### Features

* **vite:** add cache first strategy [#22](https://github.com/tezjs/tez.js/issues/22) ([94abfe7](https://github.com/tezjs/tez.js/commit/94abfe7f5d1872143b68bb8c74eef95fb26e0d55))
* **vite:** add link meta tag and pwa compatible html element ([1a252f9](https://github.com/tezjs/tez.js/commit/1a252f9caf43dc189a30c33f6af10ecb0cf08c23))
* **vite:** allow third party domain request cache [#28](https://github.com/tezjs/tez.js/issues/28) ([3efed3a](https://github.com/tezjs/tez.js/commit/3efed3accb04219701c01ab8e92b3fd6a81009df))
* **vite:** auto generate manifest.json file with minimal configuration [#8](https://github.com/tezjs/tez.js/issues/8) ([bf0cb46](https://github.com/tezjs/tez.js/commit/bf0cb46f0249a126d5e12e3e576e1be3841d561f))
* **vite:** immutable cache configuration through service worker [#10](https://github.com/tezjs/tez.js/issues/10) ([a06f12f](https://github.com/tezjs/tez.js/commit/a06f12f0662d88bf351f33045f57aa7c159a4c13))
* **vite:** network first cache strategy for routes [#9](https://github.com/tezjs/tez.js/issues/9) ([339eb01](https://github.com/tezjs/tez.js/commit/339eb014a0e6b81568b8c9a9a186915b04ec8b6d))
* **vite:** only cache same origin request [#25](https://github.com/tezjs/tez.js/issues/25) ([a05682a](https://github.com/tezjs/tez.js/commit/a05682a820f468ea17e4e9a94bb10f41dd67b1a8))
* **vite:** preload service-worker.js file if pwa is configure [#35](https://github.com/tezjs/tez.js/issues/35) ([ff5b8d4](https://github.com/tezjs/tez.js/commit/ff5b8d42e3571fad23f7cd1535fa833bc1bf516f))
* **vite:** route based cache assets after user interaction [#27](https://github.com/tezjs/tez.js/issues/27) ([d76d5c2](https://github.com/tezjs/tez.js/commit/d76d5c212af98b664ebf30fff5b57d63f1de656f))


### Performance Improvements

* **vue:** load pre-cached images [#11](https://github.com/tezjs/tez.js/issues/11) ([2793ec8](https://github.com/tezjs/tez.js/commit/2793ec80df7f4d2d9c6c316226ad478b45ff2904))



# 1.0.0-beta.2 (2022-08-24)


### Bug Fixes

* **vue:** binding components on page route change ([4586133](https://github.com/tezjs/tez.js/commit/458613371152bf1c7bb8076617cdfd06bc8f2d07))



# 1.0.0-beta.1 (2022-08-22)


### Bug Fixes

* **vue:** load post script before component check ([6588d68](https://github.com/tezjs/tez.js/commit/6588d68177e1cb70fdc71a02bd931c162b025cf1))



# 1.0.0-beta.0 (2022-08-22)


### Bug Fixes

* **create-tez:** set 'layouts' folder path in tailwind config ([12cf001](https://github.com/tezjs/tez.js/commit/12cf001f30ba8ba821c5f02635de7949d0e7337a))
* **vue:** load post script early for large viewport ([c43d4f8](https://github.com/tezjs/tez.js/commit/c43d4f847f55556f87910cdf6be8313fbd744bbc))



## 0.0.84 (2022-08-20)


### Bug Fixes

* **cli:** 'tez' cli up issue ([45804c1](https://github.com/tezjs/tez.js/commit/45804c10ce46c3d8566b835ba3d68158d32a1899))
* **vite:** optimize deps loading '@tezjs/vue' ([46cec46](https://github.com/tezjs/tez.js/commit/46cec46320725e093caf6e55d3c7ab264435e317))



## 0.0.83 (2022-08-20)


### Bug Fixes

* **cli:** stackblitz playground ([50df453](https://github.com/tezjs/tez.js/commit/50df453dcff5725a7e8d2b9d6397ee4e99eac690))



## 0.0.82 (2022-08-18)


### Bug Fixes

* **vue:** maintain route state with query string ([58e1c2f](https://github.com/tezjs/tez.js/commit/58e1c2ffd237bd600077b43ad6f4675b9dec34cb))



## 0.0.81 (2022-08-17)


### Bug Fixes

* **vue:** load post script if pre components are loaded ([b074fde](https://github.com/tezjs/tez.js/commit/b074fded4b812713eec2277accb52720a3732e1e))



## 0.0.80 (2022-08-17)


### Features

* **vue:** handle hash url ([d2fb186](https://github.com/tezjs/tez.js/commit/d2fb18607c6e26fd5521875ec299a5355a4617a9))



## 0.0.79 (2022-08-16)


### Bug Fixes

* **vite:** read tez configuration before initializing the app ([848e3fd](https://github.com/tezjs/tez.js/commit/848e3fd7bad6f86fde1a46552d2e135024890c79))
* **vite:** remove 'dev' mode ([1a12421](https://github.com/tezjs/tez.js/commit/1a124219a947768ebbdd5c85e982c03b2f9c99c0))


### Features

* **vite:** generate sw.js configurable ([5f74c9e](https://github.com/tezjs/tez.js/commit/5f74c9ea29ba05b447098a1f6ac2260baeaa39e1))



## 0.0.78 (2022-08-16)


### Bug Fixes

* **vue:** stop multiple times scroll event ([74a354e](https://github.com/tezjs/tez.js/commit/74a354e2f1115f6e5844a8338bac56ecb10c330f))


### Features

* **vite:** export dev function to get the base configuration and run the app in dev mode through vite config ([a8d320a](https://github.com/tezjs/tez.js/commit/a8d320afb04e047c7ce8c957ba2f8206242a008e))


### Performance Improvements

* **vue:** improve component loading sequencing & LCP of the page ([9bd456d](https://github.com/tezjs/tez.js/commit/9bd456d42b29937ea3443f89a3cb11d03742f46c))



## 0.0.77 (2022-08-15)


### Bug Fixes

* **vite:** parse json schema ([daaf00b](https://github.com/tezjs/tez.js/commit/daaf00b5b9219168322f5dc179080bacfd5baa2e))



## 0.0.76 (2022-08-15)


### Bug Fixes

* **vite:** add build version only build mode ([7c22cc5](https://github.com/tezjs/tez.js/commit/7c22cc578f43285c0fcf40e165856b0669fc4425))
* **vite:** bundle page wise css ([177fbf1](https://github.com/tezjs/tez.js/commit/177fbf17ca1475b1b9344ae5b80f2ff052bb9d3d))
* **vite:** conflict vue / @tezjs/vue ([eb358d5](https://github.com/tezjs/tez.js/commit/eb358d5cd3bcf3ab1291494985ec9122f879262e))
* **vite:** return correct js path ([9071731](https://github.com/tezjs/tez.js/commit/9071731ffd6941724e4501356d33634537659ff9))



## 0.0.75 (2022-08-13)


### Bug Fixes

* **vite:** linking json data regex ([1f2bc4e](https://github.com/tezjs/tez.js/commit/1f2bc4e40edeeb0d55d2542360bfaf7856c20efc))



## 0.0.74 (2022-08-12)


### Bug Fixes

* **vite:** all deps must be in lowercase ([7e422f3](https://github.com/tezjs/tez.js/commit/7e422f369b75a83a293c1d698e00549c6f4e7618))
* **vite:** correct reference of CommonPathResolver ([819b42b](https://github.com/tezjs/tez.js/commit/819b42bf0643316c02dbc6ba1143ef33b6bbc6c6))



## 0.0.73 (2022-08-12)


### Bug Fixes

* **docs:** Correct Questions Url ([e5ebd0a](https://github.com/tezjs/tez.js/commit/e5ebd0a040f495b8f41dbdc990e050620a8a3bec))
* **docs:** typo mistake ([154aea9](https://github.com/tezjs/tez.js/commit/154aea920c5e87577b34b44d5e2f2e87a97ddf58))



## 0.0.72 (2022-08-11)



## 0.0.71 (2022-08-10)


### Bug Fixes

* **vite:** remove additional forward slash ([3f0a34e](https://github.com/tezjs/tez.js/commit/3f0a34e51e54962c641f829714a5ccc7e529da84))



## 0.0.70 (2022-08-10)


### Bug Fixes

* **vite:** add build version after release ([0236f51](https://github.com/tezjs/tez.js/commit/0236f51d6c2be3509d01874f576d4a2c88b07912))
* **vite:** gen component file names in lowercase ([12554e6](https://github.com/tezjs/tez.js/commit/12554e6617ee96499758b0a6eddafcf6ebde1a60))
* **vite:** gen component file names in lowercase ([aa13b16](https://github.com/tezjs/tez.js/commit/aa13b16f406157d4e39ca84827dd8c31962e5d01))
* **vite:** include css if js is not direct reference to the respective component ([7b0f03f](https://github.com/tezjs/tez.js/commit/7b0f03f2b1d32aadf5af4faa8f04de63418956ec))



## 0.0.69 (2022-08-09)


### Bug Fixes

* **vite:** preload correct component path ([5d0f20d](https://github.com/tezjs/tez.js/commit/5d0f20dfac40d5dd5d00cd7e065550e8b3a5d33e))


### Features

* **vite:** conditional generate sitemap & robots ([b2c48be](https://github.com/tezjs/tez.js/commit/b2c48be75f300465fdb4374f7f048fa016a40684))



## 0.0.68 (2022-08-09)


### Bug Fixes

* **vite:** remove replacer ([b4ec9b2](https://github.com/tezjs/tez.js/commit/b4ec9b228ad0f84432e16e80547bd36c472bc9e2))


### Features

* **vite:** conditional minification ([1ccb3e3](https://github.com/tezjs/tez.js/commit/1ccb3e330fa3daa8f56fad1bea32293e78fd8094))



## 0.0.67 (2022-08-09)


### Bug Fixes

* **vite:** include non variable reference imports ([23a13ef](https://github.com/tezjs/tez.js/commit/23a13ef1f5fefb340dcec0533566c888554fb3bc))


### Features

* **vue:** add query params in router ([4ade609](https://github.com/tezjs/tez.js/commit/4ade60956352042828ab68286b5d46d36de1df0d))



## 0.0.66 (2022-08-09)



## 0.0.65 (2022-08-08)


### Bug Fixes

* **payload:** set regex for replace the route path with replace method ([6ecf122](https://github.com/tezjs/tez.js/commit/6ecf122e6638a565530fdcc7ce67fc751ead745f))
* **vite:** correct regex  onResolve filter ([3160844](https://github.com/tezjs/tez.js/commit/31608445462fe05f79329067892e4f913e8121bd))



## 0.0.64 (2022-08-08)



## 0.0.63 (2022-08-08)


### Bug Fixes

* **vite:** add '@tezjs/vue' in optimizeDeps ([693cdbf](https://github.com/tezjs/tez.js/commit/693cdbfcc69fd24800143bf37b1d10f414c33112))



## 0.0.62 (2022-08-08)


### Bug Fixes

* **cli:** SPAWN ENOENT ([9567654](https://github.com/tezjs/tez.js/commit/9567654d36693bd10fcf393767bef2c4db3692d0))



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)


### Bug Fixes

* **create-tez:** add missing @tezjs/route package ([1e4d532](https://github.com/tezjs/tez.js/commit/1e4d532c1d886e8f337e4ddf83510ed02ca55e1f))
* **route:** set correct @tezjs/common package version ([6039f6d](https://github.com/tezjs/tez.js/commit/6039f6da56e40cd046b3be414d581af29038d3e5))



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* add modules property for tez module external plugin ([c8528a5](https://github.com/tezjs/tez.js/commit/c8528a57e52960e9847888c4602474a1df7fa911))
* **create-tez:** add tezjs with vue starter template ([1f6a61c](https://github.com/tezjs/tez.js/commit/1f6a61c50cdbeff56e65389c1d7324e71a0fb697))
* **route:** add new package '@tezjs/route' for auto-routes ([f8b8e3e](https://github.com/tezjs/tez.js/commit/f8b8e3e255ee069e7326845a9f08ee45e37591a0))
* **vite:** auto resolve all layout component in final build ([2d818fa](https://github.com/tezjs/tez.js/commit/2d818fa3c5f82ec5c2cd9ed695bd51b92f2ad899))
* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)


### Bug Fixes

* **common:** correct lib path when cust source code path is configured ([d8d888a](https://github.com/tezjs/tez.js/commit/d8d888afe53812fc92a1f522c1f1a303804e4233))
* **payload:** ignore undefined component in payload ([02d6183](https://github.com/tezjs/tez.js/commit/02d618362d1b919d1fd6d1ee43d8cdb037b79ae8))
* **vite:** custom source path undefined ([943703d](https://github.com/tezjs/tez.js/commit/943703d4c3a0728cb0873d45da75d2ac1f7f899c))
* **vite:** resolve addLib ([684107a](https://github.com/tezjs/tez.js/commit/684107a3aa83513a51af8bdc334d56daacba21e2))



## 0.0.57 (2022-08-04)


### Bug Fixes

* **types:** set as nullable 'preFetch' property ([4261964](https://github.com/tezjs/tez.js/commit/42619640072af4f1e62ef2a547140c677254396e))
* **vite:** call bundle css method if bundlecss is true ([c79bc24](https://github.com/tezjs/tez.js/commit/c79bc24cf905f67833394218df0e3c23b19ec81b))
* **vite:** check path value before assigning the reference ([4d53ab3](https://github.com/tezjs/tez.js/commit/4d53ab3b920e12fad9cde645c0dbfb8fddd18704))
* **vite:** persist global html meta configuration ([82edd78](https://github.com/tezjs/tez.js/commit/82edd78359f319e5a540b9aea75bf3c786cea434))
* **vite:** set custom source code path ([84006bc](https://github.com/tezjs/tez.js/commit/84006bce97373596d791299886eef1f8b01df633))


### Features

* **vite:** preload components & respective dependencies page wise ([e385a5c](https://github.com/tezjs/tez.js/commit/e385a5c8c0d914c2ef6c757c3e216ee10a1f5a69))



## 0.0.56 (2022-08-03)


### Bug Fixes

* **vite:** ignore tez.css from page wise css bundling ([2bda791](https://github.com/tezjs/tez.js/commit/2bda7915f1c5a6c78bd0f6ccebed0990b9370488))
* **vite:** remove closing element of link tag ([c29b24e](https://github.com/tezjs/tez.js/commit/c29b24e64085efc137d8f16659612e5b20e14a6f))
* **vite:** resolve mobile component in pre script ([a22c831](https://github.com/tezjs/tez.js/commit/a22c831cc09bef06e0b335c982f663078211e662))


### Features

* **common:** set source folder path ([4785ca5](https://github.com/tezjs/tez.js/commit/4785ca5d27ff315a31132a5fc475fba413937338))
* **vite:** add preconnect link element ([cd78224](https://github.com/tezjs/tez.js/commit/cd7822466675fab2dcbb7a559ee24d4f54362fad))
* **vite:** allow to set dns-prefetch link element ([afc13ca](https://github.com/tezjs/tez.js/commit/afc13cafdadbd67ebfe80f8ed31471b809a0c25a))
* **vite:** allow to set prefetch path ([bdfefe0](https://github.com/tezjs/tez.js/commit/bdfefe0afdfdc9fdf7263fd46c8c43934e5e23cd))
* **vite:** bundle pagewise css ([a26379c](https://github.com/tezjs/tez.js/commit/a26379ccfc1c41d1d7392659733f046bceb96358))
* **vite:** page wise post script prefetch ([0ae4b21](https://github.com/tezjs/tez.js/commit/0ae4b2140bf44aaf3f7af47c4fc1b35e8876bc3b))
* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)


### Bug Fixes

* **vite:** component & layout import path in glob.js ([0a960a8](https://github.com/tezjs/tez.js/commit/0a960a8c0707e8134d9052dd5a838875da146465))
* **vite:** missing package under commonjs execution ([ad6bf38](https://github.com/tezjs/tez.js/commit/ad6bf3839d979b9736ca5936670a17550a4bac92))
* **vite:** replace new line code with blank from linkingData ([f072ed2](https://github.com/tezjs/tez.js/commit/f072ed2a79bbd664ffc6cefc183e616a562449c6))


### Features

* **vite:** customize tez build config with vite build ([3ba9bd0](https://github.com/tezjs/tez.js/commit/3ba9bd0dae5cb1e9cb73cd36c40af090da5025dc))
* **vite:** set as default production build ([1b3e21a](https://github.com/tezjs/tez.js/commit/1b3e21a418fbc3423d40bc90003ca19d8d3675da))



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **payload:** incorrect curly bracket ([c9c3f61](https://github.com/tezjs/tez.js/commit/c9c3f61373a1b6eb7aa7af77bb1550cd4bc25a66))
* **payload:** not to create robots when custom payload generator is configured ([bde0e1d](https://github.com/tezjs/tez.js/commit/bde0e1dd5fd1adc5f79da019e56777c2e7cd4ff9))
* **types:** mark as nullable prop of 'amplify' ([2efec85](https://github.com/tezjs/tez.js/commit/2efec85eb3bb217a018178bc48144b7ea604132a))
* **vite:** import plugins if exists ([740b3b8](https://github.com/tezjs/tez.js/commit/740b3b85f6464ac59a46cc27c7f8ac7eb5a8d875))
* **vite:** obviate number from component name ([c20801f](https://github.com/tezjs/tez.js/commit/c20801fbcfd187a41d57c03dad56449e6aacf09e))
* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))


### Features

* **payload:** pass additional props for custom payload generator ([a5d9217](https://github.com/tezjs/tez.js/commit/a5d921710eda26cdd9a1b7650af4efce64357437))
* **payload:** set routes for custom payload generator ([3eeed41](https://github.com/tezjs/tez.js/commit/3eeed41d47212ca1de4742eb4975520460f0e249))



## 0.0.51 (2022-07-26)


### Bug Fixes

* **payload:** ignore non change frequency & priority set url in sitemap ([ecd1ac0](https://github.com/tezjs/tez.js/commit/ecd1ac002a3a348d261a9878001839da987a1f41))



## 0.0.50 (2022-07-25)


### Bug Fixes

* **vite:** add proper format of linkingdata ([719a00e](https://github.com/tezjs/tez.js/commit/719a00e8d7f7aa52eb825300d231db7799f19fa8))



## 0.0.49 (2022-07-25)


### Features

* **payload:** add custom payload generator ([4013e8a](https://github.com/tezjs/tez.js/commit/4013e8a93d37647cf4ba723ca5c41e20d541c801))



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))
* **vite:** minify pre/post/preload js after build ([b0f2631](https://github.com/tezjs/tez.js/commit/b0f26311dfd41e63d9eaffd4d56c87624dfb03b0))



## 0.0.47 (2022-07-22)


### Bug Fixes

* **create-tez:** properly reference the property name ([c82e89a](https://github.com/tezjs/tez.js/commit/c82e89a44a73b96281871ead07746a2ea0f3f997))



## 0.0.46 (2022-07-22)


### Bug Fixes

* **vite:** obviate additional right slash from preload script url. ([2c5415e](https://github.com/tezjs/tez.js/commit/2c5415e7eb6727b51e0b2789dce79f1e5d2ff3ff))
* **vite:** preload items check before push ([e92933a](https://github.com/tezjs/tez.js/commit/e92933acedd4366df65ee427986ca3fe4b11e875))



## 0.0.45 (2022-07-22)


### Bug Fixes

* **payload:** redirect routes undefined then set blank array ([f3f39fc](https://github.com/tezjs/tez.js/commit/f3f39fc455f86464cda3c4dcfd12f39e3a7c7421))
* **vite:** import component correctly ([6deea03](https://github.com/tezjs/tez.js/commit/6deea03662eac54bffc7bcb06b4193d6a65e15a0))
* **vite:** obviate function while resolve the route ([a74e519](https://github.com/tezjs/tez.js/commit/a74e519b9bbbc41489f6a1c297448c54a81a0bfa))
* **vite:** set actual path instead of object ([4d986fb](https://github.com/tezjs/tez.js/commit/4d986fb234c3f102a34bbaa3ab071b16b3ee353c))
* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Bug Fixes

* **payload:** write firebase redirect routes ([a745423](https://github.com/tezjs/tez.js/commit/a7454230127a1efca8e0435502bb159f85467137))


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))
* **vite:** preload tz.js ([fcb7507](https://github.com/tezjs/tez.js/commit/fcb7507dcbd9ad46da9dce2e086b030844dc89c2))



## 0.0.43 (2022-07-19)


### Bug Fixes

* **payload:** map correct object for parse value ([4414bf6](https://github.com/tezjs/tez.js/commit/4414bf6b1091192a39f32e9dcac46f5e6622fefb))



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)


### Bug Fixes

* **payload:** add siteurl prefix in sitemap ([e848220](https://github.com/tezjs/tez.js/commit/e848220046acefb7a70432683544bf7bc5509f63))



## 0.0.39 (2022-07-15)


### Bug Fixes

* **vite:** write tz.js file on build complete ([b47ddcc](https://github.com/tezjs/tez.js/commit/b47ddcc68c5cd449274ad7bd690069ae1693e64b))



## 0.0.38 (2022-07-15)


### Bug Fixes

* **create-tez:** allow .cache folder permission while running in docker ([cc6226f](https://github.com/tezjs/tez.js/commit/cc6226f53fc209cc1d9b56efb06ee257b3067eb7))
* **vite:** add footer slot in post script ([ca36bad](https://github.com/tezjs/tez.js/commit/ca36bad8e9c6a3455e5237c77d2acb21c8527400))
* **vite:** remove suffix from image url while parsing the text ([581caf7](https://github.com/tezjs/tez.js/commit/581caf7ce3d26587a661c3fe898b51bebd26af48))
* **vite:** script & style property undefined check ([e7120c6](https://github.com/tezjs/tez.js/commit/e7120c6ed60fc8de01d1c269cb4b19cfc37df730))
* **vite:** segregate components conditionally in pre/post script ([a095a11](https://github.com/tezjs/tez.js/commit/a095a11ea5e7c5e625d48641554cbc9cb27ff014))


### Features

* conditional inline css/js reference on the page ([1bc7469](https://github.com/tezjs/tez.js/commit/1bc7469ae0a42837cb2889f989c75b63aa0f7603))
* **create-tez:** connect remote  container from vs code ([9602c2c](https://github.com/tezjs/tez.js/commit/9602c2c9b8eb83316d1461ab4273be7399160f71))
* **payload:** allow svg image to write in local folder ([89c9fb2](https://github.com/tezjs/tez.js/commit/89c9fb2770196e6a9696e28e4161972d12b015da))
* **vite:** preload underneath dependencies page wise ([a696e79](https://github.com/tezjs/tez.js/commit/a696e79d00d1317505958de370c87115a41b1ab7))
* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **common:** correct root (index) folder path ([8ae15d0](https://github.com/tezjs/tez.js/commit/8ae15d033e157eac413377e3e957d882bab281d3))
* **vite:** correct index.html root write path ([587aef5](https://github.com/tezjs/tez.js/commit/587aef58c7216e7a214f44fa706bf78c6b033735))
* **vite:** create html file at root ([1015c14](https://github.com/tezjs/tez.js/commit/1015c140cb5d6b16f15830c840d1c2fc9e955875))
* **vite:** generate index.html at root of the dist ([236ef35](https://github.com/tezjs/tez.js/commit/236ef35391108b83d50c658f11b9d3cb0bded5ee))
* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **js:** export isMobile function ([66f69c3](https://github.com/tezjs/tez.js/commit/66f69c3cf39da9202b804ccc96e017ab1b601354))
* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vite:** create tez.ts if not exists during build ([40db4ec](https://github.com/tezjs/tez.js/commit/40db4ec077cc83f0a055afb2924c5d609cc8a68c))
* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))
* **vue:** content attribute added to viewport meta tag ([2b35309](https://github.com/tezjs/tez.js/commit/2b353098551b99d9d5175f208980821c71c14536))



## 0.0.34 (2022-07-06)


### Bug Fixes

* **payload:** filter nested data ([a1ad7a7](https://github.com/tezjs/tez.js/commit/a1ad7a7f13a943112c8ac14ca64b06ea1454f461))



## 0.0.33 (2022-07-06)


### Bug Fixes

* **create-tez:** undefined message variable ([ca2c0b2](https://github.com/tezjs/tez.js/commit/ca2c0b2873508ea588cea2d2a3f89a31aa1de99e))



## 0.0.32 (2022-07-06)


### Bug Fixes

* **create-tez:** installing dependencies ([da6980a](https://github.com/tezjs/tez.js/commit/da6980aa1ba7473aaeef55ef406f1a2e5ad1573e))



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Bug Fixes

* **vite:** replace numbers from component name ([a8923b2](https://github.com/tezjs/tez.js/commit/a8923b20db8f7970cd6b8ec884c399f4c6ceecb1))


### Features

* **payload:** deep populate strapi data ([9eedc19](https://github.com/tezjs/tez.js/commit/9eedc19b0d85245c92a08d7b97bf743205c952e8))
* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Bug Fixes

* folder path seperator ([0629c06](https://github.com/tezjs/tez.js/commit/0629c06bdccdf9c54fbb51e436ec5702e11d2e5e))


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))
* **vite:** bundle page wise components and payload ([58dffbc](https://github.com/tezjs/tez.js/commit/58dffbccf6f71e0f8aa696675427a485b9ef4a52))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)


### Bug Fixes

* **create-tez:** resolve template directory path ([22c3751](https://github.com/tezjs/tez.js/commit/22c3751841a65b076501edfb8d6b4f035752d0f8))



## 0.0.25 (2022-06-13)


### Bug Fixes

* **payload:** remove back-slash from 'imageFolderPath' folder path ([bb80f77](https://github.com/tezjs/tez.js/commit/bb80f77d16dcd9728c8773a2c1004fcc54b3638b))
* **vite:** put 'await' while reading the tex config ([3d48f37](https://github.com/tezjs/tez.js/commit/3d48f37c91451739332dde43a080e3a0a86e7843))


### Features

* **create-tez:** automagically install scaffold template packages ([74afa89](https://github.com/tezjs/tez.js/commit/74afa8977f34ea9e9ba798f717e4401bf7b7de11))



## 0.0.24 (2022-06-02)


### Bug Fixes

* **payload:** parse query string with correct object ([d774399](https://github.com/tezjs/tez.js/commit/d774399eabe24b8e55272ba1247b8f8443b13030))



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **payload:** null check before transform the value ([aeb72bf](https://github.com/tezjs/tez.js/commit/aeb72bfd49bf8d843833c216f2942deb54cef502))
* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **common:** merge strapi default & user configuration ([ac60db7](https://github.com/tezjs/tez.js/commit/ac60db7263663eb6d9c9fdbc974ca4138ed1f8f3))
* **payload:** refresh reference content on the page ([1f438f0](https://github.com/tezjs/tez.js/commit/1f438f03669f32f2e3f6c599b9e6bb8ff8b9a5d0))
* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)


### Bug Fixes

* **create-tez:** add tsconfig in the project template ([88ec68a](https://github.com/tezjs/tez.js/commit/88ec68a819c6522f2d98c8cc7716a3df975d6625))
* **payload:** handle if masterpage is not set ([7be053c](https://github.com/tezjs/tez.js/commit/7be053c56111cd659cf8582f57ca5bf500d8a5ec))



## 0.0.19 (2022-05-28)


### Bug Fixes

* **create-tez:** ignore dist folder ([e79b290](https://github.com/tezjs/tez.js/commit/e79b290a44b9e57af97c2e70d68b66bbe4a76736))
* **create-tez:** tez strapi template seed data ([47ca764](https://github.com/tezjs/tez.js/commit/47ca7642ae2fd9f02384bd5f50f3140f1295905c))


### Features

* **types:** add prop amplify in deployment config ([b2a69a5](https://github.com/tezjs/tez.js/commit/b2a69a5f7f7ea615a2485cb6904590dac5a759c4))



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* sw template ([dc01931](https://github.com/tezjs/tez.js/commit/dc019313b125c32e8dd154beb2c5abd2241379f0))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))
* auto generate firebase deployment config ([6bceb53](https://github.com/tezjs/tez.js/commit/6bceb538d95a1e13bd53f87f675fe2dfe2d283d0))



## 0.0.16 (2022-05-26)



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* add optimizedeps path ([ddf68d4](https://github.com/tezjs/tez.js/commit/ddf68d46d6faeda6a295fb6ba9c337243d4038d5))
* auto generate tez.ts ([0725939](https://github.com/tezjs/tez.js/commit/072593975992dc81595e709a1986e4612db16ce1))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* change template path of service worker ([a68bf32](https://github.com/tezjs/tez.js/commit/a68bf32400e59b9941ff6e07bd27b7879567da28))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* convert into string instead array of html elements ([b453632](https://github.com/tezjs/tez.js/commit/b453632c36b8cbebd63c4d0e336bd4f8de1e9869))
* correct alias path ([0984d59](https://github.com/tezjs/tez.js/commit/0984d59a158ffe79dcad792e616fbea992ccb9eb))
* generate payload based on rootDir ([688b050](https://github.com/tezjs/tez.js/commit/688b050fd7810aaa3063cf2977ec7faa512e899b))
* generate sitemap and robots file ([bca1779](https://github.com/tezjs/tez.js/commit/bca17791f79d1ce3ad58eb500f741ec930a95175))
* generated html script and payload path ([6f7a14c](https://github.com/tezjs/tez.js/commit/6f7a14c86332af7928fabb34d6379bb70361ebc2))
* ignore broadcastchannel image request from local environment ([b23183a](https://github.com/tezjs/tez.js/commit/b23183ac151312047b5664763cc9767c75d8e47f))
* ignore undefined element in sitemap ([c3466a0](https://github.com/tezjs/tez.js/commit/c3466a023fd3b1005c4443a7a038e246a8be3e6d))
* image creating without configuration ([c2223d7](https://github.com/tezjs/tez.js/commit/c2223d74464327a22029dbcfa0a743a7d26de66a))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* minify index.html ([67dca05](https://github.com/tezjs/tez.js/commit/67dca0532e0e9a2fc6ab2b53bffccb31afa242a5))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* pass blank object if component data is undefined ([b1ed00f](https://github.com/tezjs/tez.js/commit/b1ed00f979f575daf602977e3cfe48383a3c83fc))
* pass blank object if seo object is null ([bed1681](https://github.com/tezjs/tez.js/commit/bed1681e173ab696193185a1a697028bcb9f84b9))
* reading seo payload path ([d6abff2](https://github.com/tezjs/tez.js/commit/d6abff2c24a3f81fb375bd2ceb805de92cbabe84))
* refresh specific route folder ([35a081f](https://github.com/tezjs/tez.js/commit/35a081f2460995cb7f5f662ce58052750f2de39d))
* resolve dynamic express module ([d41bcd0](https://github.com/tezjs/tez.js/commit/d41bcd02a672c185df62b8cb88e42c49544eb4c4))
* resolve import object value ([1fcedca](https://github.com/tezjs/tez.js/commit/1fcedca8083f2f8b36668961a977b4b75a22372d))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* return sitemap xelement ([ba1a4e3](https://github.com/tezjs/tez.js/commit/ba1a4e3b4eb1ec3d6847fb443eeb42eab1752535))
* service worker template code ([5ecd699](https://github.com/tezjs/tez.js/commit/5ecd69985060474a7d0ad7a1ecdad4e3cbf2eae2))
* set correct components folder path ([9c99697](https://github.com/tezjs/tez.js/commit/9c99697b207de11e46291a42a00661e147bc634c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* set correct payload path ([2b529ef](https://github.com/tezjs/tez.js/commit/2b529eff4cb6599e5e8a6ff224631e3d4606ee6a))
* set correct payload path ([3135c6a](https://github.com/tezjs/tez.js/commit/3135c6a36068abcd72a5359ddbeb2cb108cd4f03))
* tez dev ([d3e8e60](https://github.com/tezjs/tez.js/commit/d3e8e60991ec4bf16df2d0e31580336537b0ddf8))
* undefined payload object ([b6d1a76](https://github.com/tezjs/tez.js/commit/b6d1a76cd79d38cf9d73322d1846e0af68d2e266))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add custom route ([643d7d9](https://github.com/tezjs/tez.js/commit/643d7d98b4a5bf4fd1df058648e746dcfbbbdb98))
* add dynamic page record in the generic collections ([df6a56c](https://github.com/tezjs/tez.js/commit/df6a56ce8099a48d97c439e705b9d84901b38a81))
* add html page and seo tag ([e911e02](https://github.com/tezjs/tez.js/commit/e911e029ad10fa23656866e49966731428eb7174))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add master layout ([2a97b9c](https://github.com/tezjs/tez.js/commit/2a97b9c009099fdd4e12279f568a65493b9dc840))
* add multiple page schema on page ([6a9b3d3](https://github.com/tezjs/tez.js/commit/6a9b3d39a1310a4234a93636cb92dc96336a08c9))
* add new package '@tezjs/js' ([b51de5f](https://github.com/tezjs/tez.js/commit/b51de5fb7532ce692a222257a2b4ff095c1beb4d))
* add pwa ([05c407a](https://github.com/tezjs/tez.js/commit/05c407a9cc964e81b6eb6b7c2da77e3b9400f324))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* add zero configuration for tez app ([c79defe](https://github.com/tezjs/tez.js/commit/c79defef78ab02fc4ee8302260095a41ae043790))
* build through tez cli ([e23245b](https://github.com/tezjs/tez.js/commit/e23245b28d2ef32449f6c7df7fa3cc5b7737866c))
* configure custom page & payload ([da5e6a3](https://github.com/tezjs/tez.js/commit/da5e6a3baaf4dd9fc68b40254652eeb2a8b0ecd2))
* convert image into webp ([2fe8b1a](https://github.com/tezjs/tez.js/commit/2fe8b1adee35cf2304d44ec0546c94576e6abf45))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* custom page payload generator ([4d711f0](https://github.com/tezjs/tez.js/commit/4d711f032ab3373f94fafaaaa07e44bda028634a))
* define tez config conditionally ([168726a](https://github.com/tezjs/tez.js/commit/168726abdc85b2a05f3637f272b5d90b8f0b66c2))
* entity wise pagination configuration ([bacf79c](https://github.com/tezjs/tez.js/commit/bacf79cd590ed1623dd91b7d7855867e7e58a495))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* favicon & preload link configuration ([48fbefb](https://github.com/tezjs/tez.js/commit/48fbefbc4a59056a7f12f8f869b7d0bca44e855c))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* imports at root ts ([78da3da](https://github.com/tezjs/tez.js/commit/78da3da39fa180192a4745ccdc65528d5e3fc001))
* load lazy data ([1fe8e3a](https://github.com/tezjs/tez.js/commit/1fe8e3aff508c56f0989f36bdf53cfb9e4bc366e))
* parse object value ([8ec54cd](https://github.com/tezjs/tez.js/commit/8ec54cdefab3d865512087fad4ea3c7097b9111f))
* redirect-routes added ([6efde53](https://github.com/tezjs/tez.js/commit/6efde539142f11f2bad9410de51eb22c58c0813b))
* run add lib ([26c78c7](https://github.com/tezjs/tez.js/commit/26c78c7a1ad9932b8b87c1241618136922ba0f38))
* set default / custom port ([8d1f293](https://github.com/tezjs/tez.js/commit/8d1f29332fdedc08ed9fdb80d2d15a4536523fcf))
* sitemap, robots and seo added ([115adf0](https://github.com/tezjs/tez.js/commit/115adf0455cf6de38262a5e6fb1cd61f82d407ab))
* sitemap, robots and seo feature added ([6fbd3d2](https://github.com/tezjs/tez.js/commit/6fbd3d2bf159138b5344a3f93e3a7b9408c55f73))
* strapi package features ([f71125a](https://github.com/tezjs/tez.js/commit/f71125a31892a6e2e343fcb8bc5d3553e35b8755))
* **strapi:** add sanitizer component level data ([2326b22](https://github.com/tezjs/tez.js/commit/2326b22e19bf8913230bca63e351ae95fff7cbcc))
* **strapi:** component data wise pagination ([0390097](https://github.com/tezjs/tez.js/commit/0390097f0b0e7d83774dd5d639a5768ecda4db59))
* tez cli initial code added ([1c9ec72](https://github.com/tezjs/tez.js/commit/1c9ec723ea305edd8b31cf5729faf1c719174572))
* typed env variable ([80c291a](https://github.com/tezjs/tez.js/commit/80c291a23d8006d5b4321766f196314c894aefca))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** request image through broadcastchannel ([7e0329f](https://github.com/tezjs/tez.js/commit/7e0329f7fd2a79098c2442a0916eb3a86d278160))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))


### Performance Improvements

* break after routed payload refresh ([2f2711c](https://github.com/tezjs/tez.js/commit/2f2711cccb605a81d1cc42752162770f9300c079))



## 1.0.1 (2021-06-24)



# 1.0.0-beta.3 (2022-09-02)


### Bug Fixes

* **payload:** authenticate api user [#34](https://github.com/tezjs/tez.js/issues/34) ([ffc6e56](https://github.com/tezjs/tez.js/commit/ffc6e56b4ddefeaf41b9bc3e6f6f46194fe90ed6))
* **vite:** infinite loads the page [#29](https://github.com/tezjs/tez.js/issues/29) ([48dd512](https://github.com/tezjs/tez.js/commit/48dd512f1792ea67c59af257d159c63ce1d9e627))
* **vite:** isImageImmutableCacheEnable undefined ([784c4f6](https://github.com/tezjs/tez.js/commit/784c4f68699f36e3b686c773e3384d33b0c0fb0a))
* **vite:** page content not visible during pre-bundle the deps [#48](https://github.com/tezjs/tez.js/issues/48) ([b8547cd](https://github.com/tezjs/tez.js/commit/b8547cde1aa9e797b3edde8496bbb90be11ff0ab))
* **vite:** service worker cache assets [#41](https://github.com/tezjs/tez.js/issues/41) ([515ba34](https://github.com/tezjs/tez.js/commit/515ba342de38eacf94e5abb7f074075c02e85f3d))
* **vite:** tez development environment check for tzjs path [#20](https://github.com/tezjs/tez.js/issues/20) ([207819e](https://github.com/tezjs/tez.js/commit/207819e5e12b4bf3a100d1fe358b40a5243f8026))
* **vue:** HMR reload [#7](https://github.com/tezjs/tez.js/issues/7) ([000516c](https://github.com/tezjs/tez.js/commit/000516c2559fdafe1e79ee72224c138d200c8a6f))
* **vue:** resolve dynamic route content [#50](https://github.com/tezjs/tez.js/issues/50) ([e0ff4ee](https://github.com/tezjs/tez.js/commit/e0ff4eedb93dce0993b4ec8e44376355385b814d))


### Features

* **vite:** add cache first strategy [#22](https://github.com/tezjs/tez.js/issues/22) ([94abfe7](https://github.com/tezjs/tez.js/commit/94abfe7f5d1872143b68bb8c74eef95fb26e0d55))
* **vite:** add link meta tag and pwa compatible html element ([1a252f9](https://github.com/tezjs/tez.js/commit/1a252f9caf43dc189a30c33f6af10ecb0cf08c23))
* **vite:** allow third party domain request cache [#28](https://github.com/tezjs/tez.js/issues/28) ([3efed3a](https://github.com/tezjs/tez.js/commit/3efed3accb04219701c01ab8e92b3fd6a81009df))
* **vite:** auto generate manifest.json file with minimal configuration [#8](https://github.com/tezjs/tez.js/issues/8) ([bf0cb46](https://github.com/tezjs/tez.js/commit/bf0cb46f0249a126d5e12e3e576e1be3841d561f))
* **vite:** immutable cache configuration through service worker [#10](https://github.com/tezjs/tez.js/issues/10) ([a06f12f](https://github.com/tezjs/tez.js/commit/a06f12f0662d88bf351f33045f57aa7c159a4c13))
* **vite:** network first cache strategy for routes [#9](https://github.com/tezjs/tez.js/issues/9) ([339eb01](https://github.com/tezjs/tez.js/commit/339eb014a0e6b81568b8c9a9a186915b04ec8b6d))
* **vite:** only cache same origin request [#25](https://github.com/tezjs/tez.js/issues/25) ([a05682a](https://github.com/tezjs/tez.js/commit/a05682a820f468ea17e4e9a94bb10f41dd67b1a8))
* **vite:** preload service-worker.js file if pwa is configure [#35](https://github.com/tezjs/tez.js/issues/35) ([ff5b8d4](https://github.com/tezjs/tez.js/commit/ff5b8d42e3571fad23f7cd1535fa833bc1bf516f))
* **vite:** route based cache assets after user interaction [#27](https://github.com/tezjs/tez.js/issues/27) ([d76d5c2](https://github.com/tezjs/tez.js/commit/d76d5c212af98b664ebf30fff5b57d63f1de656f))


### Performance Improvements

* **vue:** load pre-cached images [#11](https://github.com/tezjs/tez.js/issues/11) ([2793ec8](https://github.com/tezjs/tez.js/commit/2793ec80df7f4d2d9c6c316226ad478b45ff2904))



# 1.0.0-beta.2 (2022-08-24)


### Bug Fixes

* **vue:** binding components on page route change ([4586133](https://github.com/tezjs/tez.js/commit/458613371152bf1c7bb8076617cdfd06bc8f2d07))



# 1.0.0-beta.1 (2022-08-22)


### Bug Fixes

* **vue:** load post script before component check ([6588d68](https://github.com/tezjs/tez.js/commit/6588d68177e1cb70fdc71a02bd931c162b025cf1))



# 1.0.0-beta.0 (2022-08-22)


### Bug Fixes

* **create-tez:** set 'layouts' folder path in tailwind config ([12cf001](https://github.com/tezjs/tez.js/commit/12cf001f30ba8ba821c5f02635de7949d0e7337a))
* **vue:** load post script early for large viewport ([c43d4f8](https://github.com/tezjs/tez.js/commit/c43d4f847f55556f87910cdf6be8313fbd744bbc))



## 0.0.84 (2022-08-20)


### Bug Fixes

* **cli:** 'tez' cli up issue ([45804c1](https://github.com/tezjs/tez.js/commit/45804c10ce46c3d8566b835ba3d68158d32a1899))
* **vite:** optimize deps loading '@tezjs/vue' ([46cec46](https://github.com/tezjs/tez.js/commit/46cec46320725e093caf6e55d3c7ab264435e317))



## 0.0.83 (2022-08-20)


### Bug Fixes

* **cli:** stackblitz playground ([50df453](https://github.com/tezjs/tez.js/commit/50df453dcff5725a7e8d2b9d6397ee4e99eac690))



## 0.0.82 (2022-08-18)


### Bug Fixes

* **vue:** maintain route state with query string ([58e1c2f](https://github.com/tezjs/tez.js/commit/58e1c2ffd237bd600077b43ad6f4675b9dec34cb))



## 0.0.81 (2022-08-17)


### Bug Fixes

* **vue:** load post script if pre components are loaded ([b074fde](https://github.com/tezjs/tez.js/commit/b074fded4b812713eec2277accb52720a3732e1e))



## 0.0.80 (2022-08-17)


### Features

* **vue:** handle hash url ([d2fb186](https://github.com/tezjs/tez.js/commit/d2fb18607c6e26fd5521875ec299a5355a4617a9))



## 0.0.79 (2022-08-16)


### Bug Fixes

* **vite:** read tez configuration before initializing the app ([848e3fd](https://github.com/tezjs/tez.js/commit/848e3fd7bad6f86fde1a46552d2e135024890c79))
* **vite:** remove 'dev' mode ([1a12421](https://github.com/tezjs/tez.js/commit/1a124219a947768ebbdd5c85e982c03b2f9c99c0))


### Features

* **vite:** generate sw.js configurable ([5f74c9e](https://github.com/tezjs/tez.js/commit/5f74c9ea29ba05b447098a1f6ac2260baeaa39e1))



## 0.0.78 (2022-08-16)


### Bug Fixes

* **vue:** stop multiple times scroll event ([74a354e](https://github.com/tezjs/tez.js/commit/74a354e2f1115f6e5844a8338bac56ecb10c330f))


### Features

* **vite:** export dev function to get the base configuration and run the app in dev mode through vite config ([a8d320a](https://github.com/tezjs/tez.js/commit/a8d320afb04e047c7ce8c957ba2f8206242a008e))


### Performance Improvements

* **vue:** improve component loading sequencing & LCP of the page ([9bd456d](https://github.com/tezjs/tez.js/commit/9bd456d42b29937ea3443f89a3cb11d03742f46c))



## 0.0.77 (2022-08-15)


### Bug Fixes

* **vite:** parse json schema ([daaf00b](https://github.com/tezjs/tez.js/commit/daaf00b5b9219168322f5dc179080bacfd5baa2e))



## 0.0.76 (2022-08-15)


### Bug Fixes

* **vite:** add build version only build mode ([7c22cc5](https://github.com/tezjs/tez.js/commit/7c22cc578f43285c0fcf40e165856b0669fc4425))
* **vite:** bundle page wise css ([177fbf1](https://github.com/tezjs/tez.js/commit/177fbf17ca1475b1b9344ae5b80f2ff052bb9d3d))
* **vite:** conflict vue / @tezjs/vue ([eb358d5](https://github.com/tezjs/tez.js/commit/eb358d5cd3bcf3ab1291494985ec9122f879262e))
* **vite:** return correct js path ([9071731](https://github.com/tezjs/tez.js/commit/9071731ffd6941724e4501356d33634537659ff9))



## 0.0.75 (2022-08-13)


### Bug Fixes

* **vite:** linking json data regex ([1f2bc4e](https://github.com/tezjs/tez.js/commit/1f2bc4e40edeeb0d55d2542360bfaf7856c20efc))



## 0.0.74 (2022-08-12)


### Bug Fixes

* **vite:** all deps must be in lowercase ([7e422f3](https://github.com/tezjs/tez.js/commit/7e422f369b75a83a293c1d698e00549c6f4e7618))
* **vite:** correct reference of CommonPathResolver ([819b42b](https://github.com/tezjs/tez.js/commit/819b42bf0643316c02dbc6ba1143ef33b6bbc6c6))



## 0.0.73 (2022-08-12)


### Bug Fixes

* **docs:** Correct Questions Url ([e5ebd0a](https://github.com/tezjs/tez.js/commit/e5ebd0a040f495b8f41dbdc990e050620a8a3bec))
* **docs:** typo mistake ([154aea9](https://github.com/tezjs/tez.js/commit/154aea920c5e87577b34b44d5e2f2e87a97ddf58))



## 0.0.72 (2022-08-11)



## 0.0.71 (2022-08-10)


### Bug Fixes

* **vite:** remove additional forward slash ([3f0a34e](https://github.com/tezjs/tez.js/commit/3f0a34e51e54962c641f829714a5ccc7e529da84))



## 0.0.70 (2022-08-10)


### Bug Fixes

* **vite:** add build version after release ([0236f51](https://github.com/tezjs/tez.js/commit/0236f51d6c2be3509d01874f576d4a2c88b07912))
* **vite:** gen component file names in lowercase ([12554e6](https://github.com/tezjs/tez.js/commit/12554e6617ee96499758b0a6eddafcf6ebde1a60))
* **vite:** gen component file names in lowercase ([aa13b16](https://github.com/tezjs/tez.js/commit/aa13b16f406157d4e39ca84827dd8c31962e5d01))
* **vite:** include css if js is not direct reference to the respective component ([7b0f03f](https://github.com/tezjs/tez.js/commit/7b0f03f2b1d32aadf5af4faa8f04de63418956ec))



## 0.0.69 (2022-08-09)


### Bug Fixes

* **vite:** preload correct component path ([5d0f20d](https://github.com/tezjs/tez.js/commit/5d0f20dfac40d5dd5d00cd7e065550e8b3a5d33e))


### Features

* **vite:** conditional generate sitemap & robots ([b2c48be](https://github.com/tezjs/tez.js/commit/b2c48be75f300465fdb4374f7f048fa016a40684))



## 0.0.68 (2022-08-09)


### Bug Fixes

* **vite:** remove replacer ([b4ec9b2](https://github.com/tezjs/tez.js/commit/b4ec9b228ad0f84432e16e80547bd36c472bc9e2))


### Features

* **vite:** conditional minification ([1ccb3e3](https://github.com/tezjs/tez.js/commit/1ccb3e330fa3daa8f56fad1bea32293e78fd8094))



## 0.0.67 (2022-08-09)


### Bug Fixes

* **vite:** include non variable reference imports ([23a13ef](https://github.com/tezjs/tez.js/commit/23a13ef1f5fefb340dcec0533566c888554fb3bc))


### Features

* **vue:** add query params in router ([4ade609](https://github.com/tezjs/tez.js/commit/4ade60956352042828ab68286b5d46d36de1df0d))



## 0.0.66 (2022-08-09)



## 0.0.65 (2022-08-08)


### Bug Fixes

* **payload:** set regex for replace the route path with replace method ([6ecf122](https://github.com/tezjs/tez.js/commit/6ecf122e6638a565530fdcc7ce67fc751ead745f))
* **vite:** correct regex  onResolve filter ([3160844](https://github.com/tezjs/tez.js/commit/31608445462fe05f79329067892e4f913e8121bd))



## 0.0.64 (2022-08-08)



## 0.0.63 (2022-08-08)


### Bug Fixes

* **vite:** add '@tezjs/vue' in optimizeDeps ([693cdbf](https://github.com/tezjs/tez.js/commit/693cdbfcc69fd24800143bf37b1d10f414c33112))



## 0.0.62 (2022-08-08)


### Bug Fixes

* **cli:** SPAWN ENOENT ([9567654](https://github.com/tezjs/tez.js/commit/9567654d36693bd10fcf393767bef2c4db3692d0))



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)


### Bug Fixes

* **create-tez:** add missing @tezjs/route package ([1e4d532](https://github.com/tezjs/tez.js/commit/1e4d532c1d886e8f337e4ddf83510ed02ca55e1f))
* **route:** set correct @tezjs/common package version ([6039f6d](https://github.com/tezjs/tez.js/commit/6039f6da56e40cd046b3be414d581af29038d3e5))



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* add modules property for tez module external plugin ([c8528a5](https://github.com/tezjs/tez.js/commit/c8528a57e52960e9847888c4602474a1df7fa911))
* **create-tez:** add tezjs with vue starter template ([1f6a61c](https://github.com/tezjs/tez.js/commit/1f6a61c50cdbeff56e65389c1d7324e71a0fb697))
* **route:** add new package '@tezjs/route' for auto-routes ([f8b8e3e](https://github.com/tezjs/tez.js/commit/f8b8e3e255ee069e7326845a9f08ee45e37591a0))
* **vite:** auto resolve all layout component in final build ([2d818fa](https://github.com/tezjs/tez.js/commit/2d818fa3c5f82ec5c2cd9ed695bd51b92f2ad899))
* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)


### Bug Fixes

* **common:** correct lib path when cust source code path is configured ([d8d888a](https://github.com/tezjs/tez.js/commit/d8d888afe53812fc92a1f522c1f1a303804e4233))
* **payload:** ignore undefined component in payload ([02d6183](https://github.com/tezjs/tez.js/commit/02d618362d1b919d1fd6d1ee43d8cdb037b79ae8))
* **vite:** custom source path undefined ([943703d](https://github.com/tezjs/tez.js/commit/943703d4c3a0728cb0873d45da75d2ac1f7f899c))
* **vite:** resolve addLib ([684107a](https://github.com/tezjs/tez.js/commit/684107a3aa83513a51af8bdc334d56daacba21e2))



## 0.0.57 (2022-08-04)


### Bug Fixes

* **types:** set as nullable 'preFetch' property ([4261964](https://github.com/tezjs/tez.js/commit/42619640072af4f1e62ef2a547140c677254396e))
* **vite:** call bundle css method if bundlecss is true ([c79bc24](https://github.com/tezjs/tez.js/commit/c79bc24cf905f67833394218df0e3c23b19ec81b))
* **vite:** check path value before assigning the reference ([4d53ab3](https://github.com/tezjs/tez.js/commit/4d53ab3b920e12fad9cde645c0dbfb8fddd18704))
* **vite:** persist global html meta configuration ([82edd78](https://github.com/tezjs/tez.js/commit/82edd78359f319e5a540b9aea75bf3c786cea434))
* **vite:** set custom source code path ([84006bc](https://github.com/tezjs/tez.js/commit/84006bce97373596d791299886eef1f8b01df633))


### Features

* **vite:** preload components & respective dependencies page wise ([e385a5c](https://github.com/tezjs/tez.js/commit/e385a5c8c0d914c2ef6c757c3e216ee10a1f5a69))



## 0.0.56 (2022-08-03)


### Bug Fixes

* **vite:** ignore tez.css from page wise css bundling ([2bda791](https://github.com/tezjs/tez.js/commit/2bda7915f1c5a6c78bd0f6ccebed0990b9370488))
* **vite:** remove closing element of link tag ([c29b24e](https://github.com/tezjs/tez.js/commit/c29b24e64085efc137d8f16659612e5b20e14a6f))
* **vite:** resolve mobile component in pre script ([a22c831](https://github.com/tezjs/tez.js/commit/a22c831cc09bef06e0b335c982f663078211e662))


### Features

* **common:** set source folder path ([4785ca5](https://github.com/tezjs/tez.js/commit/4785ca5d27ff315a31132a5fc475fba413937338))
* **vite:** add preconnect link element ([cd78224](https://github.com/tezjs/tez.js/commit/cd7822466675fab2dcbb7a559ee24d4f54362fad))
* **vite:** allow to set dns-prefetch link element ([afc13ca](https://github.com/tezjs/tez.js/commit/afc13cafdadbd67ebfe80f8ed31471b809a0c25a))
* **vite:** allow to set prefetch path ([bdfefe0](https://github.com/tezjs/tez.js/commit/bdfefe0afdfdc9fdf7263fd46c8c43934e5e23cd))
* **vite:** bundle pagewise css ([a26379c](https://github.com/tezjs/tez.js/commit/a26379ccfc1c41d1d7392659733f046bceb96358))
* **vite:** page wise post script prefetch ([0ae4b21](https://github.com/tezjs/tez.js/commit/0ae4b2140bf44aaf3f7af47c4fc1b35e8876bc3b))
* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)


### Bug Fixes

* **vite:** component & layout import path in glob.js ([0a960a8](https://github.com/tezjs/tez.js/commit/0a960a8c0707e8134d9052dd5a838875da146465))
* **vite:** missing package under commonjs execution ([ad6bf38](https://github.com/tezjs/tez.js/commit/ad6bf3839d979b9736ca5936670a17550a4bac92))
* **vite:** replace new line code with blank from linkingData ([f072ed2](https://github.com/tezjs/tez.js/commit/f072ed2a79bbd664ffc6cefc183e616a562449c6))


### Features

* **vite:** customize tez build config with vite build ([3ba9bd0](https://github.com/tezjs/tez.js/commit/3ba9bd0dae5cb1e9cb73cd36c40af090da5025dc))
* **vite:** set as default production build ([1b3e21a](https://github.com/tezjs/tez.js/commit/1b3e21a418fbc3423d40bc90003ca19d8d3675da))



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **payload:** incorrect curly bracket ([c9c3f61](https://github.com/tezjs/tez.js/commit/c9c3f61373a1b6eb7aa7af77bb1550cd4bc25a66))
* **payload:** not to create robots when custom payload generator is configured ([bde0e1d](https://github.com/tezjs/tez.js/commit/bde0e1dd5fd1adc5f79da019e56777c2e7cd4ff9))
* **types:** mark as nullable prop of 'amplify' ([2efec85](https://github.com/tezjs/tez.js/commit/2efec85eb3bb217a018178bc48144b7ea604132a))
* **vite:** import plugins if exists ([740b3b8](https://github.com/tezjs/tez.js/commit/740b3b85f6464ac59a46cc27c7f8ac7eb5a8d875))
* **vite:** obviate number from component name ([c20801f](https://github.com/tezjs/tez.js/commit/c20801fbcfd187a41d57c03dad56449e6aacf09e))
* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))


### Features

* **payload:** pass additional props for custom payload generator ([a5d9217](https://github.com/tezjs/tez.js/commit/a5d921710eda26cdd9a1b7650af4efce64357437))
* **payload:** set routes for custom payload generator ([3eeed41](https://github.com/tezjs/tez.js/commit/3eeed41d47212ca1de4742eb4975520460f0e249))



## 0.0.51 (2022-07-26)


### Bug Fixes

* **payload:** ignore non change frequency & priority set url in sitemap ([ecd1ac0](https://github.com/tezjs/tez.js/commit/ecd1ac002a3a348d261a9878001839da987a1f41))



## 0.0.50 (2022-07-25)


### Bug Fixes

* **vite:** add proper format of linkingdata ([719a00e](https://github.com/tezjs/tez.js/commit/719a00e8d7f7aa52eb825300d231db7799f19fa8))



## 0.0.49 (2022-07-25)


### Features

* **payload:** add custom payload generator ([4013e8a](https://github.com/tezjs/tez.js/commit/4013e8a93d37647cf4ba723ca5c41e20d541c801))



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))
* **vite:** minify pre/post/preload js after build ([b0f2631](https://github.com/tezjs/tez.js/commit/b0f26311dfd41e63d9eaffd4d56c87624dfb03b0))



## 0.0.47 (2022-07-22)


### Bug Fixes

* **create-tez:** properly reference the property name ([c82e89a](https://github.com/tezjs/tez.js/commit/c82e89a44a73b96281871ead07746a2ea0f3f997))



## 0.0.46 (2022-07-22)


### Bug Fixes

* **vite:** obviate additional right slash from preload script url. ([2c5415e](https://github.com/tezjs/tez.js/commit/2c5415e7eb6727b51e0b2789dce79f1e5d2ff3ff))
* **vite:** preload items check before push ([e92933a](https://github.com/tezjs/tez.js/commit/e92933acedd4366df65ee427986ca3fe4b11e875))



## 0.0.45 (2022-07-22)


### Bug Fixes

* **payload:** redirect routes undefined then set blank array ([f3f39fc](https://github.com/tezjs/tez.js/commit/f3f39fc455f86464cda3c4dcfd12f39e3a7c7421))
* **vite:** import component correctly ([6deea03](https://github.com/tezjs/tez.js/commit/6deea03662eac54bffc7bcb06b4193d6a65e15a0))
* **vite:** obviate function while resolve the route ([a74e519](https://github.com/tezjs/tez.js/commit/a74e519b9bbbc41489f6a1c297448c54a81a0bfa))
* **vite:** set actual path instead of object ([4d986fb](https://github.com/tezjs/tez.js/commit/4d986fb234c3f102a34bbaa3ab071b16b3ee353c))
* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Bug Fixes

* **payload:** write firebase redirect routes ([a745423](https://github.com/tezjs/tez.js/commit/a7454230127a1efca8e0435502bb159f85467137))


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))
* **vite:** preload tz.js ([fcb7507](https://github.com/tezjs/tez.js/commit/fcb7507dcbd9ad46da9dce2e086b030844dc89c2))



## 0.0.43 (2022-07-19)


### Bug Fixes

* **payload:** map correct object for parse value ([4414bf6](https://github.com/tezjs/tez.js/commit/4414bf6b1091192a39f32e9dcac46f5e6622fefb))



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)


### Bug Fixes

* **payload:** add siteurl prefix in sitemap ([e848220](https://github.com/tezjs/tez.js/commit/e848220046acefb7a70432683544bf7bc5509f63))



## 0.0.39 (2022-07-15)


### Bug Fixes

* **vite:** write tz.js file on build complete ([b47ddcc](https://github.com/tezjs/tez.js/commit/b47ddcc68c5cd449274ad7bd690069ae1693e64b))



## 0.0.38 (2022-07-15)


### Bug Fixes

* **create-tez:** allow .cache folder permission while running in docker ([cc6226f](https://github.com/tezjs/tez.js/commit/cc6226f53fc209cc1d9b56efb06ee257b3067eb7))
* **vite:** add footer slot in post script ([ca36bad](https://github.com/tezjs/tez.js/commit/ca36bad8e9c6a3455e5237c77d2acb21c8527400))
* **vite:** remove suffix from image url while parsing the text ([581caf7](https://github.com/tezjs/tez.js/commit/581caf7ce3d26587a661c3fe898b51bebd26af48))
* **vite:** script & style property undefined check ([e7120c6](https://github.com/tezjs/tez.js/commit/e7120c6ed60fc8de01d1c269cb4b19cfc37df730))
* **vite:** segregate components conditionally in pre/post script ([a095a11](https://github.com/tezjs/tez.js/commit/a095a11ea5e7c5e625d48641554cbc9cb27ff014))


### Features

* conditional inline css/js reference on the page ([1bc7469](https://github.com/tezjs/tez.js/commit/1bc7469ae0a42837cb2889f989c75b63aa0f7603))
* **create-tez:** connect remote  container from vs code ([9602c2c](https://github.com/tezjs/tez.js/commit/9602c2c9b8eb83316d1461ab4273be7399160f71))
* **payload:** allow svg image to write in local folder ([89c9fb2](https://github.com/tezjs/tez.js/commit/89c9fb2770196e6a9696e28e4161972d12b015da))
* **vite:** preload underneath dependencies page wise ([a696e79](https://github.com/tezjs/tez.js/commit/a696e79d00d1317505958de370c87115a41b1ab7))
* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **common:** correct root (index) folder path ([8ae15d0](https://github.com/tezjs/tez.js/commit/8ae15d033e157eac413377e3e957d882bab281d3))
* **vite:** correct index.html root write path ([587aef5](https://github.com/tezjs/tez.js/commit/587aef58c7216e7a214f44fa706bf78c6b033735))
* **vite:** create html file at root ([1015c14](https://github.com/tezjs/tez.js/commit/1015c140cb5d6b16f15830c840d1c2fc9e955875))
* **vite:** generate index.html at root of the dist ([236ef35](https://github.com/tezjs/tez.js/commit/236ef35391108b83d50c658f11b9d3cb0bded5ee))
* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **js:** export isMobile function ([66f69c3](https://github.com/tezjs/tez.js/commit/66f69c3cf39da9202b804ccc96e017ab1b601354))
* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vite:** create tez.ts if not exists during build ([40db4ec](https://github.com/tezjs/tez.js/commit/40db4ec077cc83f0a055afb2924c5d609cc8a68c))
* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))
* **vue:** content attribute added to viewport meta tag ([2b35309](https://github.com/tezjs/tez.js/commit/2b353098551b99d9d5175f208980821c71c14536))



## 0.0.34 (2022-07-06)


### Bug Fixes

* **payload:** filter nested data ([a1ad7a7](https://github.com/tezjs/tez.js/commit/a1ad7a7f13a943112c8ac14ca64b06ea1454f461))



## 0.0.33 (2022-07-06)


### Bug Fixes

* **create-tez:** undefined message variable ([ca2c0b2](https://github.com/tezjs/tez.js/commit/ca2c0b2873508ea588cea2d2a3f89a31aa1de99e))



## 0.0.32 (2022-07-06)


### Bug Fixes

* **create-tez:** installing dependencies ([da6980a](https://github.com/tezjs/tez.js/commit/da6980aa1ba7473aaeef55ef406f1a2e5ad1573e))



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Bug Fixes

* **vite:** replace numbers from component name ([a8923b2](https://github.com/tezjs/tez.js/commit/a8923b20db8f7970cd6b8ec884c399f4c6ceecb1))


### Features

* **payload:** deep populate strapi data ([9eedc19](https://github.com/tezjs/tez.js/commit/9eedc19b0d85245c92a08d7b97bf743205c952e8))
* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Bug Fixes

* folder path seperator ([0629c06](https://github.com/tezjs/tez.js/commit/0629c06bdccdf9c54fbb51e436ec5702e11d2e5e))


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))
* **vite:** bundle page wise components and payload ([58dffbc](https://github.com/tezjs/tez.js/commit/58dffbccf6f71e0f8aa696675427a485b9ef4a52))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)


### Bug Fixes

* **create-tez:** resolve template directory path ([22c3751](https://github.com/tezjs/tez.js/commit/22c3751841a65b076501edfb8d6b4f035752d0f8))



## 0.0.25 (2022-06-13)


### Bug Fixes

* **payload:** remove back-slash from 'imageFolderPath' folder path ([bb80f77](https://github.com/tezjs/tez.js/commit/bb80f77d16dcd9728c8773a2c1004fcc54b3638b))
* **vite:** put 'await' while reading the tex config ([3d48f37](https://github.com/tezjs/tez.js/commit/3d48f37c91451739332dde43a080e3a0a86e7843))


### Features

* **create-tez:** automagically install scaffold template packages ([74afa89](https://github.com/tezjs/tez.js/commit/74afa8977f34ea9e9ba798f717e4401bf7b7de11))



## 0.0.24 (2022-06-02)


### Bug Fixes

* **payload:** parse query string with correct object ([d774399](https://github.com/tezjs/tez.js/commit/d774399eabe24b8e55272ba1247b8f8443b13030))



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **payload:** null check before transform the value ([aeb72bf](https://github.com/tezjs/tez.js/commit/aeb72bfd49bf8d843833c216f2942deb54cef502))
* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **common:** merge strapi default & user configuration ([ac60db7](https://github.com/tezjs/tez.js/commit/ac60db7263663eb6d9c9fdbc974ca4138ed1f8f3))
* **payload:** refresh reference content on the page ([1f438f0](https://github.com/tezjs/tez.js/commit/1f438f03669f32f2e3f6c599b9e6bb8ff8b9a5d0))
* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)


### Bug Fixes

* **create-tez:** add tsconfig in the project template ([88ec68a](https://github.com/tezjs/tez.js/commit/88ec68a819c6522f2d98c8cc7716a3df975d6625))
* **payload:** handle if masterpage is not set ([7be053c](https://github.com/tezjs/tez.js/commit/7be053c56111cd659cf8582f57ca5bf500d8a5ec))



## 0.0.19 (2022-05-28)


### Bug Fixes

* **create-tez:** ignore dist folder ([e79b290](https://github.com/tezjs/tez.js/commit/e79b290a44b9e57af97c2e70d68b66bbe4a76736))
* **create-tez:** tez strapi template seed data ([47ca764](https://github.com/tezjs/tez.js/commit/47ca7642ae2fd9f02384bd5f50f3140f1295905c))


### Features

* **types:** add prop amplify in deployment config ([b2a69a5](https://github.com/tezjs/tez.js/commit/b2a69a5f7f7ea615a2485cb6904590dac5a759c4))



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* sw template ([dc01931](https://github.com/tezjs/tez.js/commit/dc019313b125c32e8dd154beb2c5abd2241379f0))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))
* auto generate firebase deployment config ([6bceb53](https://github.com/tezjs/tez.js/commit/6bceb538d95a1e13bd53f87f675fe2dfe2d283d0))



## 0.0.16 (2022-05-26)



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* add optimizedeps path ([ddf68d4](https://github.com/tezjs/tez.js/commit/ddf68d46d6faeda6a295fb6ba9c337243d4038d5))
* auto generate tez.ts ([0725939](https://github.com/tezjs/tez.js/commit/072593975992dc81595e709a1986e4612db16ce1))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* change template path of service worker ([a68bf32](https://github.com/tezjs/tez.js/commit/a68bf32400e59b9941ff6e07bd27b7879567da28))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* convert into string instead array of html elements ([b453632](https://github.com/tezjs/tez.js/commit/b453632c36b8cbebd63c4d0e336bd4f8de1e9869))
* correct alias path ([0984d59](https://github.com/tezjs/tez.js/commit/0984d59a158ffe79dcad792e616fbea992ccb9eb))
* generate payload based on rootDir ([688b050](https://github.com/tezjs/tez.js/commit/688b050fd7810aaa3063cf2977ec7faa512e899b))
* generate sitemap and robots file ([bca1779](https://github.com/tezjs/tez.js/commit/bca17791f79d1ce3ad58eb500f741ec930a95175))
* generated html script and payload path ([6f7a14c](https://github.com/tezjs/tez.js/commit/6f7a14c86332af7928fabb34d6379bb70361ebc2))
* ignore broadcastchannel image request from local environment ([b23183a](https://github.com/tezjs/tez.js/commit/b23183ac151312047b5664763cc9767c75d8e47f))
* ignore undefined element in sitemap ([c3466a0](https://github.com/tezjs/tez.js/commit/c3466a023fd3b1005c4443a7a038e246a8be3e6d))
* image creating without configuration ([c2223d7](https://github.com/tezjs/tez.js/commit/c2223d74464327a22029dbcfa0a743a7d26de66a))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* minify index.html ([67dca05](https://github.com/tezjs/tez.js/commit/67dca0532e0e9a2fc6ab2b53bffccb31afa242a5))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* pass blank object if component data is undefined ([b1ed00f](https://github.com/tezjs/tez.js/commit/b1ed00f979f575daf602977e3cfe48383a3c83fc))
* pass blank object if seo object is null ([bed1681](https://github.com/tezjs/tez.js/commit/bed1681e173ab696193185a1a697028bcb9f84b9))
* reading seo payload path ([d6abff2](https://github.com/tezjs/tez.js/commit/d6abff2c24a3f81fb375bd2ceb805de92cbabe84))
* refresh specific route folder ([35a081f](https://github.com/tezjs/tez.js/commit/35a081f2460995cb7f5f662ce58052750f2de39d))
* resolve dynamic express module ([d41bcd0](https://github.com/tezjs/tez.js/commit/d41bcd02a672c185df62b8cb88e42c49544eb4c4))
* resolve import object value ([1fcedca](https://github.com/tezjs/tez.js/commit/1fcedca8083f2f8b36668961a977b4b75a22372d))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* return sitemap xelement ([ba1a4e3](https://github.com/tezjs/tez.js/commit/ba1a4e3b4eb1ec3d6847fb443eeb42eab1752535))
* service worker template code ([5ecd699](https://github.com/tezjs/tez.js/commit/5ecd69985060474a7d0ad7a1ecdad4e3cbf2eae2))
* set correct components folder path ([9c99697](https://github.com/tezjs/tez.js/commit/9c99697b207de11e46291a42a00661e147bc634c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* set correct payload path ([2b529ef](https://github.com/tezjs/tez.js/commit/2b529eff4cb6599e5e8a6ff224631e3d4606ee6a))
* set correct payload path ([3135c6a](https://github.com/tezjs/tez.js/commit/3135c6a36068abcd72a5359ddbeb2cb108cd4f03))
* tez dev ([d3e8e60](https://github.com/tezjs/tez.js/commit/d3e8e60991ec4bf16df2d0e31580336537b0ddf8))
* undefined payload object ([b6d1a76](https://github.com/tezjs/tez.js/commit/b6d1a76cd79d38cf9d73322d1846e0af68d2e266))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add custom route ([643d7d9](https://github.com/tezjs/tez.js/commit/643d7d98b4a5bf4fd1df058648e746dcfbbbdb98))
* add dynamic page record in the generic collections ([df6a56c](https://github.com/tezjs/tez.js/commit/df6a56ce8099a48d97c439e705b9d84901b38a81))
* add html page and seo tag ([e911e02](https://github.com/tezjs/tez.js/commit/e911e029ad10fa23656866e49966731428eb7174))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add master layout ([2a97b9c](https://github.com/tezjs/tez.js/commit/2a97b9c009099fdd4e12279f568a65493b9dc840))
* add multiple page schema on page ([6a9b3d3](https://github.com/tezjs/tez.js/commit/6a9b3d39a1310a4234a93636cb92dc96336a08c9))
* add new package '@tezjs/js' ([b51de5f](https://github.com/tezjs/tez.js/commit/b51de5fb7532ce692a222257a2b4ff095c1beb4d))
* add pwa ([05c407a](https://github.com/tezjs/tez.js/commit/05c407a9cc964e81b6eb6b7c2da77e3b9400f324))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* add zero configuration for tez app ([c79defe](https://github.com/tezjs/tez.js/commit/c79defef78ab02fc4ee8302260095a41ae043790))
* build through tez cli ([e23245b](https://github.com/tezjs/tez.js/commit/e23245b28d2ef32449f6c7df7fa3cc5b7737866c))
* configure custom page & payload ([da5e6a3](https://github.com/tezjs/tez.js/commit/da5e6a3baaf4dd9fc68b40254652eeb2a8b0ecd2))
* convert image into webp ([2fe8b1a](https://github.com/tezjs/tez.js/commit/2fe8b1adee35cf2304d44ec0546c94576e6abf45))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* custom page payload generator ([4d711f0](https://github.com/tezjs/tez.js/commit/4d711f032ab3373f94fafaaaa07e44bda028634a))
* define tez config conditionally ([168726a](https://github.com/tezjs/tez.js/commit/168726abdc85b2a05f3637f272b5d90b8f0b66c2))
* entity wise pagination configuration ([bacf79c](https://github.com/tezjs/tez.js/commit/bacf79cd590ed1623dd91b7d7855867e7e58a495))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* favicon & preload link configuration ([48fbefb](https://github.com/tezjs/tez.js/commit/48fbefbc4a59056a7f12f8f869b7d0bca44e855c))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* imports at root ts ([78da3da](https://github.com/tezjs/tez.js/commit/78da3da39fa180192a4745ccdc65528d5e3fc001))
* load lazy data ([1fe8e3a](https://github.com/tezjs/tez.js/commit/1fe8e3aff508c56f0989f36bdf53cfb9e4bc366e))
* parse object value ([8ec54cd](https://github.com/tezjs/tez.js/commit/8ec54cdefab3d865512087fad4ea3c7097b9111f))
* redirect-routes added ([6efde53](https://github.com/tezjs/tez.js/commit/6efde539142f11f2bad9410de51eb22c58c0813b))
* run add lib ([26c78c7](https://github.com/tezjs/tez.js/commit/26c78c7a1ad9932b8b87c1241618136922ba0f38))
* set default / custom port ([8d1f293](https://github.com/tezjs/tez.js/commit/8d1f29332fdedc08ed9fdb80d2d15a4536523fcf))
* sitemap, robots and seo added ([115adf0](https://github.com/tezjs/tez.js/commit/115adf0455cf6de38262a5e6fb1cd61f82d407ab))
* sitemap, robots and seo feature added ([6fbd3d2](https://github.com/tezjs/tez.js/commit/6fbd3d2bf159138b5344a3f93e3a7b9408c55f73))
* strapi package features ([f71125a](https://github.com/tezjs/tez.js/commit/f71125a31892a6e2e343fcb8bc5d3553e35b8755))
* **strapi:** add sanitizer component level data ([2326b22](https://github.com/tezjs/tez.js/commit/2326b22e19bf8913230bca63e351ae95fff7cbcc))
* **strapi:** component data wise pagination ([0390097](https://github.com/tezjs/tez.js/commit/0390097f0b0e7d83774dd5d639a5768ecda4db59))
* tez cli initial code added ([1c9ec72](https://github.com/tezjs/tez.js/commit/1c9ec723ea305edd8b31cf5729faf1c719174572))
* typed env variable ([80c291a](https://github.com/tezjs/tez.js/commit/80c291a23d8006d5b4321766f196314c894aefca))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** request image through broadcastchannel ([7e0329f](https://github.com/tezjs/tez.js/commit/7e0329f7fd2a79098c2442a0916eb3a86d278160))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))


### Performance Improvements

* break after routed payload refresh ([2f2711c](https://github.com/tezjs/tez.js/commit/2f2711cccb605a81d1cc42752162770f9300c079))



## 1.0.1 (2021-06-24)



# 1.0.0-beta.2 (2022-08-24)


### Bug Fixes

* **vue:** binding components on page route change ([4586133](https://github.com/tezjs/tez.js/commit/458613371152bf1c7bb8076617cdfd06bc8f2d07))



# 1.0.0-beta.1 (2022-08-22)


### Bug Fixes

* **vue:** load post script before component check ([6588d68](https://github.com/tezjs/tez.js/commit/6588d68177e1cb70fdc71a02bd931c162b025cf1))



# 1.0.0-beta.0 (2022-08-22)


### Bug Fixes

* **create-tez:** set 'layouts' folder path in tailwind config ([12cf001](https://github.com/tezjs/tez.js/commit/12cf001f30ba8ba821c5f02635de7949d0e7337a))
* **vue:** load post script early for large viewport ([c43d4f8](https://github.com/tezjs/tez.js/commit/c43d4f847f55556f87910cdf6be8313fbd744bbc))



## 0.0.84 (2022-08-20)


### Bug Fixes

* **cli:** 'tez' cli up issue ([45804c1](https://github.com/tezjs/tez.js/commit/45804c10ce46c3d8566b835ba3d68158d32a1899))
* **vite:** optimize deps loading '@tezjs/vue' ([46cec46](https://github.com/tezjs/tez.js/commit/46cec46320725e093caf6e55d3c7ab264435e317))



## 0.0.83 (2022-08-20)


### Bug Fixes

* **cli:** stackblitz playground ([50df453](https://github.com/tezjs/tez.js/commit/50df453dcff5725a7e8d2b9d6397ee4e99eac690))



## 0.0.82 (2022-08-18)


### Bug Fixes

* **vue:** maintain route state with query string ([58e1c2f](https://github.com/tezjs/tez.js/commit/58e1c2ffd237bd600077b43ad6f4675b9dec34cb))



## 0.0.81 (2022-08-17)


### Bug Fixes

* **vue:** load post script if pre components are loaded ([b074fde](https://github.com/tezjs/tez.js/commit/b074fded4b812713eec2277accb52720a3732e1e))



## 0.0.80 (2022-08-17)


### Features

* **vue:** handle hash url ([d2fb186](https://github.com/tezjs/tez.js/commit/d2fb18607c6e26fd5521875ec299a5355a4617a9))



## 0.0.79 (2022-08-16)


### Bug Fixes

* **vite:** read tez configuration before initializing the app ([848e3fd](https://github.com/tezjs/tez.js/commit/848e3fd7bad6f86fde1a46552d2e135024890c79))
* **vite:** remove 'dev' mode ([1a12421](https://github.com/tezjs/tez.js/commit/1a124219a947768ebbdd5c85e982c03b2f9c99c0))


### Features

* **vite:** generate sw.js configurable ([5f74c9e](https://github.com/tezjs/tez.js/commit/5f74c9ea29ba05b447098a1f6ac2260baeaa39e1))



## 0.0.78 (2022-08-16)


### Bug Fixes

* **vue:** stop multiple times scroll event ([74a354e](https://github.com/tezjs/tez.js/commit/74a354e2f1115f6e5844a8338bac56ecb10c330f))


### Features

* **vite:** export dev function to get the base configuration and run the app in dev mode through vite config ([a8d320a](https://github.com/tezjs/tez.js/commit/a8d320afb04e047c7ce8c957ba2f8206242a008e))


### Performance Improvements

* **vue:** improve component loading sequencing & LCP of the page ([9bd456d](https://github.com/tezjs/tez.js/commit/9bd456d42b29937ea3443f89a3cb11d03742f46c))



## 0.0.77 (2022-08-15)


### Bug Fixes

* **vite:** parse json schema ([daaf00b](https://github.com/tezjs/tez.js/commit/daaf00b5b9219168322f5dc179080bacfd5baa2e))



## 0.0.76 (2022-08-15)


### Bug Fixes

* **vite:** add build version only build mode ([7c22cc5](https://github.com/tezjs/tez.js/commit/7c22cc578f43285c0fcf40e165856b0669fc4425))
* **vite:** bundle page wise css ([177fbf1](https://github.com/tezjs/tez.js/commit/177fbf17ca1475b1b9344ae5b80f2ff052bb9d3d))
* **vite:** conflict vue / @tezjs/vue ([eb358d5](https://github.com/tezjs/tez.js/commit/eb358d5cd3bcf3ab1291494985ec9122f879262e))
* **vite:** return correct js path ([9071731](https://github.com/tezjs/tez.js/commit/9071731ffd6941724e4501356d33634537659ff9))



## 0.0.75 (2022-08-13)


### Bug Fixes

* **vite:** linking json data regex ([1f2bc4e](https://github.com/tezjs/tez.js/commit/1f2bc4e40edeeb0d55d2542360bfaf7856c20efc))



## 0.0.74 (2022-08-12)


### Bug Fixes

* **vite:** all deps must be in lowercase ([7e422f3](https://github.com/tezjs/tez.js/commit/7e422f369b75a83a293c1d698e00549c6f4e7618))
* **vite:** correct reference of CommonPathResolver ([819b42b](https://github.com/tezjs/tez.js/commit/819b42bf0643316c02dbc6ba1143ef33b6bbc6c6))



## 0.0.73 (2022-08-12)


### Bug Fixes

* **docs:** Correct Questions Url ([e5ebd0a](https://github.com/tezjs/tez.js/commit/e5ebd0a040f495b8f41dbdc990e050620a8a3bec))
* **docs:** typo mistake ([154aea9](https://github.com/tezjs/tez.js/commit/154aea920c5e87577b34b44d5e2f2e87a97ddf58))



## 0.0.72 (2022-08-11)



## 0.0.71 (2022-08-10)


### Bug Fixes

* **vite:** remove additional forward slash ([3f0a34e](https://github.com/tezjs/tez.js/commit/3f0a34e51e54962c641f829714a5ccc7e529da84))



## 0.0.70 (2022-08-10)


### Bug Fixes

* **vite:** add build version after release ([0236f51](https://github.com/tezjs/tez.js/commit/0236f51d6c2be3509d01874f576d4a2c88b07912))
* **vite:** gen component file names in lowercase ([12554e6](https://github.com/tezjs/tez.js/commit/12554e6617ee96499758b0a6eddafcf6ebde1a60))
* **vite:** gen component file names in lowercase ([aa13b16](https://github.com/tezjs/tez.js/commit/aa13b16f406157d4e39ca84827dd8c31962e5d01))
* **vite:** include css if js is not direct reference to the respective component ([7b0f03f](https://github.com/tezjs/tez.js/commit/7b0f03f2b1d32aadf5af4faa8f04de63418956ec))



## 0.0.69 (2022-08-09)


### Bug Fixes

* **vite:** preload correct component path ([5d0f20d](https://github.com/tezjs/tez.js/commit/5d0f20dfac40d5dd5d00cd7e065550e8b3a5d33e))


### Features

* **vite:** conditional generate sitemap & robots ([b2c48be](https://github.com/tezjs/tez.js/commit/b2c48be75f300465fdb4374f7f048fa016a40684))



## 0.0.68 (2022-08-09)


### Bug Fixes

* **vite:** remove replacer ([b4ec9b2](https://github.com/tezjs/tez.js/commit/b4ec9b228ad0f84432e16e80547bd36c472bc9e2))


### Features

* **vite:** conditional minification ([1ccb3e3](https://github.com/tezjs/tez.js/commit/1ccb3e330fa3daa8f56fad1bea32293e78fd8094))



## 0.0.67 (2022-08-09)


### Bug Fixes

* **vite:** include non variable reference imports ([23a13ef](https://github.com/tezjs/tez.js/commit/23a13ef1f5fefb340dcec0533566c888554fb3bc))


### Features

* **vue:** add query params in router ([4ade609](https://github.com/tezjs/tez.js/commit/4ade60956352042828ab68286b5d46d36de1df0d))



## 0.0.66 (2022-08-09)



## 0.0.65 (2022-08-08)


### Bug Fixes

* **payload:** set regex for replace the route path with replace method ([6ecf122](https://github.com/tezjs/tez.js/commit/6ecf122e6638a565530fdcc7ce67fc751ead745f))
* **vite:** correct regex  onResolve filter ([3160844](https://github.com/tezjs/tez.js/commit/31608445462fe05f79329067892e4f913e8121bd))



## 0.0.64 (2022-08-08)



## 0.0.63 (2022-08-08)


### Bug Fixes

* **vite:** add '@tezjs/vue' in optimizeDeps ([693cdbf](https://github.com/tezjs/tez.js/commit/693cdbfcc69fd24800143bf37b1d10f414c33112))



## 0.0.62 (2022-08-08)


### Bug Fixes

* **cli:** SPAWN ENOENT ([9567654](https://github.com/tezjs/tez.js/commit/9567654d36693bd10fcf393767bef2c4db3692d0))



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)


### Bug Fixes

* **create-tez:** add missing @tezjs/route package ([1e4d532](https://github.com/tezjs/tez.js/commit/1e4d532c1d886e8f337e4ddf83510ed02ca55e1f))
* **route:** set correct @tezjs/common package version ([6039f6d](https://github.com/tezjs/tez.js/commit/6039f6da56e40cd046b3be414d581af29038d3e5))



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* add modules property for tez module external plugin ([c8528a5](https://github.com/tezjs/tez.js/commit/c8528a57e52960e9847888c4602474a1df7fa911))
* **create-tez:** add tezjs with vue starter template ([1f6a61c](https://github.com/tezjs/tez.js/commit/1f6a61c50cdbeff56e65389c1d7324e71a0fb697))
* **route:** add new package '@tezjs/route' for auto-routes ([f8b8e3e](https://github.com/tezjs/tez.js/commit/f8b8e3e255ee069e7326845a9f08ee45e37591a0))
* **vite:** auto resolve all layout component in final build ([2d818fa](https://github.com/tezjs/tez.js/commit/2d818fa3c5f82ec5c2cd9ed695bd51b92f2ad899))
* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)


### Bug Fixes

* **common:** correct lib path when cust source code path is configured ([d8d888a](https://github.com/tezjs/tez.js/commit/d8d888afe53812fc92a1f522c1f1a303804e4233))
* **payload:** ignore undefined component in payload ([02d6183](https://github.com/tezjs/tez.js/commit/02d618362d1b919d1fd6d1ee43d8cdb037b79ae8))
* **vite:** custom source path undefined ([943703d](https://github.com/tezjs/tez.js/commit/943703d4c3a0728cb0873d45da75d2ac1f7f899c))
* **vite:** resolve addLib ([684107a](https://github.com/tezjs/tez.js/commit/684107a3aa83513a51af8bdc334d56daacba21e2))



## 0.0.57 (2022-08-04)


### Bug Fixes

* **types:** set as nullable 'preFetch' property ([4261964](https://github.com/tezjs/tez.js/commit/42619640072af4f1e62ef2a547140c677254396e))
* **vite:** call bundle css method if bundlecss is true ([c79bc24](https://github.com/tezjs/tez.js/commit/c79bc24cf905f67833394218df0e3c23b19ec81b))
* **vite:** check path value before assigning the reference ([4d53ab3](https://github.com/tezjs/tez.js/commit/4d53ab3b920e12fad9cde645c0dbfb8fddd18704))
* **vite:** persist global html meta configuration ([82edd78](https://github.com/tezjs/tez.js/commit/82edd78359f319e5a540b9aea75bf3c786cea434))
* **vite:** set custom source code path ([84006bc](https://github.com/tezjs/tez.js/commit/84006bce97373596d791299886eef1f8b01df633))


### Features

* **vite:** preload components & respective dependencies page wise ([e385a5c](https://github.com/tezjs/tez.js/commit/e385a5c8c0d914c2ef6c757c3e216ee10a1f5a69))



## 0.0.56 (2022-08-03)


### Bug Fixes

* **vite:** ignore tez.css from page wise css bundling ([2bda791](https://github.com/tezjs/tez.js/commit/2bda7915f1c5a6c78bd0f6ccebed0990b9370488))
* **vite:** remove closing element of link tag ([c29b24e](https://github.com/tezjs/tez.js/commit/c29b24e64085efc137d8f16659612e5b20e14a6f))
* **vite:** resolve mobile component in pre script ([a22c831](https://github.com/tezjs/tez.js/commit/a22c831cc09bef06e0b335c982f663078211e662))


### Features

* **common:** set source folder path ([4785ca5](https://github.com/tezjs/tez.js/commit/4785ca5d27ff315a31132a5fc475fba413937338))
* **vite:** add preconnect link element ([cd78224](https://github.com/tezjs/tez.js/commit/cd7822466675fab2dcbb7a559ee24d4f54362fad))
* **vite:** allow to set dns-prefetch link element ([afc13ca](https://github.com/tezjs/tez.js/commit/afc13cafdadbd67ebfe80f8ed31471b809a0c25a))
* **vite:** allow to set prefetch path ([bdfefe0](https://github.com/tezjs/tez.js/commit/bdfefe0afdfdc9fdf7263fd46c8c43934e5e23cd))
* **vite:** bundle pagewise css ([a26379c](https://github.com/tezjs/tez.js/commit/a26379ccfc1c41d1d7392659733f046bceb96358))
* **vite:** page wise post script prefetch ([0ae4b21](https://github.com/tezjs/tez.js/commit/0ae4b2140bf44aaf3f7af47c4fc1b35e8876bc3b))
* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)


### Bug Fixes

* **vite:** component & layout import path in glob.js ([0a960a8](https://github.com/tezjs/tez.js/commit/0a960a8c0707e8134d9052dd5a838875da146465))
* **vite:** missing package under commonjs execution ([ad6bf38](https://github.com/tezjs/tez.js/commit/ad6bf3839d979b9736ca5936670a17550a4bac92))
* **vite:** replace new line code with blank from linkingData ([f072ed2](https://github.com/tezjs/tez.js/commit/f072ed2a79bbd664ffc6cefc183e616a562449c6))


### Features

* **vite:** customize tez build config with vite build ([3ba9bd0](https://github.com/tezjs/tez.js/commit/3ba9bd0dae5cb1e9cb73cd36c40af090da5025dc))
* **vite:** set as default production build ([1b3e21a](https://github.com/tezjs/tez.js/commit/1b3e21a418fbc3423d40bc90003ca19d8d3675da))



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **payload:** incorrect curly bracket ([c9c3f61](https://github.com/tezjs/tez.js/commit/c9c3f61373a1b6eb7aa7af77bb1550cd4bc25a66))
* **payload:** not to create robots when custom payload generator is configured ([bde0e1d](https://github.com/tezjs/tez.js/commit/bde0e1dd5fd1adc5f79da019e56777c2e7cd4ff9))
* **types:** mark as nullable prop of 'amplify' ([2efec85](https://github.com/tezjs/tez.js/commit/2efec85eb3bb217a018178bc48144b7ea604132a))
* **vite:** import plugins if exists ([740b3b8](https://github.com/tezjs/tez.js/commit/740b3b85f6464ac59a46cc27c7f8ac7eb5a8d875))
* **vite:** obviate number from component name ([c20801f](https://github.com/tezjs/tez.js/commit/c20801fbcfd187a41d57c03dad56449e6aacf09e))
* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))


### Features

* **payload:** pass additional props for custom payload generator ([a5d9217](https://github.com/tezjs/tez.js/commit/a5d921710eda26cdd9a1b7650af4efce64357437))
* **payload:** set routes for custom payload generator ([3eeed41](https://github.com/tezjs/tez.js/commit/3eeed41d47212ca1de4742eb4975520460f0e249))



## 0.0.51 (2022-07-26)


### Bug Fixes

* **payload:** ignore non change frequency & priority set url in sitemap ([ecd1ac0](https://github.com/tezjs/tez.js/commit/ecd1ac002a3a348d261a9878001839da987a1f41))



## 0.0.50 (2022-07-25)


### Bug Fixes

* **vite:** add proper format of linkingdata ([719a00e](https://github.com/tezjs/tez.js/commit/719a00e8d7f7aa52eb825300d231db7799f19fa8))



## 0.0.49 (2022-07-25)


### Features

* **payload:** add custom payload generator ([4013e8a](https://github.com/tezjs/tez.js/commit/4013e8a93d37647cf4ba723ca5c41e20d541c801))



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))
* **vite:** minify pre/post/preload js after build ([b0f2631](https://github.com/tezjs/tez.js/commit/b0f26311dfd41e63d9eaffd4d56c87624dfb03b0))



## 0.0.47 (2022-07-22)


### Bug Fixes

* **create-tez:** properly reference the property name ([c82e89a](https://github.com/tezjs/tez.js/commit/c82e89a44a73b96281871ead07746a2ea0f3f997))



## 0.0.46 (2022-07-22)


### Bug Fixes

* **vite:** obviate additional right slash from preload script url. ([2c5415e](https://github.com/tezjs/tez.js/commit/2c5415e7eb6727b51e0b2789dce79f1e5d2ff3ff))
* **vite:** preload items check before push ([e92933a](https://github.com/tezjs/tez.js/commit/e92933acedd4366df65ee427986ca3fe4b11e875))



## 0.0.45 (2022-07-22)


### Bug Fixes

* **payload:** redirect routes undefined then set blank array ([f3f39fc](https://github.com/tezjs/tez.js/commit/f3f39fc455f86464cda3c4dcfd12f39e3a7c7421))
* **vite:** import component correctly ([6deea03](https://github.com/tezjs/tez.js/commit/6deea03662eac54bffc7bcb06b4193d6a65e15a0))
* **vite:** obviate function while resolve the route ([a74e519](https://github.com/tezjs/tez.js/commit/a74e519b9bbbc41489f6a1c297448c54a81a0bfa))
* **vite:** set actual path instead of object ([4d986fb](https://github.com/tezjs/tez.js/commit/4d986fb234c3f102a34bbaa3ab071b16b3ee353c))
* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Bug Fixes

* **payload:** write firebase redirect routes ([a745423](https://github.com/tezjs/tez.js/commit/a7454230127a1efca8e0435502bb159f85467137))


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))
* **vite:** preload tz.js ([fcb7507](https://github.com/tezjs/tez.js/commit/fcb7507dcbd9ad46da9dce2e086b030844dc89c2))



## 0.0.43 (2022-07-19)


### Bug Fixes

* **payload:** map correct object for parse value ([4414bf6](https://github.com/tezjs/tez.js/commit/4414bf6b1091192a39f32e9dcac46f5e6622fefb))



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)


### Bug Fixes

* **payload:** add siteurl prefix in sitemap ([e848220](https://github.com/tezjs/tez.js/commit/e848220046acefb7a70432683544bf7bc5509f63))



## 0.0.39 (2022-07-15)


### Bug Fixes

* **vite:** write tz.js file on build complete ([b47ddcc](https://github.com/tezjs/tez.js/commit/b47ddcc68c5cd449274ad7bd690069ae1693e64b))



## 0.0.38 (2022-07-15)


### Bug Fixes

* **create-tez:** allow .cache folder permission while running in docker ([cc6226f](https://github.com/tezjs/tez.js/commit/cc6226f53fc209cc1d9b56efb06ee257b3067eb7))
* **vite:** add footer slot in post script ([ca36bad](https://github.com/tezjs/tez.js/commit/ca36bad8e9c6a3455e5237c77d2acb21c8527400))
* **vite:** remove suffix from image url while parsing the text ([581caf7](https://github.com/tezjs/tez.js/commit/581caf7ce3d26587a661c3fe898b51bebd26af48))
* **vite:** script & style property undefined check ([e7120c6](https://github.com/tezjs/tez.js/commit/e7120c6ed60fc8de01d1c269cb4b19cfc37df730))
* **vite:** segregate components conditionally in pre/post script ([a095a11](https://github.com/tezjs/tez.js/commit/a095a11ea5e7c5e625d48641554cbc9cb27ff014))


### Features

* conditional inline css/js reference on the page ([1bc7469](https://github.com/tezjs/tez.js/commit/1bc7469ae0a42837cb2889f989c75b63aa0f7603))
* **create-tez:** connect remote  container from vs code ([9602c2c](https://github.com/tezjs/tez.js/commit/9602c2c9b8eb83316d1461ab4273be7399160f71))
* **payload:** allow svg image to write in local folder ([89c9fb2](https://github.com/tezjs/tez.js/commit/89c9fb2770196e6a9696e28e4161972d12b015da))
* **vite:** preload underneath dependencies page wise ([a696e79](https://github.com/tezjs/tez.js/commit/a696e79d00d1317505958de370c87115a41b1ab7))
* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **common:** correct root (index) folder path ([8ae15d0](https://github.com/tezjs/tez.js/commit/8ae15d033e157eac413377e3e957d882bab281d3))
* **vite:** correct index.html root write path ([587aef5](https://github.com/tezjs/tez.js/commit/587aef58c7216e7a214f44fa706bf78c6b033735))
* **vite:** create html file at root ([1015c14](https://github.com/tezjs/tez.js/commit/1015c140cb5d6b16f15830c840d1c2fc9e955875))
* **vite:** generate index.html at root of the dist ([236ef35](https://github.com/tezjs/tez.js/commit/236ef35391108b83d50c658f11b9d3cb0bded5ee))
* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **js:** export isMobile function ([66f69c3](https://github.com/tezjs/tez.js/commit/66f69c3cf39da9202b804ccc96e017ab1b601354))
* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vite:** create tez.ts if not exists during build ([40db4ec](https://github.com/tezjs/tez.js/commit/40db4ec077cc83f0a055afb2924c5d609cc8a68c))
* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))
* **vue:** content attribute added to viewport meta tag ([2b35309](https://github.com/tezjs/tez.js/commit/2b353098551b99d9d5175f208980821c71c14536))



## 0.0.34 (2022-07-06)


### Bug Fixes

* **payload:** filter nested data ([a1ad7a7](https://github.com/tezjs/tez.js/commit/a1ad7a7f13a943112c8ac14ca64b06ea1454f461))



## 0.0.33 (2022-07-06)


### Bug Fixes

* **create-tez:** undefined message variable ([ca2c0b2](https://github.com/tezjs/tez.js/commit/ca2c0b2873508ea588cea2d2a3f89a31aa1de99e))



## 0.0.32 (2022-07-06)


### Bug Fixes

* **create-tez:** installing dependencies ([da6980a](https://github.com/tezjs/tez.js/commit/da6980aa1ba7473aaeef55ef406f1a2e5ad1573e))



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Bug Fixes

* **vite:** replace numbers from component name ([a8923b2](https://github.com/tezjs/tez.js/commit/a8923b20db8f7970cd6b8ec884c399f4c6ceecb1))


### Features

* **payload:** deep populate strapi data ([9eedc19](https://github.com/tezjs/tez.js/commit/9eedc19b0d85245c92a08d7b97bf743205c952e8))
* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Bug Fixes

* folder path seperator ([0629c06](https://github.com/tezjs/tez.js/commit/0629c06bdccdf9c54fbb51e436ec5702e11d2e5e))


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))
* **vite:** bundle page wise components and payload ([58dffbc](https://github.com/tezjs/tez.js/commit/58dffbccf6f71e0f8aa696675427a485b9ef4a52))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)


### Bug Fixes

* **create-tez:** resolve template directory path ([22c3751](https://github.com/tezjs/tez.js/commit/22c3751841a65b076501edfb8d6b4f035752d0f8))



## 0.0.25 (2022-06-13)


### Bug Fixes

* **payload:** remove back-slash from 'imageFolderPath' folder path ([bb80f77](https://github.com/tezjs/tez.js/commit/bb80f77d16dcd9728c8773a2c1004fcc54b3638b))
* **vite:** put 'await' while reading the tex config ([3d48f37](https://github.com/tezjs/tez.js/commit/3d48f37c91451739332dde43a080e3a0a86e7843))


### Features

* **create-tez:** automagically install scaffold template packages ([74afa89](https://github.com/tezjs/tez.js/commit/74afa8977f34ea9e9ba798f717e4401bf7b7de11))



## 0.0.24 (2022-06-02)


### Bug Fixes

* **payload:** parse query string with correct object ([d774399](https://github.com/tezjs/tez.js/commit/d774399eabe24b8e55272ba1247b8f8443b13030))



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **payload:** null check before transform the value ([aeb72bf](https://github.com/tezjs/tez.js/commit/aeb72bfd49bf8d843833c216f2942deb54cef502))
* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **common:** merge strapi default & user configuration ([ac60db7](https://github.com/tezjs/tez.js/commit/ac60db7263663eb6d9c9fdbc974ca4138ed1f8f3))
* **payload:** refresh reference content on the page ([1f438f0](https://github.com/tezjs/tez.js/commit/1f438f03669f32f2e3f6c599b9e6bb8ff8b9a5d0))
* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)


### Bug Fixes

* **create-tez:** add tsconfig in the project template ([88ec68a](https://github.com/tezjs/tez.js/commit/88ec68a819c6522f2d98c8cc7716a3df975d6625))
* **payload:** handle if masterpage is not set ([7be053c](https://github.com/tezjs/tez.js/commit/7be053c56111cd659cf8582f57ca5bf500d8a5ec))



## 0.0.19 (2022-05-28)


### Bug Fixes

* **create-tez:** ignore dist folder ([e79b290](https://github.com/tezjs/tez.js/commit/e79b290a44b9e57af97c2e70d68b66bbe4a76736))
* **create-tez:** tez strapi template seed data ([47ca764](https://github.com/tezjs/tez.js/commit/47ca7642ae2fd9f02384bd5f50f3140f1295905c))


### Features

* **types:** add prop amplify in deployment config ([b2a69a5](https://github.com/tezjs/tez.js/commit/b2a69a5f7f7ea615a2485cb6904590dac5a759c4))



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* sw template ([dc01931](https://github.com/tezjs/tez.js/commit/dc019313b125c32e8dd154beb2c5abd2241379f0))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))
* auto generate firebase deployment config ([6bceb53](https://github.com/tezjs/tez.js/commit/6bceb538d95a1e13bd53f87f675fe2dfe2d283d0))



## 0.0.16 (2022-05-26)



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* add optimizedeps path ([ddf68d4](https://github.com/tezjs/tez.js/commit/ddf68d46d6faeda6a295fb6ba9c337243d4038d5))
* auto generate tez.ts ([0725939](https://github.com/tezjs/tez.js/commit/072593975992dc81595e709a1986e4612db16ce1))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* change template path of service worker ([a68bf32](https://github.com/tezjs/tez.js/commit/a68bf32400e59b9941ff6e07bd27b7879567da28))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* convert into string instead array of html elements ([b453632](https://github.com/tezjs/tez.js/commit/b453632c36b8cbebd63c4d0e336bd4f8de1e9869))
* correct alias path ([0984d59](https://github.com/tezjs/tez.js/commit/0984d59a158ffe79dcad792e616fbea992ccb9eb))
* generate payload based on rootDir ([688b050](https://github.com/tezjs/tez.js/commit/688b050fd7810aaa3063cf2977ec7faa512e899b))
* generate sitemap and robots file ([bca1779](https://github.com/tezjs/tez.js/commit/bca17791f79d1ce3ad58eb500f741ec930a95175))
* generated html script and payload path ([6f7a14c](https://github.com/tezjs/tez.js/commit/6f7a14c86332af7928fabb34d6379bb70361ebc2))
* ignore broadcastchannel image request from local environment ([b23183a](https://github.com/tezjs/tez.js/commit/b23183ac151312047b5664763cc9767c75d8e47f))
* ignore undefined element in sitemap ([c3466a0](https://github.com/tezjs/tez.js/commit/c3466a023fd3b1005c4443a7a038e246a8be3e6d))
* image creating without configuration ([c2223d7](https://github.com/tezjs/tez.js/commit/c2223d74464327a22029dbcfa0a743a7d26de66a))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* minify index.html ([67dca05](https://github.com/tezjs/tez.js/commit/67dca0532e0e9a2fc6ab2b53bffccb31afa242a5))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* pass blank object if component data is undefined ([b1ed00f](https://github.com/tezjs/tez.js/commit/b1ed00f979f575daf602977e3cfe48383a3c83fc))
* pass blank object if seo object is null ([bed1681](https://github.com/tezjs/tez.js/commit/bed1681e173ab696193185a1a697028bcb9f84b9))
* reading seo payload path ([d6abff2](https://github.com/tezjs/tez.js/commit/d6abff2c24a3f81fb375bd2ceb805de92cbabe84))
* refresh specific route folder ([35a081f](https://github.com/tezjs/tez.js/commit/35a081f2460995cb7f5f662ce58052750f2de39d))
* resolve dynamic express module ([d41bcd0](https://github.com/tezjs/tez.js/commit/d41bcd02a672c185df62b8cb88e42c49544eb4c4))
* resolve import object value ([1fcedca](https://github.com/tezjs/tez.js/commit/1fcedca8083f2f8b36668961a977b4b75a22372d))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* return sitemap xelement ([ba1a4e3](https://github.com/tezjs/tez.js/commit/ba1a4e3b4eb1ec3d6847fb443eeb42eab1752535))
* service worker template code ([5ecd699](https://github.com/tezjs/tez.js/commit/5ecd69985060474a7d0ad7a1ecdad4e3cbf2eae2))
* set correct components folder path ([9c99697](https://github.com/tezjs/tez.js/commit/9c99697b207de11e46291a42a00661e147bc634c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* set correct payload path ([2b529ef](https://github.com/tezjs/tez.js/commit/2b529eff4cb6599e5e8a6ff224631e3d4606ee6a))
* set correct payload path ([3135c6a](https://github.com/tezjs/tez.js/commit/3135c6a36068abcd72a5359ddbeb2cb108cd4f03))
* tez dev ([d3e8e60](https://github.com/tezjs/tez.js/commit/d3e8e60991ec4bf16df2d0e31580336537b0ddf8))
* undefined payload object ([b6d1a76](https://github.com/tezjs/tez.js/commit/b6d1a76cd79d38cf9d73322d1846e0af68d2e266))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add custom route ([643d7d9](https://github.com/tezjs/tez.js/commit/643d7d98b4a5bf4fd1df058648e746dcfbbbdb98))
* add dynamic page record in the generic collections ([df6a56c](https://github.com/tezjs/tez.js/commit/df6a56ce8099a48d97c439e705b9d84901b38a81))
* add html page and seo tag ([e911e02](https://github.com/tezjs/tez.js/commit/e911e029ad10fa23656866e49966731428eb7174))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add master layout ([2a97b9c](https://github.com/tezjs/tez.js/commit/2a97b9c009099fdd4e12279f568a65493b9dc840))
* add multiple page schema on page ([6a9b3d3](https://github.com/tezjs/tez.js/commit/6a9b3d39a1310a4234a93636cb92dc96336a08c9))
* add new package '@tezjs/js' ([b51de5f](https://github.com/tezjs/tez.js/commit/b51de5fb7532ce692a222257a2b4ff095c1beb4d))
* add pwa ([05c407a](https://github.com/tezjs/tez.js/commit/05c407a9cc964e81b6eb6b7c2da77e3b9400f324))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* add zero configuration for tez app ([c79defe](https://github.com/tezjs/tez.js/commit/c79defef78ab02fc4ee8302260095a41ae043790))
* build through tez cli ([e23245b](https://github.com/tezjs/tez.js/commit/e23245b28d2ef32449f6c7df7fa3cc5b7737866c))
* configure custom page & payload ([da5e6a3](https://github.com/tezjs/tez.js/commit/da5e6a3baaf4dd9fc68b40254652eeb2a8b0ecd2))
* convert image into webp ([2fe8b1a](https://github.com/tezjs/tez.js/commit/2fe8b1adee35cf2304d44ec0546c94576e6abf45))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* custom page payload generator ([4d711f0](https://github.com/tezjs/tez.js/commit/4d711f032ab3373f94fafaaaa07e44bda028634a))
* define tez config conditionally ([168726a](https://github.com/tezjs/tez.js/commit/168726abdc85b2a05f3637f272b5d90b8f0b66c2))
* entity wise pagination configuration ([bacf79c](https://github.com/tezjs/tez.js/commit/bacf79cd590ed1623dd91b7d7855867e7e58a495))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* favicon & preload link configuration ([48fbefb](https://github.com/tezjs/tez.js/commit/48fbefbc4a59056a7f12f8f869b7d0bca44e855c))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* imports at root ts ([78da3da](https://github.com/tezjs/tez.js/commit/78da3da39fa180192a4745ccdc65528d5e3fc001))
* load lazy data ([1fe8e3a](https://github.com/tezjs/tez.js/commit/1fe8e3aff508c56f0989f36bdf53cfb9e4bc366e))
* parse object value ([8ec54cd](https://github.com/tezjs/tez.js/commit/8ec54cdefab3d865512087fad4ea3c7097b9111f))
* redirect-routes added ([6efde53](https://github.com/tezjs/tez.js/commit/6efde539142f11f2bad9410de51eb22c58c0813b))
* run add lib ([26c78c7](https://github.com/tezjs/tez.js/commit/26c78c7a1ad9932b8b87c1241618136922ba0f38))
* set default / custom port ([8d1f293](https://github.com/tezjs/tez.js/commit/8d1f29332fdedc08ed9fdb80d2d15a4536523fcf))
* sitemap, robots and seo added ([115adf0](https://github.com/tezjs/tez.js/commit/115adf0455cf6de38262a5e6fb1cd61f82d407ab))
* sitemap, robots and seo feature added ([6fbd3d2](https://github.com/tezjs/tez.js/commit/6fbd3d2bf159138b5344a3f93e3a7b9408c55f73))
* strapi package features ([f71125a](https://github.com/tezjs/tez.js/commit/f71125a31892a6e2e343fcb8bc5d3553e35b8755))
* **strapi:** add sanitizer component level data ([2326b22](https://github.com/tezjs/tez.js/commit/2326b22e19bf8913230bca63e351ae95fff7cbcc))
* **strapi:** component data wise pagination ([0390097](https://github.com/tezjs/tez.js/commit/0390097f0b0e7d83774dd5d639a5768ecda4db59))
* tez cli initial code added ([1c9ec72](https://github.com/tezjs/tez.js/commit/1c9ec723ea305edd8b31cf5729faf1c719174572))
* typed env variable ([80c291a](https://github.com/tezjs/tez.js/commit/80c291a23d8006d5b4321766f196314c894aefca))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** request image through broadcastchannel ([7e0329f](https://github.com/tezjs/tez.js/commit/7e0329f7fd2a79098c2442a0916eb3a86d278160))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))


### Performance Improvements

* break after routed payload refresh ([2f2711c](https://github.com/tezjs/tez.js/commit/2f2711cccb605a81d1cc42752162770f9300c079))



## 1.0.1 (2021-06-24)



# 1.0.0-beta.1 (2022-08-22)


### Bug Fixes

* **vue:** load post script before component check ([6588d68](https://github.com/tezjs/tez.js/commit/6588d68177e1cb70fdc71a02bd931c162b025cf1))



# 1.0.0-beta.0 (2022-08-22)


### Bug Fixes

* **create-tez:** set 'layouts' folder path in tailwind config ([12cf001](https://github.com/tezjs/tez.js/commit/12cf001f30ba8ba821c5f02635de7949d0e7337a))
* **vue:** load post script early for large viewport ([c43d4f8](https://github.com/tezjs/tez.js/commit/c43d4f847f55556f87910cdf6be8313fbd744bbc))



## 0.0.84 (2022-08-20)


### Bug Fixes

* **cli:** 'tez' cli up issue ([45804c1](https://github.com/tezjs/tez.js/commit/45804c10ce46c3d8566b835ba3d68158d32a1899))
* **vite:** optimize deps loading '@tezjs/vue' ([46cec46](https://github.com/tezjs/tez.js/commit/46cec46320725e093caf6e55d3c7ab264435e317))



## 0.0.83 (2022-08-20)


### Bug Fixes

* **cli:** stackblitz playground ([50df453](https://github.com/tezjs/tez.js/commit/50df453dcff5725a7e8d2b9d6397ee4e99eac690))



## 0.0.82 (2022-08-18)


### Bug Fixes

* **vue:** maintain route state with query string ([58e1c2f](https://github.com/tezjs/tez.js/commit/58e1c2ffd237bd600077b43ad6f4675b9dec34cb))



## 0.0.81 (2022-08-17)


### Bug Fixes

* **vue:** load post script if pre components are loaded ([b074fde](https://github.com/tezjs/tez.js/commit/b074fded4b812713eec2277accb52720a3732e1e))



## 0.0.80 (2022-08-17)


### Features

* **vue:** handle hash url ([d2fb186](https://github.com/tezjs/tez.js/commit/d2fb18607c6e26fd5521875ec299a5355a4617a9))



## 0.0.79 (2022-08-16)


### Bug Fixes

* **vite:** read tez configuration before initializing the app ([848e3fd](https://github.com/tezjs/tez.js/commit/848e3fd7bad6f86fde1a46552d2e135024890c79))
* **vite:** remove 'dev' mode ([1a12421](https://github.com/tezjs/tez.js/commit/1a124219a947768ebbdd5c85e982c03b2f9c99c0))


### Features

* **vite:** generate sw.js configurable ([5f74c9e](https://github.com/tezjs/tez.js/commit/5f74c9ea29ba05b447098a1f6ac2260baeaa39e1))



## 0.0.78 (2022-08-16)


### Bug Fixes

* **vue:** stop multiple times scroll event ([74a354e](https://github.com/tezjs/tez.js/commit/74a354e2f1115f6e5844a8338bac56ecb10c330f))


### Features

* **vite:** export dev function to get the base configuration and run the app in dev mode through vite config ([a8d320a](https://github.com/tezjs/tez.js/commit/a8d320afb04e047c7ce8c957ba2f8206242a008e))


### Performance Improvements

* **vue:** improve component loading sequencing & LCP of the page ([9bd456d](https://github.com/tezjs/tez.js/commit/9bd456d42b29937ea3443f89a3cb11d03742f46c))



## 0.0.77 (2022-08-15)


### Bug Fixes

* **vite:** parse json schema ([daaf00b](https://github.com/tezjs/tez.js/commit/daaf00b5b9219168322f5dc179080bacfd5baa2e))



## 0.0.76 (2022-08-15)


### Bug Fixes

* **vite:** add build version only build mode ([7c22cc5](https://github.com/tezjs/tez.js/commit/7c22cc578f43285c0fcf40e165856b0669fc4425))
* **vite:** bundle page wise css ([177fbf1](https://github.com/tezjs/tez.js/commit/177fbf17ca1475b1b9344ae5b80f2ff052bb9d3d))
* **vite:** conflict vue / @tezjs/vue ([eb358d5](https://github.com/tezjs/tez.js/commit/eb358d5cd3bcf3ab1291494985ec9122f879262e))
* **vite:** return correct js path ([9071731](https://github.com/tezjs/tez.js/commit/9071731ffd6941724e4501356d33634537659ff9))



## 0.0.75 (2022-08-13)


### Bug Fixes

* **vite:** linking json data regex ([1f2bc4e](https://github.com/tezjs/tez.js/commit/1f2bc4e40edeeb0d55d2542360bfaf7856c20efc))



## 0.0.74 (2022-08-12)


### Bug Fixes

* **vite:** all deps must be in lowercase ([7e422f3](https://github.com/tezjs/tez.js/commit/7e422f369b75a83a293c1d698e00549c6f4e7618))
* **vite:** correct reference of CommonPathResolver ([819b42b](https://github.com/tezjs/tez.js/commit/819b42bf0643316c02dbc6ba1143ef33b6bbc6c6))



## 0.0.73 (2022-08-12)


### Bug Fixes

* **docs:** Correct Questions Url ([e5ebd0a](https://github.com/tezjs/tez.js/commit/e5ebd0a040f495b8f41dbdc990e050620a8a3bec))
* **docs:** typo mistake ([154aea9](https://github.com/tezjs/tez.js/commit/154aea920c5e87577b34b44d5e2f2e87a97ddf58))



## 0.0.72 (2022-08-11)



## 0.0.71 (2022-08-10)


### Bug Fixes

* **vite:** remove additional forward slash ([3f0a34e](https://github.com/tezjs/tez.js/commit/3f0a34e51e54962c641f829714a5ccc7e529da84))



## 0.0.70 (2022-08-10)


### Bug Fixes

* **vite:** add build version after release ([0236f51](https://github.com/tezjs/tez.js/commit/0236f51d6c2be3509d01874f576d4a2c88b07912))
* **vite:** gen component file names in lowercase ([12554e6](https://github.com/tezjs/tez.js/commit/12554e6617ee96499758b0a6eddafcf6ebde1a60))
* **vite:** gen component file names in lowercase ([aa13b16](https://github.com/tezjs/tez.js/commit/aa13b16f406157d4e39ca84827dd8c31962e5d01))
* **vite:** include css if js is not direct reference to the respective component ([7b0f03f](https://github.com/tezjs/tez.js/commit/7b0f03f2b1d32aadf5af4faa8f04de63418956ec))



## 0.0.69 (2022-08-09)


### Bug Fixes

* **vite:** preload correct component path ([5d0f20d](https://github.com/tezjs/tez.js/commit/5d0f20dfac40d5dd5d00cd7e065550e8b3a5d33e))


### Features

* **vite:** conditional generate sitemap & robots ([b2c48be](https://github.com/tezjs/tez.js/commit/b2c48be75f300465fdb4374f7f048fa016a40684))



## 0.0.68 (2022-08-09)


### Bug Fixes

* **vite:** remove replacer ([b4ec9b2](https://github.com/tezjs/tez.js/commit/b4ec9b228ad0f84432e16e80547bd36c472bc9e2))


### Features

* **vite:** conditional minification ([1ccb3e3](https://github.com/tezjs/tez.js/commit/1ccb3e330fa3daa8f56fad1bea32293e78fd8094))



## 0.0.67 (2022-08-09)


### Bug Fixes

* **vite:** include non variable reference imports ([23a13ef](https://github.com/tezjs/tez.js/commit/23a13ef1f5fefb340dcec0533566c888554fb3bc))


### Features

* **vue:** add query params in router ([4ade609](https://github.com/tezjs/tez.js/commit/4ade60956352042828ab68286b5d46d36de1df0d))



## 0.0.66 (2022-08-09)



## 0.0.65 (2022-08-08)


### Bug Fixes

* **payload:** set regex for replace the route path with replace method ([6ecf122](https://github.com/tezjs/tez.js/commit/6ecf122e6638a565530fdcc7ce67fc751ead745f))
* **vite:** correct regex  onResolve filter ([3160844](https://github.com/tezjs/tez.js/commit/31608445462fe05f79329067892e4f913e8121bd))



## 0.0.64 (2022-08-08)



## 0.0.63 (2022-08-08)


### Bug Fixes

* **vite:** add '@tezjs/vue' in optimizeDeps ([693cdbf](https://github.com/tezjs/tez.js/commit/693cdbfcc69fd24800143bf37b1d10f414c33112))



## 0.0.62 (2022-08-08)


### Bug Fixes

* **cli:** SPAWN ENOENT ([9567654](https://github.com/tezjs/tez.js/commit/9567654d36693bd10fcf393767bef2c4db3692d0))



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)


### Bug Fixes

* **create-tez:** add missing @tezjs/route package ([1e4d532](https://github.com/tezjs/tez.js/commit/1e4d532c1d886e8f337e4ddf83510ed02ca55e1f))
* **route:** set correct @tezjs/common package version ([6039f6d](https://github.com/tezjs/tez.js/commit/6039f6da56e40cd046b3be414d581af29038d3e5))



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* add modules property for tez module external plugin ([c8528a5](https://github.com/tezjs/tez.js/commit/c8528a57e52960e9847888c4602474a1df7fa911))
* **create-tez:** add tezjs with vue starter template ([1f6a61c](https://github.com/tezjs/tez.js/commit/1f6a61c50cdbeff56e65389c1d7324e71a0fb697))
* **route:** add new package '@tezjs/route' for auto-routes ([f8b8e3e](https://github.com/tezjs/tez.js/commit/f8b8e3e255ee069e7326845a9f08ee45e37591a0))
* **vite:** auto resolve all layout component in final build ([2d818fa](https://github.com/tezjs/tez.js/commit/2d818fa3c5f82ec5c2cd9ed695bd51b92f2ad899))
* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)


### Bug Fixes

* **common:** correct lib path when cust source code path is configured ([d8d888a](https://github.com/tezjs/tez.js/commit/d8d888afe53812fc92a1f522c1f1a303804e4233))
* **payload:** ignore undefined component in payload ([02d6183](https://github.com/tezjs/tez.js/commit/02d618362d1b919d1fd6d1ee43d8cdb037b79ae8))
* **vite:** custom source path undefined ([943703d](https://github.com/tezjs/tez.js/commit/943703d4c3a0728cb0873d45da75d2ac1f7f899c))
* **vite:** resolve addLib ([684107a](https://github.com/tezjs/tez.js/commit/684107a3aa83513a51af8bdc334d56daacba21e2))



## 0.0.57 (2022-08-04)


### Bug Fixes

* **types:** set as nullable 'preFetch' property ([4261964](https://github.com/tezjs/tez.js/commit/42619640072af4f1e62ef2a547140c677254396e))
* **vite:** call bundle css method if bundlecss is true ([c79bc24](https://github.com/tezjs/tez.js/commit/c79bc24cf905f67833394218df0e3c23b19ec81b))
* **vite:** check path value before assigning the reference ([4d53ab3](https://github.com/tezjs/tez.js/commit/4d53ab3b920e12fad9cde645c0dbfb8fddd18704))
* **vite:** persist global html meta configuration ([82edd78](https://github.com/tezjs/tez.js/commit/82edd78359f319e5a540b9aea75bf3c786cea434))
* **vite:** set custom source code path ([84006bc](https://github.com/tezjs/tez.js/commit/84006bce97373596d791299886eef1f8b01df633))


### Features

* **vite:** preload components & respective dependencies page wise ([e385a5c](https://github.com/tezjs/tez.js/commit/e385a5c8c0d914c2ef6c757c3e216ee10a1f5a69))



## 0.0.56 (2022-08-03)


### Bug Fixes

* **vite:** ignore tez.css from page wise css bundling ([2bda791](https://github.com/tezjs/tez.js/commit/2bda7915f1c5a6c78bd0f6ccebed0990b9370488))
* **vite:** remove closing element of link tag ([c29b24e](https://github.com/tezjs/tez.js/commit/c29b24e64085efc137d8f16659612e5b20e14a6f))
* **vite:** resolve mobile component in pre script ([a22c831](https://github.com/tezjs/tez.js/commit/a22c831cc09bef06e0b335c982f663078211e662))


### Features

* **common:** set source folder path ([4785ca5](https://github.com/tezjs/tez.js/commit/4785ca5d27ff315a31132a5fc475fba413937338))
* **vite:** add preconnect link element ([cd78224](https://github.com/tezjs/tez.js/commit/cd7822466675fab2dcbb7a559ee24d4f54362fad))
* **vite:** allow to set dns-prefetch link element ([afc13ca](https://github.com/tezjs/tez.js/commit/afc13cafdadbd67ebfe80f8ed31471b809a0c25a))
* **vite:** allow to set prefetch path ([bdfefe0](https://github.com/tezjs/tez.js/commit/bdfefe0afdfdc9fdf7263fd46c8c43934e5e23cd))
* **vite:** bundle pagewise css ([a26379c](https://github.com/tezjs/tez.js/commit/a26379ccfc1c41d1d7392659733f046bceb96358))
* **vite:** page wise post script prefetch ([0ae4b21](https://github.com/tezjs/tez.js/commit/0ae4b2140bf44aaf3f7af47c4fc1b35e8876bc3b))
* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)


### Bug Fixes

* **vite:** component & layout import path in glob.js ([0a960a8](https://github.com/tezjs/tez.js/commit/0a960a8c0707e8134d9052dd5a838875da146465))
* **vite:** missing package under commonjs execution ([ad6bf38](https://github.com/tezjs/tez.js/commit/ad6bf3839d979b9736ca5936670a17550a4bac92))
* **vite:** replace new line code with blank from linkingData ([f072ed2](https://github.com/tezjs/tez.js/commit/f072ed2a79bbd664ffc6cefc183e616a562449c6))


### Features

* **vite:** customize tez build config with vite build ([3ba9bd0](https://github.com/tezjs/tez.js/commit/3ba9bd0dae5cb1e9cb73cd36c40af090da5025dc))
* **vite:** set as default production build ([1b3e21a](https://github.com/tezjs/tez.js/commit/1b3e21a418fbc3423d40bc90003ca19d8d3675da))



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **payload:** incorrect curly bracket ([c9c3f61](https://github.com/tezjs/tez.js/commit/c9c3f61373a1b6eb7aa7af77bb1550cd4bc25a66))
* **payload:** not to create robots when custom payload generator is configured ([bde0e1d](https://github.com/tezjs/tez.js/commit/bde0e1dd5fd1adc5f79da019e56777c2e7cd4ff9))
* **types:** mark as nullable prop of 'amplify' ([2efec85](https://github.com/tezjs/tez.js/commit/2efec85eb3bb217a018178bc48144b7ea604132a))
* **vite:** import plugins if exists ([740b3b8](https://github.com/tezjs/tez.js/commit/740b3b85f6464ac59a46cc27c7f8ac7eb5a8d875))
* **vite:** obviate number from component name ([c20801f](https://github.com/tezjs/tez.js/commit/c20801fbcfd187a41d57c03dad56449e6aacf09e))
* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))


### Features

* **payload:** pass additional props for custom payload generator ([a5d9217](https://github.com/tezjs/tez.js/commit/a5d921710eda26cdd9a1b7650af4efce64357437))
* **payload:** set routes for custom payload generator ([3eeed41](https://github.com/tezjs/tez.js/commit/3eeed41d47212ca1de4742eb4975520460f0e249))



## 0.0.51 (2022-07-26)


### Bug Fixes

* **payload:** ignore non change frequency & priority set url in sitemap ([ecd1ac0](https://github.com/tezjs/tez.js/commit/ecd1ac002a3a348d261a9878001839da987a1f41))



## 0.0.50 (2022-07-25)


### Bug Fixes

* **vite:** add proper format of linkingdata ([719a00e](https://github.com/tezjs/tez.js/commit/719a00e8d7f7aa52eb825300d231db7799f19fa8))



## 0.0.49 (2022-07-25)


### Features

* **payload:** add custom payload generator ([4013e8a](https://github.com/tezjs/tez.js/commit/4013e8a93d37647cf4ba723ca5c41e20d541c801))



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))
* **vite:** minify pre/post/preload js after build ([b0f2631](https://github.com/tezjs/tez.js/commit/b0f26311dfd41e63d9eaffd4d56c87624dfb03b0))



## 0.0.47 (2022-07-22)


### Bug Fixes

* **create-tez:** properly reference the property name ([c82e89a](https://github.com/tezjs/tez.js/commit/c82e89a44a73b96281871ead07746a2ea0f3f997))



## 0.0.46 (2022-07-22)


### Bug Fixes

* **vite:** obviate additional right slash from preload script url. ([2c5415e](https://github.com/tezjs/tez.js/commit/2c5415e7eb6727b51e0b2789dce79f1e5d2ff3ff))
* **vite:** preload items check before push ([e92933a](https://github.com/tezjs/tez.js/commit/e92933acedd4366df65ee427986ca3fe4b11e875))



## 0.0.45 (2022-07-22)


### Bug Fixes

* **payload:** redirect routes undefined then set blank array ([f3f39fc](https://github.com/tezjs/tez.js/commit/f3f39fc455f86464cda3c4dcfd12f39e3a7c7421))
* **vite:** import component correctly ([6deea03](https://github.com/tezjs/tez.js/commit/6deea03662eac54bffc7bcb06b4193d6a65e15a0))
* **vite:** obviate function while resolve the route ([a74e519](https://github.com/tezjs/tez.js/commit/a74e519b9bbbc41489f6a1c297448c54a81a0bfa))
* **vite:** set actual path instead of object ([4d986fb](https://github.com/tezjs/tez.js/commit/4d986fb234c3f102a34bbaa3ab071b16b3ee353c))
* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Bug Fixes

* **payload:** write firebase redirect routes ([a745423](https://github.com/tezjs/tez.js/commit/a7454230127a1efca8e0435502bb159f85467137))


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))
* **vite:** preload tz.js ([fcb7507](https://github.com/tezjs/tez.js/commit/fcb7507dcbd9ad46da9dce2e086b030844dc89c2))



## 0.0.43 (2022-07-19)


### Bug Fixes

* **payload:** map correct object for parse value ([4414bf6](https://github.com/tezjs/tez.js/commit/4414bf6b1091192a39f32e9dcac46f5e6622fefb))



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)


### Bug Fixes

* **payload:** add siteurl prefix in sitemap ([e848220](https://github.com/tezjs/tez.js/commit/e848220046acefb7a70432683544bf7bc5509f63))



## 0.0.39 (2022-07-15)


### Bug Fixes

* **vite:** write tz.js file on build complete ([b47ddcc](https://github.com/tezjs/tez.js/commit/b47ddcc68c5cd449274ad7bd690069ae1693e64b))



## 0.0.38 (2022-07-15)


### Bug Fixes

* **create-tez:** allow .cache folder permission while running in docker ([cc6226f](https://github.com/tezjs/tez.js/commit/cc6226f53fc209cc1d9b56efb06ee257b3067eb7))
* **vite:** add footer slot in post script ([ca36bad](https://github.com/tezjs/tez.js/commit/ca36bad8e9c6a3455e5237c77d2acb21c8527400))
* **vite:** remove suffix from image url while parsing the text ([581caf7](https://github.com/tezjs/tez.js/commit/581caf7ce3d26587a661c3fe898b51bebd26af48))
* **vite:** script & style property undefined check ([e7120c6](https://github.com/tezjs/tez.js/commit/e7120c6ed60fc8de01d1c269cb4b19cfc37df730))
* **vite:** segregate components conditionally in pre/post script ([a095a11](https://github.com/tezjs/tez.js/commit/a095a11ea5e7c5e625d48641554cbc9cb27ff014))


### Features

* conditional inline css/js reference on the page ([1bc7469](https://github.com/tezjs/tez.js/commit/1bc7469ae0a42837cb2889f989c75b63aa0f7603))
* **create-tez:** connect remote  container from vs code ([9602c2c](https://github.com/tezjs/tez.js/commit/9602c2c9b8eb83316d1461ab4273be7399160f71))
* **payload:** allow svg image to write in local folder ([89c9fb2](https://github.com/tezjs/tez.js/commit/89c9fb2770196e6a9696e28e4161972d12b015da))
* **vite:** preload underneath dependencies page wise ([a696e79](https://github.com/tezjs/tez.js/commit/a696e79d00d1317505958de370c87115a41b1ab7))
* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **common:** correct root (index) folder path ([8ae15d0](https://github.com/tezjs/tez.js/commit/8ae15d033e157eac413377e3e957d882bab281d3))
* **vite:** correct index.html root write path ([587aef5](https://github.com/tezjs/tez.js/commit/587aef58c7216e7a214f44fa706bf78c6b033735))
* **vite:** create html file at root ([1015c14](https://github.com/tezjs/tez.js/commit/1015c140cb5d6b16f15830c840d1c2fc9e955875))
* **vite:** generate index.html at root of the dist ([236ef35](https://github.com/tezjs/tez.js/commit/236ef35391108b83d50c658f11b9d3cb0bded5ee))
* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **js:** export isMobile function ([66f69c3](https://github.com/tezjs/tez.js/commit/66f69c3cf39da9202b804ccc96e017ab1b601354))
* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vite:** create tez.ts if not exists during build ([40db4ec](https://github.com/tezjs/tez.js/commit/40db4ec077cc83f0a055afb2924c5d609cc8a68c))
* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))
* **vue:** content attribute added to viewport meta tag ([2b35309](https://github.com/tezjs/tez.js/commit/2b353098551b99d9d5175f208980821c71c14536))



## 0.0.34 (2022-07-06)


### Bug Fixes

* **payload:** filter nested data ([a1ad7a7](https://github.com/tezjs/tez.js/commit/a1ad7a7f13a943112c8ac14ca64b06ea1454f461))



## 0.0.33 (2022-07-06)


### Bug Fixes

* **create-tez:** undefined message variable ([ca2c0b2](https://github.com/tezjs/tez.js/commit/ca2c0b2873508ea588cea2d2a3f89a31aa1de99e))



## 0.0.32 (2022-07-06)


### Bug Fixes

* **create-tez:** installing dependencies ([da6980a](https://github.com/tezjs/tez.js/commit/da6980aa1ba7473aaeef55ef406f1a2e5ad1573e))



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Bug Fixes

* **vite:** replace numbers from component name ([a8923b2](https://github.com/tezjs/tez.js/commit/a8923b20db8f7970cd6b8ec884c399f4c6ceecb1))


### Features

* **payload:** deep populate strapi data ([9eedc19](https://github.com/tezjs/tez.js/commit/9eedc19b0d85245c92a08d7b97bf743205c952e8))
* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Bug Fixes

* folder path seperator ([0629c06](https://github.com/tezjs/tez.js/commit/0629c06bdccdf9c54fbb51e436ec5702e11d2e5e))


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))
* **vite:** bundle page wise components and payload ([58dffbc](https://github.com/tezjs/tez.js/commit/58dffbccf6f71e0f8aa696675427a485b9ef4a52))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)


### Bug Fixes

* **create-tez:** resolve template directory path ([22c3751](https://github.com/tezjs/tez.js/commit/22c3751841a65b076501edfb8d6b4f035752d0f8))



## 0.0.25 (2022-06-13)


### Bug Fixes

* **payload:** remove back-slash from 'imageFolderPath' folder path ([bb80f77](https://github.com/tezjs/tez.js/commit/bb80f77d16dcd9728c8773a2c1004fcc54b3638b))
* **vite:** put 'await' while reading the tex config ([3d48f37](https://github.com/tezjs/tez.js/commit/3d48f37c91451739332dde43a080e3a0a86e7843))


### Features

* **create-tez:** automagically install scaffold template packages ([74afa89](https://github.com/tezjs/tez.js/commit/74afa8977f34ea9e9ba798f717e4401bf7b7de11))



## 0.0.24 (2022-06-02)


### Bug Fixes

* **payload:** parse query string with correct object ([d774399](https://github.com/tezjs/tez.js/commit/d774399eabe24b8e55272ba1247b8f8443b13030))



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **payload:** null check before transform the value ([aeb72bf](https://github.com/tezjs/tez.js/commit/aeb72bfd49bf8d843833c216f2942deb54cef502))
* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **common:** merge strapi default & user configuration ([ac60db7](https://github.com/tezjs/tez.js/commit/ac60db7263663eb6d9c9fdbc974ca4138ed1f8f3))
* **payload:** refresh reference content on the page ([1f438f0](https://github.com/tezjs/tez.js/commit/1f438f03669f32f2e3f6c599b9e6bb8ff8b9a5d0))
* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)


### Bug Fixes

* **create-tez:** add tsconfig in the project template ([88ec68a](https://github.com/tezjs/tez.js/commit/88ec68a819c6522f2d98c8cc7716a3df975d6625))
* **payload:** handle if masterpage is not set ([7be053c](https://github.com/tezjs/tez.js/commit/7be053c56111cd659cf8582f57ca5bf500d8a5ec))



## 0.0.19 (2022-05-28)


### Bug Fixes

* **create-tez:** ignore dist folder ([e79b290](https://github.com/tezjs/tez.js/commit/e79b290a44b9e57af97c2e70d68b66bbe4a76736))
* **create-tez:** tez strapi template seed data ([47ca764](https://github.com/tezjs/tez.js/commit/47ca7642ae2fd9f02384bd5f50f3140f1295905c))


### Features

* **types:** add prop amplify in deployment config ([b2a69a5](https://github.com/tezjs/tez.js/commit/b2a69a5f7f7ea615a2485cb6904590dac5a759c4))



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* sw template ([dc01931](https://github.com/tezjs/tez.js/commit/dc019313b125c32e8dd154beb2c5abd2241379f0))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))
* auto generate firebase deployment config ([6bceb53](https://github.com/tezjs/tez.js/commit/6bceb538d95a1e13bd53f87f675fe2dfe2d283d0))



## 0.0.16 (2022-05-26)



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* add optimizedeps path ([ddf68d4](https://github.com/tezjs/tez.js/commit/ddf68d46d6faeda6a295fb6ba9c337243d4038d5))
* auto generate tez.ts ([0725939](https://github.com/tezjs/tez.js/commit/072593975992dc81595e709a1986e4612db16ce1))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* change template path of service worker ([a68bf32](https://github.com/tezjs/tez.js/commit/a68bf32400e59b9941ff6e07bd27b7879567da28))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* convert into string instead array of html elements ([b453632](https://github.com/tezjs/tez.js/commit/b453632c36b8cbebd63c4d0e336bd4f8de1e9869))
* correct alias path ([0984d59](https://github.com/tezjs/tez.js/commit/0984d59a158ffe79dcad792e616fbea992ccb9eb))
* generate payload based on rootDir ([688b050](https://github.com/tezjs/tez.js/commit/688b050fd7810aaa3063cf2977ec7faa512e899b))
* generate sitemap and robots file ([bca1779](https://github.com/tezjs/tez.js/commit/bca17791f79d1ce3ad58eb500f741ec930a95175))
* generated html script and payload path ([6f7a14c](https://github.com/tezjs/tez.js/commit/6f7a14c86332af7928fabb34d6379bb70361ebc2))
* ignore broadcastchannel image request from local environment ([b23183a](https://github.com/tezjs/tez.js/commit/b23183ac151312047b5664763cc9767c75d8e47f))
* ignore undefined element in sitemap ([c3466a0](https://github.com/tezjs/tez.js/commit/c3466a023fd3b1005c4443a7a038e246a8be3e6d))
* image creating without configuration ([c2223d7](https://github.com/tezjs/tez.js/commit/c2223d74464327a22029dbcfa0a743a7d26de66a))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* minify index.html ([67dca05](https://github.com/tezjs/tez.js/commit/67dca0532e0e9a2fc6ab2b53bffccb31afa242a5))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* pass blank object if component data is undefined ([b1ed00f](https://github.com/tezjs/tez.js/commit/b1ed00f979f575daf602977e3cfe48383a3c83fc))
* pass blank object if seo object is null ([bed1681](https://github.com/tezjs/tez.js/commit/bed1681e173ab696193185a1a697028bcb9f84b9))
* reading seo payload path ([d6abff2](https://github.com/tezjs/tez.js/commit/d6abff2c24a3f81fb375bd2ceb805de92cbabe84))
* refresh specific route folder ([35a081f](https://github.com/tezjs/tez.js/commit/35a081f2460995cb7f5f662ce58052750f2de39d))
* resolve dynamic express module ([d41bcd0](https://github.com/tezjs/tez.js/commit/d41bcd02a672c185df62b8cb88e42c49544eb4c4))
* resolve import object value ([1fcedca](https://github.com/tezjs/tez.js/commit/1fcedca8083f2f8b36668961a977b4b75a22372d))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* return sitemap xelement ([ba1a4e3](https://github.com/tezjs/tez.js/commit/ba1a4e3b4eb1ec3d6847fb443eeb42eab1752535))
* service worker template code ([5ecd699](https://github.com/tezjs/tez.js/commit/5ecd69985060474a7d0ad7a1ecdad4e3cbf2eae2))
* set correct components folder path ([9c99697](https://github.com/tezjs/tez.js/commit/9c99697b207de11e46291a42a00661e147bc634c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* set correct payload path ([2b529ef](https://github.com/tezjs/tez.js/commit/2b529eff4cb6599e5e8a6ff224631e3d4606ee6a))
* set correct payload path ([3135c6a](https://github.com/tezjs/tez.js/commit/3135c6a36068abcd72a5359ddbeb2cb108cd4f03))
* tez dev ([d3e8e60](https://github.com/tezjs/tez.js/commit/d3e8e60991ec4bf16df2d0e31580336537b0ddf8))
* undefined payload object ([b6d1a76](https://github.com/tezjs/tez.js/commit/b6d1a76cd79d38cf9d73322d1846e0af68d2e266))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add custom route ([643d7d9](https://github.com/tezjs/tez.js/commit/643d7d98b4a5bf4fd1df058648e746dcfbbbdb98))
* add dynamic page record in the generic collections ([df6a56c](https://github.com/tezjs/tez.js/commit/df6a56ce8099a48d97c439e705b9d84901b38a81))
* add html page and seo tag ([e911e02](https://github.com/tezjs/tez.js/commit/e911e029ad10fa23656866e49966731428eb7174))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add master layout ([2a97b9c](https://github.com/tezjs/tez.js/commit/2a97b9c009099fdd4e12279f568a65493b9dc840))
* add multiple page schema on page ([6a9b3d3](https://github.com/tezjs/tez.js/commit/6a9b3d39a1310a4234a93636cb92dc96336a08c9))
* add new package '@tezjs/js' ([b51de5f](https://github.com/tezjs/tez.js/commit/b51de5fb7532ce692a222257a2b4ff095c1beb4d))
* add pwa ([05c407a](https://github.com/tezjs/tez.js/commit/05c407a9cc964e81b6eb6b7c2da77e3b9400f324))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* add zero configuration for tez app ([c79defe](https://github.com/tezjs/tez.js/commit/c79defef78ab02fc4ee8302260095a41ae043790))
* build through tez cli ([e23245b](https://github.com/tezjs/tez.js/commit/e23245b28d2ef32449f6c7df7fa3cc5b7737866c))
* configure custom page & payload ([da5e6a3](https://github.com/tezjs/tez.js/commit/da5e6a3baaf4dd9fc68b40254652eeb2a8b0ecd2))
* convert image into webp ([2fe8b1a](https://github.com/tezjs/tez.js/commit/2fe8b1adee35cf2304d44ec0546c94576e6abf45))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* custom page payload generator ([4d711f0](https://github.com/tezjs/tez.js/commit/4d711f032ab3373f94fafaaaa07e44bda028634a))
* define tez config conditionally ([168726a](https://github.com/tezjs/tez.js/commit/168726abdc85b2a05f3637f272b5d90b8f0b66c2))
* entity wise pagination configuration ([bacf79c](https://github.com/tezjs/tez.js/commit/bacf79cd590ed1623dd91b7d7855867e7e58a495))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* favicon & preload link configuration ([48fbefb](https://github.com/tezjs/tez.js/commit/48fbefbc4a59056a7f12f8f869b7d0bca44e855c))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* imports at root ts ([78da3da](https://github.com/tezjs/tez.js/commit/78da3da39fa180192a4745ccdc65528d5e3fc001))
* load lazy data ([1fe8e3a](https://github.com/tezjs/tez.js/commit/1fe8e3aff508c56f0989f36bdf53cfb9e4bc366e))
* parse object value ([8ec54cd](https://github.com/tezjs/tez.js/commit/8ec54cdefab3d865512087fad4ea3c7097b9111f))
* redirect-routes added ([6efde53](https://github.com/tezjs/tez.js/commit/6efde539142f11f2bad9410de51eb22c58c0813b))
* run add lib ([26c78c7](https://github.com/tezjs/tez.js/commit/26c78c7a1ad9932b8b87c1241618136922ba0f38))
* set default / custom port ([8d1f293](https://github.com/tezjs/tez.js/commit/8d1f29332fdedc08ed9fdb80d2d15a4536523fcf))
* sitemap, robots and seo added ([115adf0](https://github.com/tezjs/tez.js/commit/115adf0455cf6de38262a5e6fb1cd61f82d407ab))
* sitemap, robots and seo feature added ([6fbd3d2](https://github.com/tezjs/tez.js/commit/6fbd3d2bf159138b5344a3f93e3a7b9408c55f73))
* strapi package features ([f71125a](https://github.com/tezjs/tez.js/commit/f71125a31892a6e2e343fcb8bc5d3553e35b8755))
* **strapi:** add sanitizer component level data ([2326b22](https://github.com/tezjs/tez.js/commit/2326b22e19bf8913230bca63e351ae95fff7cbcc))
* **strapi:** component data wise pagination ([0390097](https://github.com/tezjs/tez.js/commit/0390097f0b0e7d83774dd5d639a5768ecda4db59))
* tez cli initial code added ([1c9ec72](https://github.com/tezjs/tez.js/commit/1c9ec723ea305edd8b31cf5729faf1c719174572))
* typed env variable ([80c291a](https://github.com/tezjs/tez.js/commit/80c291a23d8006d5b4321766f196314c894aefca))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** request image through broadcastchannel ([7e0329f](https://github.com/tezjs/tez.js/commit/7e0329f7fd2a79098c2442a0916eb3a86d278160))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))


### Performance Improvements

* break after routed payload refresh ([2f2711c](https://github.com/tezjs/tez.js/commit/2f2711cccb605a81d1cc42752162770f9300c079))



## 1.0.1 (2021-06-24)



# 1.0.0-beta.0 (2022-08-22)


### Bug Fixes

* **create-tez:** set 'layouts' folder path in tailwind config ([12cf001](https://github.com/tezjs/tez.js/commit/12cf001f30ba8ba821c5f02635de7949d0e7337a))
* **vue:** load post script early for large viewport ([c43d4f8](https://github.com/tezjs/tez.js/commit/c43d4f847f55556f87910cdf6be8313fbd744bbc))



## 0.0.84 (2022-08-20)


### Bug Fixes

* **cli:** 'tez' cli up issue ([45804c1](https://github.com/tezjs/tez.js/commit/45804c10ce46c3d8566b835ba3d68158d32a1899))
* **vite:** optimize deps loading '@tezjs/vue' ([46cec46](https://github.com/tezjs/tez.js/commit/46cec46320725e093caf6e55d3c7ab264435e317))



## 0.0.83 (2022-08-20)


### Bug Fixes

* **cli:** stackblitz playground ([50df453](https://github.com/tezjs/tez.js/commit/50df453dcff5725a7e8d2b9d6397ee4e99eac690))



## 0.0.82 (2022-08-18)


### Bug Fixes

* **vue:** maintain route state with query string ([58e1c2f](https://github.com/tezjs/tez.js/commit/58e1c2ffd237bd600077b43ad6f4675b9dec34cb))



## 0.0.81 (2022-08-17)


### Bug Fixes

* **vue:** load post script if pre components are loaded ([b074fde](https://github.com/tezjs/tez.js/commit/b074fded4b812713eec2277accb52720a3732e1e))



## 0.0.80 (2022-08-17)


### Features

* **vue:** handle hash url ([d2fb186](https://github.com/tezjs/tez.js/commit/d2fb18607c6e26fd5521875ec299a5355a4617a9))



## 0.0.79 (2022-08-16)


### Bug Fixes

* **vite:** read tez configuration before initializing the app ([848e3fd](https://github.com/tezjs/tez.js/commit/848e3fd7bad6f86fde1a46552d2e135024890c79))
* **vite:** remove 'dev' mode ([1a12421](https://github.com/tezjs/tez.js/commit/1a124219a947768ebbdd5c85e982c03b2f9c99c0))


### Features

* **vite:** generate sw.js configurable ([5f74c9e](https://github.com/tezjs/tez.js/commit/5f74c9ea29ba05b447098a1f6ac2260baeaa39e1))



## 0.0.78 (2022-08-16)


### Bug Fixes

* **vue:** stop multiple times scroll event ([74a354e](https://github.com/tezjs/tez.js/commit/74a354e2f1115f6e5844a8338bac56ecb10c330f))


### Features

* **vite:** export dev function to get the base configuration and run the app in dev mode through vite config ([a8d320a](https://github.com/tezjs/tez.js/commit/a8d320afb04e047c7ce8c957ba2f8206242a008e))


### Performance Improvements

* **vue:** improve component loading sequencing & LCP of the page ([9bd456d](https://github.com/tezjs/tez.js/commit/9bd456d42b29937ea3443f89a3cb11d03742f46c))



## 0.0.77 (2022-08-15)


### Bug Fixes

* **vite:** parse json schema ([daaf00b](https://github.com/tezjs/tez.js/commit/daaf00b5b9219168322f5dc179080bacfd5baa2e))



## 0.0.76 (2022-08-15)


### Bug Fixes

* **vite:** add build version only build mode ([7c22cc5](https://github.com/tezjs/tez.js/commit/7c22cc578f43285c0fcf40e165856b0669fc4425))
* **vite:** bundle page wise css ([177fbf1](https://github.com/tezjs/tez.js/commit/177fbf17ca1475b1b9344ae5b80f2ff052bb9d3d))
* **vite:** conflict vue / @tezjs/vue ([eb358d5](https://github.com/tezjs/tez.js/commit/eb358d5cd3bcf3ab1291494985ec9122f879262e))
* **vite:** return correct js path ([9071731](https://github.com/tezjs/tez.js/commit/9071731ffd6941724e4501356d33634537659ff9))



## 0.0.75 (2022-08-13)


### Bug Fixes

* **vite:** linking json data regex ([1f2bc4e](https://github.com/tezjs/tez.js/commit/1f2bc4e40edeeb0d55d2542360bfaf7856c20efc))



## 0.0.74 (2022-08-12)


### Bug Fixes

* **vite:** all deps must be in lowercase ([7e422f3](https://github.com/tezjs/tez.js/commit/7e422f369b75a83a293c1d698e00549c6f4e7618))
* **vite:** correct reference of CommonPathResolver ([819b42b](https://github.com/tezjs/tez.js/commit/819b42bf0643316c02dbc6ba1143ef33b6bbc6c6))



## 0.0.73 (2022-08-12)


### Bug Fixes

* **docs:** Correct Questions Url ([e5ebd0a](https://github.com/tezjs/tez.js/commit/e5ebd0a040f495b8f41dbdc990e050620a8a3bec))
* **docs:** typo mistake ([154aea9](https://github.com/tezjs/tez.js/commit/154aea920c5e87577b34b44d5e2f2e87a97ddf58))



## 0.0.72 (2022-08-11)



## 0.0.71 (2022-08-10)


### Bug Fixes

* **vite:** remove additional forward slash ([3f0a34e](https://github.com/tezjs/tez.js/commit/3f0a34e51e54962c641f829714a5ccc7e529da84))



## 0.0.70 (2022-08-10)


### Bug Fixes

* **vite:** add build version after release ([0236f51](https://github.com/tezjs/tez.js/commit/0236f51d6c2be3509d01874f576d4a2c88b07912))
* **vite:** gen component file names in lowercase ([12554e6](https://github.com/tezjs/tez.js/commit/12554e6617ee96499758b0a6eddafcf6ebde1a60))
* **vite:** gen component file names in lowercase ([aa13b16](https://github.com/tezjs/tez.js/commit/aa13b16f406157d4e39ca84827dd8c31962e5d01))
* **vite:** include css if js is not direct reference to the respective component ([7b0f03f](https://github.com/tezjs/tez.js/commit/7b0f03f2b1d32aadf5af4faa8f04de63418956ec))



## 0.0.69 (2022-08-09)


### Bug Fixes

* **vite:** preload correct component path ([5d0f20d](https://github.com/tezjs/tez.js/commit/5d0f20dfac40d5dd5d00cd7e065550e8b3a5d33e))


### Features

* **vite:** conditional generate sitemap & robots ([b2c48be](https://github.com/tezjs/tez.js/commit/b2c48be75f300465fdb4374f7f048fa016a40684))



## 0.0.68 (2022-08-09)


### Bug Fixes

* **vite:** remove replacer ([b4ec9b2](https://github.com/tezjs/tez.js/commit/b4ec9b228ad0f84432e16e80547bd36c472bc9e2))


### Features

* **vite:** conditional minification ([1ccb3e3](https://github.com/tezjs/tez.js/commit/1ccb3e330fa3daa8f56fad1bea32293e78fd8094))



## 0.0.67 (2022-08-09)


### Bug Fixes

* **vite:** include non variable reference imports ([23a13ef](https://github.com/tezjs/tez.js/commit/23a13ef1f5fefb340dcec0533566c888554fb3bc))


### Features

* **vue:** add query params in router ([4ade609](https://github.com/tezjs/tez.js/commit/4ade60956352042828ab68286b5d46d36de1df0d))



## 0.0.66 (2022-08-09)



## 0.0.65 (2022-08-08)


### Bug Fixes

* **payload:** set regex for replace the route path with replace method ([6ecf122](https://github.com/tezjs/tez.js/commit/6ecf122e6638a565530fdcc7ce67fc751ead745f))
* **vite:** correct regex  onResolve filter ([3160844](https://github.com/tezjs/tez.js/commit/31608445462fe05f79329067892e4f913e8121bd))



## 0.0.64 (2022-08-08)



## 0.0.63 (2022-08-08)


### Bug Fixes

* **vite:** add '@tezjs/vue' in optimizeDeps ([693cdbf](https://github.com/tezjs/tez.js/commit/693cdbfcc69fd24800143bf37b1d10f414c33112))



## 0.0.62 (2022-08-08)


### Bug Fixes

* **cli:** SPAWN ENOENT ([9567654](https://github.com/tezjs/tez.js/commit/9567654d36693bd10fcf393767bef2c4db3692d0))



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)


### Bug Fixes

* **create-tez:** add missing @tezjs/route package ([1e4d532](https://github.com/tezjs/tez.js/commit/1e4d532c1d886e8f337e4ddf83510ed02ca55e1f))
* **route:** set correct @tezjs/common package version ([6039f6d](https://github.com/tezjs/tez.js/commit/6039f6da56e40cd046b3be414d581af29038d3e5))



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* add modules property for tez module external plugin ([c8528a5](https://github.com/tezjs/tez.js/commit/c8528a57e52960e9847888c4602474a1df7fa911))
* **create-tez:** add tezjs with vue starter template ([1f6a61c](https://github.com/tezjs/tez.js/commit/1f6a61c50cdbeff56e65389c1d7324e71a0fb697))
* **route:** add new package '@tezjs/route' for auto-routes ([f8b8e3e](https://github.com/tezjs/tez.js/commit/f8b8e3e255ee069e7326845a9f08ee45e37591a0))
* **vite:** auto resolve all layout component in final build ([2d818fa](https://github.com/tezjs/tez.js/commit/2d818fa3c5f82ec5c2cd9ed695bd51b92f2ad899))
* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)


### Bug Fixes

* **common:** correct lib path when cust source code path is configured ([d8d888a](https://github.com/tezjs/tez.js/commit/d8d888afe53812fc92a1f522c1f1a303804e4233))
* **payload:** ignore undefined component in payload ([02d6183](https://github.com/tezjs/tez.js/commit/02d618362d1b919d1fd6d1ee43d8cdb037b79ae8))
* **vite:** custom source path undefined ([943703d](https://github.com/tezjs/tez.js/commit/943703d4c3a0728cb0873d45da75d2ac1f7f899c))
* **vite:** resolve addLib ([684107a](https://github.com/tezjs/tez.js/commit/684107a3aa83513a51af8bdc334d56daacba21e2))



## 0.0.57 (2022-08-04)


### Bug Fixes

* **types:** set as nullable 'preFetch' property ([4261964](https://github.com/tezjs/tez.js/commit/42619640072af4f1e62ef2a547140c677254396e))
* **vite:** call bundle css method if bundlecss is true ([c79bc24](https://github.com/tezjs/tez.js/commit/c79bc24cf905f67833394218df0e3c23b19ec81b))
* **vite:** check path value before assigning the reference ([4d53ab3](https://github.com/tezjs/tez.js/commit/4d53ab3b920e12fad9cde645c0dbfb8fddd18704))
* **vite:** persist global html meta configuration ([82edd78](https://github.com/tezjs/tez.js/commit/82edd78359f319e5a540b9aea75bf3c786cea434))
* **vite:** set custom source code path ([84006bc](https://github.com/tezjs/tez.js/commit/84006bce97373596d791299886eef1f8b01df633))


### Features

* **vite:** preload components & respective dependencies page wise ([e385a5c](https://github.com/tezjs/tez.js/commit/e385a5c8c0d914c2ef6c757c3e216ee10a1f5a69))



## 0.0.56 (2022-08-03)


### Bug Fixes

* **vite:** ignore tez.css from page wise css bundling ([2bda791](https://github.com/tezjs/tez.js/commit/2bda7915f1c5a6c78bd0f6ccebed0990b9370488))
* **vite:** remove closing element of link tag ([c29b24e](https://github.com/tezjs/tez.js/commit/c29b24e64085efc137d8f16659612e5b20e14a6f))
* **vite:** resolve mobile component in pre script ([a22c831](https://github.com/tezjs/tez.js/commit/a22c831cc09bef06e0b335c982f663078211e662))


### Features

* **common:** set source folder path ([4785ca5](https://github.com/tezjs/tez.js/commit/4785ca5d27ff315a31132a5fc475fba413937338))
* **vite:** add preconnect link element ([cd78224](https://github.com/tezjs/tez.js/commit/cd7822466675fab2dcbb7a559ee24d4f54362fad))
* **vite:** allow to set dns-prefetch link element ([afc13ca](https://github.com/tezjs/tez.js/commit/afc13cafdadbd67ebfe80f8ed31471b809a0c25a))
* **vite:** allow to set prefetch path ([bdfefe0](https://github.com/tezjs/tez.js/commit/bdfefe0afdfdc9fdf7263fd46c8c43934e5e23cd))
* **vite:** bundle pagewise css ([a26379c](https://github.com/tezjs/tez.js/commit/a26379ccfc1c41d1d7392659733f046bceb96358))
* **vite:** page wise post script prefetch ([0ae4b21](https://github.com/tezjs/tez.js/commit/0ae4b2140bf44aaf3f7af47c4fc1b35e8876bc3b))
* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)


### Bug Fixes

* **vite:** component & layout import path in glob.js ([0a960a8](https://github.com/tezjs/tez.js/commit/0a960a8c0707e8134d9052dd5a838875da146465))
* **vite:** missing package under commonjs execution ([ad6bf38](https://github.com/tezjs/tez.js/commit/ad6bf3839d979b9736ca5936670a17550a4bac92))
* **vite:** replace new line code with blank from linkingData ([f072ed2](https://github.com/tezjs/tez.js/commit/f072ed2a79bbd664ffc6cefc183e616a562449c6))


### Features

* **vite:** customize tez build config with vite build ([3ba9bd0](https://github.com/tezjs/tez.js/commit/3ba9bd0dae5cb1e9cb73cd36c40af090da5025dc))
* **vite:** set as default production build ([1b3e21a](https://github.com/tezjs/tez.js/commit/1b3e21a418fbc3423d40bc90003ca19d8d3675da))



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **payload:** incorrect curly bracket ([c9c3f61](https://github.com/tezjs/tez.js/commit/c9c3f61373a1b6eb7aa7af77bb1550cd4bc25a66))
* **payload:** not to create robots when custom payload generator is configured ([bde0e1d](https://github.com/tezjs/tez.js/commit/bde0e1dd5fd1adc5f79da019e56777c2e7cd4ff9))
* **types:** mark as nullable prop of 'amplify' ([2efec85](https://github.com/tezjs/tez.js/commit/2efec85eb3bb217a018178bc48144b7ea604132a))
* **vite:** import plugins if exists ([740b3b8](https://github.com/tezjs/tez.js/commit/740b3b85f6464ac59a46cc27c7f8ac7eb5a8d875))
* **vite:** obviate number from component name ([c20801f](https://github.com/tezjs/tez.js/commit/c20801fbcfd187a41d57c03dad56449e6aacf09e))
* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))


### Features

* **payload:** pass additional props for custom payload generator ([a5d9217](https://github.com/tezjs/tez.js/commit/a5d921710eda26cdd9a1b7650af4efce64357437))
* **payload:** set routes for custom payload generator ([3eeed41](https://github.com/tezjs/tez.js/commit/3eeed41d47212ca1de4742eb4975520460f0e249))



## 0.0.51 (2022-07-26)


### Bug Fixes

* **payload:** ignore non change frequency & priority set url in sitemap ([ecd1ac0](https://github.com/tezjs/tez.js/commit/ecd1ac002a3a348d261a9878001839da987a1f41))



## 0.0.50 (2022-07-25)


### Bug Fixes

* **vite:** add proper format of linkingdata ([719a00e](https://github.com/tezjs/tez.js/commit/719a00e8d7f7aa52eb825300d231db7799f19fa8))



## 0.0.49 (2022-07-25)


### Features

* **payload:** add custom payload generator ([4013e8a](https://github.com/tezjs/tez.js/commit/4013e8a93d37647cf4ba723ca5c41e20d541c801))



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))
* **vite:** minify pre/post/preload js after build ([b0f2631](https://github.com/tezjs/tez.js/commit/b0f26311dfd41e63d9eaffd4d56c87624dfb03b0))



## 0.0.47 (2022-07-22)


### Bug Fixes

* **create-tez:** properly reference the property name ([c82e89a](https://github.com/tezjs/tez.js/commit/c82e89a44a73b96281871ead07746a2ea0f3f997))



## 0.0.46 (2022-07-22)


### Bug Fixes

* **vite:** obviate additional right slash from preload script url. ([2c5415e](https://github.com/tezjs/tez.js/commit/2c5415e7eb6727b51e0b2789dce79f1e5d2ff3ff))
* **vite:** preload items check before push ([e92933a](https://github.com/tezjs/tez.js/commit/e92933acedd4366df65ee427986ca3fe4b11e875))



## 0.0.45 (2022-07-22)


### Bug Fixes

* **payload:** redirect routes undefined then set blank array ([f3f39fc](https://github.com/tezjs/tez.js/commit/f3f39fc455f86464cda3c4dcfd12f39e3a7c7421))
* **vite:** import component correctly ([6deea03](https://github.com/tezjs/tez.js/commit/6deea03662eac54bffc7bcb06b4193d6a65e15a0))
* **vite:** obviate function while resolve the route ([a74e519](https://github.com/tezjs/tez.js/commit/a74e519b9bbbc41489f6a1c297448c54a81a0bfa))
* **vite:** set actual path instead of object ([4d986fb](https://github.com/tezjs/tez.js/commit/4d986fb234c3f102a34bbaa3ab071b16b3ee353c))
* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Bug Fixes

* **payload:** write firebase redirect routes ([a745423](https://github.com/tezjs/tez.js/commit/a7454230127a1efca8e0435502bb159f85467137))


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))
* **vite:** preload tz.js ([fcb7507](https://github.com/tezjs/tez.js/commit/fcb7507dcbd9ad46da9dce2e086b030844dc89c2))



## 0.0.43 (2022-07-19)


### Bug Fixes

* **payload:** map correct object for parse value ([4414bf6](https://github.com/tezjs/tez.js/commit/4414bf6b1091192a39f32e9dcac46f5e6622fefb))



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)


### Bug Fixes

* **payload:** add siteurl prefix in sitemap ([e848220](https://github.com/tezjs/tez.js/commit/e848220046acefb7a70432683544bf7bc5509f63))



## 0.0.39 (2022-07-15)


### Bug Fixes

* **vite:** write tz.js file on build complete ([b47ddcc](https://github.com/tezjs/tez.js/commit/b47ddcc68c5cd449274ad7bd690069ae1693e64b))



## 0.0.38 (2022-07-15)


### Bug Fixes

* **create-tez:** allow .cache folder permission while running in docker ([cc6226f](https://github.com/tezjs/tez.js/commit/cc6226f53fc209cc1d9b56efb06ee257b3067eb7))
* **vite:** add footer slot in post script ([ca36bad](https://github.com/tezjs/tez.js/commit/ca36bad8e9c6a3455e5237c77d2acb21c8527400))
* **vite:** remove suffix from image url while parsing the text ([581caf7](https://github.com/tezjs/tez.js/commit/581caf7ce3d26587a661c3fe898b51bebd26af48))
* **vite:** script & style property undefined check ([e7120c6](https://github.com/tezjs/tez.js/commit/e7120c6ed60fc8de01d1c269cb4b19cfc37df730))
* **vite:** segregate components conditionally in pre/post script ([a095a11](https://github.com/tezjs/tez.js/commit/a095a11ea5e7c5e625d48641554cbc9cb27ff014))


### Features

* conditional inline css/js reference on the page ([1bc7469](https://github.com/tezjs/tez.js/commit/1bc7469ae0a42837cb2889f989c75b63aa0f7603))
* **create-tez:** connect remote  container from vs code ([9602c2c](https://github.com/tezjs/tez.js/commit/9602c2c9b8eb83316d1461ab4273be7399160f71))
* **payload:** allow svg image to write in local folder ([89c9fb2](https://github.com/tezjs/tez.js/commit/89c9fb2770196e6a9696e28e4161972d12b015da))
* **vite:** preload underneath dependencies page wise ([a696e79](https://github.com/tezjs/tez.js/commit/a696e79d00d1317505958de370c87115a41b1ab7))
* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **common:** correct root (index) folder path ([8ae15d0](https://github.com/tezjs/tez.js/commit/8ae15d033e157eac413377e3e957d882bab281d3))
* **vite:** correct index.html root write path ([587aef5](https://github.com/tezjs/tez.js/commit/587aef58c7216e7a214f44fa706bf78c6b033735))
* **vite:** create html file at root ([1015c14](https://github.com/tezjs/tez.js/commit/1015c140cb5d6b16f15830c840d1c2fc9e955875))
* **vite:** generate index.html at root of the dist ([236ef35](https://github.com/tezjs/tez.js/commit/236ef35391108b83d50c658f11b9d3cb0bded5ee))
* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **js:** export isMobile function ([66f69c3](https://github.com/tezjs/tez.js/commit/66f69c3cf39da9202b804ccc96e017ab1b601354))
* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vite:** create tez.ts if not exists during build ([40db4ec](https://github.com/tezjs/tez.js/commit/40db4ec077cc83f0a055afb2924c5d609cc8a68c))
* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))
* **vue:** content attribute added to viewport meta tag ([2b35309](https://github.com/tezjs/tez.js/commit/2b353098551b99d9d5175f208980821c71c14536))



## 0.0.34 (2022-07-06)


### Bug Fixes

* **payload:** filter nested data ([a1ad7a7](https://github.com/tezjs/tez.js/commit/a1ad7a7f13a943112c8ac14ca64b06ea1454f461))



## 0.0.33 (2022-07-06)


### Bug Fixes

* **create-tez:** undefined message variable ([ca2c0b2](https://github.com/tezjs/tez.js/commit/ca2c0b2873508ea588cea2d2a3f89a31aa1de99e))



## 0.0.32 (2022-07-06)


### Bug Fixes

* **create-tez:** installing dependencies ([da6980a](https://github.com/tezjs/tez.js/commit/da6980aa1ba7473aaeef55ef406f1a2e5ad1573e))



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Bug Fixes

* **vite:** replace numbers from component name ([a8923b2](https://github.com/tezjs/tez.js/commit/a8923b20db8f7970cd6b8ec884c399f4c6ceecb1))


### Features

* **payload:** deep populate strapi data ([9eedc19](https://github.com/tezjs/tez.js/commit/9eedc19b0d85245c92a08d7b97bf743205c952e8))
* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Bug Fixes

* folder path seperator ([0629c06](https://github.com/tezjs/tez.js/commit/0629c06bdccdf9c54fbb51e436ec5702e11d2e5e))


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))
* **vite:** bundle page wise components and payload ([58dffbc](https://github.com/tezjs/tez.js/commit/58dffbccf6f71e0f8aa696675427a485b9ef4a52))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)


### Bug Fixes

* **create-tez:** resolve template directory path ([22c3751](https://github.com/tezjs/tez.js/commit/22c3751841a65b076501edfb8d6b4f035752d0f8))



## 0.0.25 (2022-06-13)


### Bug Fixes

* **payload:** remove back-slash from 'imageFolderPath' folder path ([bb80f77](https://github.com/tezjs/tez.js/commit/bb80f77d16dcd9728c8773a2c1004fcc54b3638b))
* **vite:** put 'await' while reading the tex config ([3d48f37](https://github.com/tezjs/tez.js/commit/3d48f37c91451739332dde43a080e3a0a86e7843))


### Features

* **create-tez:** automagically install scaffold template packages ([74afa89](https://github.com/tezjs/tez.js/commit/74afa8977f34ea9e9ba798f717e4401bf7b7de11))



## 0.0.24 (2022-06-02)


### Bug Fixes

* **payload:** parse query string with correct object ([d774399](https://github.com/tezjs/tez.js/commit/d774399eabe24b8e55272ba1247b8f8443b13030))



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **payload:** null check before transform the value ([aeb72bf](https://github.com/tezjs/tez.js/commit/aeb72bfd49bf8d843833c216f2942deb54cef502))
* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **common:** merge strapi default & user configuration ([ac60db7](https://github.com/tezjs/tez.js/commit/ac60db7263663eb6d9c9fdbc974ca4138ed1f8f3))
* **payload:** refresh reference content on the page ([1f438f0](https://github.com/tezjs/tez.js/commit/1f438f03669f32f2e3f6c599b9e6bb8ff8b9a5d0))
* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)


### Bug Fixes

* **create-tez:** add tsconfig in the project template ([88ec68a](https://github.com/tezjs/tez.js/commit/88ec68a819c6522f2d98c8cc7716a3df975d6625))
* **payload:** handle if masterpage is not set ([7be053c](https://github.com/tezjs/tez.js/commit/7be053c56111cd659cf8582f57ca5bf500d8a5ec))



## 0.0.19 (2022-05-28)


### Bug Fixes

* **create-tez:** ignore dist folder ([e79b290](https://github.com/tezjs/tez.js/commit/e79b290a44b9e57af97c2e70d68b66bbe4a76736))
* **create-tez:** tez strapi template seed data ([47ca764](https://github.com/tezjs/tez.js/commit/47ca7642ae2fd9f02384bd5f50f3140f1295905c))


### Features

* **types:** add prop amplify in deployment config ([b2a69a5](https://github.com/tezjs/tez.js/commit/b2a69a5f7f7ea615a2485cb6904590dac5a759c4))



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* sw template ([dc01931](https://github.com/tezjs/tez.js/commit/dc019313b125c32e8dd154beb2c5abd2241379f0))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))
* auto generate firebase deployment config ([6bceb53](https://github.com/tezjs/tez.js/commit/6bceb538d95a1e13bd53f87f675fe2dfe2d283d0))



## 0.0.16 (2022-05-26)



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* add optimizedeps path ([ddf68d4](https://github.com/tezjs/tez.js/commit/ddf68d46d6faeda6a295fb6ba9c337243d4038d5))
* auto generate tez.ts ([0725939](https://github.com/tezjs/tez.js/commit/072593975992dc81595e709a1986e4612db16ce1))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* change template path of service worker ([a68bf32](https://github.com/tezjs/tez.js/commit/a68bf32400e59b9941ff6e07bd27b7879567da28))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* convert into string instead array of html elements ([b453632](https://github.com/tezjs/tez.js/commit/b453632c36b8cbebd63c4d0e336bd4f8de1e9869))
* correct alias path ([0984d59](https://github.com/tezjs/tez.js/commit/0984d59a158ffe79dcad792e616fbea992ccb9eb))
* generate payload based on rootDir ([688b050](https://github.com/tezjs/tez.js/commit/688b050fd7810aaa3063cf2977ec7faa512e899b))
* generate sitemap and robots file ([bca1779](https://github.com/tezjs/tez.js/commit/bca17791f79d1ce3ad58eb500f741ec930a95175))
* generated html script and payload path ([6f7a14c](https://github.com/tezjs/tez.js/commit/6f7a14c86332af7928fabb34d6379bb70361ebc2))
* ignore broadcastchannel image request from local environment ([b23183a](https://github.com/tezjs/tez.js/commit/b23183ac151312047b5664763cc9767c75d8e47f))
* ignore undefined element in sitemap ([c3466a0](https://github.com/tezjs/tez.js/commit/c3466a023fd3b1005c4443a7a038e246a8be3e6d))
* image creating without configuration ([c2223d7](https://github.com/tezjs/tez.js/commit/c2223d74464327a22029dbcfa0a743a7d26de66a))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* minify index.html ([67dca05](https://github.com/tezjs/tez.js/commit/67dca0532e0e9a2fc6ab2b53bffccb31afa242a5))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* pass blank object if component data is undefined ([b1ed00f](https://github.com/tezjs/tez.js/commit/b1ed00f979f575daf602977e3cfe48383a3c83fc))
* pass blank object if seo object is null ([bed1681](https://github.com/tezjs/tez.js/commit/bed1681e173ab696193185a1a697028bcb9f84b9))
* reading seo payload path ([d6abff2](https://github.com/tezjs/tez.js/commit/d6abff2c24a3f81fb375bd2ceb805de92cbabe84))
* refresh specific route folder ([35a081f](https://github.com/tezjs/tez.js/commit/35a081f2460995cb7f5f662ce58052750f2de39d))
* resolve dynamic express module ([d41bcd0](https://github.com/tezjs/tez.js/commit/d41bcd02a672c185df62b8cb88e42c49544eb4c4))
* resolve import object value ([1fcedca](https://github.com/tezjs/tez.js/commit/1fcedca8083f2f8b36668961a977b4b75a22372d))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* return sitemap xelement ([ba1a4e3](https://github.com/tezjs/tez.js/commit/ba1a4e3b4eb1ec3d6847fb443eeb42eab1752535))
* service worker template code ([5ecd699](https://github.com/tezjs/tez.js/commit/5ecd69985060474a7d0ad7a1ecdad4e3cbf2eae2))
* set correct components folder path ([9c99697](https://github.com/tezjs/tez.js/commit/9c99697b207de11e46291a42a00661e147bc634c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* set correct payload path ([2b529ef](https://github.com/tezjs/tez.js/commit/2b529eff4cb6599e5e8a6ff224631e3d4606ee6a))
* set correct payload path ([3135c6a](https://github.com/tezjs/tez.js/commit/3135c6a36068abcd72a5359ddbeb2cb108cd4f03))
* tez dev ([d3e8e60](https://github.com/tezjs/tez.js/commit/d3e8e60991ec4bf16df2d0e31580336537b0ddf8))
* undefined payload object ([b6d1a76](https://github.com/tezjs/tez.js/commit/b6d1a76cd79d38cf9d73322d1846e0af68d2e266))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add custom route ([643d7d9](https://github.com/tezjs/tez.js/commit/643d7d98b4a5bf4fd1df058648e746dcfbbbdb98))
* add dynamic page record in the generic collections ([df6a56c](https://github.com/tezjs/tez.js/commit/df6a56ce8099a48d97c439e705b9d84901b38a81))
* add html page and seo tag ([e911e02](https://github.com/tezjs/tez.js/commit/e911e029ad10fa23656866e49966731428eb7174))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add master layout ([2a97b9c](https://github.com/tezjs/tez.js/commit/2a97b9c009099fdd4e12279f568a65493b9dc840))
* add multiple page schema on page ([6a9b3d3](https://github.com/tezjs/tez.js/commit/6a9b3d39a1310a4234a93636cb92dc96336a08c9))
* add new package '@tezjs/js' ([b51de5f](https://github.com/tezjs/tez.js/commit/b51de5fb7532ce692a222257a2b4ff095c1beb4d))
* add pwa ([05c407a](https://github.com/tezjs/tez.js/commit/05c407a9cc964e81b6eb6b7c2da77e3b9400f324))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* add zero configuration for tez app ([c79defe](https://github.com/tezjs/tez.js/commit/c79defef78ab02fc4ee8302260095a41ae043790))
* build through tez cli ([e23245b](https://github.com/tezjs/tez.js/commit/e23245b28d2ef32449f6c7df7fa3cc5b7737866c))
* configure custom page & payload ([da5e6a3](https://github.com/tezjs/tez.js/commit/da5e6a3baaf4dd9fc68b40254652eeb2a8b0ecd2))
* convert image into webp ([2fe8b1a](https://github.com/tezjs/tez.js/commit/2fe8b1adee35cf2304d44ec0546c94576e6abf45))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* custom page payload generator ([4d711f0](https://github.com/tezjs/tez.js/commit/4d711f032ab3373f94fafaaaa07e44bda028634a))
* define tez config conditionally ([168726a](https://github.com/tezjs/tez.js/commit/168726abdc85b2a05f3637f272b5d90b8f0b66c2))
* entity wise pagination configuration ([bacf79c](https://github.com/tezjs/tez.js/commit/bacf79cd590ed1623dd91b7d7855867e7e58a495))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* favicon & preload link configuration ([48fbefb](https://github.com/tezjs/tez.js/commit/48fbefbc4a59056a7f12f8f869b7d0bca44e855c))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* imports at root ts ([78da3da](https://github.com/tezjs/tez.js/commit/78da3da39fa180192a4745ccdc65528d5e3fc001))
* load lazy data ([1fe8e3a](https://github.com/tezjs/tez.js/commit/1fe8e3aff508c56f0989f36bdf53cfb9e4bc366e))
* parse object value ([8ec54cd](https://github.com/tezjs/tez.js/commit/8ec54cdefab3d865512087fad4ea3c7097b9111f))
* redirect-routes added ([6efde53](https://github.com/tezjs/tez.js/commit/6efde539142f11f2bad9410de51eb22c58c0813b))
* run add lib ([26c78c7](https://github.com/tezjs/tez.js/commit/26c78c7a1ad9932b8b87c1241618136922ba0f38))
* set default / custom port ([8d1f293](https://github.com/tezjs/tez.js/commit/8d1f29332fdedc08ed9fdb80d2d15a4536523fcf))
* sitemap, robots and seo added ([115adf0](https://github.com/tezjs/tez.js/commit/115adf0455cf6de38262a5e6fb1cd61f82d407ab))
* sitemap, robots and seo feature added ([6fbd3d2](https://github.com/tezjs/tez.js/commit/6fbd3d2bf159138b5344a3f93e3a7b9408c55f73))
* strapi package features ([f71125a](https://github.com/tezjs/tez.js/commit/f71125a31892a6e2e343fcb8bc5d3553e35b8755))
* **strapi:** add sanitizer component level data ([2326b22](https://github.com/tezjs/tez.js/commit/2326b22e19bf8913230bca63e351ae95fff7cbcc))
* **strapi:** component data wise pagination ([0390097](https://github.com/tezjs/tez.js/commit/0390097f0b0e7d83774dd5d639a5768ecda4db59))
* tez cli initial code added ([1c9ec72](https://github.com/tezjs/tez.js/commit/1c9ec723ea305edd8b31cf5729faf1c719174572))
* typed env variable ([80c291a](https://github.com/tezjs/tez.js/commit/80c291a23d8006d5b4321766f196314c894aefca))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** request image through broadcastchannel ([7e0329f](https://github.com/tezjs/tez.js/commit/7e0329f7fd2a79098c2442a0916eb3a86d278160))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))


### Performance Improvements

* break after routed payload refresh ([2f2711c](https://github.com/tezjs/tez.js/commit/2f2711cccb605a81d1cc42752162770f9300c079))



## 1.0.1 (2021-06-24)



## 0.0.84 (2022-08-20)


### Bug Fixes

* **cli:** 'tez' cli up issue ([45804c1](https://github.com/tezjs/tez.js/commit/45804c10ce46c3d8566b835ba3d68158d32a1899))
* **vite:** optimize deps loading '@tezjs/vue' ([46cec46](https://github.com/tezjs/tez.js/commit/46cec46320725e093caf6e55d3c7ab264435e317))



## 0.0.83 (2022-08-20)


### Bug Fixes

* **cli:** stackblitz playground ([50df453](https://github.com/tezjs/tez.js/commit/50df453dcff5725a7e8d2b9d6397ee4e99eac690))



## 0.0.82 (2022-08-18)


### Bug Fixes

* **vue:** maintain route state with query string ([58e1c2f](https://github.com/tezjs/tez.js/commit/58e1c2ffd237bd600077b43ad6f4675b9dec34cb))



## 0.0.81 (2022-08-17)


### Bug Fixes

* **vue:** load post script if pre components are loaded ([b074fde](https://github.com/tezjs/tez.js/commit/b074fded4b812713eec2277accb52720a3732e1e))



## 0.0.80 (2022-08-17)


### Features

* **vue:** handle hash url ([d2fb186](https://github.com/tezjs/tez.js/commit/d2fb18607c6e26fd5521875ec299a5355a4617a9))



## 0.0.79 (2022-08-16)


### Bug Fixes

* **vite:** read tez configuration before initializing the app ([848e3fd](https://github.com/tezjs/tez.js/commit/848e3fd7bad6f86fde1a46552d2e135024890c79))
* **vite:** remove 'dev' mode ([1a12421](https://github.com/tezjs/tez.js/commit/1a124219a947768ebbdd5c85e982c03b2f9c99c0))


### Features

* **vite:** generate sw.js configurable ([5f74c9e](https://github.com/tezjs/tez.js/commit/5f74c9ea29ba05b447098a1f6ac2260baeaa39e1))



## 0.0.78 (2022-08-16)


### Bug Fixes

* **vue:** stop multiple times scroll event ([74a354e](https://github.com/tezjs/tez.js/commit/74a354e2f1115f6e5844a8338bac56ecb10c330f))


### Features

* **vite:** export dev function to get the base configuration and run the app in dev mode through vite config ([a8d320a](https://github.com/tezjs/tez.js/commit/a8d320afb04e047c7ce8c957ba2f8206242a008e))


### Performance Improvements

* **vue:** improve component loading sequencing & LCP of the page ([9bd456d](https://github.com/tezjs/tez.js/commit/9bd456d42b29937ea3443f89a3cb11d03742f46c))



## 0.0.77 (2022-08-15)


### Bug Fixes

* **vite:** parse json schema ([daaf00b](https://github.com/tezjs/tez.js/commit/daaf00b5b9219168322f5dc179080bacfd5baa2e))



## 0.0.76 (2022-08-15)


### Bug Fixes

* **vite:** add build version only build mode ([7c22cc5](https://github.com/tezjs/tez.js/commit/7c22cc578f43285c0fcf40e165856b0669fc4425))
* **vite:** bundle page wise css ([177fbf1](https://github.com/tezjs/tez.js/commit/177fbf17ca1475b1b9344ae5b80f2ff052bb9d3d))
* **vite:** conflict vue / @tezjs/vue ([eb358d5](https://github.com/tezjs/tez.js/commit/eb358d5cd3bcf3ab1291494985ec9122f879262e))
* **vite:** return correct js path ([9071731](https://github.com/tezjs/tez.js/commit/9071731ffd6941724e4501356d33634537659ff9))



## 0.0.75 (2022-08-13)


### Bug Fixes

* **vite:** linking json data regex ([1f2bc4e](https://github.com/tezjs/tez.js/commit/1f2bc4e40edeeb0d55d2542360bfaf7856c20efc))



## 0.0.74 (2022-08-12)


### Bug Fixes

* **vite:** all deps must be in lowercase ([7e422f3](https://github.com/tezjs/tez.js/commit/7e422f369b75a83a293c1d698e00549c6f4e7618))
* **vite:** correct reference of CommonPathResolver ([819b42b](https://github.com/tezjs/tez.js/commit/819b42bf0643316c02dbc6ba1143ef33b6bbc6c6))



## 0.0.73 (2022-08-12)


### Bug Fixes

* **docs:** Correct Questions Url ([e5ebd0a](https://github.com/tezjs/tez.js/commit/e5ebd0a040f495b8f41dbdc990e050620a8a3bec))
* **docs:** typo mistake ([154aea9](https://github.com/tezjs/tez.js/commit/154aea920c5e87577b34b44d5e2f2e87a97ddf58))



## 0.0.72 (2022-08-11)



## 0.0.71 (2022-08-10)


### Bug Fixes

* **vite:** remove additional forward slash ([3f0a34e](https://github.com/tezjs/tez.js/commit/3f0a34e51e54962c641f829714a5ccc7e529da84))



## 0.0.70 (2022-08-10)


### Bug Fixes

* **vite:** add build version after release ([0236f51](https://github.com/tezjs/tez.js/commit/0236f51d6c2be3509d01874f576d4a2c88b07912))
* **vite:** gen component file names in lowercase ([12554e6](https://github.com/tezjs/tez.js/commit/12554e6617ee96499758b0a6eddafcf6ebde1a60))
* **vite:** gen component file names in lowercase ([aa13b16](https://github.com/tezjs/tez.js/commit/aa13b16f406157d4e39ca84827dd8c31962e5d01))
* **vite:** include css if js is not direct reference to the respective component ([7b0f03f](https://github.com/tezjs/tez.js/commit/7b0f03f2b1d32aadf5af4faa8f04de63418956ec))



## 0.0.69 (2022-08-09)


### Bug Fixes

* **vite:** preload correct component path ([5d0f20d](https://github.com/tezjs/tez.js/commit/5d0f20dfac40d5dd5d00cd7e065550e8b3a5d33e))


### Features

* **vite:** conditional generate sitemap & robots ([b2c48be](https://github.com/tezjs/tez.js/commit/b2c48be75f300465fdb4374f7f048fa016a40684))



## 0.0.68 (2022-08-09)


### Bug Fixes

* **vite:** remove replacer ([b4ec9b2](https://github.com/tezjs/tez.js/commit/b4ec9b228ad0f84432e16e80547bd36c472bc9e2))


### Features

* **vite:** conditional minification ([1ccb3e3](https://github.com/tezjs/tez.js/commit/1ccb3e330fa3daa8f56fad1bea32293e78fd8094))



## 0.0.67 (2022-08-09)


### Bug Fixes

* **vite:** include non variable reference imports ([23a13ef](https://github.com/tezjs/tez.js/commit/23a13ef1f5fefb340dcec0533566c888554fb3bc))


### Features

* **vue:** add query params in router ([4ade609](https://github.com/tezjs/tez.js/commit/4ade60956352042828ab68286b5d46d36de1df0d))



## 0.0.66 (2022-08-09)



## 0.0.65 (2022-08-08)


### Bug Fixes

* **payload:** set regex for replace the route path with replace method ([6ecf122](https://github.com/tezjs/tez.js/commit/6ecf122e6638a565530fdcc7ce67fc751ead745f))
* **vite:** correct regex  onResolve filter ([3160844](https://github.com/tezjs/tez.js/commit/31608445462fe05f79329067892e4f913e8121bd))



## 0.0.64 (2022-08-08)



## 0.0.63 (2022-08-08)


### Bug Fixes

* **vite:** add '@tezjs/vue' in optimizeDeps ([693cdbf](https://github.com/tezjs/tez.js/commit/693cdbfcc69fd24800143bf37b1d10f414c33112))



## 0.0.62 (2022-08-08)


### Bug Fixes

* **cli:** SPAWN ENOENT ([9567654](https://github.com/tezjs/tez.js/commit/9567654d36693bd10fcf393767bef2c4db3692d0))



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)


### Bug Fixes

* **create-tez:** add missing @tezjs/route package ([1e4d532](https://github.com/tezjs/tez.js/commit/1e4d532c1d886e8f337e4ddf83510ed02ca55e1f))
* **route:** set correct @tezjs/common package version ([6039f6d](https://github.com/tezjs/tez.js/commit/6039f6da56e40cd046b3be414d581af29038d3e5))



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* add modules property for tez module external plugin ([c8528a5](https://github.com/tezjs/tez.js/commit/c8528a57e52960e9847888c4602474a1df7fa911))
* **create-tez:** add tezjs with vue starter template ([1f6a61c](https://github.com/tezjs/tez.js/commit/1f6a61c50cdbeff56e65389c1d7324e71a0fb697))
* **route:** add new package '@tezjs/route' for auto-routes ([f8b8e3e](https://github.com/tezjs/tez.js/commit/f8b8e3e255ee069e7326845a9f08ee45e37591a0))
* **vite:** auto resolve all layout component in final build ([2d818fa](https://github.com/tezjs/tez.js/commit/2d818fa3c5f82ec5c2cd9ed695bd51b92f2ad899))
* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)


### Bug Fixes

* **common:** correct lib path when cust source code path is configured ([d8d888a](https://github.com/tezjs/tez.js/commit/d8d888afe53812fc92a1f522c1f1a303804e4233))
* **payload:** ignore undefined component in payload ([02d6183](https://github.com/tezjs/tez.js/commit/02d618362d1b919d1fd6d1ee43d8cdb037b79ae8))
* **vite:** custom source path undefined ([943703d](https://github.com/tezjs/tez.js/commit/943703d4c3a0728cb0873d45da75d2ac1f7f899c))
* **vite:** resolve addLib ([684107a](https://github.com/tezjs/tez.js/commit/684107a3aa83513a51af8bdc334d56daacba21e2))



## 0.0.57 (2022-08-04)


### Bug Fixes

* **types:** set as nullable 'preFetch' property ([4261964](https://github.com/tezjs/tez.js/commit/42619640072af4f1e62ef2a547140c677254396e))
* **vite:** call bundle css method if bundlecss is true ([c79bc24](https://github.com/tezjs/tez.js/commit/c79bc24cf905f67833394218df0e3c23b19ec81b))
* **vite:** check path value before assigning the reference ([4d53ab3](https://github.com/tezjs/tez.js/commit/4d53ab3b920e12fad9cde645c0dbfb8fddd18704))
* **vite:** persist global html meta configuration ([82edd78](https://github.com/tezjs/tez.js/commit/82edd78359f319e5a540b9aea75bf3c786cea434))
* **vite:** set custom source code path ([84006bc](https://github.com/tezjs/tez.js/commit/84006bce97373596d791299886eef1f8b01df633))


### Features

* **vite:** preload components & respective dependencies page wise ([e385a5c](https://github.com/tezjs/tez.js/commit/e385a5c8c0d914c2ef6c757c3e216ee10a1f5a69))



## 0.0.56 (2022-08-03)


### Bug Fixes

* **vite:** ignore tez.css from page wise css bundling ([2bda791](https://github.com/tezjs/tez.js/commit/2bda7915f1c5a6c78bd0f6ccebed0990b9370488))
* **vite:** remove closing element of link tag ([c29b24e](https://github.com/tezjs/tez.js/commit/c29b24e64085efc137d8f16659612e5b20e14a6f))
* **vite:** resolve mobile component in pre script ([a22c831](https://github.com/tezjs/tez.js/commit/a22c831cc09bef06e0b335c982f663078211e662))


### Features

* **common:** set source folder path ([4785ca5](https://github.com/tezjs/tez.js/commit/4785ca5d27ff315a31132a5fc475fba413937338))
* **vite:** add preconnect link element ([cd78224](https://github.com/tezjs/tez.js/commit/cd7822466675fab2dcbb7a559ee24d4f54362fad))
* **vite:** allow to set dns-prefetch link element ([afc13ca](https://github.com/tezjs/tez.js/commit/afc13cafdadbd67ebfe80f8ed31471b809a0c25a))
* **vite:** allow to set prefetch path ([bdfefe0](https://github.com/tezjs/tez.js/commit/bdfefe0afdfdc9fdf7263fd46c8c43934e5e23cd))
* **vite:** bundle pagewise css ([a26379c](https://github.com/tezjs/tez.js/commit/a26379ccfc1c41d1d7392659733f046bceb96358))
* **vite:** page wise post script prefetch ([0ae4b21](https://github.com/tezjs/tez.js/commit/0ae4b2140bf44aaf3f7af47c4fc1b35e8876bc3b))
* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)


### Bug Fixes

* **vite:** component & layout import path in glob.js ([0a960a8](https://github.com/tezjs/tez.js/commit/0a960a8c0707e8134d9052dd5a838875da146465))
* **vite:** missing package under commonjs execution ([ad6bf38](https://github.com/tezjs/tez.js/commit/ad6bf3839d979b9736ca5936670a17550a4bac92))
* **vite:** replace new line code with blank from linkingData ([f072ed2](https://github.com/tezjs/tez.js/commit/f072ed2a79bbd664ffc6cefc183e616a562449c6))


### Features

* **vite:** customize tez build config with vite build ([3ba9bd0](https://github.com/tezjs/tez.js/commit/3ba9bd0dae5cb1e9cb73cd36c40af090da5025dc))
* **vite:** set as default production build ([1b3e21a](https://github.com/tezjs/tez.js/commit/1b3e21a418fbc3423d40bc90003ca19d8d3675da))



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **payload:** incorrect curly bracket ([c9c3f61](https://github.com/tezjs/tez.js/commit/c9c3f61373a1b6eb7aa7af77bb1550cd4bc25a66))
* **payload:** not to create robots when custom payload generator is configured ([bde0e1d](https://github.com/tezjs/tez.js/commit/bde0e1dd5fd1adc5f79da019e56777c2e7cd4ff9))
* **types:** mark as nullable prop of 'amplify' ([2efec85](https://github.com/tezjs/tez.js/commit/2efec85eb3bb217a018178bc48144b7ea604132a))
* **vite:** import plugins if exists ([740b3b8](https://github.com/tezjs/tez.js/commit/740b3b85f6464ac59a46cc27c7f8ac7eb5a8d875))
* **vite:** obviate number from component name ([c20801f](https://github.com/tezjs/tez.js/commit/c20801fbcfd187a41d57c03dad56449e6aacf09e))
* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))


### Features

* **payload:** pass additional props for custom payload generator ([a5d9217](https://github.com/tezjs/tez.js/commit/a5d921710eda26cdd9a1b7650af4efce64357437))
* **payload:** set routes for custom payload generator ([3eeed41](https://github.com/tezjs/tez.js/commit/3eeed41d47212ca1de4742eb4975520460f0e249))



## 0.0.51 (2022-07-26)


### Bug Fixes

* **payload:** ignore non change frequency & priority set url in sitemap ([ecd1ac0](https://github.com/tezjs/tez.js/commit/ecd1ac002a3a348d261a9878001839da987a1f41))



## 0.0.50 (2022-07-25)


### Bug Fixes

* **vite:** add proper format of linkingdata ([719a00e](https://github.com/tezjs/tez.js/commit/719a00e8d7f7aa52eb825300d231db7799f19fa8))



## 0.0.49 (2022-07-25)


### Features

* **payload:** add custom payload generator ([4013e8a](https://github.com/tezjs/tez.js/commit/4013e8a93d37647cf4ba723ca5c41e20d541c801))



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))
* **vite:** minify pre/post/preload js after build ([b0f2631](https://github.com/tezjs/tez.js/commit/b0f26311dfd41e63d9eaffd4d56c87624dfb03b0))



## 0.0.47 (2022-07-22)


### Bug Fixes

* **create-tez:** properly reference the property name ([c82e89a](https://github.com/tezjs/tez.js/commit/c82e89a44a73b96281871ead07746a2ea0f3f997))



## 0.0.46 (2022-07-22)


### Bug Fixes

* **vite:** obviate additional right slash from preload script url. ([2c5415e](https://github.com/tezjs/tez.js/commit/2c5415e7eb6727b51e0b2789dce79f1e5d2ff3ff))
* **vite:** preload items check before push ([e92933a](https://github.com/tezjs/tez.js/commit/e92933acedd4366df65ee427986ca3fe4b11e875))



## 0.0.45 (2022-07-22)


### Bug Fixes

* **payload:** redirect routes undefined then set blank array ([f3f39fc](https://github.com/tezjs/tez.js/commit/f3f39fc455f86464cda3c4dcfd12f39e3a7c7421))
* **vite:** import component correctly ([6deea03](https://github.com/tezjs/tez.js/commit/6deea03662eac54bffc7bcb06b4193d6a65e15a0))
* **vite:** obviate function while resolve the route ([a74e519](https://github.com/tezjs/tez.js/commit/a74e519b9bbbc41489f6a1c297448c54a81a0bfa))
* **vite:** set actual path instead of object ([4d986fb](https://github.com/tezjs/tez.js/commit/4d986fb234c3f102a34bbaa3ab071b16b3ee353c))
* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Bug Fixes

* **payload:** write firebase redirect routes ([a745423](https://github.com/tezjs/tez.js/commit/a7454230127a1efca8e0435502bb159f85467137))


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))
* **vite:** preload tz.js ([fcb7507](https://github.com/tezjs/tez.js/commit/fcb7507dcbd9ad46da9dce2e086b030844dc89c2))



## 0.0.43 (2022-07-19)


### Bug Fixes

* **payload:** map correct object for parse value ([4414bf6](https://github.com/tezjs/tez.js/commit/4414bf6b1091192a39f32e9dcac46f5e6622fefb))



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)


### Bug Fixes

* **payload:** add siteurl prefix in sitemap ([e848220](https://github.com/tezjs/tez.js/commit/e848220046acefb7a70432683544bf7bc5509f63))



## 0.0.39 (2022-07-15)


### Bug Fixes

* **vite:** write tz.js file on build complete ([b47ddcc](https://github.com/tezjs/tez.js/commit/b47ddcc68c5cd449274ad7bd690069ae1693e64b))



## 0.0.38 (2022-07-15)


### Bug Fixes

* **create-tez:** allow .cache folder permission while running in docker ([cc6226f](https://github.com/tezjs/tez.js/commit/cc6226f53fc209cc1d9b56efb06ee257b3067eb7))
* **vite:** add footer slot in post script ([ca36bad](https://github.com/tezjs/tez.js/commit/ca36bad8e9c6a3455e5237c77d2acb21c8527400))
* **vite:** remove suffix from image url while parsing the text ([581caf7](https://github.com/tezjs/tez.js/commit/581caf7ce3d26587a661c3fe898b51bebd26af48))
* **vite:** script & style property undefined check ([e7120c6](https://github.com/tezjs/tez.js/commit/e7120c6ed60fc8de01d1c269cb4b19cfc37df730))
* **vite:** segregate components conditionally in pre/post script ([a095a11](https://github.com/tezjs/tez.js/commit/a095a11ea5e7c5e625d48641554cbc9cb27ff014))


### Features

* conditional inline css/js reference on the page ([1bc7469](https://github.com/tezjs/tez.js/commit/1bc7469ae0a42837cb2889f989c75b63aa0f7603))
* **create-tez:** connect remote  container from vs code ([9602c2c](https://github.com/tezjs/tez.js/commit/9602c2c9b8eb83316d1461ab4273be7399160f71))
* **payload:** allow svg image to write in local folder ([89c9fb2](https://github.com/tezjs/tez.js/commit/89c9fb2770196e6a9696e28e4161972d12b015da))
* **vite:** preload underneath dependencies page wise ([a696e79](https://github.com/tezjs/tez.js/commit/a696e79d00d1317505958de370c87115a41b1ab7))
* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **common:** correct root (index) folder path ([8ae15d0](https://github.com/tezjs/tez.js/commit/8ae15d033e157eac413377e3e957d882bab281d3))
* **vite:** correct index.html root write path ([587aef5](https://github.com/tezjs/tez.js/commit/587aef58c7216e7a214f44fa706bf78c6b033735))
* **vite:** create html file at root ([1015c14](https://github.com/tezjs/tez.js/commit/1015c140cb5d6b16f15830c840d1c2fc9e955875))
* **vite:** generate index.html at root of the dist ([236ef35](https://github.com/tezjs/tez.js/commit/236ef35391108b83d50c658f11b9d3cb0bded5ee))
* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **js:** export isMobile function ([66f69c3](https://github.com/tezjs/tez.js/commit/66f69c3cf39da9202b804ccc96e017ab1b601354))
* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vite:** create tez.ts if not exists during build ([40db4ec](https://github.com/tezjs/tez.js/commit/40db4ec077cc83f0a055afb2924c5d609cc8a68c))
* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))
* **vue:** content attribute added to viewport meta tag ([2b35309](https://github.com/tezjs/tez.js/commit/2b353098551b99d9d5175f208980821c71c14536))



## 0.0.34 (2022-07-06)


### Bug Fixes

* **payload:** filter nested data ([a1ad7a7](https://github.com/tezjs/tez.js/commit/a1ad7a7f13a943112c8ac14ca64b06ea1454f461))



## 0.0.33 (2022-07-06)


### Bug Fixes

* **create-tez:** undefined message variable ([ca2c0b2](https://github.com/tezjs/tez.js/commit/ca2c0b2873508ea588cea2d2a3f89a31aa1de99e))



## 0.0.32 (2022-07-06)


### Bug Fixes

* **create-tez:** installing dependencies ([da6980a](https://github.com/tezjs/tez.js/commit/da6980aa1ba7473aaeef55ef406f1a2e5ad1573e))



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Bug Fixes

* **vite:** replace numbers from component name ([a8923b2](https://github.com/tezjs/tez.js/commit/a8923b20db8f7970cd6b8ec884c399f4c6ceecb1))


### Features

* **payload:** deep populate strapi data ([9eedc19](https://github.com/tezjs/tez.js/commit/9eedc19b0d85245c92a08d7b97bf743205c952e8))
* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Bug Fixes

* folder path seperator ([0629c06](https://github.com/tezjs/tez.js/commit/0629c06bdccdf9c54fbb51e436ec5702e11d2e5e))


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))
* **vite:** bundle page wise components and payload ([58dffbc](https://github.com/tezjs/tez.js/commit/58dffbccf6f71e0f8aa696675427a485b9ef4a52))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)


### Bug Fixes

* **create-tez:** resolve template directory path ([22c3751](https://github.com/tezjs/tez.js/commit/22c3751841a65b076501edfb8d6b4f035752d0f8))



## 0.0.25 (2022-06-13)


### Bug Fixes

* **payload:** remove back-slash from 'imageFolderPath' folder path ([bb80f77](https://github.com/tezjs/tez.js/commit/bb80f77d16dcd9728c8773a2c1004fcc54b3638b))
* **vite:** put 'await' while reading the tex config ([3d48f37](https://github.com/tezjs/tez.js/commit/3d48f37c91451739332dde43a080e3a0a86e7843))


### Features

* **create-tez:** automagically install scaffold template packages ([74afa89](https://github.com/tezjs/tez.js/commit/74afa8977f34ea9e9ba798f717e4401bf7b7de11))



## 0.0.24 (2022-06-02)


### Bug Fixes

* **payload:** parse query string with correct object ([d774399](https://github.com/tezjs/tez.js/commit/d774399eabe24b8e55272ba1247b8f8443b13030))



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **payload:** null check before transform the value ([aeb72bf](https://github.com/tezjs/tez.js/commit/aeb72bfd49bf8d843833c216f2942deb54cef502))
* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **common:** merge strapi default & user configuration ([ac60db7](https://github.com/tezjs/tez.js/commit/ac60db7263663eb6d9c9fdbc974ca4138ed1f8f3))
* **payload:** refresh reference content on the page ([1f438f0](https://github.com/tezjs/tez.js/commit/1f438f03669f32f2e3f6c599b9e6bb8ff8b9a5d0))
* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)


### Bug Fixes

* **create-tez:** add tsconfig in the project template ([88ec68a](https://github.com/tezjs/tez.js/commit/88ec68a819c6522f2d98c8cc7716a3df975d6625))
* **payload:** handle if masterpage is not set ([7be053c](https://github.com/tezjs/tez.js/commit/7be053c56111cd659cf8582f57ca5bf500d8a5ec))



## 0.0.19 (2022-05-28)


### Bug Fixes

* **create-tez:** ignore dist folder ([e79b290](https://github.com/tezjs/tez.js/commit/e79b290a44b9e57af97c2e70d68b66bbe4a76736))
* **create-tez:** tez strapi template seed data ([47ca764](https://github.com/tezjs/tez.js/commit/47ca7642ae2fd9f02384bd5f50f3140f1295905c))


### Features

* **types:** add prop amplify in deployment config ([b2a69a5](https://github.com/tezjs/tez.js/commit/b2a69a5f7f7ea615a2485cb6904590dac5a759c4))



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* sw template ([dc01931](https://github.com/tezjs/tez.js/commit/dc019313b125c32e8dd154beb2c5abd2241379f0))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))
* auto generate firebase deployment config ([6bceb53](https://github.com/tezjs/tez.js/commit/6bceb538d95a1e13bd53f87f675fe2dfe2d283d0))



## 0.0.16 (2022-05-26)



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* add optimizedeps path ([ddf68d4](https://github.com/tezjs/tez.js/commit/ddf68d46d6faeda6a295fb6ba9c337243d4038d5))
* auto generate tez.ts ([0725939](https://github.com/tezjs/tez.js/commit/072593975992dc81595e709a1986e4612db16ce1))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* change template path of service worker ([a68bf32](https://github.com/tezjs/tez.js/commit/a68bf32400e59b9941ff6e07bd27b7879567da28))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* convert into string instead array of html elements ([b453632](https://github.com/tezjs/tez.js/commit/b453632c36b8cbebd63c4d0e336bd4f8de1e9869))
* correct alias path ([0984d59](https://github.com/tezjs/tez.js/commit/0984d59a158ffe79dcad792e616fbea992ccb9eb))
* generate payload based on rootDir ([688b050](https://github.com/tezjs/tez.js/commit/688b050fd7810aaa3063cf2977ec7faa512e899b))
* generate sitemap and robots file ([bca1779](https://github.com/tezjs/tez.js/commit/bca17791f79d1ce3ad58eb500f741ec930a95175))
* generated html script and payload path ([6f7a14c](https://github.com/tezjs/tez.js/commit/6f7a14c86332af7928fabb34d6379bb70361ebc2))
* ignore broadcastchannel image request from local environment ([b23183a](https://github.com/tezjs/tez.js/commit/b23183ac151312047b5664763cc9767c75d8e47f))
* ignore undefined element in sitemap ([c3466a0](https://github.com/tezjs/tez.js/commit/c3466a023fd3b1005c4443a7a038e246a8be3e6d))
* image creating without configuration ([c2223d7](https://github.com/tezjs/tez.js/commit/c2223d74464327a22029dbcfa0a743a7d26de66a))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* minify index.html ([67dca05](https://github.com/tezjs/tez.js/commit/67dca0532e0e9a2fc6ab2b53bffccb31afa242a5))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* pass blank object if component data is undefined ([b1ed00f](https://github.com/tezjs/tez.js/commit/b1ed00f979f575daf602977e3cfe48383a3c83fc))
* pass blank object if seo object is null ([bed1681](https://github.com/tezjs/tez.js/commit/bed1681e173ab696193185a1a697028bcb9f84b9))
* reading seo payload path ([d6abff2](https://github.com/tezjs/tez.js/commit/d6abff2c24a3f81fb375bd2ceb805de92cbabe84))
* refresh specific route folder ([35a081f](https://github.com/tezjs/tez.js/commit/35a081f2460995cb7f5f662ce58052750f2de39d))
* resolve dynamic express module ([d41bcd0](https://github.com/tezjs/tez.js/commit/d41bcd02a672c185df62b8cb88e42c49544eb4c4))
* resolve import object value ([1fcedca](https://github.com/tezjs/tez.js/commit/1fcedca8083f2f8b36668961a977b4b75a22372d))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* return sitemap xelement ([ba1a4e3](https://github.com/tezjs/tez.js/commit/ba1a4e3b4eb1ec3d6847fb443eeb42eab1752535))
* service worker template code ([5ecd699](https://github.com/tezjs/tez.js/commit/5ecd69985060474a7d0ad7a1ecdad4e3cbf2eae2))
* set correct components folder path ([9c99697](https://github.com/tezjs/tez.js/commit/9c99697b207de11e46291a42a00661e147bc634c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* set correct payload path ([2b529ef](https://github.com/tezjs/tez.js/commit/2b529eff4cb6599e5e8a6ff224631e3d4606ee6a))
* set correct payload path ([3135c6a](https://github.com/tezjs/tez.js/commit/3135c6a36068abcd72a5359ddbeb2cb108cd4f03))
* tez dev ([d3e8e60](https://github.com/tezjs/tez.js/commit/d3e8e60991ec4bf16df2d0e31580336537b0ddf8))
* undefined payload object ([b6d1a76](https://github.com/tezjs/tez.js/commit/b6d1a76cd79d38cf9d73322d1846e0af68d2e266))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add custom route ([643d7d9](https://github.com/tezjs/tez.js/commit/643d7d98b4a5bf4fd1df058648e746dcfbbbdb98))
* add dynamic page record in the generic collections ([df6a56c](https://github.com/tezjs/tez.js/commit/df6a56ce8099a48d97c439e705b9d84901b38a81))
* add html page and seo tag ([e911e02](https://github.com/tezjs/tez.js/commit/e911e029ad10fa23656866e49966731428eb7174))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add master layout ([2a97b9c](https://github.com/tezjs/tez.js/commit/2a97b9c009099fdd4e12279f568a65493b9dc840))
* add multiple page schema on page ([6a9b3d3](https://github.com/tezjs/tez.js/commit/6a9b3d39a1310a4234a93636cb92dc96336a08c9))
* add new package '@tezjs/js' ([b51de5f](https://github.com/tezjs/tez.js/commit/b51de5fb7532ce692a222257a2b4ff095c1beb4d))
* add pwa ([05c407a](https://github.com/tezjs/tez.js/commit/05c407a9cc964e81b6eb6b7c2da77e3b9400f324))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* add zero configuration for tez app ([c79defe](https://github.com/tezjs/tez.js/commit/c79defef78ab02fc4ee8302260095a41ae043790))
* build through tez cli ([e23245b](https://github.com/tezjs/tez.js/commit/e23245b28d2ef32449f6c7df7fa3cc5b7737866c))
* configure custom page & payload ([da5e6a3](https://github.com/tezjs/tez.js/commit/da5e6a3baaf4dd9fc68b40254652eeb2a8b0ecd2))
* convert image into webp ([2fe8b1a](https://github.com/tezjs/tez.js/commit/2fe8b1adee35cf2304d44ec0546c94576e6abf45))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* custom page payload generator ([4d711f0](https://github.com/tezjs/tez.js/commit/4d711f032ab3373f94fafaaaa07e44bda028634a))
* define tez config conditionally ([168726a](https://github.com/tezjs/tez.js/commit/168726abdc85b2a05f3637f272b5d90b8f0b66c2))
* entity wise pagination configuration ([bacf79c](https://github.com/tezjs/tez.js/commit/bacf79cd590ed1623dd91b7d7855867e7e58a495))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* favicon & preload link configuration ([48fbefb](https://github.com/tezjs/tez.js/commit/48fbefbc4a59056a7f12f8f869b7d0bca44e855c))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* imports at root ts ([78da3da](https://github.com/tezjs/tez.js/commit/78da3da39fa180192a4745ccdc65528d5e3fc001))
* load lazy data ([1fe8e3a](https://github.com/tezjs/tez.js/commit/1fe8e3aff508c56f0989f36bdf53cfb9e4bc366e))
* parse object value ([8ec54cd](https://github.com/tezjs/tez.js/commit/8ec54cdefab3d865512087fad4ea3c7097b9111f))
* redirect-routes added ([6efde53](https://github.com/tezjs/tez.js/commit/6efde539142f11f2bad9410de51eb22c58c0813b))
* run add lib ([26c78c7](https://github.com/tezjs/tez.js/commit/26c78c7a1ad9932b8b87c1241618136922ba0f38))
* set default / custom port ([8d1f293](https://github.com/tezjs/tez.js/commit/8d1f29332fdedc08ed9fdb80d2d15a4536523fcf))
* sitemap, robots and seo added ([115adf0](https://github.com/tezjs/tez.js/commit/115adf0455cf6de38262a5e6fb1cd61f82d407ab))
* sitemap, robots and seo feature added ([6fbd3d2](https://github.com/tezjs/tez.js/commit/6fbd3d2bf159138b5344a3f93e3a7b9408c55f73))
* strapi package features ([f71125a](https://github.com/tezjs/tez.js/commit/f71125a31892a6e2e343fcb8bc5d3553e35b8755))
* **strapi:** add sanitizer component level data ([2326b22](https://github.com/tezjs/tez.js/commit/2326b22e19bf8913230bca63e351ae95fff7cbcc))
* **strapi:** component data wise pagination ([0390097](https://github.com/tezjs/tez.js/commit/0390097f0b0e7d83774dd5d639a5768ecda4db59))
* tez cli initial code added ([1c9ec72](https://github.com/tezjs/tez.js/commit/1c9ec723ea305edd8b31cf5729faf1c719174572))
* typed env variable ([80c291a](https://github.com/tezjs/tez.js/commit/80c291a23d8006d5b4321766f196314c894aefca))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** request image through broadcastchannel ([7e0329f](https://github.com/tezjs/tez.js/commit/7e0329f7fd2a79098c2442a0916eb3a86d278160))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))


### Performance Improvements

* break after routed payload refresh ([2f2711c](https://github.com/tezjs/tez.js/commit/2f2711cccb605a81d1cc42752162770f9300c079))



## 1.0.1 (2021-06-24)



## 0.0.83 (2022-08-20)


### Bug Fixes

* **cli:** stackblitz playground ([50df453](https://github.com/tezjs/tez.js/commit/50df453dcff5725a7e8d2b9d6397ee4e99eac690))



## 0.0.82 (2022-08-18)


### Bug Fixes

* **vue:** maintain route state with query string ([58e1c2f](https://github.com/tezjs/tez.js/commit/58e1c2ffd237bd600077b43ad6f4675b9dec34cb))



## 0.0.81 (2022-08-17)


### Bug Fixes

* **vue:** load post script if pre components are loaded ([b074fde](https://github.com/tezjs/tez.js/commit/b074fded4b812713eec2277accb52720a3732e1e))



## 0.0.80 (2022-08-17)


### Features

* **vue:** handle hash url ([d2fb186](https://github.com/tezjs/tez.js/commit/d2fb18607c6e26fd5521875ec299a5355a4617a9))



## 0.0.79 (2022-08-16)


### Bug Fixes

* **vite:** read tez configuration before initializing the app ([848e3fd](https://github.com/tezjs/tez.js/commit/848e3fd7bad6f86fde1a46552d2e135024890c79))
* **vite:** remove 'dev' mode ([1a12421](https://github.com/tezjs/tez.js/commit/1a124219a947768ebbdd5c85e982c03b2f9c99c0))


### Features

* **vite:** generate sw.js configurable ([5f74c9e](https://github.com/tezjs/tez.js/commit/5f74c9ea29ba05b447098a1f6ac2260baeaa39e1))



## 0.0.78 (2022-08-16)


### Bug Fixes

* **vue:** stop multiple times scroll event ([74a354e](https://github.com/tezjs/tez.js/commit/74a354e2f1115f6e5844a8338bac56ecb10c330f))


### Features

* **vite:** export dev function to get the base configuration and run the app in dev mode through vite config ([a8d320a](https://github.com/tezjs/tez.js/commit/a8d320afb04e047c7ce8c957ba2f8206242a008e))


### Performance Improvements

* **vue:** improve component loading sequencing & LCP of the page ([9bd456d](https://github.com/tezjs/tez.js/commit/9bd456d42b29937ea3443f89a3cb11d03742f46c))



## 0.0.77 (2022-08-15)


### Bug Fixes

* **vite:** parse json schema ([daaf00b](https://github.com/tezjs/tez.js/commit/daaf00b5b9219168322f5dc179080bacfd5baa2e))



## 0.0.76 (2022-08-15)


### Bug Fixes

* **vite:** add build version only build mode ([7c22cc5](https://github.com/tezjs/tez.js/commit/7c22cc578f43285c0fcf40e165856b0669fc4425))
* **vite:** bundle page wise css ([177fbf1](https://github.com/tezjs/tez.js/commit/177fbf17ca1475b1b9344ae5b80f2ff052bb9d3d))
* **vite:** conflict vue / @tezjs/vue ([eb358d5](https://github.com/tezjs/tez.js/commit/eb358d5cd3bcf3ab1291494985ec9122f879262e))
* **vite:** return correct js path ([9071731](https://github.com/tezjs/tez.js/commit/9071731ffd6941724e4501356d33634537659ff9))



## 0.0.75 (2022-08-13)


### Bug Fixes

* **vite:** linking json data regex ([1f2bc4e](https://github.com/tezjs/tez.js/commit/1f2bc4e40edeeb0d55d2542360bfaf7856c20efc))



## 0.0.74 (2022-08-12)


### Bug Fixes

* **vite:** all deps must be in lowercase ([7e422f3](https://github.com/tezjs/tez.js/commit/7e422f369b75a83a293c1d698e00549c6f4e7618))
* **vite:** correct reference of CommonPathResolver ([819b42b](https://github.com/tezjs/tez.js/commit/819b42bf0643316c02dbc6ba1143ef33b6bbc6c6))



## 0.0.73 (2022-08-12)


### Bug Fixes

* **docs:** Correct Questions Url ([e5ebd0a](https://github.com/tezjs/tez.js/commit/e5ebd0a040f495b8f41dbdc990e050620a8a3bec))
* **docs:** typo mistake ([154aea9](https://github.com/tezjs/tez.js/commit/154aea920c5e87577b34b44d5e2f2e87a97ddf58))



## 0.0.72 (2022-08-11)



## 0.0.71 (2022-08-10)


### Bug Fixes

* **vite:** remove additional forward slash ([3f0a34e](https://github.com/tezjs/tez.js/commit/3f0a34e51e54962c641f829714a5ccc7e529da84))



## 0.0.70 (2022-08-10)


### Bug Fixes

* **vite:** add build version after release ([0236f51](https://github.com/tezjs/tez.js/commit/0236f51d6c2be3509d01874f576d4a2c88b07912))
* **vite:** gen component file names in lowercase ([12554e6](https://github.com/tezjs/tez.js/commit/12554e6617ee96499758b0a6eddafcf6ebde1a60))
* **vite:** gen component file names in lowercase ([aa13b16](https://github.com/tezjs/tez.js/commit/aa13b16f406157d4e39ca84827dd8c31962e5d01))
* **vite:** include css if js is not direct reference to the respective component ([7b0f03f](https://github.com/tezjs/tez.js/commit/7b0f03f2b1d32aadf5af4faa8f04de63418956ec))



## 0.0.69 (2022-08-09)


### Bug Fixes

* **vite:** preload correct component path ([5d0f20d](https://github.com/tezjs/tez.js/commit/5d0f20dfac40d5dd5d00cd7e065550e8b3a5d33e))


### Features

* **vite:** conditional generate sitemap & robots ([b2c48be](https://github.com/tezjs/tez.js/commit/b2c48be75f300465fdb4374f7f048fa016a40684))



## 0.0.68 (2022-08-09)


### Bug Fixes

* **vite:** remove replacer ([b4ec9b2](https://github.com/tezjs/tez.js/commit/b4ec9b228ad0f84432e16e80547bd36c472bc9e2))


### Features

* **vite:** conditional minification ([1ccb3e3](https://github.com/tezjs/tez.js/commit/1ccb3e330fa3daa8f56fad1bea32293e78fd8094))



## 0.0.67 (2022-08-09)


### Bug Fixes

* **vite:** include non variable reference imports ([23a13ef](https://github.com/tezjs/tez.js/commit/23a13ef1f5fefb340dcec0533566c888554fb3bc))


### Features

* **vue:** add query params in router ([4ade609](https://github.com/tezjs/tez.js/commit/4ade60956352042828ab68286b5d46d36de1df0d))



## 0.0.66 (2022-08-09)



## 0.0.65 (2022-08-08)


### Bug Fixes

* **payload:** set regex for replace the route path with replace method ([6ecf122](https://github.com/tezjs/tez.js/commit/6ecf122e6638a565530fdcc7ce67fc751ead745f))
* **vite:** correct regex  onResolve filter ([3160844](https://github.com/tezjs/tez.js/commit/31608445462fe05f79329067892e4f913e8121bd))



## 0.0.64 (2022-08-08)



## 0.0.63 (2022-08-08)


### Bug Fixes

* **vite:** add '@tezjs/vue' in optimizeDeps ([693cdbf](https://github.com/tezjs/tez.js/commit/693cdbfcc69fd24800143bf37b1d10f414c33112))



## 0.0.62 (2022-08-08)


### Bug Fixes

* **cli:** SPAWN ENOENT ([9567654](https://github.com/tezjs/tez.js/commit/9567654d36693bd10fcf393767bef2c4db3692d0))



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)


### Bug Fixes

* **create-tez:** add missing @tezjs/route package ([1e4d532](https://github.com/tezjs/tez.js/commit/1e4d532c1d886e8f337e4ddf83510ed02ca55e1f))
* **route:** set correct @tezjs/common package version ([6039f6d](https://github.com/tezjs/tez.js/commit/6039f6da56e40cd046b3be414d581af29038d3e5))



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* add modules property for tez module external plugin ([c8528a5](https://github.com/tezjs/tez.js/commit/c8528a57e52960e9847888c4602474a1df7fa911))
* **create-tez:** add tezjs with vue starter template ([1f6a61c](https://github.com/tezjs/tez.js/commit/1f6a61c50cdbeff56e65389c1d7324e71a0fb697))
* **route:** add new package '@tezjs/route' for auto-routes ([f8b8e3e](https://github.com/tezjs/tez.js/commit/f8b8e3e255ee069e7326845a9f08ee45e37591a0))
* **vite:** auto resolve all layout component in final build ([2d818fa](https://github.com/tezjs/tez.js/commit/2d818fa3c5f82ec5c2cd9ed695bd51b92f2ad899))
* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)


### Bug Fixes

* **common:** correct lib path when cust source code path is configured ([d8d888a](https://github.com/tezjs/tez.js/commit/d8d888afe53812fc92a1f522c1f1a303804e4233))
* **payload:** ignore undefined component in payload ([02d6183](https://github.com/tezjs/tez.js/commit/02d618362d1b919d1fd6d1ee43d8cdb037b79ae8))
* **vite:** custom source path undefined ([943703d](https://github.com/tezjs/tez.js/commit/943703d4c3a0728cb0873d45da75d2ac1f7f899c))
* **vite:** resolve addLib ([684107a](https://github.com/tezjs/tez.js/commit/684107a3aa83513a51af8bdc334d56daacba21e2))



## 0.0.57 (2022-08-04)


### Bug Fixes

* **types:** set as nullable 'preFetch' property ([4261964](https://github.com/tezjs/tez.js/commit/42619640072af4f1e62ef2a547140c677254396e))
* **vite:** call bundle css method if bundlecss is true ([c79bc24](https://github.com/tezjs/tez.js/commit/c79bc24cf905f67833394218df0e3c23b19ec81b))
* **vite:** check path value before assigning the reference ([4d53ab3](https://github.com/tezjs/tez.js/commit/4d53ab3b920e12fad9cde645c0dbfb8fddd18704))
* **vite:** persist global html meta configuration ([82edd78](https://github.com/tezjs/tez.js/commit/82edd78359f319e5a540b9aea75bf3c786cea434))
* **vite:** set custom source code path ([84006bc](https://github.com/tezjs/tez.js/commit/84006bce97373596d791299886eef1f8b01df633))


### Features

* **vite:** preload components & respective dependencies page wise ([e385a5c](https://github.com/tezjs/tez.js/commit/e385a5c8c0d914c2ef6c757c3e216ee10a1f5a69))



## 0.0.56 (2022-08-03)


### Bug Fixes

* **vite:** ignore tez.css from page wise css bundling ([2bda791](https://github.com/tezjs/tez.js/commit/2bda7915f1c5a6c78bd0f6ccebed0990b9370488))
* **vite:** remove closing element of link tag ([c29b24e](https://github.com/tezjs/tez.js/commit/c29b24e64085efc137d8f16659612e5b20e14a6f))
* **vite:** resolve mobile component in pre script ([a22c831](https://github.com/tezjs/tez.js/commit/a22c831cc09bef06e0b335c982f663078211e662))


### Features

* **common:** set source folder path ([4785ca5](https://github.com/tezjs/tez.js/commit/4785ca5d27ff315a31132a5fc475fba413937338))
* **vite:** add preconnect link element ([cd78224](https://github.com/tezjs/tez.js/commit/cd7822466675fab2dcbb7a559ee24d4f54362fad))
* **vite:** allow to set dns-prefetch link element ([afc13ca](https://github.com/tezjs/tez.js/commit/afc13cafdadbd67ebfe80f8ed31471b809a0c25a))
* **vite:** allow to set prefetch path ([bdfefe0](https://github.com/tezjs/tez.js/commit/bdfefe0afdfdc9fdf7263fd46c8c43934e5e23cd))
* **vite:** bundle pagewise css ([a26379c](https://github.com/tezjs/tez.js/commit/a26379ccfc1c41d1d7392659733f046bceb96358))
* **vite:** page wise post script prefetch ([0ae4b21](https://github.com/tezjs/tez.js/commit/0ae4b2140bf44aaf3f7af47c4fc1b35e8876bc3b))
* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)


### Bug Fixes

* **vite:** component & layout import path in glob.js ([0a960a8](https://github.com/tezjs/tez.js/commit/0a960a8c0707e8134d9052dd5a838875da146465))
* **vite:** missing package under commonjs execution ([ad6bf38](https://github.com/tezjs/tez.js/commit/ad6bf3839d979b9736ca5936670a17550a4bac92))
* **vite:** replace new line code with blank from linkingData ([f072ed2](https://github.com/tezjs/tez.js/commit/f072ed2a79bbd664ffc6cefc183e616a562449c6))


### Features

* **vite:** customize tez build config with vite build ([3ba9bd0](https://github.com/tezjs/tez.js/commit/3ba9bd0dae5cb1e9cb73cd36c40af090da5025dc))
* **vite:** set as default production build ([1b3e21a](https://github.com/tezjs/tez.js/commit/1b3e21a418fbc3423d40bc90003ca19d8d3675da))



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **payload:** incorrect curly bracket ([c9c3f61](https://github.com/tezjs/tez.js/commit/c9c3f61373a1b6eb7aa7af77bb1550cd4bc25a66))
* **payload:** not to create robots when custom payload generator is configured ([bde0e1d](https://github.com/tezjs/tez.js/commit/bde0e1dd5fd1adc5f79da019e56777c2e7cd4ff9))
* **types:** mark as nullable prop of 'amplify' ([2efec85](https://github.com/tezjs/tez.js/commit/2efec85eb3bb217a018178bc48144b7ea604132a))
* **vite:** import plugins if exists ([740b3b8](https://github.com/tezjs/tez.js/commit/740b3b85f6464ac59a46cc27c7f8ac7eb5a8d875))
* **vite:** obviate number from component name ([c20801f](https://github.com/tezjs/tez.js/commit/c20801fbcfd187a41d57c03dad56449e6aacf09e))
* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))


### Features

* **payload:** pass additional props for custom payload generator ([a5d9217](https://github.com/tezjs/tez.js/commit/a5d921710eda26cdd9a1b7650af4efce64357437))
* **payload:** set routes for custom payload generator ([3eeed41](https://github.com/tezjs/tez.js/commit/3eeed41d47212ca1de4742eb4975520460f0e249))



## 0.0.51 (2022-07-26)


### Bug Fixes

* **payload:** ignore non change frequency & priority set url in sitemap ([ecd1ac0](https://github.com/tezjs/tez.js/commit/ecd1ac002a3a348d261a9878001839da987a1f41))



## 0.0.50 (2022-07-25)


### Bug Fixes

* **vite:** add proper format of linkingdata ([719a00e](https://github.com/tezjs/tez.js/commit/719a00e8d7f7aa52eb825300d231db7799f19fa8))



## 0.0.49 (2022-07-25)


### Features

* **payload:** add custom payload generator ([4013e8a](https://github.com/tezjs/tez.js/commit/4013e8a93d37647cf4ba723ca5c41e20d541c801))



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))
* **vite:** minify pre/post/preload js after build ([b0f2631](https://github.com/tezjs/tez.js/commit/b0f26311dfd41e63d9eaffd4d56c87624dfb03b0))



## 0.0.47 (2022-07-22)


### Bug Fixes

* **create-tez:** properly reference the property name ([c82e89a](https://github.com/tezjs/tez.js/commit/c82e89a44a73b96281871ead07746a2ea0f3f997))



## 0.0.46 (2022-07-22)


### Bug Fixes

* **vite:** obviate additional right slash from preload script url. ([2c5415e](https://github.com/tezjs/tez.js/commit/2c5415e7eb6727b51e0b2789dce79f1e5d2ff3ff))
* **vite:** preload items check before push ([e92933a](https://github.com/tezjs/tez.js/commit/e92933acedd4366df65ee427986ca3fe4b11e875))



## 0.0.45 (2022-07-22)


### Bug Fixes

* **payload:** redirect routes undefined then set blank array ([f3f39fc](https://github.com/tezjs/tez.js/commit/f3f39fc455f86464cda3c4dcfd12f39e3a7c7421))
* **vite:** import component correctly ([6deea03](https://github.com/tezjs/tez.js/commit/6deea03662eac54bffc7bcb06b4193d6a65e15a0))
* **vite:** obviate function while resolve the route ([a74e519](https://github.com/tezjs/tez.js/commit/a74e519b9bbbc41489f6a1c297448c54a81a0bfa))
* **vite:** set actual path instead of object ([4d986fb](https://github.com/tezjs/tez.js/commit/4d986fb234c3f102a34bbaa3ab071b16b3ee353c))
* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Bug Fixes

* **payload:** write firebase redirect routes ([a745423](https://github.com/tezjs/tez.js/commit/a7454230127a1efca8e0435502bb159f85467137))


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))
* **vite:** preload tz.js ([fcb7507](https://github.com/tezjs/tez.js/commit/fcb7507dcbd9ad46da9dce2e086b030844dc89c2))



## 0.0.43 (2022-07-19)


### Bug Fixes

* **payload:** map correct object for parse value ([4414bf6](https://github.com/tezjs/tez.js/commit/4414bf6b1091192a39f32e9dcac46f5e6622fefb))



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)


### Bug Fixes

* **payload:** add siteurl prefix in sitemap ([e848220](https://github.com/tezjs/tez.js/commit/e848220046acefb7a70432683544bf7bc5509f63))



## 0.0.39 (2022-07-15)


### Bug Fixes

* **vite:** write tz.js file on build complete ([b47ddcc](https://github.com/tezjs/tez.js/commit/b47ddcc68c5cd449274ad7bd690069ae1693e64b))



## 0.0.38 (2022-07-15)


### Bug Fixes

* **create-tez:** allow .cache folder permission while running in docker ([cc6226f](https://github.com/tezjs/tez.js/commit/cc6226f53fc209cc1d9b56efb06ee257b3067eb7))
* **vite:** add footer slot in post script ([ca36bad](https://github.com/tezjs/tez.js/commit/ca36bad8e9c6a3455e5237c77d2acb21c8527400))
* **vite:** remove suffix from image url while parsing the text ([581caf7](https://github.com/tezjs/tez.js/commit/581caf7ce3d26587a661c3fe898b51bebd26af48))
* **vite:** script & style property undefined check ([e7120c6](https://github.com/tezjs/tez.js/commit/e7120c6ed60fc8de01d1c269cb4b19cfc37df730))
* **vite:** segregate components conditionally in pre/post script ([a095a11](https://github.com/tezjs/tez.js/commit/a095a11ea5e7c5e625d48641554cbc9cb27ff014))


### Features

* conditional inline css/js reference on the page ([1bc7469](https://github.com/tezjs/tez.js/commit/1bc7469ae0a42837cb2889f989c75b63aa0f7603))
* **create-tez:** connect remote  container from vs code ([9602c2c](https://github.com/tezjs/tez.js/commit/9602c2c9b8eb83316d1461ab4273be7399160f71))
* **payload:** allow svg image to write in local folder ([89c9fb2](https://github.com/tezjs/tez.js/commit/89c9fb2770196e6a9696e28e4161972d12b015da))
* **vite:** preload underneath dependencies page wise ([a696e79](https://github.com/tezjs/tez.js/commit/a696e79d00d1317505958de370c87115a41b1ab7))
* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **common:** correct root (index) folder path ([8ae15d0](https://github.com/tezjs/tez.js/commit/8ae15d033e157eac413377e3e957d882bab281d3))
* **vite:** correct index.html root write path ([587aef5](https://github.com/tezjs/tez.js/commit/587aef58c7216e7a214f44fa706bf78c6b033735))
* **vite:** create html file at root ([1015c14](https://github.com/tezjs/tez.js/commit/1015c140cb5d6b16f15830c840d1c2fc9e955875))
* **vite:** generate index.html at root of the dist ([236ef35](https://github.com/tezjs/tez.js/commit/236ef35391108b83d50c658f11b9d3cb0bded5ee))
* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **js:** export isMobile function ([66f69c3](https://github.com/tezjs/tez.js/commit/66f69c3cf39da9202b804ccc96e017ab1b601354))
* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vite:** create tez.ts if not exists during build ([40db4ec](https://github.com/tezjs/tez.js/commit/40db4ec077cc83f0a055afb2924c5d609cc8a68c))
* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))
* **vue:** content attribute added to viewport meta tag ([2b35309](https://github.com/tezjs/tez.js/commit/2b353098551b99d9d5175f208980821c71c14536))



## 0.0.34 (2022-07-06)


### Bug Fixes

* **payload:** filter nested data ([a1ad7a7](https://github.com/tezjs/tez.js/commit/a1ad7a7f13a943112c8ac14ca64b06ea1454f461))



## 0.0.33 (2022-07-06)


### Bug Fixes

* **create-tez:** undefined message variable ([ca2c0b2](https://github.com/tezjs/tez.js/commit/ca2c0b2873508ea588cea2d2a3f89a31aa1de99e))



## 0.0.32 (2022-07-06)


### Bug Fixes

* **create-tez:** installing dependencies ([da6980a](https://github.com/tezjs/tez.js/commit/da6980aa1ba7473aaeef55ef406f1a2e5ad1573e))



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Bug Fixes

* **vite:** replace numbers from component name ([a8923b2](https://github.com/tezjs/tez.js/commit/a8923b20db8f7970cd6b8ec884c399f4c6ceecb1))


### Features

* **payload:** deep populate strapi data ([9eedc19](https://github.com/tezjs/tez.js/commit/9eedc19b0d85245c92a08d7b97bf743205c952e8))
* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Bug Fixes

* folder path seperator ([0629c06](https://github.com/tezjs/tez.js/commit/0629c06bdccdf9c54fbb51e436ec5702e11d2e5e))


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))
* **vite:** bundle page wise components and payload ([58dffbc](https://github.com/tezjs/tez.js/commit/58dffbccf6f71e0f8aa696675427a485b9ef4a52))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)


### Bug Fixes

* **create-tez:** resolve template directory path ([22c3751](https://github.com/tezjs/tez.js/commit/22c3751841a65b076501edfb8d6b4f035752d0f8))



## 0.0.25 (2022-06-13)


### Bug Fixes

* **payload:** remove back-slash from 'imageFolderPath' folder path ([bb80f77](https://github.com/tezjs/tez.js/commit/bb80f77d16dcd9728c8773a2c1004fcc54b3638b))
* **vite:** put 'await' while reading the tex config ([3d48f37](https://github.com/tezjs/tez.js/commit/3d48f37c91451739332dde43a080e3a0a86e7843))


### Features

* **create-tez:** automagically install scaffold template packages ([74afa89](https://github.com/tezjs/tez.js/commit/74afa8977f34ea9e9ba798f717e4401bf7b7de11))



## 0.0.24 (2022-06-02)


### Bug Fixes

* **payload:** parse query string with correct object ([d774399](https://github.com/tezjs/tez.js/commit/d774399eabe24b8e55272ba1247b8f8443b13030))



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **payload:** null check before transform the value ([aeb72bf](https://github.com/tezjs/tez.js/commit/aeb72bfd49bf8d843833c216f2942deb54cef502))
* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **common:** merge strapi default & user configuration ([ac60db7](https://github.com/tezjs/tez.js/commit/ac60db7263663eb6d9c9fdbc974ca4138ed1f8f3))
* **payload:** refresh reference content on the page ([1f438f0](https://github.com/tezjs/tez.js/commit/1f438f03669f32f2e3f6c599b9e6bb8ff8b9a5d0))
* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)


### Bug Fixes

* **create-tez:** add tsconfig in the project template ([88ec68a](https://github.com/tezjs/tez.js/commit/88ec68a819c6522f2d98c8cc7716a3df975d6625))
* **payload:** handle if masterpage is not set ([7be053c](https://github.com/tezjs/tez.js/commit/7be053c56111cd659cf8582f57ca5bf500d8a5ec))



## 0.0.19 (2022-05-28)


### Bug Fixes

* **create-tez:** ignore dist folder ([e79b290](https://github.com/tezjs/tez.js/commit/e79b290a44b9e57af97c2e70d68b66bbe4a76736))
* **create-tez:** tez strapi template seed data ([47ca764](https://github.com/tezjs/tez.js/commit/47ca7642ae2fd9f02384bd5f50f3140f1295905c))


### Features

* **types:** add prop amplify in deployment config ([b2a69a5](https://github.com/tezjs/tez.js/commit/b2a69a5f7f7ea615a2485cb6904590dac5a759c4))



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* sw template ([dc01931](https://github.com/tezjs/tez.js/commit/dc019313b125c32e8dd154beb2c5abd2241379f0))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))
* auto generate firebase deployment config ([6bceb53](https://github.com/tezjs/tez.js/commit/6bceb538d95a1e13bd53f87f675fe2dfe2d283d0))



## 0.0.16 (2022-05-26)



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* add optimizedeps path ([ddf68d4](https://github.com/tezjs/tez.js/commit/ddf68d46d6faeda6a295fb6ba9c337243d4038d5))
* auto generate tez.ts ([0725939](https://github.com/tezjs/tez.js/commit/072593975992dc81595e709a1986e4612db16ce1))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* change template path of service worker ([a68bf32](https://github.com/tezjs/tez.js/commit/a68bf32400e59b9941ff6e07bd27b7879567da28))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* convert into string instead array of html elements ([b453632](https://github.com/tezjs/tez.js/commit/b453632c36b8cbebd63c4d0e336bd4f8de1e9869))
* correct alias path ([0984d59](https://github.com/tezjs/tez.js/commit/0984d59a158ffe79dcad792e616fbea992ccb9eb))
* generate payload based on rootDir ([688b050](https://github.com/tezjs/tez.js/commit/688b050fd7810aaa3063cf2977ec7faa512e899b))
* generate sitemap and robots file ([bca1779](https://github.com/tezjs/tez.js/commit/bca17791f79d1ce3ad58eb500f741ec930a95175))
* generated html script and payload path ([6f7a14c](https://github.com/tezjs/tez.js/commit/6f7a14c86332af7928fabb34d6379bb70361ebc2))
* ignore broadcastchannel image request from local environment ([b23183a](https://github.com/tezjs/tez.js/commit/b23183ac151312047b5664763cc9767c75d8e47f))
* ignore undefined element in sitemap ([c3466a0](https://github.com/tezjs/tez.js/commit/c3466a023fd3b1005c4443a7a038e246a8be3e6d))
* image creating without configuration ([c2223d7](https://github.com/tezjs/tez.js/commit/c2223d74464327a22029dbcfa0a743a7d26de66a))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* minify index.html ([67dca05](https://github.com/tezjs/tez.js/commit/67dca0532e0e9a2fc6ab2b53bffccb31afa242a5))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* pass blank object if component data is undefined ([b1ed00f](https://github.com/tezjs/tez.js/commit/b1ed00f979f575daf602977e3cfe48383a3c83fc))
* pass blank object if seo object is null ([bed1681](https://github.com/tezjs/tez.js/commit/bed1681e173ab696193185a1a697028bcb9f84b9))
* reading seo payload path ([d6abff2](https://github.com/tezjs/tez.js/commit/d6abff2c24a3f81fb375bd2ceb805de92cbabe84))
* refresh specific route folder ([35a081f](https://github.com/tezjs/tez.js/commit/35a081f2460995cb7f5f662ce58052750f2de39d))
* resolve dynamic express module ([d41bcd0](https://github.com/tezjs/tez.js/commit/d41bcd02a672c185df62b8cb88e42c49544eb4c4))
* resolve import object value ([1fcedca](https://github.com/tezjs/tez.js/commit/1fcedca8083f2f8b36668961a977b4b75a22372d))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* return sitemap xelement ([ba1a4e3](https://github.com/tezjs/tez.js/commit/ba1a4e3b4eb1ec3d6847fb443eeb42eab1752535))
* service worker template code ([5ecd699](https://github.com/tezjs/tez.js/commit/5ecd69985060474a7d0ad7a1ecdad4e3cbf2eae2))
* set correct components folder path ([9c99697](https://github.com/tezjs/tez.js/commit/9c99697b207de11e46291a42a00661e147bc634c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* set correct payload path ([2b529ef](https://github.com/tezjs/tez.js/commit/2b529eff4cb6599e5e8a6ff224631e3d4606ee6a))
* set correct payload path ([3135c6a](https://github.com/tezjs/tez.js/commit/3135c6a36068abcd72a5359ddbeb2cb108cd4f03))
* tez dev ([d3e8e60](https://github.com/tezjs/tez.js/commit/d3e8e60991ec4bf16df2d0e31580336537b0ddf8))
* undefined payload object ([b6d1a76](https://github.com/tezjs/tez.js/commit/b6d1a76cd79d38cf9d73322d1846e0af68d2e266))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add custom route ([643d7d9](https://github.com/tezjs/tez.js/commit/643d7d98b4a5bf4fd1df058648e746dcfbbbdb98))
* add dynamic page record in the generic collections ([df6a56c](https://github.com/tezjs/tez.js/commit/df6a56ce8099a48d97c439e705b9d84901b38a81))
* add html page and seo tag ([e911e02](https://github.com/tezjs/tez.js/commit/e911e029ad10fa23656866e49966731428eb7174))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add master layout ([2a97b9c](https://github.com/tezjs/tez.js/commit/2a97b9c009099fdd4e12279f568a65493b9dc840))
* add multiple page schema on page ([6a9b3d3](https://github.com/tezjs/tez.js/commit/6a9b3d39a1310a4234a93636cb92dc96336a08c9))
* add new package '@tezjs/js' ([b51de5f](https://github.com/tezjs/tez.js/commit/b51de5fb7532ce692a222257a2b4ff095c1beb4d))
* add pwa ([05c407a](https://github.com/tezjs/tez.js/commit/05c407a9cc964e81b6eb6b7c2da77e3b9400f324))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* add zero configuration for tez app ([c79defe](https://github.com/tezjs/tez.js/commit/c79defef78ab02fc4ee8302260095a41ae043790))
* build through tez cli ([e23245b](https://github.com/tezjs/tez.js/commit/e23245b28d2ef32449f6c7df7fa3cc5b7737866c))
* configure custom page & payload ([da5e6a3](https://github.com/tezjs/tez.js/commit/da5e6a3baaf4dd9fc68b40254652eeb2a8b0ecd2))
* convert image into webp ([2fe8b1a](https://github.com/tezjs/tez.js/commit/2fe8b1adee35cf2304d44ec0546c94576e6abf45))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* custom page payload generator ([4d711f0](https://github.com/tezjs/tez.js/commit/4d711f032ab3373f94fafaaaa07e44bda028634a))
* define tez config conditionally ([168726a](https://github.com/tezjs/tez.js/commit/168726abdc85b2a05f3637f272b5d90b8f0b66c2))
* entity wise pagination configuration ([bacf79c](https://github.com/tezjs/tez.js/commit/bacf79cd590ed1623dd91b7d7855867e7e58a495))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* favicon & preload link configuration ([48fbefb](https://github.com/tezjs/tez.js/commit/48fbefbc4a59056a7f12f8f869b7d0bca44e855c))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* imports at root ts ([78da3da](https://github.com/tezjs/tez.js/commit/78da3da39fa180192a4745ccdc65528d5e3fc001))
* load lazy data ([1fe8e3a](https://github.com/tezjs/tez.js/commit/1fe8e3aff508c56f0989f36bdf53cfb9e4bc366e))
* parse object value ([8ec54cd](https://github.com/tezjs/tez.js/commit/8ec54cdefab3d865512087fad4ea3c7097b9111f))
* redirect-routes added ([6efde53](https://github.com/tezjs/tez.js/commit/6efde539142f11f2bad9410de51eb22c58c0813b))
* run add lib ([26c78c7](https://github.com/tezjs/tez.js/commit/26c78c7a1ad9932b8b87c1241618136922ba0f38))
* set default / custom port ([8d1f293](https://github.com/tezjs/tez.js/commit/8d1f29332fdedc08ed9fdb80d2d15a4536523fcf))
* sitemap, robots and seo added ([115adf0](https://github.com/tezjs/tez.js/commit/115adf0455cf6de38262a5e6fb1cd61f82d407ab))
* sitemap, robots and seo feature added ([6fbd3d2](https://github.com/tezjs/tez.js/commit/6fbd3d2bf159138b5344a3f93e3a7b9408c55f73))
* strapi package features ([f71125a](https://github.com/tezjs/tez.js/commit/f71125a31892a6e2e343fcb8bc5d3553e35b8755))
* **strapi:** add sanitizer component level data ([2326b22](https://github.com/tezjs/tez.js/commit/2326b22e19bf8913230bca63e351ae95fff7cbcc))
* **strapi:** component data wise pagination ([0390097](https://github.com/tezjs/tez.js/commit/0390097f0b0e7d83774dd5d639a5768ecda4db59))
* tez cli initial code added ([1c9ec72](https://github.com/tezjs/tez.js/commit/1c9ec723ea305edd8b31cf5729faf1c719174572))
* typed env variable ([80c291a](https://github.com/tezjs/tez.js/commit/80c291a23d8006d5b4321766f196314c894aefca))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** request image through broadcastchannel ([7e0329f](https://github.com/tezjs/tez.js/commit/7e0329f7fd2a79098c2442a0916eb3a86d278160))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))


### Performance Improvements

* break after routed payload refresh ([2f2711c](https://github.com/tezjs/tez.js/commit/2f2711cccb605a81d1cc42752162770f9300c079))



## 1.0.1 (2021-06-24)



## 0.0.82 (2022-08-18)


### Bug Fixes

* **vue:** maintain route state with query string ([58e1c2f](https://github.com/tezjs/tez.js/commit/58e1c2ffd237bd600077b43ad6f4675b9dec34cb))



## 0.0.81 (2022-08-17)


### Bug Fixes

* **vue:** load post script if pre components are loaded ([b074fde](https://github.com/tezjs/tez.js/commit/b074fded4b812713eec2277accb52720a3732e1e))



## 0.0.80 (2022-08-17)


### Features

* **vue:** handle hash url ([d2fb186](https://github.com/tezjs/tez.js/commit/d2fb18607c6e26fd5521875ec299a5355a4617a9))



## 0.0.79 (2022-08-16)


### Bug Fixes

* **vite:** read tez configuration before initializing the app ([848e3fd](https://github.com/tezjs/tez.js/commit/848e3fd7bad6f86fde1a46552d2e135024890c79))
* **vite:** remove 'dev' mode ([1a12421](https://github.com/tezjs/tez.js/commit/1a124219a947768ebbdd5c85e982c03b2f9c99c0))


### Features

* **vite:** generate sw.js configurable ([5f74c9e](https://github.com/tezjs/tez.js/commit/5f74c9ea29ba05b447098a1f6ac2260baeaa39e1))



## 0.0.78 (2022-08-16)


### Bug Fixes

* **vue:** stop multiple times scroll event ([74a354e](https://github.com/tezjs/tez.js/commit/74a354e2f1115f6e5844a8338bac56ecb10c330f))


### Features

* **vite:** export dev function to get the base configuration and run the app in dev mode through vite config ([a8d320a](https://github.com/tezjs/tez.js/commit/a8d320afb04e047c7ce8c957ba2f8206242a008e))


### Performance Improvements

* **vue:** improve component loading sequencing & LCP of the page ([9bd456d](https://github.com/tezjs/tez.js/commit/9bd456d42b29937ea3443f89a3cb11d03742f46c))



## 0.0.77 (2022-08-15)


### Bug Fixes

* **vite:** parse json schema ([daaf00b](https://github.com/tezjs/tez.js/commit/daaf00b5b9219168322f5dc179080bacfd5baa2e))



## 0.0.76 (2022-08-15)


### Bug Fixes

* **vite:** add build version only build mode ([7c22cc5](https://github.com/tezjs/tez.js/commit/7c22cc578f43285c0fcf40e165856b0669fc4425))
* **vite:** bundle page wise css ([177fbf1](https://github.com/tezjs/tez.js/commit/177fbf17ca1475b1b9344ae5b80f2ff052bb9d3d))
* **vite:** conflict vue / @tezjs/vue ([eb358d5](https://github.com/tezjs/tez.js/commit/eb358d5cd3bcf3ab1291494985ec9122f879262e))
* **vite:** return correct js path ([9071731](https://github.com/tezjs/tez.js/commit/9071731ffd6941724e4501356d33634537659ff9))



## 0.0.75 (2022-08-13)


### Bug Fixes

* **vite:** linking json data regex ([1f2bc4e](https://github.com/tezjs/tez.js/commit/1f2bc4e40edeeb0d55d2542360bfaf7856c20efc))



## 0.0.74 (2022-08-12)


### Bug Fixes

* **vite:** all deps must be in lowercase ([7e422f3](https://github.com/tezjs/tez.js/commit/7e422f369b75a83a293c1d698e00549c6f4e7618))
* **vite:** correct reference of CommonPathResolver ([819b42b](https://github.com/tezjs/tez.js/commit/819b42bf0643316c02dbc6ba1143ef33b6bbc6c6))



## 0.0.73 (2022-08-12)


### Bug Fixes

* **docs:** Correct Questions Url ([e5ebd0a](https://github.com/tezjs/tez.js/commit/e5ebd0a040f495b8f41dbdc990e050620a8a3bec))
* **docs:** typo mistake ([154aea9](https://github.com/tezjs/tez.js/commit/154aea920c5e87577b34b44d5e2f2e87a97ddf58))



## 0.0.72 (2022-08-11)



## 0.0.71 (2022-08-10)


### Bug Fixes

* **vite:** remove additional forward slash ([3f0a34e](https://github.com/tezjs/tez.js/commit/3f0a34e51e54962c641f829714a5ccc7e529da84))



## 0.0.70 (2022-08-10)


### Bug Fixes

* **vite:** add build version after release ([0236f51](https://github.com/tezjs/tez.js/commit/0236f51d6c2be3509d01874f576d4a2c88b07912))
* **vite:** gen component file names in lowercase ([12554e6](https://github.com/tezjs/tez.js/commit/12554e6617ee96499758b0a6eddafcf6ebde1a60))
* **vite:** gen component file names in lowercase ([aa13b16](https://github.com/tezjs/tez.js/commit/aa13b16f406157d4e39ca84827dd8c31962e5d01))
* **vite:** include css if js is not direct reference to the respective component ([7b0f03f](https://github.com/tezjs/tez.js/commit/7b0f03f2b1d32aadf5af4faa8f04de63418956ec))



## 0.0.69 (2022-08-09)


### Bug Fixes

* **vite:** preload correct component path ([5d0f20d](https://github.com/tezjs/tez.js/commit/5d0f20dfac40d5dd5d00cd7e065550e8b3a5d33e))


### Features

* **vite:** conditional generate sitemap & robots ([b2c48be](https://github.com/tezjs/tez.js/commit/b2c48be75f300465fdb4374f7f048fa016a40684))



## 0.0.68 (2022-08-09)


### Bug Fixes

* **vite:** remove replacer ([b4ec9b2](https://github.com/tezjs/tez.js/commit/b4ec9b228ad0f84432e16e80547bd36c472bc9e2))


### Features

* **vite:** conditional minification ([1ccb3e3](https://github.com/tezjs/tez.js/commit/1ccb3e330fa3daa8f56fad1bea32293e78fd8094))



## 0.0.67 (2022-08-09)


### Bug Fixes

* **vite:** include non variable reference imports ([23a13ef](https://github.com/tezjs/tez.js/commit/23a13ef1f5fefb340dcec0533566c888554fb3bc))


### Features

* **vue:** add query params in router ([4ade609](https://github.com/tezjs/tez.js/commit/4ade60956352042828ab68286b5d46d36de1df0d))



## 0.0.66 (2022-08-09)



## 0.0.65 (2022-08-08)


### Bug Fixes

* **payload:** set regex for replace the route path with replace method ([6ecf122](https://github.com/tezjs/tez.js/commit/6ecf122e6638a565530fdcc7ce67fc751ead745f))
* **vite:** correct regex  onResolve filter ([3160844](https://github.com/tezjs/tez.js/commit/31608445462fe05f79329067892e4f913e8121bd))



## 0.0.64 (2022-08-08)



## 0.0.63 (2022-08-08)


### Bug Fixes

* **vite:** add '@tezjs/vue' in optimizeDeps ([693cdbf](https://github.com/tezjs/tez.js/commit/693cdbfcc69fd24800143bf37b1d10f414c33112))



## 0.0.62 (2022-08-08)


### Bug Fixes

* **cli:** SPAWN ENOENT ([9567654](https://github.com/tezjs/tez.js/commit/9567654d36693bd10fcf393767bef2c4db3692d0))



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)


### Bug Fixes

* **create-tez:** add missing @tezjs/route package ([1e4d532](https://github.com/tezjs/tez.js/commit/1e4d532c1d886e8f337e4ddf83510ed02ca55e1f))
* **route:** set correct @tezjs/common package version ([6039f6d](https://github.com/tezjs/tez.js/commit/6039f6da56e40cd046b3be414d581af29038d3e5))



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* add modules property for tez module external plugin ([c8528a5](https://github.com/tezjs/tez.js/commit/c8528a57e52960e9847888c4602474a1df7fa911))
* **create-tez:** add tezjs with vue starter template ([1f6a61c](https://github.com/tezjs/tez.js/commit/1f6a61c50cdbeff56e65389c1d7324e71a0fb697))
* **route:** add new package '@tezjs/route' for auto-routes ([f8b8e3e](https://github.com/tezjs/tez.js/commit/f8b8e3e255ee069e7326845a9f08ee45e37591a0))
* **vite:** auto resolve all layout component in final build ([2d818fa](https://github.com/tezjs/tez.js/commit/2d818fa3c5f82ec5c2cd9ed695bd51b92f2ad899))
* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)


### Bug Fixes

* **common:** correct lib path when cust source code path is configured ([d8d888a](https://github.com/tezjs/tez.js/commit/d8d888afe53812fc92a1f522c1f1a303804e4233))
* **payload:** ignore undefined component in payload ([02d6183](https://github.com/tezjs/tez.js/commit/02d618362d1b919d1fd6d1ee43d8cdb037b79ae8))
* **vite:** custom source path undefined ([943703d](https://github.com/tezjs/tez.js/commit/943703d4c3a0728cb0873d45da75d2ac1f7f899c))
* **vite:** resolve addLib ([684107a](https://github.com/tezjs/tez.js/commit/684107a3aa83513a51af8bdc334d56daacba21e2))



## 0.0.57 (2022-08-04)


### Bug Fixes

* **types:** set as nullable 'preFetch' property ([4261964](https://github.com/tezjs/tez.js/commit/42619640072af4f1e62ef2a547140c677254396e))
* **vite:** call bundle css method if bundlecss is true ([c79bc24](https://github.com/tezjs/tez.js/commit/c79bc24cf905f67833394218df0e3c23b19ec81b))
* **vite:** check path value before assigning the reference ([4d53ab3](https://github.com/tezjs/tez.js/commit/4d53ab3b920e12fad9cde645c0dbfb8fddd18704))
* **vite:** persist global html meta configuration ([82edd78](https://github.com/tezjs/tez.js/commit/82edd78359f319e5a540b9aea75bf3c786cea434))
* **vite:** set custom source code path ([84006bc](https://github.com/tezjs/tez.js/commit/84006bce97373596d791299886eef1f8b01df633))


### Features

* **vite:** preload components & respective dependencies page wise ([e385a5c](https://github.com/tezjs/tez.js/commit/e385a5c8c0d914c2ef6c757c3e216ee10a1f5a69))



## 0.0.56 (2022-08-03)


### Bug Fixes

* **vite:** ignore tez.css from page wise css bundling ([2bda791](https://github.com/tezjs/tez.js/commit/2bda7915f1c5a6c78bd0f6ccebed0990b9370488))
* **vite:** remove closing element of link tag ([c29b24e](https://github.com/tezjs/tez.js/commit/c29b24e64085efc137d8f16659612e5b20e14a6f))
* **vite:** resolve mobile component in pre script ([a22c831](https://github.com/tezjs/tez.js/commit/a22c831cc09bef06e0b335c982f663078211e662))


### Features

* **common:** set source folder path ([4785ca5](https://github.com/tezjs/tez.js/commit/4785ca5d27ff315a31132a5fc475fba413937338))
* **vite:** add preconnect link element ([cd78224](https://github.com/tezjs/tez.js/commit/cd7822466675fab2dcbb7a559ee24d4f54362fad))
* **vite:** allow to set dns-prefetch link element ([afc13ca](https://github.com/tezjs/tez.js/commit/afc13cafdadbd67ebfe80f8ed31471b809a0c25a))
* **vite:** allow to set prefetch path ([bdfefe0](https://github.com/tezjs/tez.js/commit/bdfefe0afdfdc9fdf7263fd46c8c43934e5e23cd))
* **vite:** bundle pagewise css ([a26379c](https://github.com/tezjs/tez.js/commit/a26379ccfc1c41d1d7392659733f046bceb96358))
* **vite:** page wise post script prefetch ([0ae4b21](https://github.com/tezjs/tez.js/commit/0ae4b2140bf44aaf3f7af47c4fc1b35e8876bc3b))
* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)


### Bug Fixes

* **vite:** component & layout import path in glob.js ([0a960a8](https://github.com/tezjs/tez.js/commit/0a960a8c0707e8134d9052dd5a838875da146465))
* **vite:** missing package under commonjs execution ([ad6bf38](https://github.com/tezjs/tez.js/commit/ad6bf3839d979b9736ca5936670a17550a4bac92))
* **vite:** replace new line code with blank from linkingData ([f072ed2](https://github.com/tezjs/tez.js/commit/f072ed2a79bbd664ffc6cefc183e616a562449c6))


### Features

* **vite:** customize tez build config with vite build ([3ba9bd0](https://github.com/tezjs/tez.js/commit/3ba9bd0dae5cb1e9cb73cd36c40af090da5025dc))
* **vite:** set as default production build ([1b3e21a](https://github.com/tezjs/tez.js/commit/1b3e21a418fbc3423d40bc90003ca19d8d3675da))



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **payload:** incorrect curly bracket ([c9c3f61](https://github.com/tezjs/tez.js/commit/c9c3f61373a1b6eb7aa7af77bb1550cd4bc25a66))
* **payload:** not to create robots when custom payload generator is configured ([bde0e1d](https://github.com/tezjs/tez.js/commit/bde0e1dd5fd1adc5f79da019e56777c2e7cd4ff9))
* **types:** mark as nullable prop of 'amplify' ([2efec85](https://github.com/tezjs/tez.js/commit/2efec85eb3bb217a018178bc48144b7ea604132a))
* **vite:** import plugins if exists ([740b3b8](https://github.com/tezjs/tez.js/commit/740b3b85f6464ac59a46cc27c7f8ac7eb5a8d875))
* **vite:** obviate number from component name ([c20801f](https://github.com/tezjs/tez.js/commit/c20801fbcfd187a41d57c03dad56449e6aacf09e))
* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))


### Features

* **payload:** pass additional props for custom payload generator ([a5d9217](https://github.com/tezjs/tez.js/commit/a5d921710eda26cdd9a1b7650af4efce64357437))
* **payload:** set routes for custom payload generator ([3eeed41](https://github.com/tezjs/tez.js/commit/3eeed41d47212ca1de4742eb4975520460f0e249))



## 0.0.51 (2022-07-26)


### Bug Fixes

* **payload:** ignore non change frequency & priority set url in sitemap ([ecd1ac0](https://github.com/tezjs/tez.js/commit/ecd1ac002a3a348d261a9878001839da987a1f41))



## 0.0.50 (2022-07-25)


### Bug Fixes

* **vite:** add proper format of linkingdata ([719a00e](https://github.com/tezjs/tez.js/commit/719a00e8d7f7aa52eb825300d231db7799f19fa8))



## 0.0.49 (2022-07-25)


### Features

* **payload:** add custom payload generator ([4013e8a](https://github.com/tezjs/tez.js/commit/4013e8a93d37647cf4ba723ca5c41e20d541c801))



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))
* **vite:** minify pre/post/preload js after build ([b0f2631](https://github.com/tezjs/tez.js/commit/b0f26311dfd41e63d9eaffd4d56c87624dfb03b0))



## 0.0.47 (2022-07-22)


### Bug Fixes

* **create-tez:** properly reference the property name ([c82e89a](https://github.com/tezjs/tez.js/commit/c82e89a44a73b96281871ead07746a2ea0f3f997))



## 0.0.46 (2022-07-22)


### Bug Fixes

* **vite:** obviate additional right slash from preload script url. ([2c5415e](https://github.com/tezjs/tez.js/commit/2c5415e7eb6727b51e0b2789dce79f1e5d2ff3ff))
* **vite:** preload items check before push ([e92933a](https://github.com/tezjs/tez.js/commit/e92933acedd4366df65ee427986ca3fe4b11e875))



## 0.0.45 (2022-07-22)


### Bug Fixes

* **payload:** redirect routes undefined then set blank array ([f3f39fc](https://github.com/tezjs/tez.js/commit/f3f39fc455f86464cda3c4dcfd12f39e3a7c7421))
* **vite:** import component correctly ([6deea03](https://github.com/tezjs/tez.js/commit/6deea03662eac54bffc7bcb06b4193d6a65e15a0))
* **vite:** obviate function while resolve the route ([a74e519](https://github.com/tezjs/tez.js/commit/a74e519b9bbbc41489f6a1c297448c54a81a0bfa))
* **vite:** set actual path instead of object ([4d986fb](https://github.com/tezjs/tez.js/commit/4d986fb234c3f102a34bbaa3ab071b16b3ee353c))
* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Bug Fixes

* **payload:** write firebase redirect routes ([a745423](https://github.com/tezjs/tez.js/commit/a7454230127a1efca8e0435502bb159f85467137))


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))
* **vite:** preload tz.js ([fcb7507](https://github.com/tezjs/tez.js/commit/fcb7507dcbd9ad46da9dce2e086b030844dc89c2))



## 0.0.43 (2022-07-19)


### Bug Fixes

* **payload:** map correct object for parse value ([4414bf6](https://github.com/tezjs/tez.js/commit/4414bf6b1091192a39f32e9dcac46f5e6622fefb))



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)


### Bug Fixes

* **payload:** add siteurl prefix in sitemap ([e848220](https://github.com/tezjs/tez.js/commit/e848220046acefb7a70432683544bf7bc5509f63))



## 0.0.39 (2022-07-15)


### Bug Fixes

* **vite:** write tz.js file on build complete ([b47ddcc](https://github.com/tezjs/tez.js/commit/b47ddcc68c5cd449274ad7bd690069ae1693e64b))



## 0.0.38 (2022-07-15)


### Bug Fixes

* **create-tez:** allow .cache folder permission while running in docker ([cc6226f](https://github.com/tezjs/tez.js/commit/cc6226f53fc209cc1d9b56efb06ee257b3067eb7))
* **vite:** add footer slot in post script ([ca36bad](https://github.com/tezjs/tez.js/commit/ca36bad8e9c6a3455e5237c77d2acb21c8527400))
* **vite:** remove suffix from image url while parsing the text ([581caf7](https://github.com/tezjs/tez.js/commit/581caf7ce3d26587a661c3fe898b51bebd26af48))
* **vite:** script & style property undefined check ([e7120c6](https://github.com/tezjs/tez.js/commit/e7120c6ed60fc8de01d1c269cb4b19cfc37df730))
* **vite:** segregate components conditionally in pre/post script ([a095a11](https://github.com/tezjs/tez.js/commit/a095a11ea5e7c5e625d48641554cbc9cb27ff014))


### Features

* conditional inline css/js reference on the page ([1bc7469](https://github.com/tezjs/tez.js/commit/1bc7469ae0a42837cb2889f989c75b63aa0f7603))
* **create-tez:** connect remote  container from vs code ([9602c2c](https://github.com/tezjs/tez.js/commit/9602c2c9b8eb83316d1461ab4273be7399160f71))
* **payload:** allow svg image to write in local folder ([89c9fb2](https://github.com/tezjs/tez.js/commit/89c9fb2770196e6a9696e28e4161972d12b015da))
* **vite:** preload underneath dependencies page wise ([a696e79](https://github.com/tezjs/tez.js/commit/a696e79d00d1317505958de370c87115a41b1ab7))
* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **common:** correct root (index) folder path ([8ae15d0](https://github.com/tezjs/tez.js/commit/8ae15d033e157eac413377e3e957d882bab281d3))
* **vite:** correct index.html root write path ([587aef5](https://github.com/tezjs/tez.js/commit/587aef58c7216e7a214f44fa706bf78c6b033735))
* **vite:** create html file at root ([1015c14](https://github.com/tezjs/tez.js/commit/1015c140cb5d6b16f15830c840d1c2fc9e955875))
* **vite:** generate index.html at root of the dist ([236ef35](https://github.com/tezjs/tez.js/commit/236ef35391108b83d50c658f11b9d3cb0bded5ee))
* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **js:** export isMobile function ([66f69c3](https://github.com/tezjs/tez.js/commit/66f69c3cf39da9202b804ccc96e017ab1b601354))
* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vite:** create tez.ts if not exists during build ([40db4ec](https://github.com/tezjs/tez.js/commit/40db4ec077cc83f0a055afb2924c5d609cc8a68c))
* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))
* **vue:** content attribute added to viewport meta tag ([2b35309](https://github.com/tezjs/tez.js/commit/2b353098551b99d9d5175f208980821c71c14536))



## 0.0.34 (2022-07-06)


### Bug Fixes

* **payload:** filter nested data ([a1ad7a7](https://github.com/tezjs/tez.js/commit/a1ad7a7f13a943112c8ac14ca64b06ea1454f461))



## 0.0.33 (2022-07-06)


### Bug Fixes

* **create-tez:** undefined message variable ([ca2c0b2](https://github.com/tezjs/tez.js/commit/ca2c0b2873508ea588cea2d2a3f89a31aa1de99e))



## 0.0.32 (2022-07-06)


### Bug Fixes

* **create-tez:** installing dependencies ([da6980a](https://github.com/tezjs/tez.js/commit/da6980aa1ba7473aaeef55ef406f1a2e5ad1573e))



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Bug Fixes

* **vite:** replace numbers from component name ([a8923b2](https://github.com/tezjs/tez.js/commit/a8923b20db8f7970cd6b8ec884c399f4c6ceecb1))


### Features

* **payload:** deep populate strapi data ([9eedc19](https://github.com/tezjs/tez.js/commit/9eedc19b0d85245c92a08d7b97bf743205c952e8))
* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Bug Fixes

* folder path seperator ([0629c06](https://github.com/tezjs/tez.js/commit/0629c06bdccdf9c54fbb51e436ec5702e11d2e5e))


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))
* **vite:** bundle page wise components and payload ([58dffbc](https://github.com/tezjs/tez.js/commit/58dffbccf6f71e0f8aa696675427a485b9ef4a52))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)


### Bug Fixes

* **create-tez:** resolve template directory path ([22c3751](https://github.com/tezjs/tez.js/commit/22c3751841a65b076501edfb8d6b4f035752d0f8))



## 0.0.25 (2022-06-13)


### Bug Fixes

* **payload:** remove back-slash from 'imageFolderPath' folder path ([bb80f77](https://github.com/tezjs/tez.js/commit/bb80f77d16dcd9728c8773a2c1004fcc54b3638b))
* **vite:** put 'await' while reading the tex config ([3d48f37](https://github.com/tezjs/tez.js/commit/3d48f37c91451739332dde43a080e3a0a86e7843))


### Features

* **create-tez:** automagically install scaffold template packages ([74afa89](https://github.com/tezjs/tez.js/commit/74afa8977f34ea9e9ba798f717e4401bf7b7de11))



## 0.0.24 (2022-06-02)


### Bug Fixes

* **payload:** parse query string with correct object ([d774399](https://github.com/tezjs/tez.js/commit/d774399eabe24b8e55272ba1247b8f8443b13030))



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **payload:** null check before transform the value ([aeb72bf](https://github.com/tezjs/tez.js/commit/aeb72bfd49bf8d843833c216f2942deb54cef502))
* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **common:** merge strapi default & user configuration ([ac60db7](https://github.com/tezjs/tez.js/commit/ac60db7263663eb6d9c9fdbc974ca4138ed1f8f3))
* **payload:** refresh reference content on the page ([1f438f0](https://github.com/tezjs/tez.js/commit/1f438f03669f32f2e3f6c599b9e6bb8ff8b9a5d0))
* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)


### Bug Fixes

* **create-tez:** add tsconfig in the project template ([88ec68a](https://github.com/tezjs/tez.js/commit/88ec68a819c6522f2d98c8cc7716a3df975d6625))
* **payload:** handle if masterpage is not set ([7be053c](https://github.com/tezjs/tez.js/commit/7be053c56111cd659cf8582f57ca5bf500d8a5ec))



## 0.0.19 (2022-05-28)


### Bug Fixes

* **create-tez:** ignore dist folder ([e79b290](https://github.com/tezjs/tez.js/commit/e79b290a44b9e57af97c2e70d68b66bbe4a76736))
* **create-tez:** tez strapi template seed data ([47ca764](https://github.com/tezjs/tez.js/commit/47ca7642ae2fd9f02384bd5f50f3140f1295905c))


### Features

* **types:** add prop amplify in deployment config ([b2a69a5](https://github.com/tezjs/tez.js/commit/b2a69a5f7f7ea615a2485cb6904590dac5a759c4))



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* sw template ([dc01931](https://github.com/tezjs/tez.js/commit/dc019313b125c32e8dd154beb2c5abd2241379f0))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))
* auto generate firebase deployment config ([6bceb53](https://github.com/tezjs/tez.js/commit/6bceb538d95a1e13bd53f87f675fe2dfe2d283d0))



## 0.0.16 (2022-05-26)



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* add optimizedeps path ([ddf68d4](https://github.com/tezjs/tez.js/commit/ddf68d46d6faeda6a295fb6ba9c337243d4038d5))
* auto generate tez.ts ([0725939](https://github.com/tezjs/tez.js/commit/072593975992dc81595e709a1986e4612db16ce1))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* change template path of service worker ([a68bf32](https://github.com/tezjs/tez.js/commit/a68bf32400e59b9941ff6e07bd27b7879567da28))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* convert into string instead array of html elements ([b453632](https://github.com/tezjs/tez.js/commit/b453632c36b8cbebd63c4d0e336bd4f8de1e9869))
* correct alias path ([0984d59](https://github.com/tezjs/tez.js/commit/0984d59a158ffe79dcad792e616fbea992ccb9eb))
* generate payload based on rootDir ([688b050](https://github.com/tezjs/tez.js/commit/688b050fd7810aaa3063cf2977ec7faa512e899b))
* generate sitemap and robots file ([bca1779](https://github.com/tezjs/tez.js/commit/bca17791f79d1ce3ad58eb500f741ec930a95175))
* generated html script and payload path ([6f7a14c](https://github.com/tezjs/tez.js/commit/6f7a14c86332af7928fabb34d6379bb70361ebc2))
* ignore broadcastchannel image request from local environment ([b23183a](https://github.com/tezjs/tez.js/commit/b23183ac151312047b5664763cc9767c75d8e47f))
* ignore undefined element in sitemap ([c3466a0](https://github.com/tezjs/tez.js/commit/c3466a023fd3b1005c4443a7a038e246a8be3e6d))
* image creating without configuration ([c2223d7](https://github.com/tezjs/tez.js/commit/c2223d74464327a22029dbcfa0a743a7d26de66a))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* minify index.html ([67dca05](https://github.com/tezjs/tez.js/commit/67dca0532e0e9a2fc6ab2b53bffccb31afa242a5))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* pass blank object if component data is undefined ([b1ed00f](https://github.com/tezjs/tez.js/commit/b1ed00f979f575daf602977e3cfe48383a3c83fc))
* pass blank object if seo object is null ([bed1681](https://github.com/tezjs/tez.js/commit/bed1681e173ab696193185a1a697028bcb9f84b9))
* reading seo payload path ([d6abff2](https://github.com/tezjs/tez.js/commit/d6abff2c24a3f81fb375bd2ceb805de92cbabe84))
* refresh specific route folder ([35a081f](https://github.com/tezjs/tez.js/commit/35a081f2460995cb7f5f662ce58052750f2de39d))
* resolve dynamic express module ([d41bcd0](https://github.com/tezjs/tez.js/commit/d41bcd02a672c185df62b8cb88e42c49544eb4c4))
* resolve import object value ([1fcedca](https://github.com/tezjs/tez.js/commit/1fcedca8083f2f8b36668961a977b4b75a22372d))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* return sitemap xelement ([ba1a4e3](https://github.com/tezjs/tez.js/commit/ba1a4e3b4eb1ec3d6847fb443eeb42eab1752535))
* service worker template code ([5ecd699](https://github.com/tezjs/tez.js/commit/5ecd69985060474a7d0ad7a1ecdad4e3cbf2eae2))
* set correct components folder path ([9c99697](https://github.com/tezjs/tez.js/commit/9c99697b207de11e46291a42a00661e147bc634c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* set correct payload path ([2b529ef](https://github.com/tezjs/tez.js/commit/2b529eff4cb6599e5e8a6ff224631e3d4606ee6a))
* set correct payload path ([3135c6a](https://github.com/tezjs/tez.js/commit/3135c6a36068abcd72a5359ddbeb2cb108cd4f03))
* tez dev ([d3e8e60](https://github.com/tezjs/tez.js/commit/d3e8e60991ec4bf16df2d0e31580336537b0ddf8))
* undefined payload object ([b6d1a76](https://github.com/tezjs/tez.js/commit/b6d1a76cd79d38cf9d73322d1846e0af68d2e266))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add custom route ([643d7d9](https://github.com/tezjs/tez.js/commit/643d7d98b4a5bf4fd1df058648e746dcfbbbdb98))
* add dynamic page record in the generic collections ([df6a56c](https://github.com/tezjs/tez.js/commit/df6a56ce8099a48d97c439e705b9d84901b38a81))
* add html page and seo tag ([e911e02](https://github.com/tezjs/tez.js/commit/e911e029ad10fa23656866e49966731428eb7174))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add master layout ([2a97b9c](https://github.com/tezjs/tez.js/commit/2a97b9c009099fdd4e12279f568a65493b9dc840))
* add multiple page schema on page ([6a9b3d3](https://github.com/tezjs/tez.js/commit/6a9b3d39a1310a4234a93636cb92dc96336a08c9))
* add new package '@tezjs/js' ([b51de5f](https://github.com/tezjs/tez.js/commit/b51de5fb7532ce692a222257a2b4ff095c1beb4d))
* add pwa ([05c407a](https://github.com/tezjs/tez.js/commit/05c407a9cc964e81b6eb6b7c2da77e3b9400f324))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* add zero configuration for tez app ([c79defe](https://github.com/tezjs/tez.js/commit/c79defef78ab02fc4ee8302260095a41ae043790))
* build through tez cli ([e23245b](https://github.com/tezjs/tez.js/commit/e23245b28d2ef32449f6c7df7fa3cc5b7737866c))
* configure custom page & payload ([da5e6a3](https://github.com/tezjs/tez.js/commit/da5e6a3baaf4dd9fc68b40254652eeb2a8b0ecd2))
* convert image into webp ([2fe8b1a](https://github.com/tezjs/tez.js/commit/2fe8b1adee35cf2304d44ec0546c94576e6abf45))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* custom page payload generator ([4d711f0](https://github.com/tezjs/tez.js/commit/4d711f032ab3373f94fafaaaa07e44bda028634a))
* define tez config conditionally ([168726a](https://github.com/tezjs/tez.js/commit/168726abdc85b2a05f3637f272b5d90b8f0b66c2))
* entity wise pagination configuration ([bacf79c](https://github.com/tezjs/tez.js/commit/bacf79cd590ed1623dd91b7d7855867e7e58a495))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* favicon & preload link configuration ([48fbefb](https://github.com/tezjs/tez.js/commit/48fbefbc4a59056a7f12f8f869b7d0bca44e855c))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* imports at root ts ([78da3da](https://github.com/tezjs/tez.js/commit/78da3da39fa180192a4745ccdc65528d5e3fc001))
* load lazy data ([1fe8e3a](https://github.com/tezjs/tez.js/commit/1fe8e3aff508c56f0989f36bdf53cfb9e4bc366e))
* parse object value ([8ec54cd](https://github.com/tezjs/tez.js/commit/8ec54cdefab3d865512087fad4ea3c7097b9111f))
* redirect-routes added ([6efde53](https://github.com/tezjs/tez.js/commit/6efde539142f11f2bad9410de51eb22c58c0813b))
* run add lib ([26c78c7](https://github.com/tezjs/tez.js/commit/26c78c7a1ad9932b8b87c1241618136922ba0f38))
* set default / custom port ([8d1f293](https://github.com/tezjs/tez.js/commit/8d1f29332fdedc08ed9fdb80d2d15a4536523fcf))
* sitemap, robots and seo added ([115adf0](https://github.com/tezjs/tez.js/commit/115adf0455cf6de38262a5e6fb1cd61f82d407ab))
* sitemap, robots and seo feature added ([6fbd3d2](https://github.com/tezjs/tez.js/commit/6fbd3d2bf159138b5344a3f93e3a7b9408c55f73))
* strapi package features ([f71125a](https://github.com/tezjs/tez.js/commit/f71125a31892a6e2e343fcb8bc5d3553e35b8755))
* **strapi:** add sanitizer component level data ([2326b22](https://github.com/tezjs/tez.js/commit/2326b22e19bf8913230bca63e351ae95fff7cbcc))
* **strapi:** component data wise pagination ([0390097](https://github.com/tezjs/tez.js/commit/0390097f0b0e7d83774dd5d639a5768ecda4db59))
* tez cli initial code added ([1c9ec72](https://github.com/tezjs/tez.js/commit/1c9ec723ea305edd8b31cf5729faf1c719174572))
* typed env variable ([80c291a](https://github.com/tezjs/tez.js/commit/80c291a23d8006d5b4321766f196314c894aefca))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** request image through broadcastchannel ([7e0329f](https://github.com/tezjs/tez.js/commit/7e0329f7fd2a79098c2442a0916eb3a86d278160))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))


### Performance Improvements

* break after routed payload refresh ([2f2711c](https://github.com/tezjs/tez.js/commit/2f2711cccb605a81d1cc42752162770f9300c079))



## 1.0.1 (2021-06-24)



## 0.0.81 (2022-08-17)


### Bug Fixes

* **vue:** load post script if pre components are loaded ([b074fde](https://github.com/tezjs/tez.js/commit/b074fded4b812713eec2277accb52720a3732e1e))



## 0.0.80 (2022-08-17)


### Features

* **vue:** handle hash url ([d2fb186](https://github.com/tezjs/tez.js/commit/d2fb18607c6e26fd5521875ec299a5355a4617a9))



## 0.0.79 (2022-08-16)


### Bug Fixes

* **vite:** read tez configuration before initializing the app ([848e3fd](https://github.com/tezjs/tez.js/commit/848e3fd7bad6f86fde1a46552d2e135024890c79))
* **vite:** remove 'dev' mode ([1a12421](https://github.com/tezjs/tez.js/commit/1a124219a947768ebbdd5c85e982c03b2f9c99c0))


### Features

* **vite:** generate sw.js configurable ([5f74c9e](https://github.com/tezjs/tez.js/commit/5f74c9ea29ba05b447098a1f6ac2260baeaa39e1))



## 0.0.78 (2022-08-16)


### Bug Fixes

* **vue:** stop multiple times scroll event ([74a354e](https://github.com/tezjs/tez.js/commit/74a354e2f1115f6e5844a8338bac56ecb10c330f))


### Features

* **vite:** export dev function to get the base configuration and run the app in dev mode through vite config ([a8d320a](https://github.com/tezjs/tez.js/commit/a8d320afb04e047c7ce8c957ba2f8206242a008e))


### Performance Improvements

* **vue:** improve component loading sequencing & LCP of the page ([9bd456d](https://github.com/tezjs/tez.js/commit/9bd456d42b29937ea3443f89a3cb11d03742f46c))



## 0.0.77 (2022-08-15)


### Bug Fixes

* **vite:** parse json schema ([daaf00b](https://github.com/tezjs/tez.js/commit/daaf00b5b9219168322f5dc179080bacfd5baa2e))



## 0.0.76 (2022-08-15)


### Bug Fixes

* **vite:** add build version only build mode ([7c22cc5](https://github.com/tezjs/tez.js/commit/7c22cc578f43285c0fcf40e165856b0669fc4425))
* **vite:** bundle page wise css ([177fbf1](https://github.com/tezjs/tez.js/commit/177fbf17ca1475b1b9344ae5b80f2ff052bb9d3d))
* **vite:** conflict vue / @tezjs/vue ([eb358d5](https://github.com/tezjs/tez.js/commit/eb358d5cd3bcf3ab1291494985ec9122f879262e))
* **vite:** return correct js path ([9071731](https://github.com/tezjs/tez.js/commit/9071731ffd6941724e4501356d33634537659ff9))



## 0.0.75 (2022-08-13)


### Bug Fixes

* **vite:** linking json data regex ([1f2bc4e](https://github.com/tezjs/tez.js/commit/1f2bc4e40edeeb0d55d2542360bfaf7856c20efc))



## 0.0.74 (2022-08-12)


### Bug Fixes

* **vite:** all deps must be in lowercase ([7e422f3](https://github.com/tezjs/tez.js/commit/7e422f369b75a83a293c1d698e00549c6f4e7618))
* **vite:** correct reference of CommonPathResolver ([819b42b](https://github.com/tezjs/tez.js/commit/819b42bf0643316c02dbc6ba1143ef33b6bbc6c6))



## 0.0.73 (2022-08-12)


### Bug Fixes

* **docs:** Correct Questions Url ([e5ebd0a](https://github.com/tezjs/tez.js/commit/e5ebd0a040f495b8f41dbdc990e050620a8a3bec))
* **docs:** typo mistake ([154aea9](https://github.com/tezjs/tez.js/commit/154aea920c5e87577b34b44d5e2f2e87a97ddf58))



## 0.0.72 (2022-08-11)



## 0.0.71 (2022-08-10)


### Bug Fixes

* **vite:** remove additional forward slash ([3f0a34e](https://github.com/tezjs/tez.js/commit/3f0a34e51e54962c641f829714a5ccc7e529da84))



## 0.0.70 (2022-08-10)


### Bug Fixes

* **vite:** add build version after release ([0236f51](https://github.com/tezjs/tez.js/commit/0236f51d6c2be3509d01874f576d4a2c88b07912))
* **vite:** gen component file names in lowercase ([12554e6](https://github.com/tezjs/tez.js/commit/12554e6617ee96499758b0a6eddafcf6ebde1a60))
* **vite:** gen component file names in lowercase ([aa13b16](https://github.com/tezjs/tez.js/commit/aa13b16f406157d4e39ca84827dd8c31962e5d01))
* **vite:** include css if js is not direct reference to the respective component ([7b0f03f](https://github.com/tezjs/tez.js/commit/7b0f03f2b1d32aadf5af4faa8f04de63418956ec))



## 0.0.69 (2022-08-09)


### Bug Fixes

* **vite:** preload correct component path ([5d0f20d](https://github.com/tezjs/tez.js/commit/5d0f20dfac40d5dd5d00cd7e065550e8b3a5d33e))


### Features

* **vite:** conditional generate sitemap & robots ([b2c48be](https://github.com/tezjs/tez.js/commit/b2c48be75f300465fdb4374f7f048fa016a40684))



## 0.0.68 (2022-08-09)


### Bug Fixes

* **vite:** remove replacer ([b4ec9b2](https://github.com/tezjs/tez.js/commit/b4ec9b228ad0f84432e16e80547bd36c472bc9e2))


### Features

* **vite:** conditional minification ([1ccb3e3](https://github.com/tezjs/tez.js/commit/1ccb3e330fa3daa8f56fad1bea32293e78fd8094))



## 0.0.67 (2022-08-09)


### Bug Fixes

* **vite:** include non variable reference imports ([23a13ef](https://github.com/tezjs/tez.js/commit/23a13ef1f5fefb340dcec0533566c888554fb3bc))


### Features

* **vue:** add query params in router ([4ade609](https://github.com/tezjs/tez.js/commit/4ade60956352042828ab68286b5d46d36de1df0d))



## 0.0.66 (2022-08-09)



## 0.0.65 (2022-08-08)


### Bug Fixes

* **payload:** set regex for replace the route path with replace method ([6ecf122](https://github.com/tezjs/tez.js/commit/6ecf122e6638a565530fdcc7ce67fc751ead745f))
* **vite:** correct regex  onResolve filter ([3160844](https://github.com/tezjs/tez.js/commit/31608445462fe05f79329067892e4f913e8121bd))



## 0.0.64 (2022-08-08)



## 0.0.63 (2022-08-08)


### Bug Fixes

* **vite:** add '@tezjs/vue' in optimizeDeps ([693cdbf](https://github.com/tezjs/tez.js/commit/693cdbfcc69fd24800143bf37b1d10f414c33112))



## 0.0.62 (2022-08-08)


### Bug Fixes

* **cli:** SPAWN ENOENT ([9567654](https://github.com/tezjs/tez.js/commit/9567654d36693bd10fcf393767bef2c4db3692d0))



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)


### Bug Fixes

* **create-tez:** add missing @tezjs/route package ([1e4d532](https://github.com/tezjs/tez.js/commit/1e4d532c1d886e8f337e4ddf83510ed02ca55e1f))
* **route:** set correct @tezjs/common package version ([6039f6d](https://github.com/tezjs/tez.js/commit/6039f6da56e40cd046b3be414d581af29038d3e5))



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* add modules property for tez module external plugin ([c8528a5](https://github.com/tezjs/tez.js/commit/c8528a57e52960e9847888c4602474a1df7fa911))
* **create-tez:** add tezjs with vue starter template ([1f6a61c](https://github.com/tezjs/tez.js/commit/1f6a61c50cdbeff56e65389c1d7324e71a0fb697))
* **route:** add new package '@tezjs/route' for auto-routes ([f8b8e3e](https://github.com/tezjs/tez.js/commit/f8b8e3e255ee069e7326845a9f08ee45e37591a0))
* **vite:** auto resolve all layout component in final build ([2d818fa](https://github.com/tezjs/tez.js/commit/2d818fa3c5f82ec5c2cd9ed695bd51b92f2ad899))
* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)


### Bug Fixes

* **common:** correct lib path when cust source code path is configured ([d8d888a](https://github.com/tezjs/tez.js/commit/d8d888afe53812fc92a1f522c1f1a303804e4233))
* **payload:** ignore undefined component in payload ([02d6183](https://github.com/tezjs/tez.js/commit/02d618362d1b919d1fd6d1ee43d8cdb037b79ae8))
* **vite:** custom source path undefined ([943703d](https://github.com/tezjs/tez.js/commit/943703d4c3a0728cb0873d45da75d2ac1f7f899c))
* **vite:** resolve addLib ([684107a](https://github.com/tezjs/tez.js/commit/684107a3aa83513a51af8bdc334d56daacba21e2))



## 0.0.57 (2022-08-04)


### Bug Fixes

* **types:** set as nullable 'preFetch' property ([4261964](https://github.com/tezjs/tez.js/commit/42619640072af4f1e62ef2a547140c677254396e))
* **vite:** call bundle css method if bundlecss is true ([c79bc24](https://github.com/tezjs/tez.js/commit/c79bc24cf905f67833394218df0e3c23b19ec81b))
* **vite:** check path value before assigning the reference ([4d53ab3](https://github.com/tezjs/tez.js/commit/4d53ab3b920e12fad9cde645c0dbfb8fddd18704))
* **vite:** persist global html meta configuration ([82edd78](https://github.com/tezjs/tez.js/commit/82edd78359f319e5a540b9aea75bf3c786cea434))
* **vite:** set custom source code path ([84006bc](https://github.com/tezjs/tez.js/commit/84006bce97373596d791299886eef1f8b01df633))


### Features

* **vite:** preload components & respective dependencies page wise ([e385a5c](https://github.com/tezjs/tez.js/commit/e385a5c8c0d914c2ef6c757c3e216ee10a1f5a69))



## 0.0.56 (2022-08-03)


### Bug Fixes

* **vite:** ignore tez.css from page wise css bundling ([2bda791](https://github.com/tezjs/tez.js/commit/2bda7915f1c5a6c78bd0f6ccebed0990b9370488))
* **vite:** remove closing element of link tag ([c29b24e](https://github.com/tezjs/tez.js/commit/c29b24e64085efc137d8f16659612e5b20e14a6f))
* **vite:** resolve mobile component in pre script ([a22c831](https://github.com/tezjs/tez.js/commit/a22c831cc09bef06e0b335c982f663078211e662))


### Features

* **common:** set source folder path ([4785ca5](https://github.com/tezjs/tez.js/commit/4785ca5d27ff315a31132a5fc475fba413937338))
* **vite:** add preconnect link element ([cd78224](https://github.com/tezjs/tez.js/commit/cd7822466675fab2dcbb7a559ee24d4f54362fad))
* **vite:** allow to set dns-prefetch link element ([afc13ca](https://github.com/tezjs/tez.js/commit/afc13cafdadbd67ebfe80f8ed31471b809a0c25a))
* **vite:** allow to set prefetch path ([bdfefe0](https://github.com/tezjs/tez.js/commit/bdfefe0afdfdc9fdf7263fd46c8c43934e5e23cd))
* **vite:** bundle pagewise css ([a26379c](https://github.com/tezjs/tez.js/commit/a26379ccfc1c41d1d7392659733f046bceb96358))
* **vite:** page wise post script prefetch ([0ae4b21](https://github.com/tezjs/tez.js/commit/0ae4b2140bf44aaf3f7af47c4fc1b35e8876bc3b))
* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)


### Bug Fixes

* **vite:** component & layout import path in glob.js ([0a960a8](https://github.com/tezjs/tez.js/commit/0a960a8c0707e8134d9052dd5a838875da146465))
* **vite:** missing package under commonjs execution ([ad6bf38](https://github.com/tezjs/tez.js/commit/ad6bf3839d979b9736ca5936670a17550a4bac92))
* **vite:** replace new line code with blank from linkingData ([f072ed2](https://github.com/tezjs/tez.js/commit/f072ed2a79bbd664ffc6cefc183e616a562449c6))


### Features

* **vite:** customize tez build config with vite build ([3ba9bd0](https://github.com/tezjs/tez.js/commit/3ba9bd0dae5cb1e9cb73cd36c40af090da5025dc))
* **vite:** set as default production build ([1b3e21a](https://github.com/tezjs/tez.js/commit/1b3e21a418fbc3423d40bc90003ca19d8d3675da))



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **payload:** incorrect curly bracket ([c9c3f61](https://github.com/tezjs/tez.js/commit/c9c3f61373a1b6eb7aa7af77bb1550cd4bc25a66))
* **payload:** not to create robots when custom payload generator is configured ([bde0e1d](https://github.com/tezjs/tez.js/commit/bde0e1dd5fd1adc5f79da019e56777c2e7cd4ff9))
* **types:** mark as nullable prop of 'amplify' ([2efec85](https://github.com/tezjs/tez.js/commit/2efec85eb3bb217a018178bc48144b7ea604132a))
* **vite:** import plugins if exists ([740b3b8](https://github.com/tezjs/tez.js/commit/740b3b85f6464ac59a46cc27c7f8ac7eb5a8d875))
* **vite:** obviate number from component name ([c20801f](https://github.com/tezjs/tez.js/commit/c20801fbcfd187a41d57c03dad56449e6aacf09e))
* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))


### Features

* **payload:** pass additional props for custom payload generator ([a5d9217](https://github.com/tezjs/tez.js/commit/a5d921710eda26cdd9a1b7650af4efce64357437))
* **payload:** set routes for custom payload generator ([3eeed41](https://github.com/tezjs/tez.js/commit/3eeed41d47212ca1de4742eb4975520460f0e249))



## 0.0.51 (2022-07-26)


### Bug Fixes

* **payload:** ignore non change frequency & priority set url in sitemap ([ecd1ac0](https://github.com/tezjs/tez.js/commit/ecd1ac002a3a348d261a9878001839da987a1f41))



## 0.0.50 (2022-07-25)


### Bug Fixes

* **vite:** add proper format of linkingdata ([719a00e](https://github.com/tezjs/tez.js/commit/719a00e8d7f7aa52eb825300d231db7799f19fa8))



## 0.0.49 (2022-07-25)


### Features

* **payload:** add custom payload generator ([4013e8a](https://github.com/tezjs/tez.js/commit/4013e8a93d37647cf4ba723ca5c41e20d541c801))



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))
* **vite:** minify pre/post/preload js after build ([b0f2631](https://github.com/tezjs/tez.js/commit/b0f26311dfd41e63d9eaffd4d56c87624dfb03b0))



## 0.0.47 (2022-07-22)


### Bug Fixes

* **create-tez:** properly reference the property name ([c82e89a](https://github.com/tezjs/tez.js/commit/c82e89a44a73b96281871ead07746a2ea0f3f997))



## 0.0.46 (2022-07-22)


### Bug Fixes

* **vite:** obviate additional right slash from preload script url. ([2c5415e](https://github.com/tezjs/tez.js/commit/2c5415e7eb6727b51e0b2789dce79f1e5d2ff3ff))
* **vite:** preload items check before push ([e92933a](https://github.com/tezjs/tez.js/commit/e92933acedd4366df65ee427986ca3fe4b11e875))



## 0.0.45 (2022-07-22)


### Bug Fixes

* **payload:** redirect routes undefined then set blank array ([f3f39fc](https://github.com/tezjs/tez.js/commit/f3f39fc455f86464cda3c4dcfd12f39e3a7c7421))
* **vite:** import component correctly ([6deea03](https://github.com/tezjs/tez.js/commit/6deea03662eac54bffc7bcb06b4193d6a65e15a0))
* **vite:** obviate function while resolve the route ([a74e519](https://github.com/tezjs/tez.js/commit/a74e519b9bbbc41489f6a1c297448c54a81a0bfa))
* **vite:** set actual path instead of object ([4d986fb](https://github.com/tezjs/tez.js/commit/4d986fb234c3f102a34bbaa3ab071b16b3ee353c))
* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Bug Fixes

* **payload:** write firebase redirect routes ([a745423](https://github.com/tezjs/tez.js/commit/a7454230127a1efca8e0435502bb159f85467137))


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))
* **vite:** preload tz.js ([fcb7507](https://github.com/tezjs/tez.js/commit/fcb7507dcbd9ad46da9dce2e086b030844dc89c2))



## 0.0.43 (2022-07-19)


### Bug Fixes

* **payload:** map correct object for parse value ([4414bf6](https://github.com/tezjs/tez.js/commit/4414bf6b1091192a39f32e9dcac46f5e6622fefb))



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)


### Bug Fixes

* **payload:** add siteurl prefix in sitemap ([e848220](https://github.com/tezjs/tez.js/commit/e848220046acefb7a70432683544bf7bc5509f63))



## 0.0.39 (2022-07-15)


### Bug Fixes

* **vite:** write tz.js file on build complete ([b47ddcc](https://github.com/tezjs/tez.js/commit/b47ddcc68c5cd449274ad7bd690069ae1693e64b))



## 0.0.38 (2022-07-15)


### Bug Fixes

* **create-tez:** allow .cache folder permission while running in docker ([cc6226f](https://github.com/tezjs/tez.js/commit/cc6226f53fc209cc1d9b56efb06ee257b3067eb7))
* **vite:** add footer slot in post script ([ca36bad](https://github.com/tezjs/tez.js/commit/ca36bad8e9c6a3455e5237c77d2acb21c8527400))
* **vite:** remove suffix from image url while parsing the text ([581caf7](https://github.com/tezjs/tez.js/commit/581caf7ce3d26587a661c3fe898b51bebd26af48))
* **vite:** script & style property undefined check ([e7120c6](https://github.com/tezjs/tez.js/commit/e7120c6ed60fc8de01d1c269cb4b19cfc37df730))
* **vite:** segregate components conditionally in pre/post script ([a095a11](https://github.com/tezjs/tez.js/commit/a095a11ea5e7c5e625d48641554cbc9cb27ff014))


### Features

* conditional inline css/js reference on the page ([1bc7469](https://github.com/tezjs/tez.js/commit/1bc7469ae0a42837cb2889f989c75b63aa0f7603))
* **create-tez:** connect remote  container from vs code ([9602c2c](https://github.com/tezjs/tez.js/commit/9602c2c9b8eb83316d1461ab4273be7399160f71))
* **payload:** allow svg image to write in local folder ([89c9fb2](https://github.com/tezjs/tez.js/commit/89c9fb2770196e6a9696e28e4161972d12b015da))
* **vite:** preload underneath dependencies page wise ([a696e79](https://github.com/tezjs/tez.js/commit/a696e79d00d1317505958de370c87115a41b1ab7))
* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **common:** correct root (index) folder path ([8ae15d0](https://github.com/tezjs/tez.js/commit/8ae15d033e157eac413377e3e957d882bab281d3))
* **vite:** correct index.html root write path ([587aef5](https://github.com/tezjs/tez.js/commit/587aef58c7216e7a214f44fa706bf78c6b033735))
* **vite:** create html file at root ([1015c14](https://github.com/tezjs/tez.js/commit/1015c140cb5d6b16f15830c840d1c2fc9e955875))
* **vite:** generate index.html at root of the dist ([236ef35](https://github.com/tezjs/tez.js/commit/236ef35391108b83d50c658f11b9d3cb0bded5ee))
* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **js:** export isMobile function ([66f69c3](https://github.com/tezjs/tez.js/commit/66f69c3cf39da9202b804ccc96e017ab1b601354))
* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vite:** create tez.ts if not exists during build ([40db4ec](https://github.com/tezjs/tez.js/commit/40db4ec077cc83f0a055afb2924c5d609cc8a68c))
* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))
* **vue:** content attribute added to viewport meta tag ([2b35309](https://github.com/tezjs/tez.js/commit/2b353098551b99d9d5175f208980821c71c14536))



## 0.0.34 (2022-07-06)


### Bug Fixes

* **payload:** filter nested data ([a1ad7a7](https://github.com/tezjs/tez.js/commit/a1ad7a7f13a943112c8ac14ca64b06ea1454f461))



## 0.0.33 (2022-07-06)


### Bug Fixes

* **create-tez:** undefined message variable ([ca2c0b2](https://github.com/tezjs/tez.js/commit/ca2c0b2873508ea588cea2d2a3f89a31aa1de99e))



## 0.0.32 (2022-07-06)


### Bug Fixes

* **create-tez:** installing dependencies ([da6980a](https://github.com/tezjs/tez.js/commit/da6980aa1ba7473aaeef55ef406f1a2e5ad1573e))



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Bug Fixes

* **vite:** replace numbers from component name ([a8923b2](https://github.com/tezjs/tez.js/commit/a8923b20db8f7970cd6b8ec884c399f4c6ceecb1))


### Features

* **payload:** deep populate strapi data ([9eedc19](https://github.com/tezjs/tez.js/commit/9eedc19b0d85245c92a08d7b97bf743205c952e8))
* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Bug Fixes

* folder path seperator ([0629c06](https://github.com/tezjs/tez.js/commit/0629c06bdccdf9c54fbb51e436ec5702e11d2e5e))


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))
* **vite:** bundle page wise components and payload ([58dffbc](https://github.com/tezjs/tez.js/commit/58dffbccf6f71e0f8aa696675427a485b9ef4a52))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)


### Bug Fixes

* **create-tez:** resolve template directory path ([22c3751](https://github.com/tezjs/tez.js/commit/22c3751841a65b076501edfb8d6b4f035752d0f8))



## 0.0.25 (2022-06-13)


### Bug Fixes

* **payload:** remove back-slash from 'imageFolderPath' folder path ([bb80f77](https://github.com/tezjs/tez.js/commit/bb80f77d16dcd9728c8773a2c1004fcc54b3638b))
* **vite:** put 'await' while reading the tex config ([3d48f37](https://github.com/tezjs/tez.js/commit/3d48f37c91451739332dde43a080e3a0a86e7843))


### Features

* **create-tez:** automagically install scaffold template packages ([74afa89](https://github.com/tezjs/tez.js/commit/74afa8977f34ea9e9ba798f717e4401bf7b7de11))



## 0.0.24 (2022-06-02)


### Bug Fixes

* **payload:** parse query string with correct object ([d774399](https://github.com/tezjs/tez.js/commit/d774399eabe24b8e55272ba1247b8f8443b13030))



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **payload:** null check before transform the value ([aeb72bf](https://github.com/tezjs/tez.js/commit/aeb72bfd49bf8d843833c216f2942deb54cef502))
* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **common:** merge strapi default & user configuration ([ac60db7](https://github.com/tezjs/tez.js/commit/ac60db7263663eb6d9c9fdbc974ca4138ed1f8f3))
* **payload:** refresh reference content on the page ([1f438f0](https://github.com/tezjs/tez.js/commit/1f438f03669f32f2e3f6c599b9e6bb8ff8b9a5d0))
* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)


### Bug Fixes

* **create-tez:** add tsconfig in the project template ([88ec68a](https://github.com/tezjs/tez.js/commit/88ec68a819c6522f2d98c8cc7716a3df975d6625))
* **payload:** handle if masterpage is not set ([7be053c](https://github.com/tezjs/tez.js/commit/7be053c56111cd659cf8582f57ca5bf500d8a5ec))



## 0.0.19 (2022-05-28)


### Bug Fixes

* **create-tez:** ignore dist folder ([e79b290](https://github.com/tezjs/tez.js/commit/e79b290a44b9e57af97c2e70d68b66bbe4a76736))
* **create-tez:** tez strapi template seed data ([47ca764](https://github.com/tezjs/tez.js/commit/47ca7642ae2fd9f02384bd5f50f3140f1295905c))


### Features

* **types:** add prop amplify in deployment config ([b2a69a5](https://github.com/tezjs/tez.js/commit/b2a69a5f7f7ea615a2485cb6904590dac5a759c4))



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* sw template ([dc01931](https://github.com/tezjs/tez.js/commit/dc019313b125c32e8dd154beb2c5abd2241379f0))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))
* auto generate firebase deployment config ([6bceb53](https://github.com/tezjs/tez.js/commit/6bceb538d95a1e13bd53f87f675fe2dfe2d283d0))



## 0.0.16 (2022-05-26)



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* add optimizedeps path ([ddf68d4](https://github.com/tezjs/tez.js/commit/ddf68d46d6faeda6a295fb6ba9c337243d4038d5))
* auto generate tez.ts ([0725939](https://github.com/tezjs/tez.js/commit/072593975992dc81595e709a1986e4612db16ce1))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* change template path of service worker ([a68bf32](https://github.com/tezjs/tez.js/commit/a68bf32400e59b9941ff6e07bd27b7879567da28))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* convert into string instead array of html elements ([b453632](https://github.com/tezjs/tez.js/commit/b453632c36b8cbebd63c4d0e336bd4f8de1e9869))
* correct alias path ([0984d59](https://github.com/tezjs/tez.js/commit/0984d59a158ffe79dcad792e616fbea992ccb9eb))
* generate payload based on rootDir ([688b050](https://github.com/tezjs/tez.js/commit/688b050fd7810aaa3063cf2977ec7faa512e899b))
* generate sitemap and robots file ([bca1779](https://github.com/tezjs/tez.js/commit/bca17791f79d1ce3ad58eb500f741ec930a95175))
* generated html script and payload path ([6f7a14c](https://github.com/tezjs/tez.js/commit/6f7a14c86332af7928fabb34d6379bb70361ebc2))
* ignore broadcastchannel image request from local environment ([b23183a](https://github.com/tezjs/tez.js/commit/b23183ac151312047b5664763cc9767c75d8e47f))
* ignore undefined element in sitemap ([c3466a0](https://github.com/tezjs/tez.js/commit/c3466a023fd3b1005c4443a7a038e246a8be3e6d))
* image creating without configuration ([c2223d7](https://github.com/tezjs/tez.js/commit/c2223d74464327a22029dbcfa0a743a7d26de66a))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* minify index.html ([67dca05](https://github.com/tezjs/tez.js/commit/67dca0532e0e9a2fc6ab2b53bffccb31afa242a5))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* pass blank object if component data is undefined ([b1ed00f](https://github.com/tezjs/tez.js/commit/b1ed00f979f575daf602977e3cfe48383a3c83fc))
* pass blank object if seo object is null ([bed1681](https://github.com/tezjs/tez.js/commit/bed1681e173ab696193185a1a697028bcb9f84b9))
* reading seo payload path ([d6abff2](https://github.com/tezjs/tez.js/commit/d6abff2c24a3f81fb375bd2ceb805de92cbabe84))
* refresh specific route folder ([35a081f](https://github.com/tezjs/tez.js/commit/35a081f2460995cb7f5f662ce58052750f2de39d))
* resolve dynamic express module ([d41bcd0](https://github.com/tezjs/tez.js/commit/d41bcd02a672c185df62b8cb88e42c49544eb4c4))
* resolve import object value ([1fcedca](https://github.com/tezjs/tez.js/commit/1fcedca8083f2f8b36668961a977b4b75a22372d))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* return sitemap xelement ([ba1a4e3](https://github.com/tezjs/tez.js/commit/ba1a4e3b4eb1ec3d6847fb443eeb42eab1752535))
* service worker template code ([5ecd699](https://github.com/tezjs/tez.js/commit/5ecd69985060474a7d0ad7a1ecdad4e3cbf2eae2))
* set correct components folder path ([9c99697](https://github.com/tezjs/tez.js/commit/9c99697b207de11e46291a42a00661e147bc634c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* set correct payload path ([2b529ef](https://github.com/tezjs/tez.js/commit/2b529eff4cb6599e5e8a6ff224631e3d4606ee6a))
* set correct payload path ([3135c6a](https://github.com/tezjs/tez.js/commit/3135c6a36068abcd72a5359ddbeb2cb108cd4f03))
* tez dev ([d3e8e60](https://github.com/tezjs/tez.js/commit/d3e8e60991ec4bf16df2d0e31580336537b0ddf8))
* undefined payload object ([b6d1a76](https://github.com/tezjs/tez.js/commit/b6d1a76cd79d38cf9d73322d1846e0af68d2e266))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add custom route ([643d7d9](https://github.com/tezjs/tez.js/commit/643d7d98b4a5bf4fd1df058648e746dcfbbbdb98))
* add dynamic page record in the generic collections ([df6a56c](https://github.com/tezjs/tez.js/commit/df6a56ce8099a48d97c439e705b9d84901b38a81))
* add html page and seo tag ([e911e02](https://github.com/tezjs/tez.js/commit/e911e029ad10fa23656866e49966731428eb7174))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add master layout ([2a97b9c](https://github.com/tezjs/tez.js/commit/2a97b9c009099fdd4e12279f568a65493b9dc840))
* add multiple page schema on page ([6a9b3d3](https://github.com/tezjs/tez.js/commit/6a9b3d39a1310a4234a93636cb92dc96336a08c9))
* add new package '@tezjs/js' ([b51de5f](https://github.com/tezjs/tez.js/commit/b51de5fb7532ce692a222257a2b4ff095c1beb4d))
* add pwa ([05c407a](https://github.com/tezjs/tez.js/commit/05c407a9cc964e81b6eb6b7c2da77e3b9400f324))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* add zero configuration for tez app ([c79defe](https://github.com/tezjs/tez.js/commit/c79defef78ab02fc4ee8302260095a41ae043790))
* build through tez cli ([e23245b](https://github.com/tezjs/tez.js/commit/e23245b28d2ef32449f6c7df7fa3cc5b7737866c))
* configure custom page & payload ([da5e6a3](https://github.com/tezjs/tez.js/commit/da5e6a3baaf4dd9fc68b40254652eeb2a8b0ecd2))
* convert image into webp ([2fe8b1a](https://github.com/tezjs/tez.js/commit/2fe8b1adee35cf2304d44ec0546c94576e6abf45))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* custom page payload generator ([4d711f0](https://github.com/tezjs/tez.js/commit/4d711f032ab3373f94fafaaaa07e44bda028634a))
* define tez config conditionally ([168726a](https://github.com/tezjs/tez.js/commit/168726abdc85b2a05f3637f272b5d90b8f0b66c2))
* entity wise pagination configuration ([bacf79c](https://github.com/tezjs/tez.js/commit/bacf79cd590ed1623dd91b7d7855867e7e58a495))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* favicon & preload link configuration ([48fbefb](https://github.com/tezjs/tez.js/commit/48fbefbc4a59056a7f12f8f869b7d0bca44e855c))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* imports at root ts ([78da3da](https://github.com/tezjs/tez.js/commit/78da3da39fa180192a4745ccdc65528d5e3fc001))
* load lazy data ([1fe8e3a](https://github.com/tezjs/tez.js/commit/1fe8e3aff508c56f0989f36bdf53cfb9e4bc366e))
* parse object value ([8ec54cd](https://github.com/tezjs/tez.js/commit/8ec54cdefab3d865512087fad4ea3c7097b9111f))
* redirect-routes added ([6efde53](https://github.com/tezjs/tez.js/commit/6efde539142f11f2bad9410de51eb22c58c0813b))
* run add lib ([26c78c7](https://github.com/tezjs/tez.js/commit/26c78c7a1ad9932b8b87c1241618136922ba0f38))
* set default / custom port ([8d1f293](https://github.com/tezjs/tez.js/commit/8d1f29332fdedc08ed9fdb80d2d15a4536523fcf))
* sitemap, robots and seo added ([115adf0](https://github.com/tezjs/tez.js/commit/115adf0455cf6de38262a5e6fb1cd61f82d407ab))
* sitemap, robots and seo feature added ([6fbd3d2](https://github.com/tezjs/tez.js/commit/6fbd3d2bf159138b5344a3f93e3a7b9408c55f73))
* strapi package features ([f71125a](https://github.com/tezjs/tez.js/commit/f71125a31892a6e2e343fcb8bc5d3553e35b8755))
* **strapi:** add sanitizer component level data ([2326b22](https://github.com/tezjs/tez.js/commit/2326b22e19bf8913230bca63e351ae95fff7cbcc))
* **strapi:** component data wise pagination ([0390097](https://github.com/tezjs/tez.js/commit/0390097f0b0e7d83774dd5d639a5768ecda4db59))
* tez cli initial code added ([1c9ec72](https://github.com/tezjs/tez.js/commit/1c9ec723ea305edd8b31cf5729faf1c719174572))
* typed env variable ([80c291a](https://github.com/tezjs/tez.js/commit/80c291a23d8006d5b4321766f196314c894aefca))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** request image through broadcastchannel ([7e0329f](https://github.com/tezjs/tez.js/commit/7e0329f7fd2a79098c2442a0916eb3a86d278160))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))


### Performance Improvements

* break after routed payload refresh ([2f2711c](https://github.com/tezjs/tez.js/commit/2f2711cccb605a81d1cc42752162770f9300c079))



## 1.0.1 (2021-06-24)



## 0.0.80 (2022-08-17)


### Features

* **vue:** handle hash url ([d2fb186](https://github.com/tezjs/tez.js/commit/d2fb18607c6e26fd5521875ec299a5355a4617a9))



## 0.0.79 (2022-08-16)


### Bug Fixes

* **vite:** read tez configuration before initializing the app ([848e3fd](https://github.com/tezjs/tez.js/commit/848e3fd7bad6f86fde1a46552d2e135024890c79))
* **vite:** remove 'dev' mode ([1a12421](https://github.com/tezjs/tez.js/commit/1a124219a947768ebbdd5c85e982c03b2f9c99c0))


### Features

* **vite:** generate sw.js configurable ([5f74c9e](https://github.com/tezjs/tez.js/commit/5f74c9ea29ba05b447098a1f6ac2260baeaa39e1))



## 0.0.78 (2022-08-16)


### Bug Fixes

* **vue:** stop multiple times scroll event ([74a354e](https://github.com/tezjs/tez.js/commit/74a354e2f1115f6e5844a8338bac56ecb10c330f))


### Features

* **vite:** export dev function to get the base configuration and run the app in dev mode through vite config ([a8d320a](https://github.com/tezjs/tez.js/commit/a8d320afb04e047c7ce8c957ba2f8206242a008e))


### Performance Improvements

* **vue:** improve component loading sequencing & LCP of the page ([9bd456d](https://github.com/tezjs/tez.js/commit/9bd456d42b29937ea3443f89a3cb11d03742f46c))



## 0.0.77 (2022-08-15)


### Bug Fixes

* **vite:** parse json schema ([daaf00b](https://github.com/tezjs/tez.js/commit/daaf00b5b9219168322f5dc179080bacfd5baa2e))



## 0.0.76 (2022-08-15)


### Bug Fixes

* **vite:** add build version only build mode ([7c22cc5](https://github.com/tezjs/tez.js/commit/7c22cc578f43285c0fcf40e165856b0669fc4425))
* **vite:** bundle page wise css ([177fbf1](https://github.com/tezjs/tez.js/commit/177fbf17ca1475b1b9344ae5b80f2ff052bb9d3d))
* **vite:** conflict vue / @tezjs/vue ([eb358d5](https://github.com/tezjs/tez.js/commit/eb358d5cd3bcf3ab1291494985ec9122f879262e))
* **vite:** return correct js path ([9071731](https://github.com/tezjs/tez.js/commit/9071731ffd6941724e4501356d33634537659ff9))



## 0.0.75 (2022-08-13)


### Bug Fixes

* **vite:** linking json data regex ([1f2bc4e](https://github.com/tezjs/tez.js/commit/1f2bc4e40edeeb0d55d2542360bfaf7856c20efc))



## 0.0.74 (2022-08-12)


### Bug Fixes

* **vite:** all deps must be in lowercase ([7e422f3](https://github.com/tezjs/tez.js/commit/7e422f369b75a83a293c1d698e00549c6f4e7618))
* **vite:** correct reference of CommonPathResolver ([819b42b](https://github.com/tezjs/tez.js/commit/819b42bf0643316c02dbc6ba1143ef33b6bbc6c6))



## 0.0.73 (2022-08-12)


### Bug Fixes

* **docs:** Correct Questions Url ([e5ebd0a](https://github.com/tezjs/tez.js/commit/e5ebd0a040f495b8f41dbdc990e050620a8a3bec))
* **docs:** typo mistake ([154aea9](https://github.com/tezjs/tez.js/commit/154aea920c5e87577b34b44d5e2f2e87a97ddf58))



## 0.0.72 (2022-08-11)



## 0.0.71 (2022-08-10)


### Bug Fixes

* **vite:** remove additional forward slash ([3f0a34e](https://github.com/tezjs/tez.js/commit/3f0a34e51e54962c641f829714a5ccc7e529da84))



## 0.0.70 (2022-08-10)


### Bug Fixes

* **vite:** add build version after release ([0236f51](https://github.com/tezjs/tez.js/commit/0236f51d6c2be3509d01874f576d4a2c88b07912))
* **vite:** gen component file names in lowercase ([12554e6](https://github.com/tezjs/tez.js/commit/12554e6617ee96499758b0a6eddafcf6ebde1a60))
* **vite:** gen component file names in lowercase ([aa13b16](https://github.com/tezjs/tez.js/commit/aa13b16f406157d4e39ca84827dd8c31962e5d01))
* **vite:** include css if js is not direct reference to the respective component ([7b0f03f](https://github.com/tezjs/tez.js/commit/7b0f03f2b1d32aadf5af4faa8f04de63418956ec))



## 0.0.69 (2022-08-09)


### Bug Fixes

* **vite:** preload correct component path ([5d0f20d](https://github.com/tezjs/tez.js/commit/5d0f20dfac40d5dd5d00cd7e065550e8b3a5d33e))


### Features

* **vite:** conditional generate sitemap & robots ([b2c48be](https://github.com/tezjs/tez.js/commit/b2c48be75f300465fdb4374f7f048fa016a40684))



## 0.0.68 (2022-08-09)


### Bug Fixes

* **vite:** remove replacer ([b4ec9b2](https://github.com/tezjs/tez.js/commit/b4ec9b228ad0f84432e16e80547bd36c472bc9e2))


### Features

* **vite:** conditional minification ([1ccb3e3](https://github.com/tezjs/tez.js/commit/1ccb3e330fa3daa8f56fad1bea32293e78fd8094))



## 0.0.67 (2022-08-09)


### Bug Fixes

* **vite:** include non variable reference imports ([23a13ef](https://github.com/tezjs/tez.js/commit/23a13ef1f5fefb340dcec0533566c888554fb3bc))


### Features

* **vue:** add query params in router ([4ade609](https://github.com/tezjs/tez.js/commit/4ade60956352042828ab68286b5d46d36de1df0d))



## 0.0.66 (2022-08-09)



## 0.0.65 (2022-08-08)


### Bug Fixes

* **payload:** set regex for replace the route path with replace method ([6ecf122](https://github.com/tezjs/tez.js/commit/6ecf122e6638a565530fdcc7ce67fc751ead745f))
* **vite:** correct regex  onResolve filter ([3160844](https://github.com/tezjs/tez.js/commit/31608445462fe05f79329067892e4f913e8121bd))



## 0.0.64 (2022-08-08)



## 0.0.63 (2022-08-08)


### Bug Fixes

* **vite:** add '@tezjs/vue' in optimizeDeps ([693cdbf](https://github.com/tezjs/tez.js/commit/693cdbfcc69fd24800143bf37b1d10f414c33112))



## 0.0.62 (2022-08-08)


### Bug Fixes

* **cli:** SPAWN ENOENT ([9567654](https://github.com/tezjs/tez.js/commit/9567654d36693bd10fcf393767bef2c4db3692d0))



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)


### Bug Fixes

* **create-tez:** add missing @tezjs/route package ([1e4d532](https://github.com/tezjs/tez.js/commit/1e4d532c1d886e8f337e4ddf83510ed02ca55e1f))
* **route:** set correct @tezjs/common package version ([6039f6d](https://github.com/tezjs/tez.js/commit/6039f6da56e40cd046b3be414d581af29038d3e5))



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* add modules property for tez module external plugin ([c8528a5](https://github.com/tezjs/tez.js/commit/c8528a57e52960e9847888c4602474a1df7fa911))
* **create-tez:** add tezjs with vue starter template ([1f6a61c](https://github.com/tezjs/tez.js/commit/1f6a61c50cdbeff56e65389c1d7324e71a0fb697))
* **route:** add new package '@tezjs/route' for auto-routes ([f8b8e3e](https://github.com/tezjs/tez.js/commit/f8b8e3e255ee069e7326845a9f08ee45e37591a0))
* **vite:** auto resolve all layout component in final build ([2d818fa](https://github.com/tezjs/tez.js/commit/2d818fa3c5f82ec5c2cd9ed695bd51b92f2ad899))
* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)


### Bug Fixes

* **common:** correct lib path when cust source code path is configured ([d8d888a](https://github.com/tezjs/tez.js/commit/d8d888afe53812fc92a1f522c1f1a303804e4233))
* **payload:** ignore undefined component in payload ([02d6183](https://github.com/tezjs/tez.js/commit/02d618362d1b919d1fd6d1ee43d8cdb037b79ae8))
* **vite:** custom source path undefined ([943703d](https://github.com/tezjs/tez.js/commit/943703d4c3a0728cb0873d45da75d2ac1f7f899c))
* **vite:** resolve addLib ([684107a](https://github.com/tezjs/tez.js/commit/684107a3aa83513a51af8bdc334d56daacba21e2))



## 0.0.57 (2022-08-04)


### Bug Fixes

* **types:** set as nullable 'preFetch' property ([4261964](https://github.com/tezjs/tez.js/commit/42619640072af4f1e62ef2a547140c677254396e))
* **vite:** call bundle css method if bundlecss is true ([c79bc24](https://github.com/tezjs/tez.js/commit/c79bc24cf905f67833394218df0e3c23b19ec81b))
* **vite:** check path value before assigning the reference ([4d53ab3](https://github.com/tezjs/tez.js/commit/4d53ab3b920e12fad9cde645c0dbfb8fddd18704))
* **vite:** persist global html meta configuration ([82edd78](https://github.com/tezjs/tez.js/commit/82edd78359f319e5a540b9aea75bf3c786cea434))
* **vite:** set custom source code path ([84006bc](https://github.com/tezjs/tez.js/commit/84006bce97373596d791299886eef1f8b01df633))


### Features

* **vite:** preload components & respective dependencies page wise ([e385a5c](https://github.com/tezjs/tez.js/commit/e385a5c8c0d914c2ef6c757c3e216ee10a1f5a69))



## 0.0.56 (2022-08-03)


### Bug Fixes

* **vite:** ignore tez.css from page wise css bundling ([2bda791](https://github.com/tezjs/tez.js/commit/2bda7915f1c5a6c78bd0f6ccebed0990b9370488))
* **vite:** remove closing element of link tag ([c29b24e](https://github.com/tezjs/tez.js/commit/c29b24e64085efc137d8f16659612e5b20e14a6f))
* **vite:** resolve mobile component in pre script ([a22c831](https://github.com/tezjs/tez.js/commit/a22c831cc09bef06e0b335c982f663078211e662))


### Features

* **common:** set source folder path ([4785ca5](https://github.com/tezjs/tez.js/commit/4785ca5d27ff315a31132a5fc475fba413937338))
* **vite:** add preconnect link element ([cd78224](https://github.com/tezjs/tez.js/commit/cd7822466675fab2dcbb7a559ee24d4f54362fad))
* **vite:** allow to set dns-prefetch link element ([afc13ca](https://github.com/tezjs/tez.js/commit/afc13cafdadbd67ebfe80f8ed31471b809a0c25a))
* **vite:** allow to set prefetch path ([bdfefe0](https://github.com/tezjs/tez.js/commit/bdfefe0afdfdc9fdf7263fd46c8c43934e5e23cd))
* **vite:** bundle pagewise css ([a26379c](https://github.com/tezjs/tez.js/commit/a26379ccfc1c41d1d7392659733f046bceb96358))
* **vite:** page wise post script prefetch ([0ae4b21](https://github.com/tezjs/tez.js/commit/0ae4b2140bf44aaf3f7af47c4fc1b35e8876bc3b))
* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)


### Bug Fixes

* **vite:** component & layout import path in glob.js ([0a960a8](https://github.com/tezjs/tez.js/commit/0a960a8c0707e8134d9052dd5a838875da146465))
* **vite:** missing package under commonjs execution ([ad6bf38](https://github.com/tezjs/tez.js/commit/ad6bf3839d979b9736ca5936670a17550a4bac92))
* **vite:** replace new line code with blank from linkingData ([f072ed2](https://github.com/tezjs/tez.js/commit/f072ed2a79bbd664ffc6cefc183e616a562449c6))


### Features

* **vite:** customize tez build config with vite build ([3ba9bd0](https://github.com/tezjs/tez.js/commit/3ba9bd0dae5cb1e9cb73cd36c40af090da5025dc))
* **vite:** set as default production build ([1b3e21a](https://github.com/tezjs/tez.js/commit/1b3e21a418fbc3423d40bc90003ca19d8d3675da))



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **payload:** incorrect curly bracket ([c9c3f61](https://github.com/tezjs/tez.js/commit/c9c3f61373a1b6eb7aa7af77bb1550cd4bc25a66))
* **payload:** not to create robots when custom payload generator is configured ([bde0e1d](https://github.com/tezjs/tez.js/commit/bde0e1dd5fd1adc5f79da019e56777c2e7cd4ff9))
* **types:** mark as nullable prop of 'amplify' ([2efec85](https://github.com/tezjs/tez.js/commit/2efec85eb3bb217a018178bc48144b7ea604132a))
* **vite:** import plugins if exists ([740b3b8](https://github.com/tezjs/tez.js/commit/740b3b85f6464ac59a46cc27c7f8ac7eb5a8d875))
* **vite:** obviate number from component name ([c20801f](https://github.com/tezjs/tez.js/commit/c20801fbcfd187a41d57c03dad56449e6aacf09e))
* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))


### Features

* **payload:** pass additional props for custom payload generator ([a5d9217](https://github.com/tezjs/tez.js/commit/a5d921710eda26cdd9a1b7650af4efce64357437))
* **payload:** set routes for custom payload generator ([3eeed41](https://github.com/tezjs/tez.js/commit/3eeed41d47212ca1de4742eb4975520460f0e249))



## 0.0.51 (2022-07-26)


### Bug Fixes

* **payload:** ignore non change frequency & priority set url in sitemap ([ecd1ac0](https://github.com/tezjs/tez.js/commit/ecd1ac002a3a348d261a9878001839da987a1f41))



## 0.0.50 (2022-07-25)


### Bug Fixes

* **vite:** add proper format of linkingdata ([719a00e](https://github.com/tezjs/tez.js/commit/719a00e8d7f7aa52eb825300d231db7799f19fa8))



## 0.0.49 (2022-07-25)


### Features

* **payload:** add custom payload generator ([4013e8a](https://github.com/tezjs/tez.js/commit/4013e8a93d37647cf4ba723ca5c41e20d541c801))



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))
* **vite:** minify pre/post/preload js after build ([b0f2631](https://github.com/tezjs/tez.js/commit/b0f26311dfd41e63d9eaffd4d56c87624dfb03b0))



## 0.0.47 (2022-07-22)


### Bug Fixes

* **create-tez:** properly reference the property name ([c82e89a](https://github.com/tezjs/tez.js/commit/c82e89a44a73b96281871ead07746a2ea0f3f997))



## 0.0.46 (2022-07-22)


### Bug Fixes

* **vite:** obviate additional right slash from preload script url. ([2c5415e](https://github.com/tezjs/tez.js/commit/2c5415e7eb6727b51e0b2789dce79f1e5d2ff3ff))
* **vite:** preload items check before push ([e92933a](https://github.com/tezjs/tez.js/commit/e92933acedd4366df65ee427986ca3fe4b11e875))



## 0.0.45 (2022-07-22)


### Bug Fixes

* **payload:** redirect routes undefined then set blank array ([f3f39fc](https://github.com/tezjs/tez.js/commit/f3f39fc455f86464cda3c4dcfd12f39e3a7c7421))
* **vite:** import component correctly ([6deea03](https://github.com/tezjs/tez.js/commit/6deea03662eac54bffc7bcb06b4193d6a65e15a0))
* **vite:** obviate function while resolve the route ([a74e519](https://github.com/tezjs/tez.js/commit/a74e519b9bbbc41489f6a1c297448c54a81a0bfa))
* **vite:** set actual path instead of object ([4d986fb](https://github.com/tezjs/tez.js/commit/4d986fb234c3f102a34bbaa3ab071b16b3ee353c))
* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Bug Fixes

* **payload:** write firebase redirect routes ([a745423](https://github.com/tezjs/tez.js/commit/a7454230127a1efca8e0435502bb159f85467137))


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))
* **vite:** preload tz.js ([fcb7507](https://github.com/tezjs/tez.js/commit/fcb7507dcbd9ad46da9dce2e086b030844dc89c2))



## 0.0.43 (2022-07-19)


### Bug Fixes

* **payload:** map correct object for parse value ([4414bf6](https://github.com/tezjs/tez.js/commit/4414bf6b1091192a39f32e9dcac46f5e6622fefb))



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)


### Bug Fixes

* **payload:** add siteurl prefix in sitemap ([e848220](https://github.com/tezjs/tez.js/commit/e848220046acefb7a70432683544bf7bc5509f63))



## 0.0.39 (2022-07-15)


### Bug Fixes

* **vite:** write tz.js file on build complete ([b47ddcc](https://github.com/tezjs/tez.js/commit/b47ddcc68c5cd449274ad7bd690069ae1693e64b))



## 0.0.38 (2022-07-15)


### Bug Fixes

* **create-tez:** allow .cache folder permission while running in docker ([cc6226f](https://github.com/tezjs/tez.js/commit/cc6226f53fc209cc1d9b56efb06ee257b3067eb7))
* **vite:** add footer slot in post script ([ca36bad](https://github.com/tezjs/tez.js/commit/ca36bad8e9c6a3455e5237c77d2acb21c8527400))
* **vite:** remove suffix from image url while parsing the text ([581caf7](https://github.com/tezjs/tez.js/commit/581caf7ce3d26587a661c3fe898b51bebd26af48))
* **vite:** script & style property undefined check ([e7120c6](https://github.com/tezjs/tez.js/commit/e7120c6ed60fc8de01d1c269cb4b19cfc37df730))
* **vite:** segregate components conditionally in pre/post script ([a095a11](https://github.com/tezjs/tez.js/commit/a095a11ea5e7c5e625d48641554cbc9cb27ff014))


### Features

* conditional inline css/js reference on the page ([1bc7469](https://github.com/tezjs/tez.js/commit/1bc7469ae0a42837cb2889f989c75b63aa0f7603))
* **create-tez:** connect remote  container from vs code ([9602c2c](https://github.com/tezjs/tez.js/commit/9602c2c9b8eb83316d1461ab4273be7399160f71))
* **payload:** allow svg image to write in local folder ([89c9fb2](https://github.com/tezjs/tez.js/commit/89c9fb2770196e6a9696e28e4161972d12b015da))
* **vite:** preload underneath dependencies page wise ([a696e79](https://github.com/tezjs/tez.js/commit/a696e79d00d1317505958de370c87115a41b1ab7))
* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **common:** correct root (index) folder path ([8ae15d0](https://github.com/tezjs/tez.js/commit/8ae15d033e157eac413377e3e957d882bab281d3))
* **vite:** correct index.html root write path ([587aef5](https://github.com/tezjs/tez.js/commit/587aef58c7216e7a214f44fa706bf78c6b033735))
* **vite:** create html file at root ([1015c14](https://github.com/tezjs/tez.js/commit/1015c140cb5d6b16f15830c840d1c2fc9e955875))
* **vite:** generate index.html at root of the dist ([236ef35](https://github.com/tezjs/tez.js/commit/236ef35391108b83d50c658f11b9d3cb0bded5ee))
* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **js:** export isMobile function ([66f69c3](https://github.com/tezjs/tez.js/commit/66f69c3cf39da9202b804ccc96e017ab1b601354))
* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vite:** create tez.ts if not exists during build ([40db4ec](https://github.com/tezjs/tez.js/commit/40db4ec077cc83f0a055afb2924c5d609cc8a68c))
* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))
* **vue:** content attribute added to viewport meta tag ([2b35309](https://github.com/tezjs/tez.js/commit/2b353098551b99d9d5175f208980821c71c14536))



## 0.0.34 (2022-07-06)


### Bug Fixes

* **payload:** filter nested data ([a1ad7a7](https://github.com/tezjs/tez.js/commit/a1ad7a7f13a943112c8ac14ca64b06ea1454f461))



## 0.0.33 (2022-07-06)


### Bug Fixes

* **create-tez:** undefined message variable ([ca2c0b2](https://github.com/tezjs/tez.js/commit/ca2c0b2873508ea588cea2d2a3f89a31aa1de99e))



## 0.0.32 (2022-07-06)


### Bug Fixes

* **create-tez:** installing dependencies ([da6980a](https://github.com/tezjs/tez.js/commit/da6980aa1ba7473aaeef55ef406f1a2e5ad1573e))



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Bug Fixes

* **vite:** replace numbers from component name ([a8923b2](https://github.com/tezjs/tez.js/commit/a8923b20db8f7970cd6b8ec884c399f4c6ceecb1))


### Features

* **payload:** deep populate strapi data ([9eedc19](https://github.com/tezjs/tez.js/commit/9eedc19b0d85245c92a08d7b97bf743205c952e8))
* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Bug Fixes

* folder path seperator ([0629c06](https://github.com/tezjs/tez.js/commit/0629c06bdccdf9c54fbb51e436ec5702e11d2e5e))


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))
* **vite:** bundle page wise components and payload ([58dffbc](https://github.com/tezjs/tez.js/commit/58dffbccf6f71e0f8aa696675427a485b9ef4a52))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)


### Bug Fixes

* **create-tez:** resolve template directory path ([22c3751](https://github.com/tezjs/tez.js/commit/22c3751841a65b076501edfb8d6b4f035752d0f8))



## 0.0.25 (2022-06-13)


### Bug Fixes

* **payload:** remove back-slash from 'imageFolderPath' folder path ([bb80f77](https://github.com/tezjs/tez.js/commit/bb80f77d16dcd9728c8773a2c1004fcc54b3638b))
* **vite:** put 'await' while reading the tex config ([3d48f37](https://github.com/tezjs/tez.js/commit/3d48f37c91451739332dde43a080e3a0a86e7843))


### Features

* **create-tez:** automagically install scaffold template packages ([74afa89](https://github.com/tezjs/tez.js/commit/74afa8977f34ea9e9ba798f717e4401bf7b7de11))



## 0.0.24 (2022-06-02)


### Bug Fixes

* **payload:** parse query string with correct object ([d774399](https://github.com/tezjs/tez.js/commit/d774399eabe24b8e55272ba1247b8f8443b13030))



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **payload:** null check before transform the value ([aeb72bf](https://github.com/tezjs/tez.js/commit/aeb72bfd49bf8d843833c216f2942deb54cef502))
* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **common:** merge strapi default & user configuration ([ac60db7](https://github.com/tezjs/tez.js/commit/ac60db7263663eb6d9c9fdbc974ca4138ed1f8f3))
* **payload:** refresh reference content on the page ([1f438f0](https://github.com/tezjs/tez.js/commit/1f438f03669f32f2e3f6c599b9e6bb8ff8b9a5d0))
* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)


### Bug Fixes

* **create-tez:** add tsconfig in the project template ([88ec68a](https://github.com/tezjs/tez.js/commit/88ec68a819c6522f2d98c8cc7716a3df975d6625))
* **payload:** handle if masterpage is not set ([7be053c](https://github.com/tezjs/tez.js/commit/7be053c56111cd659cf8582f57ca5bf500d8a5ec))



## 0.0.19 (2022-05-28)


### Bug Fixes

* **create-tez:** ignore dist folder ([e79b290](https://github.com/tezjs/tez.js/commit/e79b290a44b9e57af97c2e70d68b66bbe4a76736))
* **create-tez:** tez strapi template seed data ([47ca764](https://github.com/tezjs/tez.js/commit/47ca7642ae2fd9f02384bd5f50f3140f1295905c))


### Features

* **types:** add prop amplify in deployment config ([b2a69a5](https://github.com/tezjs/tez.js/commit/b2a69a5f7f7ea615a2485cb6904590dac5a759c4))



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* sw template ([dc01931](https://github.com/tezjs/tez.js/commit/dc019313b125c32e8dd154beb2c5abd2241379f0))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))
* auto generate firebase deployment config ([6bceb53](https://github.com/tezjs/tez.js/commit/6bceb538d95a1e13bd53f87f675fe2dfe2d283d0))



## 0.0.16 (2022-05-26)



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* add optimizedeps path ([ddf68d4](https://github.com/tezjs/tez.js/commit/ddf68d46d6faeda6a295fb6ba9c337243d4038d5))
* auto generate tez.ts ([0725939](https://github.com/tezjs/tez.js/commit/072593975992dc81595e709a1986e4612db16ce1))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* change template path of service worker ([a68bf32](https://github.com/tezjs/tez.js/commit/a68bf32400e59b9941ff6e07bd27b7879567da28))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* convert into string instead array of html elements ([b453632](https://github.com/tezjs/tez.js/commit/b453632c36b8cbebd63c4d0e336bd4f8de1e9869))
* correct alias path ([0984d59](https://github.com/tezjs/tez.js/commit/0984d59a158ffe79dcad792e616fbea992ccb9eb))
* generate payload based on rootDir ([688b050](https://github.com/tezjs/tez.js/commit/688b050fd7810aaa3063cf2977ec7faa512e899b))
* generate sitemap and robots file ([bca1779](https://github.com/tezjs/tez.js/commit/bca17791f79d1ce3ad58eb500f741ec930a95175))
* generated html script and payload path ([6f7a14c](https://github.com/tezjs/tez.js/commit/6f7a14c86332af7928fabb34d6379bb70361ebc2))
* ignore broadcastchannel image request from local environment ([b23183a](https://github.com/tezjs/tez.js/commit/b23183ac151312047b5664763cc9767c75d8e47f))
* ignore undefined element in sitemap ([c3466a0](https://github.com/tezjs/tez.js/commit/c3466a023fd3b1005c4443a7a038e246a8be3e6d))
* image creating without configuration ([c2223d7](https://github.com/tezjs/tez.js/commit/c2223d74464327a22029dbcfa0a743a7d26de66a))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* minify index.html ([67dca05](https://github.com/tezjs/tez.js/commit/67dca0532e0e9a2fc6ab2b53bffccb31afa242a5))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* pass blank object if component data is undefined ([b1ed00f](https://github.com/tezjs/tez.js/commit/b1ed00f979f575daf602977e3cfe48383a3c83fc))
* pass blank object if seo object is null ([bed1681](https://github.com/tezjs/tez.js/commit/bed1681e173ab696193185a1a697028bcb9f84b9))
* reading seo payload path ([d6abff2](https://github.com/tezjs/tez.js/commit/d6abff2c24a3f81fb375bd2ceb805de92cbabe84))
* refresh specific route folder ([35a081f](https://github.com/tezjs/tez.js/commit/35a081f2460995cb7f5f662ce58052750f2de39d))
* resolve dynamic express module ([d41bcd0](https://github.com/tezjs/tez.js/commit/d41bcd02a672c185df62b8cb88e42c49544eb4c4))
* resolve import object value ([1fcedca](https://github.com/tezjs/tez.js/commit/1fcedca8083f2f8b36668961a977b4b75a22372d))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* return sitemap xelement ([ba1a4e3](https://github.com/tezjs/tez.js/commit/ba1a4e3b4eb1ec3d6847fb443eeb42eab1752535))
* service worker template code ([5ecd699](https://github.com/tezjs/tez.js/commit/5ecd69985060474a7d0ad7a1ecdad4e3cbf2eae2))
* set correct components folder path ([9c99697](https://github.com/tezjs/tez.js/commit/9c99697b207de11e46291a42a00661e147bc634c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* set correct payload path ([2b529ef](https://github.com/tezjs/tez.js/commit/2b529eff4cb6599e5e8a6ff224631e3d4606ee6a))
* set correct payload path ([3135c6a](https://github.com/tezjs/tez.js/commit/3135c6a36068abcd72a5359ddbeb2cb108cd4f03))
* tez dev ([d3e8e60](https://github.com/tezjs/tez.js/commit/d3e8e60991ec4bf16df2d0e31580336537b0ddf8))
* undefined payload object ([b6d1a76](https://github.com/tezjs/tez.js/commit/b6d1a76cd79d38cf9d73322d1846e0af68d2e266))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add custom route ([643d7d9](https://github.com/tezjs/tez.js/commit/643d7d98b4a5bf4fd1df058648e746dcfbbbdb98))
* add dynamic page record in the generic collections ([df6a56c](https://github.com/tezjs/tez.js/commit/df6a56ce8099a48d97c439e705b9d84901b38a81))
* add html page and seo tag ([e911e02](https://github.com/tezjs/tez.js/commit/e911e029ad10fa23656866e49966731428eb7174))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add master layout ([2a97b9c](https://github.com/tezjs/tez.js/commit/2a97b9c009099fdd4e12279f568a65493b9dc840))
* add multiple page schema on page ([6a9b3d3](https://github.com/tezjs/tez.js/commit/6a9b3d39a1310a4234a93636cb92dc96336a08c9))
* add new package '@tezjs/js' ([b51de5f](https://github.com/tezjs/tez.js/commit/b51de5fb7532ce692a222257a2b4ff095c1beb4d))
* add pwa ([05c407a](https://github.com/tezjs/tez.js/commit/05c407a9cc964e81b6eb6b7c2da77e3b9400f324))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* add zero configuration for tez app ([c79defe](https://github.com/tezjs/tez.js/commit/c79defef78ab02fc4ee8302260095a41ae043790))
* build through tez cli ([e23245b](https://github.com/tezjs/tez.js/commit/e23245b28d2ef32449f6c7df7fa3cc5b7737866c))
* configure custom page & payload ([da5e6a3](https://github.com/tezjs/tez.js/commit/da5e6a3baaf4dd9fc68b40254652eeb2a8b0ecd2))
* convert image into webp ([2fe8b1a](https://github.com/tezjs/tez.js/commit/2fe8b1adee35cf2304d44ec0546c94576e6abf45))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* custom page payload generator ([4d711f0](https://github.com/tezjs/tez.js/commit/4d711f032ab3373f94fafaaaa07e44bda028634a))
* define tez config conditionally ([168726a](https://github.com/tezjs/tez.js/commit/168726abdc85b2a05f3637f272b5d90b8f0b66c2))
* entity wise pagination configuration ([bacf79c](https://github.com/tezjs/tez.js/commit/bacf79cd590ed1623dd91b7d7855867e7e58a495))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* favicon & preload link configuration ([48fbefb](https://github.com/tezjs/tez.js/commit/48fbefbc4a59056a7f12f8f869b7d0bca44e855c))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* imports at root ts ([78da3da](https://github.com/tezjs/tez.js/commit/78da3da39fa180192a4745ccdc65528d5e3fc001))
* load lazy data ([1fe8e3a](https://github.com/tezjs/tez.js/commit/1fe8e3aff508c56f0989f36bdf53cfb9e4bc366e))
* parse object value ([8ec54cd](https://github.com/tezjs/tez.js/commit/8ec54cdefab3d865512087fad4ea3c7097b9111f))
* redirect-routes added ([6efde53](https://github.com/tezjs/tez.js/commit/6efde539142f11f2bad9410de51eb22c58c0813b))
* run add lib ([26c78c7](https://github.com/tezjs/tez.js/commit/26c78c7a1ad9932b8b87c1241618136922ba0f38))
* set default / custom port ([8d1f293](https://github.com/tezjs/tez.js/commit/8d1f29332fdedc08ed9fdb80d2d15a4536523fcf))
* sitemap, robots and seo added ([115adf0](https://github.com/tezjs/tez.js/commit/115adf0455cf6de38262a5e6fb1cd61f82d407ab))
* sitemap, robots and seo feature added ([6fbd3d2](https://github.com/tezjs/tez.js/commit/6fbd3d2bf159138b5344a3f93e3a7b9408c55f73))
* strapi package features ([f71125a](https://github.com/tezjs/tez.js/commit/f71125a31892a6e2e343fcb8bc5d3553e35b8755))
* **strapi:** add sanitizer component level data ([2326b22](https://github.com/tezjs/tez.js/commit/2326b22e19bf8913230bca63e351ae95fff7cbcc))
* **strapi:** component data wise pagination ([0390097](https://github.com/tezjs/tez.js/commit/0390097f0b0e7d83774dd5d639a5768ecda4db59))
* tez cli initial code added ([1c9ec72](https://github.com/tezjs/tez.js/commit/1c9ec723ea305edd8b31cf5729faf1c719174572))
* typed env variable ([80c291a](https://github.com/tezjs/tez.js/commit/80c291a23d8006d5b4321766f196314c894aefca))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** request image through broadcastchannel ([7e0329f](https://github.com/tezjs/tez.js/commit/7e0329f7fd2a79098c2442a0916eb3a86d278160))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))


### Performance Improvements

* break after routed payload refresh ([2f2711c](https://github.com/tezjs/tez.js/commit/2f2711cccb605a81d1cc42752162770f9300c079))



## 1.0.1 (2021-06-24)



## 0.0.79 (2022-08-16)


### Bug Fixes

* **vite:** read tez configuration before initializing the app ([848e3fd](https://github.com/tezjs/tez.js/commit/848e3fd7bad6f86fde1a46552d2e135024890c79))
* **vite:** remove 'dev' mode ([1a12421](https://github.com/tezjs/tez.js/commit/1a124219a947768ebbdd5c85e982c03b2f9c99c0))


### Features

* **vite:** generate sw.js configurable ([5f74c9e](https://github.com/tezjs/tez.js/commit/5f74c9ea29ba05b447098a1f6ac2260baeaa39e1))



## 0.0.78 (2022-08-16)


### Bug Fixes

* **vue:** stop multiple times scroll event ([74a354e](https://github.com/tezjs/tez.js/commit/74a354e2f1115f6e5844a8338bac56ecb10c330f))


### Features

* **vite:** export dev function to get the base configuration and run the app in dev mode through vite config ([a8d320a](https://github.com/tezjs/tez.js/commit/a8d320afb04e047c7ce8c957ba2f8206242a008e))


### Performance Improvements

* **vue:** improve component loading sequencing & LCP of the page ([9bd456d](https://github.com/tezjs/tez.js/commit/9bd456d42b29937ea3443f89a3cb11d03742f46c))



## 0.0.77 (2022-08-15)


### Bug Fixes

* **vite:** parse json schema ([daaf00b](https://github.com/tezjs/tez.js/commit/daaf00b5b9219168322f5dc179080bacfd5baa2e))



## 0.0.76 (2022-08-15)


### Bug Fixes

* **vite:** add build version only build mode ([7c22cc5](https://github.com/tezjs/tez.js/commit/7c22cc578f43285c0fcf40e165856b0669fc4425))
* **vite:** bundle page wise css ([177fbf1](https://github.com/tezjs/tez.js/commit/177fbf17ca1475b1b9344ae5b80f2ff052bb9d3d))
* **vite:** conflict vue / @tezjs/vue ([eb358d5](https://github.com/tezjs/tez.js/commit/eb358d5cd3bcf3ab1291494985ec9122f879262e))
* **vite:** return correct js path ([9071731](https://github.com/tezjs/tez.js/commit/9071731ffd6941724e4501356d33634537659ff9))



## 0.0.75 (2022-08-13)


### Bug Fixes

* **vite:** linking json data regex ([1f2bc4e](https://github.com/tezjs/tez.js/commit/1f2bc4e40edeeb0d55d2542360bfaf7856c20efc))



## 0.0.74 (2022-08-12)


### Bug Fixes

* **vite:** all deps must be in lowercase ([7e422f3](https://github.com/tezjs/tez.js/commit/7e422f369b75a83a293c1d698e00549c6f4e7618))
* **vite:** correct reference of CommonPathResolver ([819b42b](https://github.com/tezjs/tez.js/commit/819b42bf0643316c02dbc6ba1143ef33b6bbc6c6))



## 0.0.73 (2022-08-12)


### Bug Fixes

* **docs:** Correct Questions Url ([e5ebd0a](https://github.com/tezjs/tez.js/commit/e5ebd0a040f495b8f41dbdc990e050620a8a3bec))
* **docs:** typo mistake ([154aea9](https://github.com/tezjs/tez.js/commit/154aea920c5e87577b34b44d5e2f2e87a97ddf58))



## 0.0.72 (2022-08-11)



## 0.0.71 (2022-08-10)


### Bug Fixes

* **vite:** remove additional forward slash ([3f0a34e](https://github.com/tezjs/tez.js/commit/3f0a34e51e54962c641f829714a5ccc7e529da84))



## 0.0.70 (2022-08-10)


### Bug Fixes

* **vite:** add build version after release ([0236f51](https://github.com/tezjs/tez.js/commit/0236f51d6c2be3509d01874f576d4a2c88b07912))
* **vite:** gen component file names in lowercase ([12554e6](https://github.com/tezjs/tez.js/commit/12554e6617ee96499758b0a6eddafcf6ebde1a60))
* **vite:** gen component file names in lowercase ([aa13b16](https://github.com/tezjs/tez.js/commit/aa13b16f406157d4e39ca84827dd8c31962e5d01))
* **vite:** include css if js is not direct reference to the respective component ([7b0f03f](https://github.com/tezjs/tez.js/commit/7b0f03f2b1d32aadf5af4faa8f04de63418956ec))



## 0.0.69 (2022-08-09)


### Bug Fixes

* **vite:** preload correct component path ([5d0f20d](https://github.com/tezjs/tez.js/commit/5d0f20dfac40d5dd5d00cd7e065550e8b3a5d33e))


### Features

* **vite:** conditional generate sitemap & robots ([b2c48be](https://github.com/tezjs/tez.js/commit/b2c48be75f300465fdb4374f7f048fa016a40684))



## 0.0.68 (2022-08-09)


### Bug Fixes

* **vite:** remove replacer ([b4ec9b2](https://github.com/tezjs/tez.js/commit/b4ec9b228ad0f84432e16e80547bd36c472bc9e2))


### Features

* **vite:** conditional minification ([1ccb3e3](https://github.com/tezjs/tez.js/commit/1ccb3e330fa3daa8f56fad1bea32293e78fd8094))



## 0.0.67 (2022-08-09)


### Bug Fixes

* **vite:** include non variable reference imports ([23a13ef](https://github.com/tezjs/tez.js/commit/23a13ef1f5fefb340dcec0533566c888554fb3bc))


### Features

* **vue:** add query params in router ([4ade609](https://github.com/tezjs/tez.js/commit/4ade60956352042828ab68286b5d46d36de1df0d))



## 0.0.66 (2022-08-09)



## 0.0.65 (2022-08-08)


### Bug Fixes

* **payload:** set regex for replace the route path with replace method ([6ecf122](https://github.com/tezjs/tez.js/commit/6ecf122e6638a565530fdcc7ce67fc751ead745f))
* **vite:** correct regex  onResolve filter ([3160844](https://github.com/tezjs/tez.js/commit/31608445462fe05f79329067892e4f913e8121bd))



## 0.0.64 (2022-08-08)



## 0.0.63 (2022-08-08)


### Bug Fixes

* **vite:** add '@tezjs/vue' in optimizeDeps ([693cdbf](https://github.com/tezjs/tez.js/commit/693cdbfcc69fd24800143bf37b1d10f414c33112))



## 0.0.62 (2022-08-08)


### Bug Fixes

* **cli:** SPAWN ENOENT ([9567654](https://github.com/tezjs/tez.js/commit/9567654d36693bd10fcf393767bef2c4db3692d0))



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)


### Bug Fixes

* **create-tez:** add missing @tezjs/route package ([1e4d532](https://github.com/tezjs/tez.js/commit/1e4d532c1d886e8f337e4ddf83510ed02ca55e1f))
* **route:** set correct @tezjs/common package version ([6039f6d](https://github.com/tezjs/tez.js/commit/6039f6da56e40cd046b3be414d581af29038d3e5))



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* add modules property for tez module external plugin ([c8528a5](https://github.com/tezjs/tez.js/commit/c8528a57e52960e9847888c4602474a1df7fa911))
* **create-tez:** add tezjs with vue starter template ([1f6a61c](https://github.com/tezjs/tez.js/commit/1f6a61c50cdbeff56e65389c1d7324e71a0fb697))
* **route:** add new package '@tezjs/route' for auto-routes ([f8b8e3e](https://github.com/tezjs/tez.js/commit/f8b8e3e255ee069e7326845a9f08ee45e37591a0))
* **vite:** auto resolve all layout component in final build ([2d818fa](https://github.com/tezjs/tez.js/commit/2d818fa3c5f82ec5c2cd9ed695bd51b92f2ad899))
* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)


### Bug Fixes

* **common:** correct lib path when cust source code path is configured ([d8d888a](https://github.com/tezjs/tez.js/commit/d8d888afe53812fc92a1f522c1f1a303804e4233))
* **payload:** ignore undefined component in payload ([02d6183](https://github.com/tezjs/tez.js/commit/02d618362d1b919d1fd6d1ee43d8cdb037b79ae8))
* **vite:** custom source path undefined ([943703d](https://github.com/tezjs/tez.js/commit/943703d4c3a0728cb0873d45da75d2ac1f7f899c))
* **vite:** resolve addLib ([684107a](https://github.com/tezjs/tez.js/commit/684107a3aa83513a51af8bdc334d56daacba21e2))



## 0.0.57 (2022-08-04)


### Bug Fixes

* **types:** set as nullable 'preFetch' property ([4261964](https://github.com/tezjs/tez.js/commit/42619640072af4f1e62ef2a547140c677254396e))
* **vite:** call bundle css method if bundlecss is true ([c79bc24](https://github.com/tezjs/tez.js/commit/c79bc24cf905f67833394218df0e3c23b19ec81b))
* **vite:** check path value before assigning the reference ([4d53ab3](https://github.com/tezjs/tez.js/commit/4d53ab3b920e12fad9cde645c0dbfb8fddd18704))
* **vite:** persist global html meta configuration ([82edd78](https://github.com/tezjs/tez.js/commit/82edd78359f319e5a540b9aea75bf3c786cea434))
* **vite:** set custom source code path ([84006bc](https://github.com/tezjs/tez.js/commit/84006bce97373596d791299886eef1f8b01df633))


### Features

* **vite:** preload components & respective dependencies page wise ([e385a5c](https://github.com/tezjs/tez.js/commit/e385a5c8c0d914c2ef6c757c3e216ee10a1f5a69))



## 0.0.56 (2022-08-03)


### Bug Fixes

* **vite:** ignore tez.css from page wise css bundling ([2bda791](https://github.com/tezjs/tez.js/commit/2bda7915f1c5a6c78bd0f6ccebed0990b9370488))
* **vite:** remove closing element of link tag ([c29b24e](https://github.com/tezjs/tez.js/commit/c29b24e64085efc137d8f16659612e5b20e14a6f))
* **vite:** resolve mobile component in pre script ([a22c831](https://github.com/tezjs/tez.js/commit/a22c831cc09bef06e0b335c982f663078211e662))


### Features

* **common:** set source folder path ([4785ca5](https://github.com/tezjs/tez.js/commit/4785ca5d27ff315a31132a5fc475fba413937338))
* **vite:** add preconnect link element ([cd78224](https://github.com/tezjs/tez.js/commit/cd7822466675fab2dcbb7a559ee24d4f54362fad))
* **vite:** allow to set dns-prefetch link element ([afc13ca](https://github.com/tezjs/tez.js/commit/afc13cafdadbd67ebfe80f8ed31471b809a0c25a))
* **vite:** allow to set prefetch path ([bdfefe0](https://github.com/tezjs/tez.js/commit/bdfefe0afdfdc9fdf7263fd46c8c43934e5e23cd))
* **vite:** bundle pagewise css ([a26379c](https://github.com/tezjs/tez.js/commit/a26379ccfc1c41d1d7392659733f046bceb96358))
* **vite:** page wise post script prefetch ([0ae4b21](https://github.com/tezjs/tez.js/commit/0ae4b2140bf44aaf3f7af47c4fc1b35e8876bc3b))
* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)


### Bug Fixes

* **vite:** component & layout import path in glob.js ([0a960a8](https://github.com/tezjs/tez.js/commit/0a960a8c0707e8134d9052dd5a838875da146465))
* **vite:** missing package under commonjs execution ([ad6bf38](https://github.com/tezjs/tez.js/commit/ad6bf3839d979b9736ca5936670a17550a4bac92))
* **vite:** replace new line code with blank from linkingData ([f072ed2](https://github.com/tezjs/tez.js/commit/f072ed2a79bbd664ffc6cefc183e616a562449c6))


### Features

* **vite:** customize tez build config with vite build ([3ba9bd0](https://github.com/tezjs/tez.js/commit/3ba9bd0dae5cb1e9cb73cd36c40af090da5025dc))
* **vite:** set as default production build ([1b3e21a](https://github.com/tezjs/tez.js/commit/1b3e21a418fbc3423d40bc90003ca19d8d3675da))



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **payload:** incorrect curly bracket ([c9c3f61](https://github.com/tezjs/tez.js/commit/c9c3f61373a1b6eb7aa7af77bb1550cd4bc25a66))
* **payload:** not to create robots when custom payload generator is configured ([bde0e1d](https://github.com/tezjs/tez.js/commit/bde0e1dd5fd1adc5f79da019e56777c2e7cd4ff9))
* **types:** mark as nullable prop of 'amplify' ([2efec85](https://github.com/tezjs/tez.js/commit/2efec85eb3bb217a018178bc48144b7ea604132a))
* **vite:** import plugins if exists ([740b3b8](https://github.com/tezjs/tez.js/commit/740b3b85f6464ac59a46cc27c7f8ac7eb5a8d875))
* **vite:** obviate number from component name ([c20801f](https://github.com/tezjs/tez.js/commit/c20801fbcfd187a41d57c03dad56449e6aacf09e))
* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))


### Features

* **payload:** pass additional props for custom payload generator ([a5d9217](https://github.com/tezjs/tez.js/commit/a5d921710eda26cdd9a1b7650af4efce64357437))
* **payload:** set routes for custom payload generator ([3eeed41](https://github.com/tezjs/tez.js/commit/3eeed41d47212ca1de4742eb4975520460f0e249))



## 0.0.51 (2022-07-26)


### Bug Fixes

* **payload:** ignore non change frequency & priority set url in sitemap ([ecd1ac0](https://github.com/tezjs/tez.js/commit/ecd1ac002a3a348d261a9878001839da987a1f41))



## 0.0.50 (2022-07-25)


### Bug Fixes

* **vite:** add proper format of linkingdata ([719a00e](https://github.com/tezjs/tez.js/commit/719a00e8d7f7aa52eb825300d231db7799f19fa8))



## 0.0.49 (2022-07-25)


### Features

* **payload:** add custom payload generator ([4013e8a](https://github.com/tezjs/tez.js/commit/4013e8a93d37647cf4ba723ca5c41e20d541c801))



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))
* **vite:** minify pre/post/preload js after build ([b0f2631](https://github.com/tezjs/tez.js/commit/b0f26311dfd41e63d9eaffd4d56c87624dfb03b0))



## 0.0.47 (2022-07-22)


### Bug Fixes

* **create-tez:** properly reference the property name ([c82e89a](https://github.com/tezjs/tez.js/commit/c82e89a44a73b96281871ead07746a2ea0f3f997))



## 0.0.46 (2022-07-22)


### Bug Fixes

* **vite:** obviate additional right slash from preload script url. ([2c5415e](https://github.com/tezjs/tez.js/commit/2c5415e7eb6727b51e0b2789dce79f1e5d2ff3ff))
* **vite:** preload items check before push ([e92933a](https://github.com/tezjs/tez.js/commit/e92933acedd4366df65ee427986ca3fe4b11e875))



## 0.0.45 (2022-07-22)


### Bug Fixes

* **payload:** redirect routes undefined then set blank array ([f3f39fc](https://github.com/tezjs/tez.js/commit/f3f39fc455f86464cda3c4dcfd12f39e3a7c7421))
* **vite:** import component correctly ([6deea03](https://github.com/tezjs/tez.js/commit/6deea03662eac54bffc7bcb06b4193d6a65e15a0))
* **vite:** obviate function while resolve the route ([a74e519](https://github.com/tezjs/tez.js/commit/a74e519b9bbbc41489f6a1c297448c54a81a0bfa))
* **vite:** set actual path instead of object ([4d986fb](https://github.com/tezjs/tez.js/commit/4d986fb234c3f102a34bbaa3ab071b16b3ee353c))
* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Bug Fixes

* **payload:** write firebase redirect routes ([a745423](https://github.com/tezjs/tez.js/commit/a7454230127a1efca8e0435502bb159f85467137))


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))
* **vite:** preload tz.js ([fcb7507](https://github.com/tezjs/tez.js/commit/fcb7507dcbd9ad46da9dce2e086b030844dc89c2))



## 0.0.43 (2022-07-19)


### Bug Fixes

* **payload:** map correct object for parse value ([4414bf6](https://github.com/tezjs/tez.js/commit/4414bf6b1091192a39f32e9dcac46f5e6622fefb))



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)


### Bug Fixes

* **payload:** add siteurl prefix in sitemap ([e848220](https://github.com/tezjs/tez.js/commit/e848220046acefb7a70432683544bf7bc5509f63))



## 0.0.39 (2022-07-15)


### Bug Fixes

* **vite:** write tz.js file on build complete ([b47ddcc](https://github.com/tezjs/tez.js/commit/b47ddcc68c5cd449274ad7bd690069ae1693e64b))



## 0.0.38 (2022-07-15)


### Bug Fixes

* **create-tez:** allow .cache folder permission while running in docker ([cc6226f](https://github.com/tezjs/tez.js/commit/cc6226f53fc209cc1d9b56efb06ee257b3067eb7))
* **vite:** add footer slot in post script ([ca36bad](https://github.com/tezjs/tez.js/commit/ca36bad8e9c6a3455e5237c77d2acb21c8527400))
* **vite:** remove suffix from image url while parsing the text ([581caf7](https://github.com/tezjs/tez.js/commit/581caf7ce3d26587a661c3fe898b51bebd26af48))
* **vite:** script & style property undefined check ([e7120c6](https://github.com/tezjs/tez.js/commit/e7120c6ed60fc8de01d1c269cb4b19cfc37df730))
* **vite:** segregate components conditionally in pre/post script ([a095a11](https://github.com/tezjs/tez.js/commit/a095a11ea5e7c5e625d48641554cbc9cb27ff014))


### Features

* conditional inline css/js reference on the page ([1bc7469](https://github.com/tezjs/tez.js/commit/1bc7469ae0a42837cb2889f989c75b63aa0f7603))
* **create-tez:** connect remote  container from vs code ([9602c2c](https://github.com/tezjs/tez.js/commit/9602c2c9b8eb83316d1461ab4273be7399160f71))
* **payload:** allow svg image to write in local folder ([89c9fb2](https://github.com/tezjs/tez.js/commit/89c9fb2770196e6a9696e28e4161972d12b015da))
* **vite:** preload underneath dependencies page wise ([a696e79](https://github.com/tezjs/tez.js/commit/a696e79d00d1317505958de370c87115a41b1ab7))
* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **common:** correct root (index) folder path ([8ae15d0](https://github.com/tezjs/tez.js/commit/8ae15d033e157eac413377e3e957d882bab281d3))
* **vite:** correct index.html root write path ([587aef5](https://github.com/tezjs/tez.js/commit/587aef58c7216e7a214f44fa706bf78c6b033735))
* **vite:** create html file at root ([1015c14](https://github.com/tezjs/tez.js/commit/1015c140cb5d6b16f15830c840d1c2fc9e955875))
* **vite:** generate index.html at root of the dist ([236ef35](https://github.com/tezjs/tez.js/commit/236ef35391108b83d50c658f11b9d3cb0bded5ee))
* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **js:** export isMobile function ([66f69c3](https://github.com/tezjs/tez.js/commit/66f69c3cf39da9202b804ccc96e017ab1b601354))
* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vite:** create tez.ts if not exists during build ([40db4ec](https://github.com/tezjs/tez.js/commit/40db4ec077cc83f0a055afb2924c5d609cc8a68c))
* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))
* **vue:** content attribute added to viewport meta tag ([2b35309](https://github.com/tezjs/tez.js/commit/2b353098551b99d9d5175f208980821c71c14536))



## 0.0.34 (2022-07-06)


### Bug Fixes

* **payload:** filter nested data ([a1ad7a7](https://github.com/tezjs/tez.js/commit/a1ad7a7f13a943112c8ac14ca64b06ea1454f461))



## 0.0.33 (2022-07-06)


### Bug Fixes

* **create-tez:** undefined message variable ([ca2c0b2](https://github.com/tezjs/tez.js/commit/ca2c0b2873508ea588cea2d2a3f89a31aa1de99e))



## 0.0.32 (2022-07-06)


### Bug Fixes

* **create-tez:** installing dependencies ([da6980a](https://github.com/tezjs/tez.js/commit/da6980aa1ba7473aaeef55ef406f1a2e5ad1573e))



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Bug Fixes

* **vite:** replace numbers from component name ([a8923b2](https://github.com/tezjs/tez.js/commit/a8923b20db8f7970cd6b8ec884c399f4c6ceecb1))


### Features

* **payload:** deep populate strapi data ([9eedc19](https://github.com/tezjs/tez.js/commit/9eedc19b0d85245c92a08d7b97bf743205c952e8))
* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Bug Fixes

* folder path seperator ([0629c06](https://github.com/tezjs/tez.js/commit/0629c06bdccdf9c54fbb51e436ec5702e11d2e5e))


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))
* **vite:** bundle page wise components and payload ([58dffbc](https://github.com/tezjs/tez.js/commit/58dffbccf6f71e0f8aa696675427a485b9ef4a52))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)


### Bug Fixes

* **create-tez:** resolve template directory path ([22c3751](https://github.com/tezjs/tez.js/commit/22c3751841a65b076501edfb8d6b4f035752d0f8))



## 0.0.25 (2022-06-13)


### Bug Fixes

* **payload:** remove back-slash from 'imageFolderPath' folder path ([bb80f77](https://github.com/tezjs/tez.js/commit/bb80f77d16dcd9728c8773a2c1004fcc54b3638b))
* **vite:** put 'await' while reading the tex config ([3d48f37](https://github.com/tezjs/tez.js/commit/3d48f37c91451739332dde43a080e3a0a86e7843))


### Features

* **create-tez:** automagically install scaffold template packages ([74afa89](https://github.com/tezjs/tez.js/commit/74afa8977f34ea9e9ba798f717e4401bf7b7de11))



## 0.0.24 (2022-06-02)


### Bug Fixes

* **payload:** parse query string with correct object ([d774399](https://github.com/tezjs/tez.js/commit/d774399eabe24b8e55272ba1247b8f8443b13030))



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **payload:** null check before transform the value ([aeb72bf](https://github.com/tezjs/tez.js/commit/aeb72bfd49bf8d843833c216f2942deb54cef502))
* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **common:** merge strapi default & user configuration ([ac60db7](https://github.com/tezjs/tez.js/commit/ac60db7263663eb6d9c9fdbc974ca4138ed1f8f3))
* **payload:** refresh reference content on the page ([1f438f0](https://github.com/tezjs/tez.js/commit/1f438f03669f32f2e3f6c599b9e6bb8ff8b9a5d0))
* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)


### Bug Fixes

* **create-tez:** add tsconfig in the project template ([88ec68a](https://github.com/tezjs/tez.js/commit/88ec68a819c6522f2d98c8cc7716a3df975d6625))
* **payload:** handle if masterpage is not set ([7be053c](https://github.com/tezjs/tez.js/commit/7be053c56111cd659cf8582f57ca5bf500d8a5ec))



## 0.0.19 (2022-05-28)


### Bug Fixes

* **create-tez:** ignore dist folder ([e79b290](https://github.com/tezjs/tez.js/commit/e79b290a44b9e57af97c2e70d68b66bbe4a76736))
* **create-tez:** tez strapi template seed data ([47ca764](https://github.com/tezjs/tez.js/commit/47ca7642ae2fd9f02384bd5f50f3140f1295905c))


### Features

* **types:** add prop amplify in deployment config ([b2a69a5](https://github.com/tezjs/tez.js/commit/b2a69a5f7f7ea615a2485cb6904590dac5a759c4))



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* sw template ([dc01931](https://github.com/tezjs/tez.js/commit/dc019313b125c32e8dd154beb2c5abd2241379f0))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))
* auto generate firebase deployment config ([6bceb53](https://github.com/tezjs/tez.js/commit/6bceb538d95a1e13bd53f87f675fe2dfe2d283d0))



## 0.0.16 (2022-05-26)



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* add optimizedeps path ([ddf68d4](https://github.com/tezjs/tez.js/commit/ddf68d46d6faeda6a295fb6ba9c337243d4038d5))
* auto generate tez.ts ([0725939](https://github.com/tezjs/tez.js/commit/072593975992dc81595e709a1986e4612db16ce1))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* change template path of service worker ([a68bf32](https://github.com/tezjs/tez.js/commit/a68bf32400e59b9941ff6e07bd27b7879567da28))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* convert into string instead array of html elements ([b453632](https://github.com/tezjs/tez.js/commit/b453632c36b8cbebd63c4d0e336bd4f8de1e9869))
* correct alias path ([0984d59](https://github.com/tezjs/tez.js/commit/0984d59a158ffe79dcad792e616fbea992ccb9eb))
* generate payload based on rootDir ([688b050](https://github.com/tezjs/tez.js/commit/688b050fd7810aaa3063cf2977ec7faa512e899b))
* generate sitemap and robots file ([bca1779](https://github.com/tezjs/tez.js/commit/bca17791f79d1ce3ad58eb500f741ec930a95175))
* generated html script and payload path ([6f7a14c](https://github.com/tezjs/tez.js/commit/6f7a14c86332af7928fabb34d6379bb70361ebc2))
* ignore broadcastchannel image request from local environment ([b23183a](https://github.com/tezjs/tez.js/commit/b23183ac151312047b5664763cc9767c75d8e47f))
* ignore undefined element in sitemap ([c3466a0](https://github.com/tezjs/tez.js/commit/c3466a023fd3b1005c4443a7a038e246a8be3e6d))
* image creating without configuration ([c2223d7](https://github.com/tezjs/tez.js/commit/c2223d74464327a22029dbcfa0a743a7d26de66a))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* minify index.html ([67dca05](https://github.com/tezjs/tez.js/commit/67dca0532e0e9a2fc6ab2b53bffccb31afa242a5))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* pass blank object if component data is undefined ([b1ed00f](https://github.com/tezjs/tez.js/commit/b1ed00f979f575daf602977e3cfe48383a3c83fc))
* pass blank object if seo object is null ([bed1681](https://github.com/tezjs/tez.js/commit/bed1681e173ab696193185a1a697028bcb9f84b9))
* reading seo payload path ([d6abff2](https://github.com/tezjs/tez.js/commit/d6abff2c24a3f81fb375bd2ceb805de92cbabe84))
* refresh specific route folder ([35a081f](https://github.com/tezjs/tez.js/commit/35a081f2460995cb7f5f662ce58052750f2de39d))
* resolve dynamic express module ([d41bcd0](https://github.com/tezjs/tez.js/commit/d41bcd02a672c185df62b8cb88e42c49544eb4c4))
* resolve import object value ([1fcedca](https://github.com/tezjs/tez.js/commit/1fcedca8083f2f8b36668961a977b4b75a22372d))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* return sitemap xelement ([ba1a4e3](https://github.com/tezjs/tez.js/commit/ba1a4e3b4eb1ec3d6847fb443eeb42eab1752535))
* service worker template code ([5ecd699](https://github.com/tezjs/tez.js/commit/5ecd69985060474a7d0ad7a1ecdad4e3cbf2eae2))
* set correct components folder path ([9c99697](https://github.com/tezjs/tez.js/commit/9c99697b207de11e46291a42a00661e147bc634c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* set correct payload path ([2b529ef](https://github.com/tezjs/tez.js/commit/2b529eff4cb6599e5e8a6ff224631e3d4606ee6a))
* set correct payload path ([3135c6a](https://github.com/tezjs/tez.js/commit/3135c6a36068abcd72a5359ddbeb2cb108cd4f03))
* tez dev ([d3e8e60](https://github.com/tezjs/tez.js/commit/d3e8e60991ec4bf16df2d0e31580336537b0ddf8))
* undefined payload object ([b6d1a76](https://github.com/tezjs/tez.js/commit/b6d1a76cd79d38cf9d73322d1846e0af68d2e266))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add custom route ([643d7d9](https://github.com/tezjs/tez.js/commit/643d7d98b4a5bf4fd1df058648e746dcfbbbdb98))
* add dynamic page record in the generic collections ([df6a56c](https://github.com/tezjs/tez.js/commit/df6a56ce8099a48d97c439e705b9d84901b38a81))
* add html page and seo tag ([e911e02](https://github.com/tezjs/tez.js/commit/e911e029ad10fa23656866e49966731428eb7174))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add master layout ([2a97b9c](https://github.com/tezjs/tez.js/commit/2a97b9c009099fdd4e12279f568a65493b9dc840))
* add multiple page schema on page ([6a9b3d3](https://github.com/tezjs/tez.js/commit/6a9b3d39a1310a4234a93636cb92dc96336a08c9))
* add new package '@tezjs/js' ([b51de5f](https://github.com/tezjs/tez.js/commit/b51de5fb7532ce692a222257a2b4ff095c1beb4d))
* add pwa ([05c407a](https://github.com/tezjs/tez.js/commit/05c407a9cc964e81b6eb6b7c2da77e3b9400f324))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* add zero configuration for tez app ([c79defe](https://github.com/tezjs/tez.js/commit/c79defef78ab02fc4ee8302260095a41ae043790))
* build through tez cli ([e23245b](https://github.com/tezjs/tez.js/commit/e23245b28d2ef32449f6c7df7fa3cc5b7737866c))
* configure custom page & payload ([da5e6a3](https://github.com/tezjs/tez.js/commit/da5e6a3baaf4dd9fc68b40254652eeb2a8b0ecd2))
* convert image into webp ([2fe8b1a](https://github.com/tezjs/tez.js/commit/2fe8b1adee35cf2304d44ec0546c94576e6abf45))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* custom page payload generator ([4d711f0](https://github.com/tezjs/tez.js/commit/4d711f032ab3373f94fafaaaa07e44bda028634a))
* define tez config conditionally ([168726a](https://github.com/tezjs/tez.js/commit/168726abdc85b2a05f3637f272b5d90b8f0b66c2))
* entity wise pagination configuration ([bacf79c](https://github.com/tezjs/tez.js/commit/bacf79cd590ed1623dd91b7d7855867e7e58a495))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* favicon & preload link configuration ([48fbefb](https://github.com/tezjs/tez.js/commit/48fbefbc4a59056a7f12f8f869b7d0bca44e855c))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* imports at root ts ([78da3da](https://github.com/tezjs/tez.js/commit/78da3da39fa180192a4745ccdc65528d5e3fc001))
* load lazy data ([1fe8e3a](https://github.com/tezjs/tez.js/commit/1fe8e3aff508c56f0989f36bdf53cfb9e4bc366e))
* parse object value ([8ec54cd](https://github.com/tezjs/tez.js/commit/8ec54cdefab3d865512087fad4ea3c7097b9111f))
* redirect-routes added ([6efde53](https://github.com/tezjs/tez.js/commit/6efde539142f11f2bad9410de51eb22c58c0813b))
* run add lib ([26c78c7](https://github.com/tezjs/tez.js/commit/26c78c7a1ad9932b8b87c1241618136922ba0f38))
* set default / custom port ([8d1f293](https://github.com/tezjs/tez.js/commit/8d1f29332fdedc08ed9fdb80d2d15a4536523fcf))
* sitemap, robots and seo added ([115adf0](https://github.com/tezjs/tez.js/commit/115adf0455cf6de38262a5e6fb1cd61f82d407ab))
* sitemap, robots and seo feature added ([6fbd3d2](https://github.com/tezjs/tez.js/commit/6fbd3d2bf159138b5344a3f93e3a7b9408c55f73))
* strapi package features ([f71125a](https://github.com/tezjs/tez.js/commit/f71125a31892a6e2e343fcb8bc5d3553e35b8755))
* **strapi:** add sanitizer component level data ([2326b22](https://github.com/tezjs/tez.js/commit/2326b22e19bf8913230bca63e351ae95fff7cbcc))
* **strapi:** component data wise pagination ([0390097](https://github.com/tezjs/tez.js/commit/0390097f0b0e7d83774dd5d639a5768ecda4db59))
* tez cli initial code added ([1c9ec72](https://github.com/tezjs/tez.js/commit/1c9ec723ea305edd8b31cf5729faf1c719174572))
* typed env variable ([80c291a](https://github.com/tezjs/tez.js/commit/80c291a23d8006d5b4321766f196314c894aefca))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** request image through broadcastchannel ([7e0329f](https://github.com/tezjs/tez.js/commit/7e0329f7fd2a79098c2442a0916eb3a86d278160))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))


### Performance Improvements

* break after routed payload refresh ([2f2711c](https://github.com/tezjs/tez.js/commit/2f2711cccb605a81d1cc42752162770f9300c079))



## 1.0.1 (2021-06-24)



## 0.0.78 (2022-08-16)


### Bug Fixes

* **vue:** stop multiple times scroll event ([74a354e](https://github.com/tezjs/tez.js/commit/74a354e2f1115f6e5844a8338bac56ecb10c330f))


### Features

* **vite:** export dev function to get the base configuration and run the app in dev mode through vite config ([a8d320a](https://github.com/tezjs/tez.js/commit/a8d320afb04e047c7ce8c957ba2f8206242a008e))


### Performance Improvements

* **vue:** improve component loading sequencing & LCP of the page ([9bd456d](https://github.com/tezjs/tez.js/commit/9bd456d42b29937ea3443f89a3cb11d03742f46c))



## 0.0.77 (2022-08-15)


### Bug Fixes

* **vite:** parse json schema ([daaf00b](https://github.com/tezjs/tez.js/commit/daaf00b5b9219168322f5dc179080bacfd5baa2e))



## 0.0.76 (2022-08-15)


### Bug Fixes

* **vite:** add build version only build mode ([7c22cc5](https://github.com/tezjs/tez.js/commit/7c22cc578f43285c0fcf40e165856b0669fc4425))
* **vite:** bundle page wise css ([177fbf1](https://github.com/tezjs/tez.js/commit/177fbf17ca1475b1b9344ae5b80f2ff052bb9d3d))
* **vite:** conflict vue / @tezjs/vue ([eb358d5](https://github.com/tezjs/tez.js/commit/eb358d5cd3bcf3ab1291494985ec9122f879262e))
* **vite:** return correct js path ([9071731](https://github.com/tezjs/tez.js/commit/9071731ffd6941724e4501356d33634537659ff9))



## 0.0.75 (2022-08-13)


### Bug Fixes

* **vite:** linking json data regex ([1f2bc4e](https://github.com/tezjs/tez.js/commit/1f2bc4e40edeeb0d55d2542360bfaf7856c20efc))



## 0.0.74 (2022-08-12)


### Bug Fixes

* **vite:** all deps must be in lowercase ([7e422f3](https://github.com/tezjs/tez.js/commit/7e422f369b75a83a293c1d698e00549c6f4e7618))
* **vite:** correct reference of CommonPathResolver ([819b42b](https://github.com/tezjs/tez.js/commit/819b42bf0643316c02dbc6ba1143ef33b6bbc6c6))



## 0.0.73 (2022-08-12)


### Bug Fixes

* **docs:** Correct Questions Url ([e5ebd0a](https://github.com/tezjs/tez.js/commit/e5ebd0a040f495b8f41dbdc990e050620a8a3bec))
* **docs:** typo mistake ([154aea9](https://github.com/tezjs/tez.js/commit/154aea920c5e87577b34b44d5e2f2e87a97ddf58))



## 0.0.72 (2022-08-11)



## 0.0.71 (2022-08-10)


### Bug Fixes

* **vite:** remove additional forward slash ([3f0a34e](https://github.com/tezjs/tez.js/commit/3f0a34e51e54962c641f829714a5ccc7e529da84))



## 0.0.70 (2022-08-10)


### Bug Fixes

* **vite:** add build version after release ([0236f51](https://github.com/tezjs/tez.js/commit/0236f51d6c2be3509d01874f576d4a2c88b07912))
* **vite:** gen component file names in lowercase ([12554e6](https://github.com/tezjs/tez.js/commit/12554e6617ee96499758b0a6eddafcf6ebde1a60))
* **vite:** gen component file names in lowercase ([aa13b16](https://github.com/tezjs/tez.js/commit/aa13b16f406157d4e39ca84827dd8c31962e5d01))
* **vite:** include css if js is not direct reference to the respective component ([7b0f03f](https://github.com/tezjs/tez.js/commit/7b0f03f2b1d32aadf5af4faa8f04de63418956ec))



## 0.0.69 (2022-08-09)


### Bug Fixes

* **vite:** preload correct component path ([5d0f20d](https://github.com/tezjs/tez.js/commit/5d0f20dfac40d5dd5d00cd7e065550e8b3a5d33e))


### Features

* **vite:** conditional generate sitemap & robots ([b2c48be](https://github.com/tezjs/tez.js/commit/b2c48be75f300465fdb4374f7f048fa016a40684))



## 0.0.68 (2022-08-09)


### Bug Fixes

* **vite:** remove replacer ([b4ec9b2](https://github.com/tezjs/tez.js/commit/b4ec9b228ad0f84432e16e80547bd36c472bc9e2))


### Features

* **vite:** conditional minification ([1ccb3e3](https://github.com/tezjs/tez.js/commit/1ccb3e330fa3daa8f56fad1bea32293e78fd8094))



## 0.0.67 (2022-08-09)


### Bug Fixes

* **vite:** include non variable reference imports ([23a13ef](https://github.com/tezjs/tez.js/commit/23a13ef1f5fefb340dcec0533566c888554fb3bc))


### Features

* **vue:** add query params in router ([4ade609](https://github.com/tezjs/tez.js/commit/4ade60956352042828ab68286b5d46d36de1df0d))



## 0.0.66 (2022-08-09)



## 0.0.65 (2022-08-08)


### Bug Fixes

* **payload:** set regex for replace the route path with replace method ([6ecf122](https://github.com/tezjs/tez.js/commit/6ecf122e6638a565530fdcc7ce67fc751ead745f))
* **vite:** correct regex  onResolve filter ([3160844](https://github.com/tezjs/tez.js/commit/31608445462fe05f79329067892e4f913e8121bd))



## 0.0.64 (2022-08-08)



## 0.0.63 (2022-08-08)


### Bug Fixes

* **vite:** add '@tezjs/vue' in optimizeDeps ([693cdbf](https://github.com/tezjs/tez.js/commit/693cdbfcc69fd24800143bf37b1d10f414c33112))



## 0.0.62 (2022-08-08)


### Bug Fixes

* **cli:** SPAWN ENOENT ([9567654](https://github.com/tezjs/tez.js/commit/9567654d36693bd10fcf393767bef2c4db3692d0))



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)


### Bug Fixes

* **create-tez:** add missing @tezjs/route package ([1e4d532](https://github.com/tezjs/tez.js/commit/1e4d532c1d886e8f337e4ddf83510ed02ca55e1f))
* **route:** set correct @tezjs/common package version ([6039f6d](https://github.com/tezjs/tez.js/commit/6039f6da56e40cd046b3be414d581af29038d3e5))



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* add modules property for tez module external plugin ([c8528a5](https://github.com/tezjs/tez.js/commit/c8528a57e52960e9847888c4602474a1df7fa911))
* **create-tez:** add tezjs with vue starter template ([1f6a61c](https://github.com/tezjs/tez.js/commit/1f6a61c50cdbeff56e65389c1d7324e71a0fb697))
* **route:** add new package '@tezjs/route' for auto-routes ([f8b8e3e](https://github.com/tezjs/tez.js/commit/f8b8e3e255ee069e7326845a9f08ee45e37591a0))
* **vite:** auto resolve all layout component in final build ([2d818fa](https://github.com/tezjs/tez.js/commit/2d818fa3c5f82ec5c2cd9ed695bd51b92f2ad899))
* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)


### Bug Fixes

* **common:** correct lib path when cust source code path is configured ([d8d888a](https://github.com/tezjs/tez.js/commit/d8d888afe53812fc92a1f522c1f1a303804e4233))
* **payload:** ignore undefined component in payload ([02d6183](https://github.com/tezjs/tez.js/commit/02d618362d1b919d1fd6d1ee43d8cdb037b79ae8))
* **vite:** custom source path undefined ([943703d](https://github.com/tezjs/tez.js/commit/943703d4c3a0728cb0873d45da75d2ac1f7f899c))
* **vite:** resolve addLib ([684107a](https://github.com/tezjs/tez.js/commit/684107a3aa83513a51af8bdc334d56daacba21e2))



## 0.0.57 (2022-08-04)


### Bug Fixes

* **types:** set as nullable 'preFetch' property ([4261964](https://github.com/tezjs/tez.js/commit/42619640072af4f1e62ef2a547140c677254396e))
* **vite:** call bundle css method if bundlecss is true ([c79bc24](https://github.com/tezjs/tez.js/commit/c79bc24cf905f67833394218df0e3c23b19ec81b))
* **vite:** check path value before assigning the reference ([4d53ab3](https://github.com/tezjs/tez.js/commit/4d53ab3b920e12fad9cde645c0dbfb8fddd18704))
* **vite:** persist global html meta configuration ([82edd78](https://github.com/tezjs/tez.js/commit/82edd78359f319e5a540b9aea75bf3c786cea434))
* **vite:** set custom source code path ([84006bc](https://github.com/tezjs/tez.js/commit/84006bce97373596d791299886eef1f8b01df633))


### Features

* **vite:** preload components & respective dependencies page wise ([e385a5c](https://github.com/tezjs/tez.js/commit/e385a5c8c0d914c2ef6c757c3e216ee10a1f5a69))



## 0.0.56 (2022-08-03)


### Bug Fixes

* **vite:** ignore tez.css from page wise css bundling ([2bda791](https://github.com/tezjs/tez.js/commit/2bda7915f1c5a6c78bd0f6ccebed0990b9370488))
* **vite:** remove closing element of link tag ([c29b24e](https://github.com/tezjs/tez.js/commit/c29b24e64085efc137d8f16659612e5b20e14a6f))
* **vite:** resolve mobile component in pre script ([a22c831](https://github.com/tezjs/tez.js/commit/a22c831cc09bef06e0b335c982f663078211e662))


### Features

* **common:** set source folder path ([4785ca5](https://github.com/tezjs/tez.js/commit/4785ca5d27ff315a31132a5fc475fba413937338))
* **vite:** add preconnect link element ([cd78224](https://github.com/tezjs/tez.js/commit/cd7822466675fab2dcbb7a559ee24d4f54362fad))
* **vite:** allow to set dns-prefetch link element ([afc13ca](https://github.com/tezjs/tez.js/commit/afc13cafdadbd67ebfe80f8ed31471b809a0c25a))
* **vite:** allow to set prefetch path ([bdfefe0](https://github.com/tezjs/tez.js/commit/bdfefe0afdfdc9fdf7263fd46c8c43934e5e23cd))
* **vite:** bundle pagewise css ([a26379c](https://github.com/tezjs/tez.js/commit/a26379ccfc1c41d1d7392659733f046bceb96358))
* **vite:** page wise post script prefetch ([0ae4b21](https://github.com/tezjs/tez.js/commit/0ae4b2140bf44aaf3f7af47c4fc1b35e8876bc3b))
* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)


### Bug Fixes

* **vite:** component & layout import path in glob.js ([0a960a8](https://github.com/tezjs/tez.js/commit/0a960a8c0707e8134d9052dd5a838875da146465))
* **vite:** missing package under commonjs execution ([ad6bf38](https://github.com/tezjs/tez.js/commit/ad6bf3839d979b9736ca5936670a17550a4bac92))
* **vite:** replace new line code with blank from linkingData ([f072ed2](https://github.com/tezjs/tez.js/commit/f072ed2a79bbd664ffc6cefc183e616a562449c6))


### Features

* **vite:** customize tez build config with vite build ([3ba9bd0](https://github.com/tezjs/tez.js/commit/3ba9bd0dae5cb1e9cb73cd36c40af090da5025dc))
* **vite:** set as default production build ([1b3e21a](https://github.com/tezjs/tez.js/commit/1b3e21a418fbc3423d40bc90003ca19d8d3675da))



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **payload:** incorrect curly bracket ([c9c3f61](https://github.com/tezjs/tez.js/commit/c9c3f61373a1b6eb7aa7af77bb1550cd4bc25a66))
* **payload:** not to create robots when custom payload generator is configured ([bde0e1d](https://github.com/tezjs/tez.js/commit/bde0e1dd5fd1adc5f79da019e56777c2e7cd4ff9))
* **types:** mark as nullable prop of 'amplify' ([2efec85](https://github.com/tezjs/tez.js/commit/2efec85eb3bb217a018178bc48144b7ea604132a))
* **vite:** import plugins if exists ([740b3b8](https://github.com/tezjs/tez.js/commit/740b3b85f6464ac59a46cc27c7f8ac7eb5a8d875))
* **vite:** obviate number from component name ([c20801f](https://github.com/tezjs/tez.js/commit/c20801fbcfd187a41d57c03dad56449e6aacf09e))
* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))


### Features

* **payload:** pass additional props for custom payload generator ([a5d9217](https://github.com/tezjs/tez.js/commit/a5d921710eda26cdd9a1b7650af4efce64357437))
* **payload:** set routes for custom payload generator ([3eeed41](https://github.com/tezjs/tez.js/commit/3eeed41d47212ca1de4742eb4975520460f0e249))



## 0.0.51 (2022-07-26)


### Bug Fixes

* **payload:** ignore non change frequency & priority set url in sitemap ([ecd1ac0](https://github.com/tezjs/tez.js/commit/ecd1ac002a3a348d261a9878001839da987a1f41))



## 0.0.50 (2022-07-25)


### Bug Fixes

* **vite:** add proper format of linkingdata ([719a00e](https://github.com/tezjs/tez.js/commit/719a00e8d7f7aa52eb825300d231db7799f19fa8))



## 0.0.49 (2022-07-25)


### Features

* **payload:** add custom payload generator ([4013e8a](https://github.com/tezjs/tez.js/commit/4013e8a93d37647cf4ba723ca5c41e20d541c801))



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))
* **vite:** minify pre/post/preload js after build ([b0f2631](https://github.com/tezjs/tez.js/commit/b0f26311dfd41e63d9eaffd4d56c87624dfb03b0))



## 0.0.47 (2022-07-22)


### Bug Fixes

* **create-tez:** properly reference the property name ([c82e89a](https://github.com/tezjs/tez.js/commit/c82e89a44a73b96281871ead07746a2ea0f3f997))



## 0.0.46 (2022-07-22)


### Bug Fixes

* **vite:** obviate additional right slash from preload script url. ([2c5415e](https://github.com/tezjs/tez.js/commit/2c5415e7eb6727b51e0b2789dce79f1e5d2ff3ff))
* **vite:** preload items check before push ([e92933a](https://github.com/tezjs/tez.js/commit/e92933acedd4366df65ee427986ca3fe4b11e875))



## 0.0.45 (2022-07-22)


### Bug Fixes

* **payload:** redirect routes undefined then set blank array ([f3f39fc](https://github.com/tezjs/tez.js/commit/f3f39fc455f86464cda3c4dcfd12f39e3a7c7421))
* **vite:** import component correctly ([6deea03](https://github.com/tezjs/tez.js/commit/6deea03662eac54bffc7bcb06b4193d6a65e15a0))
* **vite:** obviate function while resolve the route ([a74e519](https://github.com/tezjs/tez.js/commit/a74e519b9bbbc41489f6a1c297448c54a81a0bfa))
* **vite:** set actual path instead of object ([4d986fb](https://github.com/tezjs/tez.js/commit/4d986fb234c3f102a34bbaa3ab071b16b3ee353c))
* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Bug Fixes

* **payload:** write firebase redirect routes ([a745423](https://github.com/tezjs/tez.js/commit/a7454230127a1efca8e0435502bb159f85467137))


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))
* **vite:** preload tz.js ([fcb7507](https://github.com/tezjs/tez.js/commit/fcb7507dcbd9ad46da9dce2e086b030844dc89c2))



## 0.0.43 (2022-07-19)


### Bug Fixes

* **payload:** map correct object for parse value ([4414bf6](https://github.com/tezjs/tez.js/commit/4414bf6b1091192a39f32e9dcac46f5e6622fefb))



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)


### Bug Fixes

* **payload:** add siteurl prefix in sitemap ([e848220](https://github.com/tezjs/tez.js/commit/e848220046acefb7a70432683544bf7bc5509f63))



## 0.0.39 (2022-07-15)


### Bug Fixes

* **vite:** write tz.js file on build complete ([b47ddcc](https://github.com/tezjs/tez.js/commit/b47ddcc68c5cd449274ad7bd690069ae1693e64b))



## 0.0.38 (2022-07-15)


### Bug Fixes

* **create-tez:** allow .cache folder permission while running in docker ([cc6226f](https://github.com/tezjs/tez.js/commit/cc6226f53fc209cc1d9b56efb06ee257b3067eb7))
* **vite:** add footer slot in post script ([ca36bad](https://github.com/tezjs/tez.js/commit/ca36bad8e9c6a3455e5237c77d2acb21c8527400))
* **vite:** remove suffix from image url while parsing the text ([581caf7](https://github.com/tezjs/tez.js/commit/581caf7ce3d26587a661c3fe898b51bebd26af48))
* **vite:** script & style property undefined check ([e7120c6](https://github.com/tezjs/tez.js/commit/e7120c6ed60fc8de01d1c269cb4b19cfc37df730))
* **vite:** segregate components conditionally in pre/post script ([a095a11](https://github.com/tezjs/tez.js/commit/a095a11ea5e7c5e625d48641554cbc9cb27ff014))


### Features

* conditional inline css/js reference on the page ([1bc7469](https://github.com/tezjs/tez.js/commit/1bc7469ae0a42837cb2889f989c75b63aa0f7603))
* **create-tez:** connect remote  container from vs code ([9602c2c](https://github.com/tezjs/tez.js/commit/9602c2c9b8eb83316d1461ab4273be7399160f71))
* **payload:** allow svg image to write in local folder ([89c9fb2](https://github.com/tezjs/tez.js/commit/89c9fb2770196e6a9696e28e4161972d12b015da))
* **vite:** preload underneath dependencies page wise ([a696e79](https://github.com/tezjs/tez.js/commit/a696e79d00d1317505958de370c87115a41b1ab7))
* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **common:** correct root (index) folder path ([8ae15d0](https://github.com/tezjs/tez.js/commit/8ae15d033e157eac413377e3e957d882bab281d3))
* **vite:** correct index.html root write path ([587aef5](https://github.com/tezjs/tez.js/commit/587aef58c7216e7a214f44fa706bf78c6b033735))
* **vite:** create html file at root ([1015c14](https://github.com/tezjs/tez.js/commit/1015c140cb5d6b16f15830c840d1c2fc9e955875))
* **vite:** generate index.html at root of the dist ([236ef35](https://github.com/tezjs/tez.js/commit/236ef35391108b83d50c658f11b9d3cb0bded5ee))
* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **js:** export isMobile function ([66f69c3](https://github.com/tezjs/tez.js/commit/66f69c3cf39da9202b804ccc96e017ab1b601354))
* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vite:** create tez.ts if not exists during build ([40db4ec](https://github.com/tezjs/tez.js/commit/40db4ec077cc83f0a055afb2924c5d609cc8a68c))
* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))
* **vue:** content attribute added to viewport meta tag ([2b35309](https://github.com/tezjs/tez.js/commit/2b353098551b99d9d5175f208980821c71c14536))



## 0.0.34 (2022-07-06)


### Bug Fixes

* **payload:** filter nested data ([a1ad7a7](https://github.com/tezjs/tez.js/commit/a1ad7a7f13a943112c8ac14ca64b06ea1454f461))



## 0.0.33 (2022-07-06)


### Bug Fixes

* **create-tez:** undefined message variable ([ca2c0b2](https://github.com/tezjs/tez.js/commit/ca2c0b2873508ea588cea2d2a3f89a31aa1de99e))



## 0.0.32 (2022-07-06)


### Bug Fixes

* **create-tez:** installing dependencies ([da6980a](https://github.com/tezjs/tez.js/commit/da6980aa1ba7473aaeef55ef406f1a2e5ad1573e))



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Bug Fixes

* **vite:** replace numbers from component name ([a8923b2](https://github.com/tezjs/tez.js/commit/a8923b20db8f7970cd6b8ec884c399f4c6ceecb1))


### Features

* **payload:** deep populate strapi data ([9eedc19](https://github.com/tezjs/tez.js/commit/9eedc19b0d85245c92a08d7b97bf743205c952e8))
* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Bug Fixes

* folder path seperator ([0629c06](https://github.com/tezjs/tez.js/commit/0629c06bdccdf9c54fbb51e436ec5702e11d2e5e))


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))
* **vite:** bundle page wise components and payload ([58dffbc](https://github.com/tezjs/tez.js/commit/58dffbccf6f71e0f8aa696675427a485b9ef4a52))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)


### Bug Fixes

* **create-tez:** resolve template directory path ([22c3751](https://github.com/tezjs/tez.js/commit/22c3751841a65b076501edfb8d6b4f035752d0f8))



## 0.0.25 (2022-06-13)


### Bug Fixes

* **payload:** remove back-slash from 'imageFolderPath' folder path ([bb80f77](https://github.com/tezjs/tez.js/commit/bb80f77d16dcd9728c8773a2c1004fcc54b3638b))
* **vite:** put 'await' while reading the tex config ([3d48f37](https://github.com/tezjs/tez.js/commit/3d48f37c91451739332dde43a080e3a0a86e7843))


### Features

* **create-tez:** automagically install scaffold template packages ([74afa89](https://github.com/tezjs/tez.js/commit/74afa8977f34ea9e9ba798f717e4401bf7b7de11))



## 0.0.24 (2022-06-02)


### Bug Fixes

* **payload:** parse query string with correct object ([d774399](https://github.com/tezjs/tez.js/commit/d774399eabe24b8e55272ba1247b8f8443b13030))



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **payload:** null check before transform the value ([aeb72bf](https://github.com/tezjs/tez.js/commit/aeb72bfd49bf8d843833c216f2942deb54cef502))
* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **common:** merge strapi default & user configuration ([ac60db7](https://github.com/tezjs/tez.js/commit/ac60db7263663eb6d9c9fdbc974ca4138ed1f8f3))
* **payload:** refresh reference content on the page ([1f438f0](https://github.com/tezjs/tez.js/commit/1f438f03669f32f2e3f6c599b9e6bb8ff8b9a5d0))
* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)


### Bug Fixes

* **create-tez:** add tsconfig in the project template ([88ec68a](https://github.com/tezjs/tez.js/commit/88ec68a819c6522f2d98c8cc7716a3df975d6625))
* **payload:** handle if masterpage is not set ([7be053c](https://github.com/tezjs/tez.js/commit/7be053c56111cd659cf8582f57ca5bf500d8a5ec))



## 0.0.19 (2022-05-28)


### Bug Fixes

* **create-tez:** ignore dist folder ([e79b290](https://github.com/tezjs/tez.js/commit/e79b290a44b9e57af97c2e70d68b66bbe4a76736))
* **create-tez:** tez strapi template seed data ([47ca764](https://github.com/tezjs/tez.js/commit/47ca7642ae2fd9f02384bd5f50f3140f1295905c))


### Features

* **types:** add prop amplify in deployment config ([b2a69a5](https://github.com/tezjs/tez.js/commit/b2a69a5f7f7ea615a2485cb6904590dac5a759c4))



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* sw template ([dc01931](https://github.com/tezjs/tez.js/commit/dc019313b125c32e8dd154beb2c5abd2241379f0))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))
* auto generate firebase deployment config ([6bceb53](https://github.com/tezjs/tez.js/commit/6bceb538d95a1e13bd53f87f675fe2dfe2d283d0))



## 0.0.16 (2022-05-26)



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* add optimizedeps path ([ddf68d4](https://github.com/tezjs/tez.js/commit/ddf68d46d6faeda6a295fb6ba9c337243d4038d5))
* auto generate tez.ts ([0725939](https://github.com/tezjs/tez.js/commit/072593975992dc81595e709a1986e4612db16ce1))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* change template path of service worker ([a68bf32](https://github.com/tezjs/tez.js/commit/a68bf32400e59b9941ff6e07bd27b7879567da28))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* convert into string instead array of html elements ([b453632](https://github.com/tezjs/tez.js/commit/b453632c36b8cbebd63c4d0e336bd4f8de1e9869))
* correct alias path ([0984d59](https://github.com/tezjs/tez.js/commit/0984d59a158ffe79dcad792e616fbea992ccb9eb))
* generate payload based on rootDir ([688b050](https://github.com/tezjs/tez.js/commit/688b050fd7810aaa3063cf2977ec7faa512e899b))
* generate sitemap and robots file ([bca1779](https://github.com/tezjs/tez.js/commit/bca17791f79d1ce3ad58eb500f741ec930a95175))
* generated html script and payload path ([6f7a14c](https://github.com/tezjs/tez.js/commit/6f7a14c86332af7928fabb34d6379bb70361ebc2))
* ignore broadcastchannel image request from local environment ([b23183a](https://github.com/tezjs/tez.js/commit/b23183ac151312047b5664763cc9767c75d8e47f))
* ignore undefined element in sitemap ([c3466a0](https://github.com/tezjs/tez.js/commit/c3466a023fd3b1005c4443a7a038e246a8be3e6d))
* image creating without configuration ([c2223d7](https://github.com/tezjs/tez.js/commit/c2223d74464327a22029dbcfa0a743a7d26de66a))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* minify index.html ([67dca05](https://github.com/tezjs/tez.js/commit/67dca0532e0e9a2fc6ab2b53bffccb31afa242a5))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* pass blank object if component data is undefined ([b1ed00f](https://github.com/tezjs/tez.js/commit/b1ed00f979f575daf602977e3cfe48383a3c83fc))
* pass blank object if seo object is null ([bed1681](https://github.com/tezjs/tez.js/commit/bed1681e173ab696193185a1a697028bcb9f84b9))
* reading seo payload path ([d6abff2](https://github.com/tezjs/tez.js/commit/d6abff2c24a3f81fb375bd2ceb805de92cbabe84))
* refresh specific route folder ([35a081f](https://github.com/tezjs/tez.js/commit/35a081f2460995cb7f5f662ce58052750f2de39d))
* resolve dynamic express module ([d41bcd0](https://github.com/tezjs/tez.js/commit/d41bcd02a672c185df62b8cb88e42c49544eb4c4))
* resolve import object value ([1fcedca](https://github.com/tezjs/tez.js/commit/1fcedca8083f2f8b36668961a977b4b75a22372d))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* return sitemap xelement ([ba1a4e3](https://github.com/tezjs/tez.js/commit/ba1a4e3b4eb1ec3d6847fb443eeb42eab1752535))
* service worker template code ([5ecd699](https://github.com/tezjs/tez.js/commit/5ecd69985060474a7d0ad7a1ecdad4e3cbf2eae2))
* set correct components folder path ([9c99697](https://github.com/tezjs/tez.js/commit/9c99697b207de11e46291a42a00661e147bc634c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* set correct payload path ([2b529ef](https://github.com/tezjs/tez.js/commit/2b529eff4cb6599e5e8a6ff224631e3d4606ee6a))
* set correct payload path ([3135c6a](https://github.com/tezjs/tez.js/commit/3135c6a36068abcd72a5359ddbeb2cb108cd4f03))
* tez dev ([d3e8e60](https://github.com/tezjs/tez.js/commit/d3e8e60991ec4bf16df2d0e31580336537b0ddf8))
* undefined payload object ([b6d1a76](https://github.com/tezjs/tez.js/commit/b6d1a76cd79d38cf9d73322d1846e0af68d2e266))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add custom route ([643d7d9](https://github.com/tezjs/tez.js/commit/643d7d98b4a5bf4fd1df058648e746dcfbbbdb98))
* add dynamic page record in the generic collections ([df6a56c](https://github.com/tezjs/tez.js/commit/df6a56ce8099a48d97c439e705b9d84901b38a81))
* add html page and seo tag ([e911e02](https://github.com/tezjs/tez.js/commit/e911e029ad10fa23656866e49966731428eb7174))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add master layout ([2a97b9c](https://github.com/tezjs/tez.js/commit/2a97b9c009099fdd4e12279f568a65493b9dc840))
* add multiple page schema on page ([6a9b3d3](https://github.com/tezjs/tez.js/commit/6a9b3d39a1310a4234a93636cb92dc96336a08c9))
* add new package '@tezjs/js' ([b51de5f](https://github.com/tezjs/tez.js/commit/b51de5fb7532ce692a222257a2b4ff095c1beb4d))
* add pwa ([05c407a](https://github.com/tezjs/tez.js/commit/05c407a9cc964e81b6eb6b7c2da77e3b9400f324))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* add zero configuration for tez app ([c79defe](https://github.com/tezjs/tez.js/commit/c79defef78ab02fc4ee8302260095a41ae043790))
* build through tez cli ([e23245b](https://github.com/tezjs/tez.js/commit/e23245b28d2ef32449f6c7df7fa3cc5b7737866c))
* configure custom page & payload ([da5e6a3](https://github.com/tezjs/tez.js/commit/da5e6a3baaf4dd9fc68b40254652eeb2a8b0ecd2))
* convert image into webp ([2fe8b1a](https://github.com/tezjs/tez.js/commit/2fe8b1adee35cf2304d44ec0546c94576e6abf45))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* custom page payload generator ([4d711f0](https://github.com/tezjs/tez.js/commit/4d711f032ab3373f94fafaaaa07e44bda028634a))
* define tez config conditionally ([168726a](https://github.com/tezjs/tez.js/commit/168726abdc85b2a05f3637f272b5d90b8f0b66c2))
* entity wise pagination configuration ([bacf79c](https://github.com/tezjs/tez.js/commit/bacf79cd590ed1623dd91b7d7855867e7e58a495))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* favicon & preload link configuration ([48fbefb](https://github.com/tezjs/tez.js/commit/48fbefbc4a59056a7f12f8f869b7d0bca44e855c))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* imports at root ts ([78da3da](https://github.com/tezjs/tez.js/commit/78da3da39fa180192a4745ccdc65528d5e3fc001))
* load lazy data ([1fe8e3a](https://github.com/tezjs/tez.js/commit/1fe8e3aff508c56f0989f36bdf53cfb9e4bc366e))
* parse object value ([8ec54cd](https://github.com/tezjs/tez.js/commit/8ec54cdefab3d865512087fad4ea3c7097b9111f))
* redirect-routes added ([6efde53](https://github.com/tezjs/tez.js/commit/6efde539142f11f2bad9410de51eb22c58c0813b))
* run add lib ([26c78c7](https://github.com/tezjs/tez.js/commit/26c78c7a1ad9932b8b87c1241618136922ba0f38))
* set default / custom port ([8d1f293](https://github.com/tezjs/tez.js/commit/8d1f29332fdedc08ed9fdb80d2d15a4536523fcf))
* sitemap, robots and seo added ([115adf0](https://github.com/tezjs/tez.js/commit/115adf0455cf6de38262a5e6fb1cd61f82d407ab))
* sitemap, robots and seo feature added ([6fbd3d2](https://github.com/tezjs/tez.js/commit/6fbd3d2bf159138b5344a3f93e3a7b9408c55f73))
* strapi package features ([f71125a](https://github.com/tezjs/tez.js/commit/f71125a31892a6e2e343fcb8bc5d3553e35b8755))
* **strapi:** add sanitizer component level data ([2326b22](https://github.com/tezjs/tez.js/commit/2326b22e19bf8913230bca63e351ae95fff7cbcc))
* **strapi:** component data wise pagination ([0390097](https://github.com/tezjs/tez.js/commit/0390097f0b0e7d83774dd5d639a5768ecda4db59))
* tez cli initial code added ([1c9ec72](https://github.com/tezjs/tez.js/commit/1c9ec723ea305edd8b31cf5729faf1c719174572))
* typed env variable ([80c291a](https://github.com/tezjs/tez.js/commit/80c291a23d8006d5b4321766f196314c894aefca))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** request image through broadcastchannel ([7e0329f](https://github.com/tezjs/tez.js/commit/7e0329f7fd2a79098c2442a0916eb3a86d278160))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))


### Performance Improvements

* break after routed payload refresh ([2f2711c](https://github.com/tezjs/tez.js/commit/2f2711cccb605a81d1cc42752162770f9300c079))



## 1.0.1 (2021-06-24)



## 0.0.77 (2022-08-15)


### Bug Fixes

* **vite:** parse json schema ([daaf00b](https://github.com/tezjs/tez.js/commit/daaf00b5b9219168322f5dc179080bacfd5baa2e))



## 0.0.76 (2022-08-15)


### Bug Fixes

* **vite:** add build version only build mode ([7c22cc5](https://github.com/tezjs/tez.js/commit/7c22cc578f43285c0fcf40e165856b0669fc4425))
* **vite:** bundle page wise css ([177fbf1](https://github.com/tezjs/tez.js/commit/177fbf17ca1475b1b9344ae5b80f2ff052bb9d3d))
* **vite:** conflict vue / @tezjs/vue ([eb358d5](https://github.com/tezjs/tez.js/commit/eb358d5cd3bcf3ab1291494985ec9122f879262e))
* **vite:** return correct js path ([9071731](https://github.com/tezjs/tez.js/commit/9071731ffd6941724e4501356d33634537659ff9))



## 0.0.75 (2022-08-13)


### Bug Fixes

* **vite:** linking json data regex ([1f2bc4e](https://github.com/tezjs/tez.js/commit/1f2bc4e40edeeb0d55d2542360bfaf7856c20efc))



## 0.0.74 (2022-08-12)


### Bug Fixes

* **vite:** all deps must be in lowercase ([7e422f3](https://github.com/tezjs/tez.js/commit/7e422f369b75a83a293c1d698e00549c6f4e7618))
* **vite:** correct reference of CommonPathResolver ([819b42b](https://github.com/tezjs/tez.js/commit/819b42bf0643316c02dbc6ba1143ef33b6bbc6c6))



## 0.0.73 (2022-08-12)


### Bug Fixes

* **docs:** Correct Questions Url ([e5ebd0a](https://github.com/tezjs/tez.js/commit/e5ebd0a040f495b8f41dbdc990e050620a8a3bec))
* **docs:** typo mistake ([154aea9](https://github.com/tezjs/tez.js/commit/154aea920c5e87577b34b44d5e2f2e87a97ddf58))



## 0.0.72 (2022-08-11)



## 0.0.71 (2022-08-10)


### Bug Fixes

* **vite:** remove additional forward slash ([3f0a34e](https://github.com/tezjs/tez.js/commit/3f0a34e51e54962c641f829714a5ccc7e529da84))



## 0.0.70 (2022-08-10)


### Bug Fixes

* **vite:** add build version after release ([0236f51](https://github.com/tezjs/tez.js/commit/0236f51d6c2be3509d01874f576d4a2c88b07912))
* **vite:** gen component file names in lowercase ([12554e6](https://github.com/tezjs/tez.js/commit/12554e6617ee96499758b0a6eddafcf6ebde1a60))
* **vite:** gen component file names in lowercase ([aa13b16](https://github.com/tezjs/tez.js/commit/aa13b16f406157d4e39ca84827dd8c31962e5d01))
* **vite:** include css if js is not direct reference to the respective component ([7b0f03f](https://github.com/tezjs/tez.js/commit/7b0f03f2b1d32aadf5af4faa8f04de63418956ec))



## 0.0.69 (2022-08-09)


### Bug Fixes

* **vite:** preload correct component path ([5d0f20d](https://github.com/tezjs/tez.js/commit/5d0f20dfac40d5dd5d00cd7e065550e8b3a5d33e))


### Features

* **vite:** conditional generate sitemap & robots ([b2c48be](https://github.com/tezjs/tez.js/commit/b2c48be75f300465fdb4374f7f048fa016a40684))



## 0.0.68 (2022-08-09)


### Bug Fixes

* **vite:** remove replacer ([b4ec9b2](https://github.com/tezjs/tez.js/commit/b4ec9b228ad0f84432e16e80547bd36c472bc9e2))


### Features

* **vite:** conditional minification ([1ccb3e3](https://github.com/tezjs/tez.js/commit/1ccb3e330fa3daa8f56fad1bea32293e78fd8094))



## 0.0.67 (2022-08-09)


### Bug Fixes

* **vite:** include non variable reference imports ([23a13ef](https://github.com/tezjs/tez.js/commit/23a13ef1f5fefb340dcec0533566c888554fb3bc))


### Features

* **vue:** add query params in router ([4ade609](https://github.com/tezjs/tez.js/commit/4ade60956352042828ab68286b5d46d36de1df0d))



## 0.0.66 (2022-08-09)



## 0.0.65 (2022-08-08)


### Bug Fixes

* **payload:** set regex for replace the route path with replace method ([6ecf122](https://github.com/tezjs/tez.js/commit/6ecf122e6638a565530fdcc7ce67fc751ead745f))
* **vite:** correct regex  onResolve filter ([3160844](https://github.com/tezjs/tez.js/commit/31608445462fe05f79329067892e4f913e8121bd))



## 0.0.64 (2022-08-08)



## 0.0.63 (2022-08-08)


### Bug Fixes

* **vite:** add '@tezjs/vue' in optimizeDeps ([693cdbf](https://github.com/tezjs/tez.js/commit/693cdbfcc69fd24800143bf37b1d10f414c33112))



## 0.0.62 (2022-08-08)


### Bug Fixes

* **cli:** SPAWN ENOENT ([9567654](https://github.com/tezjs/tez.js/commit/9567654d36693bd10fcf393767bef2c4db3692d0))



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)


### Bug Fixes

* **create-tez:** add missing @tezjs/route package ([1e4d532](https://github.com/tezjs/tez.js/commit/1e4d532c1d886e8f337e4ddf83510ed02ca55e1f))
* **route:** set correct @tezjs/common package version ([6039f6d](https://github.com/tezjs/tez.js/commit/6039f6da56e40cd046b3be414d581af29038d3e5))



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* add modules property for tez module external plugin ([c8528a5](https://github.com/tezjs/tez.js/commit/c8528a57e52960e9847888c4602474a1df7fa911))
* **create-tez:** add tezjs with vue starter template ([1f6a61c](https://github.com/tezjs/tez.js/commit/1f6a61c50cdbeff56e65389c1d7324e71a0fb697))
* **route:** add new package '@tezjs/route' for auto-routes ([f8b8e3e](https://github.com/tezjs/tez.js/commit/f8b8e3e255ee069e7326845a9f08ee45e37591a0))
* **vite:** auto resolve all layout component in final build ([2d818fa](https://github.com/tezjs/tez.js/commit/2d818fa3c5f82ec5c2cd9ed695bd51b92f2ad899))
* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)


### Bug Fixes

* **common:** correct lib path when cust source code path is configured ([d8d888a](https://github.com/tezjs/tez.js/commit/d8d888afe53812fc92a1f522c1f1a303804e4233))
* **payload:** ignore undefined component in payload ([02d6183](https://github.com/tezjs/tez.js/commit/02d618362d1b919d1fd6d1ee43d8cdb037b79ae8))
* **vite:** custom source path undefined ([943703d](https://github.com/tezjs/tez.js/commit/943703d4c3a0728cb0873d45da75d2ac1f7f899c))
* **vite:** resolve addLib ([684107a](https://github.com/tezjs/tez.js/commit/684107a3aa83513a51af8bdc334d56daacba21e2))



## 0.0.57 (2022-08-04)


### Bug Fixes

* **types:** set as nullable 'preFetch' property ([4261964](https://github.com/tezjs/tez.js/commit/42619640072af4f1e62ef2a547140c677254396e))
* **vite:** call bundle css method if bundlecss is true ([c79bc24](https://github.com/tezjs/tez.js/commit/c79bc24cf905f67833394218df0e3c23b19ec81b))
* **vite:** check path value before assigning the reference ([4d53ab3](https://github.com/tezjs/tez.js/commit/4d53ab3b920e12fad9cde645c0dbfb8fddd18704))
* **vite:** persist global html meta configuration ([82edd78](https://github.com/tezjs/tez.js/commit/82edd78359f319e5a540b9aea75bf3c786cea434))
* **vite:** set custom source code path ([84006bc](https://github.com/tezjs/tez.js/commit/84006bce97373596d791299886eef1f8b01df633))


### Features

* **vite:** preload components & respective dependencies page wise ([e385a5c](https://github.com/tezjs/tez.js/commit/e385a5c8c0d914c2ef6c757c3e216ee10a1f5a69))



## 0.0.56 (2022-08-03)


### Bug Fixes

* **vite:** ignore tez.css from page wise css bundling ([2bda791](https://github.com/tezjs/tez.js/commit/2bda7915f1c5a6c78bd0f6ccebed0990b9370488))
* **vite:** remove closing element of link tag ([c29b24e](https://github.com/tezjs/tez.js/commit/c29b24e64085efc137d8f16659612e5b20e14a6f))
* **vite:** resolve mobile component in pre script ([a22c831](https://github.com/tezjs/tez.js/commit/a22c831cc09bef06e0b335c982f663078211e662))


### Features

* **common:** set source folder path ([4785ca5](https://github.com/tezjs/tez.js/commit/4785ca5d27ff315a31132a5fc475fba413937338))
* **vite:** add preconnect link element ([cd78224](https://github.com/tezjs/tez.js/commit/cd7822466675fab2dcbb7a559ee24d4f54362fad))
* **vite:** allow to set dns-prefetch link element ([afc13ca](https://github.com/tezjs/tez.js/commit/afc13cafdadbd67ebfe80f8ed31471b809a0c25a))
* **vite:** allow to set prefetch path ([bdfefe0](https://github.com/tezjs/tez.js/commit/bdfefe0afdfdc9fdf7263fd46c8c43934e5e23cd))
* **vite:** bundle pagewise css ([a26379c](https://github.com/tezjs/tez.js/commit/a26379ccfc1c41d1d7392659733f046bceb96358))
* **vite:** page wise post script prefetch ([0ae4b21](https://github.com/tezjs/tez.js/commit/0ae4b2140bf44aaf3f7af47c4fc1b35e8876bc3b))
* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)


### Bug Fixes

* **vite:** component & layout import path in glob.js ([0a960a8](https://github.com/tezjs/tez.js/commit/0a960a8c0707e8134d9052dd5a838875da146465))
* **vite:** missing package under commonjs execution ([ad6bf38](https://github.com/tezjs/tez.js/commit/ad6bf3839d979b9736ca5936670a17550a4bac92))
* **vite:** replace new line code with blank from linkingData ([f072ed2](https://github.com/tezjs/tez.js/commit/f072ed2a79bbd664ffc6cefc183e616a562449c6))


### Features

* **vite:** customize tez build config with vite build ([3ba9bd0](https://github.com/tezjs/tez.js/commit/3ba9bd0dae5cb1e9cb73cd36c40af090da5025dc))
* **vite:** set as default production build ([1b3e21a](https://github.com/tezjs/tez.js/commit/1b3e21a418fbc3423d40bc90003ca19d8d3675da))



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **payload:** incorrect curly bracket ([c9c3f61](https://github.com/tezjs/tez.js/commit/c9c3f61373a1b6eb7aa7af77bb1550cd4bc25a66))
* **payload:** not to create robots when custom payload generator is configured ([bde0e1d](https://github.com/tezjs/tez.js/commit/bde0e1dd5fd1adc5f79da019e56777c2e7cd4ff9))
* **types:** mark as nullable prop of 'amplify' ([2efec85](https://github.com/tezjs/tez.js/commit/2efec85eb3bb217a018178bc48144b7ea604132a))
* **vite:** import plugins if exists ([740b3b8](https://github.com/tezjs/tez.js/commit/740b3b85f6464ac59a46cc27c7f8ac7eb5a8d875))
* **vite:** obviate number from component name ([c20801f](https://github.com/tezjs/tez.js/commit/c20801fbcfd187a41d57c03dad56449e6aacf09e))
* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))


### Features

* **payload:** pass additional props for custom payload generator ([a5d9217](https://github.com/tezjs/tez.js/commit/a5d921710eda26cdd9a1b7650af4efce64357437))
* **payload:** set routes for custom payload generator ([3eeed41](https://github.com/tezjs/tez.js/commit/3eeed41d47212ca1de4742eb4975520460f0e249))



## 0.0.51 (2022-07-26)


### Bug Fixes

* **payload:** ignore non change frequency & priority set url in sitemap ([ecd1ac0](https://github.com/tezjs/tez.js/commit/ecd1ac002a3a348d261a9878001839da987a1f41))



## 0.0.50 (2022-07-25)


### Bug Fixes

* **vite:** add proper format of linkingdata ([719a00e](https://github.com/tezjs/tez.js/commit/719a00e8d7f7aa52eb825300d231db7799f19fa8))



## 0.0.49 (2022-07-25)


### Features

* **payload:** add custom payload generator ([4013e8a](https://github.com/tezjs/tez.js/commit/4013e8a93d37647cf4ba723ca5c41e20d541c801))



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))
* **vite:** minify pre/post/preload js after build ([b0f2631](https://github.com/tezjs/tez.js/commit/b0f26311dfd41e63d9eaffd4d56c87624dfb03b0))



## 0.0.47 (2022-07-22)


### Bug Fixes

* **create-tez:** properly reference the property name ([c82e89a](https://github.com/tezjs/tez.js/commit/c82e89a44a73b96281871ead07746a2ea0f3f997))



## 0.0.46 (2022-07-22)


### Bug Fixes

* **vite:** obviate additional right slash from preload script url. ([2c5415e](https://github.com/tezjs/tez.js/commit/2c5415e7eb6727b51e0b2789dce79f1e5d2ff3ff))
* **vite:** preload items check before push ([e92933a](https://github.com/tezjs/tez.js/commit/e92933acedd4366df65ee427986ca3fe4b11e875))



## 0.0.45 (2022-07-22)


### Bug Fixes

* **payload:** redirect routes undefined then set blank array ([f3f39fc](https://github.com/tezjs/tez.js/commit/f3f39fc455f86464cda3c4dcfd12f39e3a7c7421))
* **vite:** import component correctly ([6deea03](https://github.com/tezjs/tez.js/commit/6deea03662eac54bffc7bcb06b4193d6a65e15a0))
* **vite:** obviate function while resolve the route ([a74e519](https://github.com/tezjs/tez.js/commit/a74e519b9bbbc41489f6a1c297448c54a81a0bfa))
* **vite:** set actual path instead of object ([4d986fb](https://github.com/tezjs/tez.js/commit/4d986fb234c3f102a34bbaa3ab071b16b3ee353c))
* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Bug Fixes

* **payload:** write firebase redirect routes ([a745423](https://github.com/tezjs/tez.js/commit/a7454230127a1efca8e0435502bb159f85467137))


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))
* **vite:** preload tz.js ([fcb7507](https://github.com/tezjs/tez.js/commit/fcb7507dcbd9ad46da9dce2e086b030844dc89c2))



## 0.0.43 (2022-07-19)


### Bug Fixes

* **payload:** map correct object for parse value ([4414bf6](https://github.com/tezjs/tez.js/commit/4414bf6b1091192a39f32e9dcac46f5e6622fefb))



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)


### Bug Fixes

* **payload:** add siteurl prefix in sitemap ([e848220](https://github.com/tezjs/tez.js/commit/e848220046acefb7a70432683544bf7bc5509f63))



## 0.0.39 (2022-07-15)


### Bug Fixes

* **vite:** write tz.js file on build complete ([b47ddcc](https://github.com/tezjs/tez.js/commit/b47ddcc68c5cd449274ad7bd690069ae1693e64b))



## 0.0.38 (2022-07-15)


### Bug Fixes

* **create-tez:** allow .cache folder permission while running in docker ([cc6226f](https://github.com/tezjs/tez.js/commit/cc6226f53fc209cc1d9b56efb06ee257b3067eb7))
* **vite:** add footer slot in post script ([ca36bad](https://github.com/tezjs/tez.js/commit/ca36bad8e9c6a3455e5237c77d2acb21c8527400))
* **vite:** remove suffix from image url while parsing the text ([581caf7](https://github.com/tezjs/tez.js/commit/581caf7ce3d26587a661c3fe898b51bebd26af48))
* **vite:** script & style property undefined check ([e7120c6](https://github.com/tezjs/tez.js/commit/e7120c6ed60fc8de01d1c269cb4b19cfc37df730))
* **vite:** segregate components conditionally in pre/post script ([a095a11](https://github.com/tezjs/tez.js/commit/a095a11ea5e7c5e625d48641554cbc9cb27ff014))


### Features

* conditional inline css/js reference on the page ([1bc7469](https://github.com/tezjs/tez.js/commit/1bc7469ae0a42837cb2889f989c75b63aa0f7603))
* **create-tez:** connect remote  container from vs code ([9602c2c](https://github.com/tezjs/tez.js/commit/9602c2c9b8eb83316d1461ab4273be7399160f71))
* **payload:** allow svg image to write in local folder ([89c9fb2](https://github.com/tezjs/tez.js/commit/89c9fb2770196e6a9696e28e4161972d12b015da))
* **vite:** preload underneath dependencies page wise ([a696e79](https://github.com/tezjs/tez.js/commit/a696e79d00d1317505958de370c87115a41b1ab7))
* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **common:** correct root (index) folder path ([8ae15d0](https://github.com/tezjs/tez.js/commit/8ae15d033e157eac413377e3e957d882bab281d3))
* **vite:** correct index.html root write path ([587aef5](https://github.com/tezjs/tez.js/commit/587aef58c7216e7a214f44fa706bf78c6b033735))
* **vite:** create html file at root ([1015c14](https://github.com/tezjs/tez.js/commit/1015c140cb5d6b16f15830c840d1c2fc9e955875))
* **vite:** generate index.html at root of the dist ([236ef35](https://github.com/tezjs/tez.js/commit/236ef35391108b83d50c658f11b9d3cb0bded5ee))
* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **js:** export isMobile function ([66f69c3](https://github.com/tezjs/tez.js/commit/66f69c3cf39da9202b804ccc96e017ab1b601354))
* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vite:** create tez.ts if not exists during build ([40db4ec](https://github.com/tezjs/tez.js/commit/40db4ec077cc83f0a055afb2924c5d609cc8a68c))
* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))
* **vue:** content attribute added to viewport meta tag ([2b35309](https://github.com/tezjs/tez.js/commit/2b353098551b99d9d5175f208980821c71c14536))



## 0.0.34 (2022-07-06)


### Bug Fixes

* **payload:** filter nested data ([a1ad7a7](https://github.com/tezjs/tez.js/commit/a1ad7a7f13a943112c8ac14ca64b06ea1454f461))



## 0.0.33 (2022-07-06)


### Bug Fixes

* **create-tez:** undefined message variable ([ca2c0b2](https://github.com/tezjs/tez.js/commit/ca2c0b2873508ea588cea2d2a3f89a31aa1de99e))



## 0.0.32 (2022-07-06)


### Bug Fixes

* **create-tez:** installing dependencies ([da6980a](https://github.com/tezjs/tez.js/commit/da6980aa1ba7473aaeef55ef406f1a2e5ad1573e))



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Bug Fixes

* **vite:** replace numbers from component name ([a8923b2](https://github.com/tezjs/tez.js/commit/a8923b20db8f7970cd6b8ec884c399f4c6ceecb1))


### Features

* **payload:** deep populate strapi data ([9eedc19](https://github.com/tezjs/tez.js/commit/9eedc19b0d85245c92a08d7b97bf743205c952e8))
* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Bug Fixes

* folder path seperator ([0629c06](https://github.com/tezjs/tez.js/commit/0629c06bdccdf9c54fbb51e436ec5702e11d2e5e))


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))
* **vite:** bundle page wise components and payload ([58dffbc](https://github.com/tezjs/tez.js/commit/58dffbccf6f71e0f8aa696675427a485b9ef4a52))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)


### Bug Fixes

* **create-tez:** resolve template directory path ([22c3751](https://github.com/tezjs/tez.js/commit/22c3751841a65b076501edfb8d6b4f035752d0f8))



## 0.0.25 (2022-06-13)


### Bug Fixes

* **payload:** remove back-slash from 'imageFolderPath' folder path ([bb80f77](https://github.com/tezjs/tez.js/commit/bb80f77d16dcd9728c8773a2c1004fcc54b3638b))
* **vite:** put 'await' while reading the tex config ([3d48f37](https://github.com/tezjs/tez.js/commit/3d48f37c91451739332dde43a080e3a0a86e7843))


### Features

* **create-tez:** automagically install scaffold template packages ([74afa89](https://github.com/tezjs/tez.js/commit/74afa8977f34ea9e9ba798f717e4401bf7b7de11))



## 0.0.24 (2022-06-02)


### Bug Fixes

* **payload:** parse query string with correct object ([d774399](https://github.com/tezjs/tez.js/commit/d774399eabe24b8e55272ba1247b8f8443b13030))



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **payload:** null check before transform the value ([aeb72bf](https://github.com/tezjs/tez.js/commit/aeb72bfd49bf8d843833c216f2942deb54cef502))
* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **common:** merge strapi default & user configuration ([ac60db7](https://github.com/tezjs/tez.js/commit/ac60db7263663eb6d9c9fdbc974ca4138ed1f8f3))
* **payload:** refresh reference content on the page ([1f438f0](https://github.com/tezjs/tez.js/commit/1f438f03669f32f2e3f6c599b9e6bb8ff8b9a5d0))
* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)


### Bug Fixes

* **create-tez:** add tsconfig in the project template ([88ec68a](https://github.com/tezjs/tez.js/commit/88ec68a819c6522f2d98c8cc7716a3df975d6625))
* **payload:** handle if masterpage is not set ([7be053c](https://github.com/tezjs/tez.js/commit/7be053c56111cd659cf8582f57ca5bf500d8a5ec))



## 0.0.19 (2022-05-28)


### Bug Fixes

* **create-tez:** ignore dist folder ([e79b290](https://github.com/tezjs/tez.js/commit/e79b290a44b9e57af97c2e70d68b66bbe4a76736))
* **create-tez:** tez strapi template seed data ([47ca764](https://github.com/tezjs/tez.js/commit/47ca7642ae2fd9f02384bd5f50f3140f1295905c))


### Features

* **types:** add prop amplify in deployment config ([b2a69a5](https://github.com/tezjs/tez.js/commit/b2a69a5f7f7ea615a2485cb6904590dac5a759c4))



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* sw template ([dc01931](https://github.com/tezjs/tez.js/commit/dc019313b125c32e8dd154beb2c5abd2241379f0))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))
* auto generate firebase deployment config ([6bceb53](https://github.com/tezjs/tez.js/commit/6bceb538d95a1e13bd53f87f675fe2dfe2d283d0))



## 0.0.16 (2022-05-26)



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* add optimizedeps path ([ddf68d4](https://github.com/tezjs/tez.js/commit/ddf68d46d6faeda6a295fb6ba9c337243d4038d5))
* auto generate tez.ts ([0725939](https://github.com/tezjs/tez.js/commit/072593975992dc81595e709a1986e4612db16ce1))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* change template path of service worker ([a68bf32](https://github.com/tezjs/tez.js/commit/a68bf32400e59b9941ff6e07bd27b7879567da28))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* convert into string instead array of html elements ([b453632](https://github.com/tezjs/tez.js/commit/b453632c36b8cbebd63c4d0e336bd4f8de1e9869))
* correct alias path ([0984d59](https://github.com/tezjs/tez.js/commit/0984d59a158ffe79dcad792e616fbea992ccb9eb))
* generate payload based on rootDir ([688b050](https://github.com/tezjs/tez.js/commit/688b050fd7810aaa3063cf2977ec7faa512e899b))
* generate sitemap and robots file ([bca1779](https://github.com/tezjs/tez.js/commit/bca17791f79d1ce3ad58eb500f741ec930a95175))
* generated html script and payload path ([6f7a14c](https://github.com/tezjs/tez.js/commit/6f7a14c86332af7928fabb34d6379bb70361ebc2))
* ignore broadcastchannel image request from local environment ([b23183a](https://github.com/tezjs/tez.js/commit/b23183ac151312047b5664763cc9767c75d8e47f))
* ignore undefined element in sitemap ([c3466a0](https://github.com/tezjs/tez.js/commit/c3466a023fd3b1005c4443a7a038e246a8be3e6d))
* image creating without configuration ([c2223d7](https://github.com/tezjs/tez.js/commit/c2223d74464327a22029dbcfa0a743a7d26de66a))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* minify index.html ([67dca05](https://github.com/tezjs/tez.js/commit/67dca0532e0e9a2fc6ab2b53bffccb31afa242a5))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* pass blank object if component data is undefined ([b1ed00f](https://github.com/tezjs/tez.js/commit/b1ed00f979f575daf602977e3cfe48383a3c83fc))
* pass blank object if seo object is null ([bed1681](https://github.com/tezjs/tez.js/commit/bed1681e173ab696193185a1a697028bcb9f84b9))
* reading seo payload path ([d6abff2](https://github.com/tezjs/tez.js/commit/d6abff2c24a3f81fb375bd2ceb805de92cbabe84))
* refresh specific route folder ([35a081f](https://github.com/tezjs/tez.js/commit/35a081f2460995cb7f5f662ce58052750f2de39d))
* resolve dynamic express module ([d41bcd0](https://github.com/tezjs/tez.js/commit/d41bcd02a672c185df62b8cb88e42c49544eb4c4))
* resolve import object value ([1fcedca](https://github.com/tezjs/tez.js/commit/1fcedca8083f2f8b36668961a977b4b75a22372d))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* return sitemap xelement ([ba1a4e3](https://github.com/tezjs/tez.js/commit/ba1a4e3b4eb1ec3d6847fb443eeb42eab1752535))
* service worker template code ([5ecd699](https://github.com/tezjs/tez.js/commit/5ecd69985060474a7d0ad7a1ecdad4e3cbf2eae2))
* set correct components folder path ([9c99697](https://github.com/tezjs/tez.js/commit/9c99697b207de11e46291a42a00661e147bc634c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* set correct payload path ([2b529ef](https://github.com/tezjs/tez.js/commit/2b529eff4cb6599e5e8a6ff224631e3d4606ee6a))
* set correct payload path ([3135c6a](https://github.com/tezjs/tez.js/commit/3135c6a36068abcd72a5359ddbeb2cb108cd4f03))
* tez dev ([d3e8e60](https://github.com/tezjs/tez.js/commit/d3e8e60991ec4bf16df2d0e31580336537b0ddf8))
* undefined payload object ([b6d1a76](https://github.com/tezjs/tez.js/commit/b6d1a76cd79d38cf9d73322d1846e0af68d2e266))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add custom route ([643d7d9](https://github.com/tezjs/tez.js/commit/643d7d98b4a5bf4fd1df058648e746dcfbbbdb98))
* add dynamic page record in the generic collections ([df6a56c](https://github.com/tezjs/tez.js/commit/df6a56ce8099a48d97c439e705b9d84901b38a81))
* add html page and seo tag ([e911e02](https://github.com/tezjs/tez.js/commit/e911e029ad10fa23656866e49966731428eb7174))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add master layout ([2a97b9c](https://github.com/tezjs/tez.js/commit/2a97b9c009099fdd4e12279f568a65493b9dc840))
* add multiple page schema on page ([6a9b3d3](https://github.com/tezjs/tez.js/commit/6a9b3d39a1310a4234a93636cb92dc96336a08c9))
* add new package '@tezjs/js' ([b51de5f](https://github.com/tezjs/tez.js/commit/b51de5fb7532ce692a222257a2b4ff095c1beb4d))
* add pwa ([05c407a](https://github.com/tezjs/tez.js/commit/05c407a9cc964e81b6eb6b7c2da77e3b9400f324))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* add zero configuration for tez app ([c79defe](https://github.com/tezjs/tez.js/commit/c79defef78ab02fc4ee8302260095a41ae043790))
* build through tez cli ([e23245b](https://github.com/tezjs/tez.js/commit/e23245b28d2ef32449f6c7df7fa3cc5b7737866c))
* configure custom page & payload ([da5e6a3](https://github.com/tezjs/tez.js/commit/da5e6a3baaf4dd9fc68b40254652eeb2a8b0ecd2))
* convert image into webp ([2fe8b1a](https://github.com/tezjs/tez.js/commit/2fe8b1adee35cf2304d44ec0546c94576e6abf45))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* custom page payload generator ([4d711f0](https://github.com/tezjs/tez.js/commit/4d711f032ab3373f94fafaaaa07e44bda028634a))
* define tez config conditionally ([168726a](https://github.com/tezjs/tez.js/commit/168726abdc85b2a05f3637f272b5d90b8f0b66c2))
* entity wise pagination configuration ([bacf79c](https://github.com/tezjs/tez.js/commit/bacf79cd590ed1623dd91b7d7855867e7e58a495))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* favicon & preload link configuration ([48fbefb](https://github.com/tezjs/tez.js/commit/48fbefbc4a59056a7f12f8f869b7d0bca44e855c))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* imports at root ts ([78da3da](https://github.com/tezjs/tez.js/commit/78da3da39fa180192a4745ccdc65528d5e3fc001))
* load lazy data ([1fe8e3a](https://github.com/tezjs/tez.js/commit/1fe8e3aff508c56f0989f36bdf53cfb9e4bc366e))
* parse object value ([8ec54cd](https://github.com/tezjs/tez.js/commit/8ec54cdefab3d865512087fad4ea3c7097b9111f))
* redirect-routes added ([6efde53](https://github.com/tezjs/tez.js/commit/6efde539142f11f2bad9410de51eb22c58c0813b))
* run add lib ([26c78c7](https://github.com/tezjs/tez.js/commit/26c78c7a1ad9932b8b87c1241618136922ba0f38))
* set default / custom port ([8d1f293](https://github.com/tezjs/tez.js/commit/8d1f29332fdedc08ed9fdb80d2d15a4536523fcf))
* sitemap, robots and seo added ([115adf0](https://github.com/tezjs/tez.js/commit/115adf0455cf6de38262a5e6fb1cd61f82d407ab))
* sitemap, robots and seo feature added ([6fbd3d2](https://github.com/tezjs/tez.js/commit/6fbd3d2bf159138b5344a3f93e3a7b9408c55f73))
* strapi package features ([f71125a](https://github.com/tezjs/tez.js/commit/f71125a31892a6e2e343fcb8bc5d3553e35b8755))
* **strapi:** add sanitizer component level data ([2326b22](https://github.com/tezjs/tez.js/commit/2326b22e19bf8913230bca63e351ae95fff7cbcc))
* **strapi:** component data wise pagination ([0390097](https://github.com/tezjs/tez.js/commit/0390097f0b0e7d83774dd5d639a5768ecda4db59))
* tez cli initial code added ([1c9ec72](https://github.com/tezjs/tez.js/commit/1c9ec723ea305edd8b31cf5729faf1c719174572))
* typed env variable ([80c291a](https://github.com/tezjs/tez.js/commit/80c291a23d8006d5b4321766f196314c894aefca))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** request image through broadcastchannel ([7e0329f](https://github.com/tezjs/tez.js/commit/7e0329f7fd2a79098c2442a0916eb3a86d278160))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))


### Performance Improvements

* break after routed payload refresh ([2f2711c](https://github.com/tezjs/tez.js/commit/2f2711cccb605a81d1cc42752162770f9300c079))



## 1.0.1 (2021-06-24)



## 0.0.76 (2022-08-15)


### Bug Fixes

* **vite:** add build version only build mode ([7c22cc5](https://github.com/tezjs/tez.js/commit/7c22cc578f43285c0fcf40e165856b0669fc4425))
* **vite:** bundle page wise css ([177fbf1](https://github.com/tezjs/tez.js/commit/177fbf17ca1475b1b9344ae5b80f2ff052bb9d3d))
* **vite:** conflict vue / @tezjs/vue ([eb358d5](https://github.com/tezjs/tez.js/commit/eb358d5cd3bcf3ab1291494985ec9122f879262e))
* **vite:** return correct js path ([9071731](https://github.com/tezjs/tez.js/commit/9071731ffd6941724e4501356d33634537659ff9))



## 0.0.75 (2022-08-13)


### Bug Fixes

* **vite:** linking json data regex ([1f2bc4e](https://github.com/tezjs/tez.js/commit/1f2bc4e40edeeb0d55d2542360bfaf7856c20efc))



## 0.0.74 (2022-08-12)


### Bug Fixes

* **vite:** all deps must be in lowercase ([7e422f3](https://github.com/tezjs/tez.js/commit/7e422f369b75a83a293c1d698e00549c6f4e7618))
* **vite:** correct reference of CommonPathResolver ([819b42b](https://github.com/tezjs/tez.js/commit/819b42bf0643316c02dbc6ba1143ef33b6bbc6c6))



## 0.0.73 (2022-08-12)


### Bug Fixes

* **docs:** Correct Questions Url ([e5ebd0a](https://github.com/tezjs/tez.js/commit/e5ebd0a040f495b8f41dbdc990e050620a8a3bec))
* **docs:** typo mistake ([154aea9](https://github.com/tezjs/tez.js/commit/154aea920c5e87577b34b44d5e2f2e87a97ddf58))



## 0.0.72 (2022-08-11)



## 0.0.71 (2022-08-10)


### Bug Fixes

* **vite:** remove additional forward slash ([3f0a34e](https://github.com/tezjs/tez.js/commit/3f0a34e51e54962c641f829714a5ccc7e529da84))



## 0.0.70 (2022-08-10)


### Bug Fixes

* **vite:** add build version after release ([0236f51](https://github.com/tezjs/tez.js/commit/0236f51d6c2be3509d01874f576d4a2c88b07912))
* **vite:** gen component file names in lowercase ([12554e6](https://github.com/tezjs/tez.js/commit/12554e6617ee96499758b0a6eddafcf6ebde1a60))
* **vite:** gen component file names in lowercase ([aa13b16](https://github.com/tezjs/tez.js/commit/aa13b16f406157d4e39ca84827dd8c31962e5d01))
* **vite:** include css if js is not direct reference to the respective component ([7b0f03f](https://github.com/tezjs/tez.js/commit/7b0f03f2b1d32aadf5af4faa8f04de63418956ec))



## 0.0.69 (2022-08-09)


### Bug Fixes

* **vite:** preload correct component path ([5d0f20d](https://github.com/tezjs/tez.js/commit/5d0f20dfac40d5dd5d00cd7e065550e8b3a5d33e))


### Features

* **vite:** conditional generate sitemap & robots ([b2c48be](https://github.com/tezjs/tez.js/commit/b2c48be75f300465fdb4374f7f048fa016a40684))



## 0.0.68 (2022-08-09)


### Bug Fixes

* **vite:** remove replacer ([b4ec9b2](https://github.com/tezjs/tez.js/commit/b4ec9b228ad0f84432e16e80547bd36c472bc9e2))


### Features

* **vite:** conditional minification ([1ccb3e3](https://github.com/tezjs/tez.js/commit/1ccb3e330fa3daa8f56fad1bea32293e78fd8094))



## 0.0.67 (2022-08-09)


### Bug Fixes

* **vite:** include non variable reference imports ([23a13ef](https://github.com/tezjs/tez.js/commit/23a13ef1f5fefb340dcec0533566c888554fb3bc))


### Features

* **vue:** add query params in router ([4ade609](https://github.com/tezjs/tez.js/commit/4ade60956352042828ab68286b5d46d36de1df0d))



## 0.0.66 (2022-08-09)



## 0.0.65 (2022-08-08)


### Bug Fixes

* **payload:** set regex for replace the route path with replace method ([6ecf122](https://github.com/tezjs/tez.js/commit/6ecf122e6638a565530fdcc7ce67fc751ead745f))
* **vite:** correct regex  onResolve filter ([3160844](https://github.com/tezjs/tez.js/commit/31608445462fe05f79329067892e4f913e8121bd))



## 0.0.64 (2022-08-08)



## 0.0.63 (2022-08-08)


### Bug Fixes

* **vite:** add '@tezjs/vue' in optimizeDeps ([693cdbf](https://github.com/tezjs/tez.js/commit/693cdbfcc69fd24800143bf37b1d10f414c33112))



## 0.0.62 (2022-08-08)


### Bug Fixes

* **cli:** SPAWN ENOENT ([9567654](https://github.com/tezjs/tez.js/commit/9567654d36693bd10fcf393767bef2c4db3692d0))



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)


### Bug Fixes

* **create-tez:** add missing @tezjs/route package ([1e4d532](https://github.com/tezjs/tez.js/commit/1e4d532c1d886e8f337e4ddf83510ed02ca55e1f))
* **route:** set correct @tezjs/common package version ([6039f6d](https://github.com/tezjs/tez.js/commit/6039f6da56e40cd046b3be414d581af29038d3e5))



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* add modules property for tez module external plugin ([c8528a5](https://github.com/tezjs/tez.js/commit/c8528a57e52960e9847888c4602474a1df7fa911))
* **create-tez:** add tezjs with vue starter template ([1f6a61c](https://github.com/tezjs/tez.js/commit/1f6a61c50cdbeff56e65389c1d7324e71a0fb697))
* **route:** add new package '@tezjs/route' for auto-routes ([f8b8e3e](https://github.com/tezjs/tez.js/commit/f8b8e3e255ee069e7326845a9f08ee45e37591a0))
* **vite:** auto resolve all layout component in final build ([2d818fa](https://github.com/tezjs/tez.js/commit/2d818fa3c5f82ec5c2cd9ed695bd51b92f2ad899))
* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)


### Bug Fixes

* **common:** correct lib path when cust source code path is configured ([d8d888a](https://github.com/tezjs/tez.js/commit/d8d888afe53812fc92a1f522c1f1a303804e4233))
* **payload:** ignore undefined component in payload ([02d6183](https://github.com/tezjs/tez.js/commit/02d618362d1b919d1fd6d1ee43d8cdb037b79ae8))
* **vite:** custom source path undefined ([943703d](https://github.com/tezjs/tez.js/commit/943703d4c3a0728cb0873d45da75d2ac1f7f899c))
* **vite:** resolve addLib ([684107a](https://github.com/tezjs/tez.js/commit/684107a3aa83513a51af8bdc334d56daacba21e2))



## 0.0.57 (2022-08-04)


### Bug Fixes

* **types:** set as nullable 'preFetch' property ([4261964](https://github.com/tezjs/tez.js/commit/42619640072af4f1e62ef2a547140c677254396e))
* **vite:** call bundle css method if bundlecss is true ([c79bc24](https://github.com/tezjs/tez.js/commit/c79bc24cf905f67833394218df0e3c23b19ec81b))
* **vite:** check path value before assigning the reference ([4d53ab3](https://github.com/tezjs/tez.js/commit/4d53ab3b920e12fad9cde645c0dbfb8fddd18704))
* **vite:** persist global html meta configuration ([82edd78](https://github.com/tezjs/tez.js/commit/82edd78359f319e5a540b9aea75bf3c786cea434))
* **vite:** set custom source code path ([84006bc](https://github.com/tezjs/tez.js/commit/84006bce97373596d791299886eef1f8b01df633))


### Features

* **vite:** preload components & respective dependencies page wise ([e385a5c](https://github.com/tezjs/tez.js/commit/e385a5c8c0d914c2ef6c757c3e216ee10a1f5a69))



## 0.0.56 (2022-08-03)


### Bug Fixes

* **vite:** ignore tez.css from page wise css bundling ([2bda791](https://github.com/tezjs/tez.js/commit/2bda7915f1c5a6c78bd0f6ccebed0990b9370488))
* **vite:** remove closing element of link tag ([c29b24e](https://github.com/tezjs/tez.js/commit/c29b24e64085efc137d8f16659612e5b20e14a6f))
* **vite:** resolve mobile component in pre script ([a22c831](https://github.com/tezjs/tez.js/commit/a22c831cc09bef06e0b335c982f663078211e662))


### Features

* **common:** set source folder path ([4785ca5](https://github.com/tezjs/tez.js/commit/4785ca5d27ff315a31132a5fc475fba413937338))
* **vite:** add preconnect link element ([cd78224](https://github.com/tezjs/tez.js/commit/cd7822466675fab2dcbb7a559ee24d4f54362fad))
* **vite:** allow to set dns-prefetch link element ([afc13ca](https://github.com/tezjs/tez.js/commit/afc13cafdadbd67ebfe80f8ed31471b809a0c25a))
* **vite:** allow to set prefetch path ([bdfefe0](https://github.com/tezjs/tez.js/commit/bdfefe0afdfdc9fdf7263fd46c8c43934e5e23cd))
* **vite:** bundle pagewise css ([a26379c](https://github.com/tezjs/tez.js/commit/a26379ccfc1c41d1d7392659733f046bceb96358))
* **vite:** page wise post script prefetch ([0ae4b21](https://github.com/tezjs/tez.js/commit/0ae4b2140bf44aaf3f7af47c4fc1b35e8876bc3b))
* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)


### Bug Fixes

* **vite:** component & layout import path in glob.js ([0a960a8](https://github.com/tezjs/tez.js/commit/0a960a8c0707e8134d9052dd5a838875da146465))
* **vite:** missing package under commonjs execution ([ad6bf38](https://github.com/tezjs/tez.js/commit/ad6bf3839d979b9736ca5936670a17550a4bac92))
* **vite:** replace new line code with blank from linkingData ([f072ed2](https://github.com/tezjs/tez.js/commit/f072ed2a79bbd664ffc6cefc183e616a562449c6))


### Features

* **vite:** customize tez build config with vite build ([3ba9bd0](https://github.com/tezjs/tez.js/commit/3ba9bd0dae5cb1e9cb73cd36c40af090da5025dc))
* **vite:** set as default production build ([1b3e21a](https://github.com/tezjs/tez.js/commit/1b3e21a418fbc3423d40bc90003ca19d8d3675da))



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **payload:** incorrect curly bracket ([c9c3f61](https://github.com/tezjs/tez.js/commit/c9c3f61373a1b6eb7aa7af77bb1550cd4bc25a66))
* **payload:** not to create robots when custom payload generator is configured ([bde0e1d](https://github.com/tezjs/tez.js/commit/bde0e1dd5fd1adc5f79da019e56777c2e7cd4ff9))
* **types:** mark as nullable prop of 'amplify' ([2efec85](https://github.com/tezjs/tez.js/commit/2efec85eb3bb217a018178bc48144b7ea604132a))
* **vite:** import plugins if exists ([740b3b8](https://github.com/tezjs/tez.js/commit/740b3b85f6464ac59a46cc27c7f8ac7eb5a8d875))
* **vite:** obviate number from component name ([c20801f](https://github.com/tezjs/tez.js/commit/c20801fbcfd187a41d57c03dad56449e6aacf09e))
* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))


### Features

* **payload:** pass additional props for custom payload generator ([a5d9217](https://github.com/tezjs/tez.js/commit/a5d921710eda26cdd9a1b7650af4efce64357437))
* **payload:** set routes for custom payload generator ([3eeed41](https://github.com/tezjs/tez.js/commit/3eeed41d47212ca1de4742eb4975520460f0e249))



## 0.0.51 (2022-07-26)


### Bug Fixes

* **payload:** ignore non change frequency & priority set url in sitemap ([ecd1ac0](https://github.com/tezjs/tez.js/commit/ecd1ac002a3a348d261a9878001839da987a1f41))



## 0.0.50 (2022-07-25)


### Bug Fixes

* **vite:** add proper format of linkingdata ([719a00e](https://github.com/tezjs/tez.js/commit/719a00e8d7f7aa52eb825300d231db7799f19fa8))



## 0.0.49 (2022-07-25)


### Features

* **payload:** add custom payload generator ([4013e8a](https://github.com/tezjs/tez.js/commit/4013e8a93d37647cf4ba723ca5c41e20d541c801))



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))
* **vite:** minify pre/post/preload js after build ([b0f2631](https://github.com/tezjs/tez.js/commit/b0f26311dfd41e63d9eaffd4d56c87624dfb03b0))



## 0.0.47 (2022-07-22)


### Bug Fixes

* **create-tez:** properly reference the property name ([c82e89a](https://github.com/tezjs/tez.js/commit/c82e89a44a73b96281871ead07746a2ea0f3f997))



## 0.0.46 (2022-07-22)


### Bug Fixes

* **vite:** obviate additional right slash from preload script url. ([2c5415e](https://github.com/tezjs/tez.js/commit/2c5415e7eb6727b51e0b2789dce79f1e5d2ff3ff))
* **vite:** preload items check before push ([e92933a](https://github.com/tezjs/tez.js/commit/e92933acedd4366df65ee427986ca3fe4b11e875))



## 0.0.45 (2022-07-22)


### Bug Fixes

* **payload:** redirect routes undefined then set blank array ([f3f39fc](https://github.com/tezjs/tez.js/commit/f3f39fc455f86464cda3c4dcfd12f39e3a7c7421))
* **vite:** import component correctly ([6deea03](https://github.com/tezjs/tez.js/commit/6deea03662eac54bffc7bcb06b4193d6a65e15a0))
* **vite:** obviate function while resolve the route ([a74e519](https://github.com/tezjs/tez.js/commit/a74e519b9bbbc41489f6a1c297448c54a81a0bfa))
* **vite:** set actual path instead of object ([4d986fb](https://github.com/tezjs/tez.js/commit/4d986fb234c3f102a34bbaa3ab071b16b3ee353c))
* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Bug Fixes

* **payload:** write firebase redirect routes ([a745423](https://github.com/tezjs/tez.js/commit/a7454230127a1efca8e0435502bb159f85467137))


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))
* **vite:** preload tz.js ([fcb7507](https://github.com/tezjs/tez.js/commit/fcb7507dcbd9ad46da9dce2e086b030844dc89c2))



## 0.0.43 (2022-07-19)


### Bug Fixes

* **payload:** map correct object for parse value ([4414bf6](https://github.com/tezjs/tez.js/commit/4414bf6b1091192a39f32e9dcac46f5e6622fefb))



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)


### Bug Fixes

* **payload:** add siteurl prefix in sitemap ([e848220](https://github.com/tezjs/tez.js/commit/e848220046acefb7a70432683544bf7bc5509f63))



## 0.0.39 (2022-07-15)


### Bug Fixes

* **vite:** write tz.js file on build complete ([b47ddcc](https://github.com/tezjs/tez.js/commit/b47ddcc68c5cd449274ad7bd690069ae1693e64b))



## 0.0.38 (2022-07-15)


### Bug Fixes

* **create-tez:** allow .cache folder permission while running in docker ([cc6226f](https://github.com/tezjs/tez.js/commit/cc6226f53fc209cc1d9b56efb06ee257b3067eb7))
* **vite:** add footer slot in post script ([ca36bad](https://github.com/tezjs/tez.js/commit/ca36bad8e9c6a3455e5237c77d2acb21c8527400))
* **vite:** remove suffix from image url while parsing the text ([581caf7](https://github.com/tezjs/tez.js/commit/581caf7ce3d26587a661c3fe898b51bebd26af48))
* **vite:** script & style property undefined check ([e7120c6](https://github.com/tezjs/tez.js/commit/e7120c6ed60fc8de01d1c269cb4b19cfc37df730))
* **vite:** segregate components conditionally in pre/post script ([a095a11](https://github.com/tezjs/tez.js/commit/a095a11ea5e7c5e625d48641554cbc9cb27ff014))


### Features

* conditional inline css/js reference on the page ([1bc7469](https://github.com/tezjs/tez.js/commit/1bc7469ae0a42837cb2889f989c75b63aa0f7603))
* **create-tez:** connect remote  container from vs code ([9602c2c](https://github.com/tezjs/tez.js/commit/9602c2c9b8eb83316d1461ab4273be7399160f71))
* **payload:** allow svg image to write in local folder ([89c9fb2](https://github.com/tezjs/tez.js/commit/89c9fb2770196e6a9696e28e4161972d12b015da))
* **vite:** preload underneath dependencies page wise ([a696e79](https://github.com/tezjs/tez.js/commit/a696e79d00d1317505958de370c87115a41b1ab7))
* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **common:** correct root (index) folder path ([8ae15d0](https://github.com/tezjs/tez.js/commit/8ae15d033e157eac413377e3e957d882bab281d3))
* **vite:** correct index.html root write path ([587aef5](https://github.com/tezjs/tez.js/commit/587aef58c7216e7a214f44fa706bf78c6b033735))
* **vite:** create html file at root ([1015c14](https://github.com/tezjs/tez.js/commit/1015c140cb5d6b16f15830c840d1c2fc9e955875))
* **vite:** generate index.html at root of the dist ([236ef35](https://github.com/tezjs/tez.js/commit/236ef35391108b83d50c658f11b9d3cb0bded5ee))
* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **js:** export isMobile function ([66f69c3](https://github.com/tezjs/tez.js/commit/66f69c3cf39da9202b804ccc96e017ab1b601354))
* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vite:** create tez.ts if not exists during build ([40db4ec](https://github.com/tezjs/tez.js/commit/40db4ec077cc83f0a055afb2924c5d609cc8a68c))
* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))
* **vue:** content attribute added to viewport meta tag ([2b35309](https://github.com/tezjs/tez.js/commit/2b353098551b99d9d5175f208980821c71c14536))



## 0.0.34 (2022-07-06)


### Bug Fixes

* **payload:** filter nested data ([a1ad7a7](https://github.com/tezjs/tez.js/commit/a1ad7a7f13a943112c8ac14ca64b06ea1454f461))



## 0.0.33 (2022-07-06)


### Bug Fixes

* **create-tez:** undefined message variable ([ca2c0b2](https://github.com/tezjs/tez.js/commit/ca2c0b2873508ea588cea2d2a3f89a31aa1de99e))



## 0.0.32 (2022-07-06)


### Bug Fixes

* **create-tez:** installing dependencies ([da6980a](https://github.com/tezjs/tez.js/commit/da6980aa1ba7473aaeef55ef406f1a2e5ad1573e))



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Bug Fixes

* **vite:** replace numbers from component name ([a8923b2](https://github.com/tezjs/tez.js/commit/a8923b20db8f7970cd6b8ec884c399f4c6ceecb1))


### Features

* **payload:** deep populate strapi data ([9eedc19](https://github.com/tezjs/tez.js/commit/9eedc19b0d85245c92a08d7b97bf743205c952e8))
* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Bug Fixes

* folder path seperator ([0629c06](https://github.com/tezjs/tez.js/commit/0629c06bdccdf9c54fbb51e436ec5702e11d2e5e))


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))
* **vite:** bundle page wise components and payload ([58dffbc](https://github.com/tezjs/tez.js/commit/58dffbccf6f71e0f8aa696675427a485b9ef4a52))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)


### Bug Fixes

* **create-tez:** resolve template directory path ([22c3751](https://github.com/tezjs/tez.js/commit/22c3751841a65b076501edfb8d6b4f035752d0f8))



## 0.0.25 (2022-06-13)


### Bug Fixes

* **payload:** remove back-slash from 'imageFolderPath' folder path ([bb80f77](https://github.com/tezjs/tez.js/commit/bb80f77d16dcd9728c8773a2c1004fcc54b3638b))
* **vite:** put 'await' while reading the tex config ([3d48f37](https://github.com/tezjs/tez.js/commit/3d48f37c91451739332dde43a080e3a0a86e7843))


### Features

* **create-tez:** automagically install scaffold template packages ([74afa89](https://github.com/tezjs/tez.js/commit/74afa8977f34ea9e9ba798f717e4401bf7b7de11))



## 0.0.24 (2022-06-02)


### Bug Fixes

* **payload:** parse query string with correct object ([d774399](https://github.com/tezjs/tez.js/commit/d774399eabe24b8e55272ba1247b8f8443b13030))



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **payload:** null check before transform the value ([aeb72bf](https://github.com/tezjs/tez.js/commit/aeb72bfd49bf8d843833c216f2942deb54cef502))
* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **common:** merge strapi default & user configuration ([ac60db7](https://github.com/tezjs/tez.js/commit/ac60db7263663eb6d9c9fdbc974ca4138ed1f8f3))
* **payload:** refresh reference content on the page ([1f438f0](https://github.com/tezjs/tez.js/commit/1f438f03669f32f2e3f6c599b9e6bb8ff8b9a5d0))
* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)


### Bug Fixes

* **create-tez:** add tsconfig in the project template ([88ec68a](https://github.com/tezjs/tez.js/commit/88ec68a819c6522f2d98c8cc7716a3df975d6625))
* **payload:** handle if masterpage is not set ([7be053c](https://github.com/tezjs/tez.js/commit/7be053c56111cd659cf8582f57ca5bf500d8a5ec))



## 0.0.19 (2022-05-28)


### Bug Fixes

* **create-tez:** ignore dist folder ([e79b290](https://github.com/tezjs/tez.js/commit/e79b290a44b9e57af97c2e70d68b66bbe4a76736))
* **create-tez:** tez strapi template seed data ([47ca764](https://github.com/tezjs/tez.js/commit/47ca7642ae2fd9f02384bd5f50f3140f1295905c))


### Features

* **types:** add prop amplify in deployment config ([b2a69a5](https://github.com/tezjs/tez.js/commit/b2a69a5f7f7ea615a2485cb6904590dac5a759c4))



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* sw template ([dc01931](https://github.com/tezjs/tez.js/commit/dc019313b125c32e8dd154beb2c5abd2241379f0))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))
* auto generate firebase deployment config ([6bceb53](https://github.com/tezjs/tez.js/commit/6bceb538d95a1e13bd53f87f675fe2dfe2d283d0))



## 0.0.16 (2022-05-26)



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* add optimizedeps path ([ddf68d4](https://github.com/tezjs/tez.js/commit/ddf68d46d6faeda6a295fb6ba9c337243d4038d5))
* auto generate tez.ts ([0725939](https://github.com/tezjs/tez.js/commit/072593975992dc81595e709a1986e4612db16ce1))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* change template path of service worker ([a68bf32](https://github.com/tezjs/tez.js/commit/a68bf32400e59b9941ff6e07bd27b7879567da28))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* convert into string instead array of html elements ([b453632](https://github.com/tezjs/tez.js/commit/b453632c36b8cbebd63c4d0e336bd4f8de1e9869))
* correct alias path ([0984d59](https://github.com/tezjs/tez.js/commit/0984d59a158ffe79dcad792e616fbea992ccb9eb))
* generate payload based on rootDir ([688b050](https://github.com/tezjs/tez.js/commit/688b050fd7810aaa3063cf2977ec7faa512e899b))
* generate sitemap and robots file ([bca1779](https://github.com/tezjs/tez.js/commit/bca17791f79d1ce3ad58eb500f741ec930a95175))
* generated html script and payload path ([6f7a14c](https://github.com/tezjs/tez.js/commit/6f7a14c86332af7928fabb34d6379bb70361ebc2))
* ignore broadcastchannel image request from local environment ([b23183a](https://github.com/tezjs/tez.js/commit/b23183ac151312047b5664763cc9767c75d8e47f))
* ignore undefined element in sitemap ([c3466a0](https://github.com/tezjs/tez.js/commit/c3466a023fd3b1005c4443a7a038e246a8be3e6d))
* image creating without configuration ([c2223d7](https://github.com/tezjs/tez.js/commit/c2223d74464327a22029dbcfa0a743a7d26de66a))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* minify index.html ([67dca05](https://github.com/tezjs/tez.js/commit/67dca0532e0e9a2fc6ab2b53bffccb31afa242a5))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* pass blank object if component data is undefined ([b1ed00f](https://github.com/tezjs/tez.js/commit/b1ed00f979f575daf602977e3cfe48383a3c83fc))
* pass blank object if seo object is null ([bed1681](https://github.com/tezjs/tez.js/commit/bed1681e173ab696193185a1a697028bcb9f84b9))
* reading seo payload path ([d6abff2](https://github.com/tezjs/tez.js/commit/d6abff2c24a3f81fb375bd2ceb805de92cbabe84))
* refresh specific route folder ([35a081f](https://github.com/tezjs/tez.js/commit/35a081f2460995cb7f5f662ce58052750f2de39d))
* resolve dynamic express module ([d41bcd0](https://github.com/tezjs/tez.js/commit/d41bcd02a672c185df62b8cb88e42c49544eb4c4))
* resolve import object value ([1fcedca](https://github.com/tezjs/tez.js/commit/1fcedca8083f2f8b36668961a977b4b75a22372d))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* return sitemap xelement ([ba1a4e3](https://github.com/tezjs/tez.js/commit/ba1a4e3b4eb1ec3d6847fb443eeb42eab1752535))
* service worker template code ([5ecd699](https://github.com/tezjs/tez.js/commit/5ecd69985060474a7d0ad7a1ecdad4e3cbf2eae2))
* set correct components folder path ([9c99697](https://github.com/tezjs/tez.js/commit/9c99697b207de11e46291a42a00661e147bc634c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* set correct payload path ([2b529ef](https://github.com/tezjs/tez.js/commit/2b529eff4cb6599e5e8a6ff224631e3d4606ee6a))
* set correct payload path ([3135c6a](https://github.com/tezjs/tez.js/commit/3135c6a36068abcd72a5359ddbeb2cb108cd4f03))
* tez dev ([d3e8e60](https://github.com/tezjs/tez.js/commit/d3e8e60991ec4bf16df2d0e31580336537b0ddf8))
* undefined payload object ([b6d1a76](https://github.com/tezjs/tez.js/commit/b6d1a76cd79d38cf9d73322d1846e0af68d2e266))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add custom route ([643d7d9](https://github.com/tezjs/tez.js/commit/643d7d98b4a5bf4fd1df058648e746dcfbbbdb98))
* add dynamic page record in the generic collections ([df6a56c](https://github.com/tezjs/tez.js/commit/df6a56ce8099a48d97c439e705b9d84901b38a81))
* add html page and seo tag ([e911e02](https://github.com/tezjs/tez.js/commit/e911e029ad10fa23656866e49966731428eb7174))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add master layout ([2a97b9c](https://github.com/tezjs/tez.js/commit/2a97b9c009099fdd4e12279f568a65493b9dc840))
* add multiple page schema on page ([6a9b3d3](https://github.com/tezjs/tez.js/commit/6a9b3d39a1310a4234a93636cb92dc96336a08c9))
* add new package '@tezjs/js' ([b51de5f](https://github.com/tezjs/tez.js/commit/b51de5fb7532ce692a222257a2b4ff095c1beb4d))
* add pwa ([05c407a](https://github.com/tezjs/tez.js/commit/05c407a9cc964e81b6eb6b7c2da77e3b9400f324))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* add zero configuration for tez app ([c79defe](https://github.com/tezjs/tez.js/commit/c79defef78ab02fc4ee8302260095a41ae043790))
* build through tez cli ([e23245b](https://github.com/tezjs/tez.js/commit/e23245b28d2ef32449f6c7df7fa3cc5b7737866c))
* configure custom page & payload ([da5e6a3](https://github.com/tezjs/tez.js/commit/da5e6a3baaf4dd9fc68b40254652eeb2a8b0ecd2))
* convert image into webp ([2fe8b1a](https://github.com/tezjs/tez.js/commit/2fe8b1adee35cf2304d44ec0546c94576e6abf45))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* custom page payload generator ([4d711f0](https://github.com/tezjs/tez.js/commit/4d711f032ab3373f94fafaaaa07e44bda028634a))
* define tez config conditionally ([168726a](https://github.com/tezjs/tez.js/commit/168726abdc85b2a05f3637f272b5d90b8f0b66c2))
* entity wise pagination configuration ([bacf79c](https://github.com/tezjs/tez.js/commit/bacf79cd590ed1623dd91b7d7855867e7e58a495))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* favicon & preload link configuration ([48fbefb](https://github.com/tezjs/tez.js/commit/48fbefbc4a59056a7f12f8f869b7d0bca44e855c))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* imports at root ts ([78da3da](https://github.com/tezjs/tez.js/commit/78da3da39fa180192a4745ccdc65528d5e3fc001))
* load lazy data ([1fe8e3a](https://github.com/tezjs/tez.js/commit/1fe8e3aff508c56f0989f36bdf53cfb9e4bc366e))
* parse object value ([8ec54cd](https://github.com/tezjs/tez.js/commit/8ec54cdefab3d865512087fad4ea3c7097b9111f))
* redirect-routes added ([6efde53](https://github.com/tezjs/tez.js/commit/6efde539142f11f2bad9410de51eb22c58c0813b))
* run add lib ([26c78c7](https://github.com/tezjs/tez.js/commit/26c78c7a1ad9932b8b87c1241618136922ba0f38))
* set default / custom port ([8d1f293](https://github.com/tezjs/tez.js/commit/8d1f29332fdedc08ed9fdb80d2d15a4536523fcf))
* sitemap, robots and seo added ([115adf0](https://github.com/tezjs/tez.js/commit/115adf0455cf6de38262a5e6fb1cd61f82d407ab))
* sitemap, robots and seo feature added ([6fbd3d2](https://github.com/tezjs/tez.js/commit/6fbd3d2bf159138b5344a3f93e3a7b9408c55f73))
* strapi package features ([f71125a](https://github.com/tezjs/tez.js/commit/f71125a31892a6e2e343fcb8bc5d3553e35b8755))
* **strapi:** add sanitizer component level data ([2326b22](https://github.com/tezjs/tez.js/commit/2326b22e19bf8913230bca63e351ae95fff7cbcc))
* **strapi:** component data wise pagination ([0390097](https://github.com/tezjs/tez.js/commit/0390097f0b0e7d83774dd5d639a5768ecda4db59))
* tez cli initial code added ([1c9ec72](https://github.com/tezjs/tez.js/commit/1c9ec723ea305edd8b31cf5729faf1c719174572))
* typed env variable ([80c291a](https://github.com/tezjs/tez.js/commit/80c291a23d8006d5b4321766f196314c894aefca))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** request image through broadcastchannel ([7e0329f](https://github.com/tezjs/tez.js/commit/7e0329f7fd2a79098c2442a0916eb3a86d278160))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))


### Performance Improvements

* break after routed payload refresh ([2f2711c](https://github.com/tezjs/tez.js/commit/2f2711cccb605a81d1cc42752162770f9300c079))



## 1.0.1 (2021-06-24)



## 0.0.75 (2022-08-13)


### Bug Fixes

* **vite:** linking json data regex ([1f2bc4e](https://github.com/tezjs/tez.js/commit/1f2bc4e40edeeb0d55d2542360bfaf7856c20efc))



## 0.0.74 (2022-08-12)


### Bug Fixes

* **vite:** all deps must be in lowercase ([7e422f3](https://github.com/tezjs/tez.js/commit/7e422f369b75a83a293c1d698e00549c6f4e7618))
* **vite:** correct reference of CommonPathResolver ([819b42b](https://github.com/tezjs/tez.js/commit/819b42bf0643316c02dbc6ba1143ef33b6bbc6c6))



## 0.0.73 (2022-08-12)


### Bug Fixes

* **docs:** Correct Questions Url ([e5ebd0a](https://github.com/tezjs/tez.js/commit/e5ebd0a040f495b8f41dbdc990e050620a8a3bec))
* **docs:** typo mistake ([154aea9](https://github.com/tezjs/tez.js/commit/154aea920c5e87577b34b44d5e2f2e87a97ddf58))



## 0.0.72 (2022-08-11)



## 0.0.71 (2022-08-10)


### Bug Fixes

* **vite:** remove additional forward slash ([3f0a34e](https://github.com/tezjs/tez.js/commit/3f0a34e51e54962c641f829714a5ccc7e529da84))



## 0.0.70 (2022-08-10)


### Bug Fixes

* **vite:** add build version after release ([0236f51](https://github.com/tezjs/tez.js/commit/0236f51d6c2be3509d01874f576d4a2c88b07912))
* **vite:** gen component file names in lowercase ([12554e6](https://github.com/tezjs/tez.js/commit/12554e6617ee96499758b0a6eddafcf6ebde1a60))
* **vite:** gen component file names in lowercase ([aa13b16](https://github.com/tezjs/tez.js/commit/aa13b16f406157d4e39ca84827dd8c31962e5d01))
* **vite:** include css if js is not direct reference to the respective component ([7b0f03f](https://github.com/tezjs/tez.js/commit/7b0f03f2b1d32aadf5af4faa8f04de63418956ec))



## 0.0.69 (2022-08-09)


### Bug Fixes

* **vite:** preload correct component path ([5d0f20d](https://github.com/tezjs/tez.js/commit/5d0f20dfac40d5dd5d00cd7e065550e8b3a5d33e))


### Features

* **vite:** conditional generate sitemap & robots ([b2c48be](https://github.com/tezjs/tez.js/commit/b2c48be75f300465fdb4374f7f048fa016a40684))



## 0.0.68 (2022-08-09)


### Bug Fixes

* **vite:** remove replacer ([b4ec9b2](https://github.com/tezjs/tez.js/commit/b4ec9b228ad0f84432e16e80547bd36c472bc9e2))


### Features

* **vite:** conditional minification ([1ccb3e3](https://github.com/tezjs/tez.js/commit/1ccb3e330fa3daa8f56fad1bea32293e78fd8094))



## 0.0.67 (2022-08-09)


### Bug Fixes

* **vite:** include non variable reference imports ([23a13ef](https://github.com/tezjs/tez.js/commit/23a13ef1f5fefb340dcec0533566c888554fb3bc))


### Features

* **vue:** add query params in router ([4ade609](https://github.com/tezjs/tez.js/commit/4ade60956352042828ab68286b5d46d36de1df0d))



## 0.0.66 (2022-08-09)



## 0.0.65 (2022-08-08)


### Bug Fixes

* **payload:** set regex for replace the route path with replace method ([6ecf122](https://github.com/tezjs/tez.js/commit/6ecf122e6638a565530fdcc7ce67fc751ead745f))
* **vite:** correct regex  onResolve filter ([3160844](https://github.com/tezjs/tez.js/commit/31608445462fe05f79329067892e4f913e8121bd))



## 0.0.64 (2022-08-08)



## 0.0.63 (2022-08-08)


### Bug Fixes

* **vite:** add '@tezjs/vue' in optimizeDeps ([693cdbf](https://github.com/tezjs/tez.js/commit/693cdbfcc69fd24800143bf37b1d10f414c33112))



## 0.0.62 (2022-08-08)


### Bug Fixes

* **cli:** SPAWN ENOENT ([9567654](https://github.com/tezjs/tez.js/commit/9567654d36693bd10fcf393767bef2c4db3692d0))



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)


### Bug Fixes

* **create-tez:** add missing @tezjs/route package ([1e4d532](https://github.com/tezjs/tez.js/commit/1e4d532c1d886e8f337e4ddf83510ed02ca55e1f))
* **route:** set correct @tezjs/common package version ([6039f6d](https://github.com/tezjs/tez.js/commit/6039f6da56e40cd046b3be414d581af29038d3e5))



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* add modules property for tez module external plugin ([c8528a5](https://github.com/tezjs/tez.js/commit/c8528a57e52960e9847888c4602474a1df7fa911))
* **create-tez:** add tezjs with vue starter template ([1f6a61c](https://github.com/tezjs/tez.js/commit/1f6a61c50cdbeff56e65389c1d7324e71a0fb697))
* **route:** add new package '@tezjs/route' for auto-routes ([f8b8e3e](https://github.com/tezjs/tez.js/commit/f8b8e3e255ee069e7326845a9f08ee45e37591a0))
* **vite:** auto resolve all layout component in final build ([2d818fa](https://github.com/tezjs/tez.js/commit/2d818fa3c5f82ec5c2cd9ed695bd51b92f2ad899))
* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)


### Bug Fixes

* **common:** correct lib path when cust source code path is configured ([d8d888a](https://github.com/tezjs/tez.js/commit/d8d888afe53812fc92a1f522c1f1a303804e4233))
* **payload:** ignore undefined component in payload ([02d6183](https://github.com/tezjs/tez.js/commit/02d618362d1b919d1fd6d1ee43d8cdb037b79ae8))
* **vite:** custom source path undefined ([943703d](https://github.com/tezjs/tez.js/commit/943703d4c3a0728cb0873d45da75d2ac1f7f899c))
* **vite:** resolve addLib ([684107a](https://github.com/tezjs/tez.js/commit/684107a3aa83513a51af8bdc334d56daacba21e2))



## 0.0.57 (2022-08-04)


### Bug Fixes

* **types:** set as nullable 'preFetch' property ([4261964](https://github.com/tezjs/tez.js/commit/42619640072af4f1e62ef2a547140c677254396e))
* **vite:** call bundle css method if bundlecss is true ([c79bc24](https://github.com/tezjs/tez.js/commit/c79bc24cf905f67833394218df0e3c23b19ec81b))
* **vite:** check path value before assigning the reference ([4d53ab3](https://github.com/tezjs/tez.js/commit/4d53ab3b920e12fad9cde645c0dbfb8fddd18704))
* **vite:** persist global html meta configuration ([82edd78](https://github.com/tezjs/tez.js/commit/82edd78359f319e5a540b9aea75bf3c786cea434))
* **vite:** set custom source code path ([84006bc](https://github.com/tezjs/tez.js/commit/84006bce97373596d791299886eef1f8b01df633))


### Features

* **vite:** preload components & respective dependencies page wise ([e385a5c](https://github.com/tezjs/tez.js/commit/e385a5c8c0d914c2ef6c757c3e216ee10a1f5a69))



## 0.0.56 (2022-08-03)


### Bug Fixes

* **vite:** ignore tez.css from page wise css bundling ([2bda791](https://github.com/tezjs/tez.js/commit/2bda7915f1c5a6c78bd0f6ccebed0990b9370488))
* **vite:** remove closing element of link tag ([c29b24e](https://github.com/tezjs/tez.js/commit/c29b24e64085efc137d8f16659612e5b20e14a6f))
* **vite:** resolve mobile component in pre script ([a22c831](https://github.com/tezjs/tez.js/commit/a22c831cc09bef06e0b335c982f663078211e662))


### Features

* **common:** set source folder path ([4785ca5](https://github.com/tezjs/tez.js/commit/4785ca5d27ff315a31132a5fc475fba413937338))
* **vite:** add preconnect link element ([cd78224](https://github.com/tezjs/tez.js/commit/cd7822466675fab2dcbb7a559ee24d4f54362fad))
* **vite:** allow to set dns-prefetch link element ([afc13ca](https://github.com/tezjs/tez.js/commit/afc13cafdadbd67ebfe80f8ed31471b809a0c25a))
* **vite:** allow to set prefetch path ([bdfefe0](https://github.com/tezjs/tez.js/commit/bdfefe0afdfdc9fdf7263fd46c8c43934e5e23cd))
* **vite:** bundle pagewise css ([a26379c](https://github.com/tezjs/tez.js/commit/a26379ccfc1c41d1d7392659733f046bceb96358))
* **vite:** page wise post script prefetch ([0ae4b21](https://github.com/tezjs/tez.js/commit/0ae4b2140bf44aaf3f7af47c4fc1b35e8876bc3b))
* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)


### Bug Fixes

* **vite:** component & layout import path in glob.js ([0a960a8](https://github.com/tezjs/tez.js/commit/0a960a8c0707e8134d9052dd5a838875da146465))
* **vite:** missing package under commonjs execution ([ad6bf38](https://github.com/tezjs/tez.js/commit/ad6bf3839d979b9736ca5936670a17550a4bac92))
* **vite:** replace new line code with blank from linkingData ([f072ed2](https://github.com/tezjs/tez.js/commit/f072ed2a79bbd664ffc6cefc183e616a562449c6))


### Features

* **vite:** customize tez build config with vite build ([3ba9bd0](https://github.com/tezjs/tez.js/commit/3ba9bd0dae5cb1e9cb73cd36c40af090da5025dc))
* **vite:** set as default production build ([1b3e21a](https://github.com/tezjs/tez.js/commit/1b3e21a418fbc3423d40bc90003ca19d8d3675da))



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **payload:** incorrect curly bracket ([c9c3f61](https://github.com/tezjs/tez.js/commit/c9c3f61373a1b6eb7aa7af77bb1550cd4bc25a66))
* **payload:** not to create robots when custom payload generator is configured ([bde0e1d](https://github.com/tezjs/tez.js/commit/bde0e1dd5fd1adc5f79da019e56777c2e7cd4ff9))
* **types:** mark as nullable prop of 'amplify' ([2efec85](https://github.com/tezjs/tez.js/commit/2efec85eb3bb217a018178bc48144b7ea604132a))
* **vite:** import plugins if exists ([740b3b8](https://github.com/tezjs/tez.js/commit/740b3b85f6464ac59a46cc27c7f8ac7eb5a8d875))
* **vite:** obviate number from component name ([c20801f](https://github.com/tezjs/tez.js/commit/c20801fbcfd187a41d57c03dad56449e6aacf09e))
* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))


### Features

* **payload:** pass additional props for custom payload generator ([a5d9217](https://github.com/tezjs/tez.js/commit/a5d921710eda26cdd9a1b7650af4efce64357437))
* **payload:** set routes for custom payload generator ([3eeed41](https://github.com/tezjs/tez.js/commit/3eeed41d47212ca1de4742eb4975520460f0e249))



## 0.0.51 (2022-07-26)


### Bug Fixes

* **payload:** ignore non change frequency & priority set url in sitemap ([ecd1ac0](https://github.com/tezjs/tez.js/commit/ecd1ac002a3a348d261a9878001839da987a1f41))



## 0.0.50 (2022-07-25)


### Bug Fixes

* **vite:** add proper format of linkingdata ([719a00e](https://github.com/tezjs/tez.js/commit/719a00e8d7f7aa52eb825300d231db7799f19fa8))



## 0.0.49 (2022-07-25)


### Features

* **payload:** add custom payload generator ([4013e8a](https://github.com/tezjs/tez.js/commit/4013e8a93d37647cf4ba723ca5c41e20d541c801))



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))
* **vite:** minify pre/post/preload js after build ([b0f2631](https://github.com/tezjs/tez.js/commit/b0f26311dfd41e63d9eaffd4d56c87624dfb03b0))



## 0.0.47 (2022-07-22)


### Bug Fixes

* **create-tez:** properly reference the property name ([c82e89a](https://github.com/tezjs/tez.js/commit/c82e89a44a73b96281871ead07746a2ea0f3f997))



## 0.0.46 (2022-07-22)


### Bug Fixes

* **vite:** obviate additional right slash from preload script url. ([2c5415e](https://github.com/tezjs/tez.js/commit/2c5415e7eb6727b51e0b2789dce79f1e5d2ff3ff))
* **vite:** preload items check before push ([e92933a](https://github.com/tezjs/tez.js/commit/e92933acedd4366df65ee427986ca3fe4b11e875))



## 0.0.45 (2022-07-22)


### Bug Fixes

* **payload:** redirect routes undefined then set blank array ([f3f39fc](https://github.com/tezjs/tez.js/commit/f3f39fc455f86464cda3c4dcfd12f39e3a7c7421))
* **vite:** import component correctly ([6deea03](https://github.com/tezjs/tez.js/commit/6deea03662eac54bffc7bcb06b4193d6a65e15a0))
* **vite:** obviate function while resolve the route ([a74e519](https://github.com/tezjs/tez.js/commit/a74e519b9bbbc41489f6a1c297448c54a81a0bfa))
* **vite:** set actual path instead of object ([4d986fb](https://github.com/tezjs/tez.js/commit/4d986fb234c3f102a34bbaa3ab071b16b3ee353c))
* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Bug Fixes

* **payload:** write firebase redirect routes ([a745423](https://github.com/tezjs/tez.js/commit/a7454230127a1efca8e0435502bb159f85467137))


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))
* **vite:** preload tz.js ([fcb7507](https://github.com/tezjs/tez.js/commit/fcb7507dcbd9ad46da9dce2e086b030844dc89c2))



## 0.0.43 (2022-07-19)


### Bug Fixes

* **payload:** map correct object for parse value ([4414bf6](https://github.com/tezjs/tez.js/commit/4414bf6b1091192a39f32e9dcac46f5e6622fefb))



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)


### Bug Fixes

* **payload:** add siteurl prefix in sitemap ([e848220](https://github.com/tezjs/tez.js/commit/e848220046acefb7a70432683544bf7bc5509f63))



## 0.0.39 (2022-07-15)


### Bug Fixes

* **vite:** write tz.js file on build complete ([b47ddcc](https://github.com/tezjs/tez.js/commit/b47ddcc68c5cd449274ad7bd690069ae1693e64b))



## 0.0.38 (2022-07-15)


### Bug Fixes

* **create-tez:** allow .cache folder permission while running in docker ([cc6226f](https://github.com/tezjs/tez.js/commit/cc6226f53fc209cc1d9b56efb06ee257b3067eb7))
* **vite:** add footer slot in post script ([ca36bad](https://github.com/tezjs/tez.js/commit/ca36bad8e9c6a3455e5237c77d2acb21c8527400))
* **vite:** remove suffix from image url while parsing the text ([581caf7](https://github.com/tezjs/tez.js/commit/581caf7ce3d26587a661c3fe898b51bebd26af48))
* **vite:** script & style property undefined check ([e7120c6](https://github.com/tezjs/tez.js/commit/e7120c6ed60fc8de01d1c269cb4b19cfc37df730))
* **vite:** segregate components conditionally in pre/post script ([a095a11](https://github.com/tezjs/tez.js/commit/a095a11ea5e7c5e625d48641554cbc9cb27ff014))


### Features

* conditional inline css/js reference on the page ([1bc7469](https://github.com/tezjs/tez.js/commit/1bc7469ae0a42837cb2889f989c75b63aa0f7603))
* **create-tez:** connect remote  container from vs code ([9602c2c](https://github.com/tezjs/tez.js/commit/9602c2c9b8eb83316d1461ab4273be7399160f71))
* **payload:** allow svg image to write in local folder ([89c9fb2](https://github.com/tezjs/tez.js/commit/89c9fb2770196e6a9696e28e4161972d12b015da))
* **vite:** preload underneath dependencies page wise ([a696e79](https://github.com/tezjs/tez.js/commit/a696e79d00d1317505958de370c87115a41b1ab7))
* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **common:** correct root (index) folder path ([8ae15d0](https://github.com/tezjs/tez.js/commit/8ae15d033e157eac413377e3e957d882bab281d3))
* **vite:** correct index.html root write path ([587aef5](https://github.com/tezjs/tez.js/commit/587aef58c7216e7a214f44fa706bf78c6b033735))
* **vite:** create html file at root ([1015c14](https://github.com/tezjs/tez.js/commit/1015c140cb5d6b16f15830c840d1c2fc9e955875))
* **vite:** generate index.html at root of the dist ([236ef35](https://github.com/tezjs/tez.js/commit/236ef35391108b83d50c658f11b9d3cb0bded5ee))
* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **js:** export isMobile function ([66f69c3](https://github.com/tezjs/tez.js/commit/66f69c3cf39da9202b804ccc96e017ab1b601354))
* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vite:** create tez.ts if not exists during build ([40db4ec](https://github.com/tezjs/tez.js/commit/40db4ec077cc83f0a055afb2924c5d609cc8a68c))
* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))
* **vue:** content attribute added to viewport meta tag ([2b35309](https://github.com/tezjs/tez.js/commit/2b353098551b99d9d5175f208980821c71c14536))



## 0.0.34 (2022-07-06)


### Bug Fixes

* **payload:** filter nested data ([a1ad7a7](https://github.com/tezjs/tez.js/commit/a1ad7a7f13a943112c8ac14ca64b06ea1454f461))



## 0.0.33 (2022-07-06)


### Bug Fixes

* **create-tez:** undefined message variable ([ca2c0b2](https://github.com/tezjs/tez.js/commit/ca2c0b2873508ea588cea2d2a3f89a31aa1de99e))



## 0.0.32 (2022-07-06)


### Bug Fixes

* **create-tez:** installing dependencies ([da6980a](https://github.com/tezjs/tez.js/commit/da6980aa1ba7473aaeef55ef406f1a2e5ad1573e))


