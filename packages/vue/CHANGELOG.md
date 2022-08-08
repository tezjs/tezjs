## 0.0.62 (2022-08-08)



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)



## 0.0.57 (2022-08-04)



## 0.0.56 (2022-08-03)


### Features

* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))



## 0.0.51 (2022-07-26)



## 0.0.50 (2022-07-25)



## 0.0.49 (2022-07-25)



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))



## 0.0.47 (2022-07-22)



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.61 (2022-08-08)



## 0.0.60 (2022-08-08)



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)



## 0.0.57 (2022-08-04)



## 0.0.56 (2022-08-03)


### Features

* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))



## 0.0.51 (2022-07-26)



## 0.0.50 (2022-07-25)



## 0.0.49 (2022-07-25)



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))



## 0.0.47 (2022-07-22)



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.60 (2022-08-08)



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)



## 0.0.57 (2022-08-04)



## 0.0.56 (2022-08-03)


### Features

* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))



## 0.0.51 (2022-07-26)



## 0.0.50 (2022-07-25)



## 0.0.49 (2022-07-25)



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))



## 0.0.47 (2022-07-22)



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.59 (2022-08-08)


### Bug Fixes

* **vue:** import missing defineAsyncComponent ([bbe5b9a](https://github.com/tezjs/tez.js/commit/bbe5b9aafb2547a12c3fe35e7a56604d25db5350))


### Features

* **vue:**  auto set dynamic routes ([9b53859](https://github.com/tezjs/tez.js/commit/9b5385900c0b60cd6dff883ce0300f669ba1d5e8))
* **vue:** set layoutName on page level component ([eea0636](https://github.com/tezjs/tez.js/commit/eea06368d3c8ac7b02da220d38b8d6e147e8f0bb))
* **vue:** set seo meta data on page level component ([a1757b8](https://github.com/tezjs/tez.js/commit/a1757b80e0a25761cdb4d6959edd2ba190088d81))



## 0.0.58 (2022-08-05)



## 0.0.57 (2022-08-04)



## 0.0.56 (2022-08-03)


### Features

* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))



## 0.0.51 (2022-07-26)



## 0.0.50 (2022-07-25)



## 0.0.49 (2022-07-25)



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))



## 0.0.47 (2022-07-22)



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.58 (2022-08-05)



## 0.0.57 (2022-08-04)



## 0.0.56 (2022-08-03)


### Features

* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))



## 0.0.51 (2022-07-26)



## 0.0.50 (2022-07-25)



## 0.0.49 (2022-07-25)



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))



## 0.0.47 (2022-07-22)



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.57 (2022-08-04)



## 0.0.56 (2022-08-03)


### Features

* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))



## 0.0.51 (2022-07-26)



## 0.0.50 (2022-07-25)



## 0.0.49 (2022-07-25)



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))



## 0.0.47 (2022-07-22)



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.56 (2022-08-03)


### Features

* **vue:** export load image loader api to load images through separate thread ([3be8ed4](https://github.com/tezjs/tez.js/commit/3be8ed494d2260a7ddc6b12b1e954d9efca2e56b))


### Performance Improvements

* **vue:** load post script after user interaction ([31e5001](https://github.com/tezjs/tez.js/commit/31e500183f6e24121d5613d68c3e7ddb69d35076))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))



## 0.0.51 (2022-07-26)



## 0.0.50 (2022-07-25)



## 0.0.49 (2022-07-25)



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))



## 0.0.47 (2022-07-22)



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.55 (2022-07-29)


### Bug Fixes

* **vue:** component first element render order ([142107d](https://github.com/tezjs/tez.js/commit/142107d77c376742270adb6dc4fb49a925ea0199))



## 0.0.54 (2022-07-29)



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))



## 0.0.51 (2022-07-26)



## 0.0.50 (2022-07-25)



## 0.0.49 (2022-07-25)



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))



## 0.0.47 (2022-07-22)



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.54 (2022-07-29)



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))



## 0.0.51 (2022-07-26)



## 0.0.50 (2022-07-25)



## 0.0.49 (2022-07-25)



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))



## 0.0.47 (2022-07-22)



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.53 (2022-07-27)


### Bug Fixes

* **vue:** call post script function ([b562206](https://github.com/tezjs/tez.js/commit/b562206a3f9549407ded837b85dd3d747e247e87))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))



## 0.0.51 (2022-07-26)



## 0.0.50 (2022-07-25)



## 0.0.49 (2022-07-25)



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))



## 0.0.47 (2022-07-22)



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.52 (2022-07-27)


### Bug Fixes

* **vue:** register post script content ([a837ec5](https://github.com/tezjs/tez.js/commit/a837ec59d8460ee6aa57946f2a6c7c6cc9d632d2))
* **vue:** resolve all component on bot request ([33bc6dc](https://github.com/tezjs/tez.js/commit/33bc6dc6cbef5778c7095c19a5d7011cfc179d27))



## 0.0.51 (2022-07-26)



## 0.0.50 (2022-07-25)



## 0.0.49 (2022-07-25)



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))



## 0.0.47 (2022-07-22)



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.51 (2022-07-26)



## 0.0.50 (2022-07-25)



## 0.0.49 (2022-07-25)



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))



## 0.0.47 (2022-07-22)



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.50 (2022-07-25)



## 0.0.49 (2022-07-25)



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))



## 0.0.47 (2022-07-22)



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.49 (2022-07-25)



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))



## 0.0.47 (2022-07-22)



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.48 (2022-07-22)


### Bug Fixes

* **vue:** add vite-ignore comment for to ignore dynamic import from vite import analysis ([e47afb7](https://github.com/tezjs/tez.js/commit/e47afb77b80f6effdee9c9fe9a6c935446ebc9ba))


### Features

* **vue:** set loader image util the final source to be resolved ([db0370b](https://github.com/tezjs/tez.js/commit/db0370be40c96a58c9f343313dc749918072a13e))


### Performance Improvements

* inline pre bundled script ([3f597ea](https://github.com/tezjs/tez.js/commit/3f597eaa9b915b4975ab01d23422289a9d65e161))



## 0.0.47 (2022-07-22)



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.47 (2022-07-22)



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.46 (2022-07-22)



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.45 (2022-07-22)


### Bug Fixes

* **vue:** refresh routed page meta data ([b065d4f](https://github.com/tezjs/tez.js/commit/b065d4febb945d91a7556328503e85fd97df8193))
* **vue:** remove previous route ld+json ([22e72e0](https://github.com/tezjs/tez.js/commit/22e72e0b435e786b503c1fd463302509767f9b64))
* **vue:** use textContent instead innerHTML for adding ld+json ([83371fb](https://github.com/tezjs/tez.js/commit/83371fbb42ff47b3e865a09680364544b5e55224))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.44 (2022-07-22)


### Performance Improvements

* bundle js/css page wise ([3818bc9](https://github.com/tezjs/tez.js/commit/3818bc9db7145670289bca945e921f63d4972a20))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.43 (2022-07-19)



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.42 (2022-07-18)


### Bug Fixes

* **vue:** define properly image request broadcaster ([5959c3d](https://github.com/tezjs/tez.js/commit/5959c3d625416e27634307eb56de2e2ee3c719cb))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.41 (2022-07-17)


### Bug Fixes

* **vue:** push component only if resolved ([b008187](https://github.com/tezjs/tez.js/commit/b00818703e31e1716daa839615045322f342b376))
* **vue:** tz.js load only production ([bb6772f](https://github.com/tezjs/tez.js/commit/bb6772f8d3366912d27bcf31a3846b788908e5f8))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.40 (2022-07-16)



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.39 (2022-07-15)



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.38 (2022-07-15)


### Features

* **vue:** resolve image through external thread ([8903b71](https://github.com/tezjs/tez.js/commit/8903b7165a969682721c650595a2227d0157feb5))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.37 (2022-07-09)


### Bug Fixes

* **vue:** add 'isDevMode' prop ([646158f](https://github.com/tezjs/tez.js/commit/646158ff517fbb3dfc37735a37d63edc325111b3))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.36 (2022-07-08)


### Bug Fixes

* **vue:** local environment check ([a59085f](https://github.com/tezjs/tez.js/commit/a59085fc37332bc8d93db49677717abb14d9ff3b))


### Features

* **vue:** device based component binding conditionally ([89b6a40](https://github.com/tezjs/tez.js/commit/89b6a40fff011214ffebb43d3fbc5d258a0cd9c0))
* **vue:** no active page component found then bind TezSlot ([a795e04](https://github.com/tezjs/tez.js/commit/a795e04e931f585e24452caf9b4e47b2f6296108))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.35 (2022-07-06)


### Bug Fixes

* **vue:** check local environment through 'PROD' variable ([4f2e9ac](https://github.com/tezjs/tez.js/commit/4f2e9ac1a96b28a21244eb995bd58bd3fc08621a))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.34 (2022-07-06)



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.33 (2022-07-06)



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.32 (2022-07-06)



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.31 (2022-07-06)



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.30 (2022-07-06)



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.29 (2022-07-06)


### Features

* **vite:** load post script on demand ([ae81826](https://github.com/tezjs/tez.js/commit/ae8182672befd8782ae21923d35a711c8c431872))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.28 (2022-07-04)


### Bug Fixes

* **vue:** refresh components after route change ([e46f80a](https://github.com/tezjs/tez.js/commit/e46f80a5cce90f8daf2b6dd74a6d347162071397))
* **vue:** refresh route on backward and forward page ([655f74b](https://github.com/tezjs/tez.js/commit/655f74b070f3f57dde830b1c4fe65d4c93ac5d20))
* **vue:** refresh tez-slot content ([ee52c7f](https://github.com/tezjs/tez.js/commit/ee52c7ffbacbd5fa65b854d32680223f31c21f70))
* **vue:** smooth scroll on top after route change ([4e313ea](https://github.com/tezjs/tez.js/commit/4e313ea97ad4265cae9ba27cbbccbfd2399a4fd0))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.27 (2022-07-04)


### Features

* route based code splitting ([b5fb7e5](https://github.com/tezjs/tez.js/commit/b5fb7e55481109154bac119a717fdf77a8a16e4f))
* tez page state management ([190c742](https://github.com/tezjs/tez.js/commit/190c742d65deb71fd71e2c77dc55996baa2971be))


### Performance Improvements

* bundle page wise components ([0885f41](https://github.com/tezjs/tez.js/commit/0885f41225c1b34a5627f394b5c4515e3865e59f))
* improve page performance ([26363fe](https://github.com/tezjs/tez.js/commit/26363fe7d2f6064c3b240f713ccbe8193eef0930))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.26 (2022-06-13)



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.25 (2022-06-13)



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.24 (2022-06-02)



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.23 (2022-06-02)



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.22 (2022-06-02)


### Bug Fixes

* **vue:** bind child slots until data resolution ([d0f86c3](https://github.com/tezjs/tez.js/commit/d0f86c31e23d694ce2b12a321155d34effb5cae4))
* **vue:** iterate promise data ([3b017f2](https://github.com/tezjs/tez.js/commit/3b017f2133a1ac4cf2677c410abdd843f90de6c5))
* **vue:** iterate same index as per items length ([234d4fc](https://github.com/tezjs/tez.js/commit/234d4fcb79fa568ec1add64e36b4588497b45bb1))


### Features

* **vue:** add tez-iterator component ([e16563e](https://github.com/tezjs/tez.js/commit/e16563e8d48869cd496b0c04b22fd21b7d79db39))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.21 (2022-05-30)


### Bug Fixes

* **vue:** 'routeItem' undefined check for non-strapi apps ([6d99263](https://github.com/tezjs/tez.js/commit/6d992635682dab40376912f2e125dc6fc211b41d))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.20 (2022-05-29)



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.19 (2022-05-28)



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



## 0.0.18 (2022-05-27)



## 0.0.17 (2022-05-27)


### Bug Fixes

* ignore forward slash placed at the end of URL ([3a0e6c1](https://github.com/tezjs/tez.js/commit/3a0e6c1e2f1ae20f98ef9a000996fcf8dffd387d))
* url parsing ([25fed12](https://github.com/tezjs/tez.js/commit/25fed12f2827e6335120f32c6de73bc27417a19c))


### Features

* add tez-src directive for image ([86cd3d6](https://github.com/tezjs/tez.js/commit/86cd3d6429784c7693e7eb0a4b9d7851d9917334))



## 0.0.9 (2022-05-26)



## 0.0.8 (2022-05-26)


### Bug Fixes

* @tezjs/js dependency and configuration ([9437caf](https://github.com/tezjs/tez.js/commit/9437caf40d7c95ff4a1e791d74c9a15876c43df8))
* bind master layout ([b66e313](https://github.com/tezjs/tez.js/commit/b66e31361d1301045a2be43c627d44cc8677b7c9))
* check layouts object before execution ([ca160d3](https://github.com/tezjs/tez.js/commit/ca160d374b972643b54bf4617b4f2939b841e0c1))
* component loading without tez.ts configuration ([9c75160](https://github.com/tezjs/tez.js/commit/9c751609f420b51f0f4ec6780c63dea896b75818))
* load default component until payload resolve ([ea94247](https://github.com/tezjs/tez.js/commit/ea94247357a6c0b6ae7c42790a9543665efdb62e))
* observer undefined ([486f648](https://github.com/tezjs/tez.js/commit/486f6486d39c01d49e2357ee52b46eaf6b8c2d31))
* resolve tez-slot component ([462bc9c](https://github.com/tezjs/tez.js/commit/462bc9c0f8dbbb703b0d8b8033a492b585b3539c))
* set correct function for unobserve ([ff433a9](https://github.com/tezjs/tez.js/commit/ff433a93bd2fb3fa91c46b4943b5368f2f30109a))
* vue mount element ([1aaaef4](https://github.com/tezjs/tez.js/commit/1aaaef4048913bdda28d0b59d1f25e05a6cfc6a1))


### Features

* add class prop to tez-lazy component ([d191508](https://github.com/tezjs/tez.js/commit/d191508271bf52273d71e1a9ba00c22891295ffe))
* add master layout ([e57ded4](https://github.com/tezjs/tez.js/commit/e57ded40ed39dbcc2c561e5db9ce859531599ae7))
* add tez-view component ([8dcca07](https://github.com/tezjs/tez.js/commit/8dcca07ac5f4006e83334a0673aaeee552116d80))
* createTezApp function and cli feature added ([2c11be0](https://github.com/tezjs/tez.js/commit/2c11be0c3c7e2f02cd20bfcf492f448e987bee45))
* extend vue components/directive registration ([44fc923](https://github.com/tezjs/tez.js/commit/44fc923d6c178a4cf5296a6a31e5af9154da21b3))
* full render from bot request ([8559b3a](https://github.com/tezjs/tez.js/commit/8559b3a5322f99cfbafde7065d4a186adc474912))
* **vue:** add auto routes ([b1c6579](https://github.com/tezjs/tez.js/commit/b1c65793771d4d9f6b679f4b8408644a2bc70473))
* **vue:** without layouts setup show auto-route page ([4e8622a](https://github.com/tezjs/tez.js/commit/4e8622a4171a58cb2c1aabc3b92080946c7b2c55))



