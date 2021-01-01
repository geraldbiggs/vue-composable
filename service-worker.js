/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5816c29c77ba4669bcca5c1220fafa8e"
  },
  {
    "url": "api/axios.api.html",
    "revision": "0167ae06cd934ad65ef58b752d513bea"
  },
  {
    "url": "api/core.api.html",
    "revision": "8a6e8c755533d9cab8b25228af6c4468"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "5369a633e7306556576b3d9f32f84218"
  },
  {
    "url": "api/web.api.html",
    "revision": "7d4ec22e141b806d96a0f5f56139b9be"
  },
  {
    "url": "assets/css/2.styles.35d98c58.css",
    "revision": "4b8825fe4afcd19452a81f091f7e9812"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.53cc946f.js",
    "revision": "4422893d2d2ca7061590928344c4b31a"
  },
  {
    "url": "assets/js/1.1361a1f6.js",
    "revision": "fcb734c6d356898bbc995b3054f6de35"
  },
  {
    "url": "assets/js/10.dbb26bac.js",
    "revision": "d512d4009061d43b65638c83c4840a8c"
  },
  {
    "url": "assets/js/100.8ed06ce8.js",
    "revision": "f1f46e47043a146faa9524fea42a03e0"
  },
  {
    "url": "assets/js/101.53ba2fe0.js",
    "revision": "80fd06407a04ee1af239043cb2741ed7"
  },
  {
    "url": "assets/js/102.f713503a.js",
    "revision": "2580864d9cb03688c2f5e0854e1edf6f"
  },
  {
    "url": "assets/js/103.998ef53c.js",
    "revision": "3b7bae6c277c2005af86c06f82e57856"
  },
  {
    "url": "assets/js/104.171661fe.js",
    "revision": "22095b61388c8cfb5b5c2e423a05a6ea"
  },
  {
    "url": "assets/js/105.b106336e.js",
    "revision": "ba8e1ce5eff2d5179ff95442750f4ccc"
  },
  {
    "url": "assets/js/106.a3114403.js",
    "revision": "7ef5a457b2f3fa896eecf0fc3b77dca6"
  },
  {
    "url": "assets/js/107.ddba9747.js",
    "revision": "590d20c9f9c74d81f68abcff10d87818"
  },
  {
    "url": "assets/js/108.c5e6626f.js",
    "revision": "bf80972b270053146028161aec55804e"
  },
  {
    "url": "assets/js/109.b3c1b878.js",
    "revision": "cfc88974eebe1218488037e4fcd34592"
  },
  {
    "url": "assets/js/11.b055d740.js",
    "revision": "4b881a588109705955504ff7b35a2ef7"
  },
  {
    "url": "assets/js/110.8f6d5541.js",
    "revision": "d6174ac7bfce90fe479e11677c99b753"
  },
  {
    "url": "assets/js/111.c16f97b0.js",
    "revision": "9109502940f23196231d1ab73d614b18"
  },
  {
    "url": "assets/js/112.2fefd4bc.js",
    "revision": "de9476f4db8f496af89f8091aef3144f"
  },
  {
    "url": "assets/js/113.8be585a4.js",
    "revision": "bee83a97c79cc258e7ed2c94e1ec1ade"
  },
  {
    "url": "assets/js/114.9e82d10d.js",
    "revision": "513032903c65c9e06b32c10aec64a332"
  },
  {
    "url": "assets/js/115.e14189e2.js",
    "revision": "ee2dc5f647e9a905c6688fe4ef667135"
  },
  {
    "url": "assets/js/116.884f4d9f.js",
    "revision": "3acca9be514fa0cd9e62b8e614cd6a60"
  },
  {
    "url": "assets/js/117.9c055f5b.js",
    "revision": "69f33832ff1013f673cac137b3b70f1a"
  },
  {
    "url": "assets/js/118.ba8f98c3.js",
    "revision": "571aa2cff3d8486d14ecbf054919178c"
  },
  {
    "url": "assets/js/119.df514f3a.js",
    "revision": "281ad8d00ecae0a6d13eca5dba18b6ee"
  },
  {
    "url": "assets/js/12.32b51a18.js",
    "revision": "59a0caa1e212c72b65fc56b79cdbd520"
  },
  {
    "url": "assets/js/120.4304ab75.js",
    "revision": "a9c0812c9e55c7fab5e48aecebf8f7da"
  },
  {
    "url": "assets/js/121.8d5b78d7.js",
    "revision": "47488898402c489a35144335200b1a7c"
  },
  {
    "url": "assets/js/122.dda6113f.js",
    "revision": "3059fd371cf55972225b2cf013e4d7a5"
  },
  {
    "url": "assets/js/123.fbf5b183.js",
    "revision": "5fd73f58a0530f1ac6d170a4fa9f0155"
  },
  {
    "url": "assets/js/124.5d4c956f.js",
    "revision": "d47784e4863b5b99e66c7ff7bce2d015"
  },
  {
    "url": "assets/js/13.eedaa4be.js",
    "revision": "e667d244e195673683176d5220db315f"
  },
  {
    "url": "assets/js/14.79e4caac.js",
    "revision": "7d0fb2478a801f92e3d88b32b543a4c4"
  },
  {
    "url": "assets/js/15.a59d1f4a.js",
    "revision": "f1b62460b2b3ab885883d769452a787e"
  },
  {
    "url": "assets/js/16.fba37cec.js",
    "revision": "51c5ea914211d5e6bdde83c5bbadb607"
  },
  {
    "url": "assets/js/17.76df76c0.js",
    "revision": "3b7b7942d10895ead4d11c9795878b9e"
  },
  {
    "url": "assets/js/18.07556159.js",
    "revision": "33a14b58b7b3d64d223f0d3b9e124214"
  },
  {
    "url": "assets/js/19.4dc0d5e8.js",
    "revision": "f4a1022115c854016c5e85614b37024d"
  },
  {
    "url": "assets/js/20.6ea3104c.js",
    "revision": "c275a2d56b8d264610d1cecacd76e754"
  },
  {
    "url": "assets/js/21.b9011a13.js",
    "revision": "0dc21c89a74ee5ff1a52ceefd93dde16"
  },
  {
    "url": "assets/js/22.8f9b401c.js",
    "revision": "0fc058b541a88bcbcab91f76351f88cd"
  },
  {
    "url": "assets/js/23.a3457846.js",
    "revision": "24340e7d2d9c3e94cde651710db0a154"
  },
  {
    "url": "assets/js/24.d8734c9c.js",
    "revision": "76da533b19fdb7fe66efc491e0d8df77"
  },
  {
    "url": "assets/js/25.7b4e6745.js",
    "revision": "9817e44990195406344f4e9bd1070382"
  },
  {
    "url": "assets/js/26.37043a98.js",
    "revision": "4bf335ac4e8066187d62fef58256d9db"
  },
  {
    "url": "assets/js/27.8ab5b562.js",
    "revision": "4489e2647f94b2d83aa511b9e7041c91"
  },
  {
    "url": "assets/js/28.1b55fcf7.js",
    "revision": "4f59ba19a2d5d0581a63398d2b0a51e4"
  },
  {
    "url": "assets/js/29.279d6021.js",
    "revision": "45432af4b55fb567c0332c6695c53450"
  },
  {
    "url": "assets/js/30.5af67fd3.js",
    "revision": "d356c74b8cf71c694eeaf07e03bef739"
  },
  {
    "url": "assets/js/31.d3748c70.js",
    "revision": "977ea9c929c437842754de1253baa1a4"
  },
  {
    "url": "assets/js/32.414b3117.js",
    "revision": "d400eaa36b5ee5480aefbaa9fd44922c"
  },
  {
    "url": "assets/js/33.0aae9467.js",
    "revision": "9d7196e317c9295e2e763c07a9a42d34"
  },
  {
    "url": "assets/js/34.fe80207a.js",
    "revision": "c90478efba191c713ca5aeadea8d976d"
  },
  {
    "url": "assets/js/35.3e8fbeab.js",
    "revision": "6cb190de16a5ec91cd3e549a66b342b4"
  },
  {
    "url": "assets/js/36.b07a4cfb.js",
    "revision": "ebf6a39c17d3bdd8b4b05db6d96d1431"
  },
  {
    "url": "assets/js/37.bb65a83e.js",
    "revision": "ded10ca8779920a3d759afd41a58566c"
  },
  {
    "url": "assets/js/38.9cd8252f.js",
    "revision": "3fa7ae12e7990907716b712f38e5c2c6"
  },
  {
    "url": "assets/js/39.9f39a1eb.js",
    "revision": "48230b22a1e4ce6cfbb9131df051436d"
  },
  {
    "url": "assets/js/4.b2226e45.js",
    "revision": "73355482319c178f7834770d756eef51"
  },
  {
    "url": "assets/js/40.cd242a0e.js",
    "revision": "b954c3daea081edef5262ed2e0c63793"
  },
  {
    "url": "assets/js/41.054972d6.js",
    "revision": "3ca08dd61ea4531aeb1462836a537635"
  },
  {
    "url": "assets/js/42.b6bbe173.js",
    "revision": "e6c72e7a14b023117a6e79c5c3f8e5da"
  },
  {
    "url": "assets/js/43.84171a29.js",
    "revision": "2d766947840a979b56f81730b5e1b05c"
  },
  {
    "url": "assets/js/44.a420538d.js",
    "revision": "25155fb735aab42d2ca12066d2558d9d"
  },
  {
    "url": "assets/js/45.93ad0483.js",
    "revision": "71c1e258cb1f94efa28be5899c0c0550"
  },
  {
    "url": "assets/js/46.d9b39b94.js",
    "revision": "7e196d9e9bc82408674b7682083c2fa7"
  },
  {
    "url": "assets/js/47.61471ce8.js",
    "revision": "2b49f77e68c9f267876ff86ae2f77498"
  },
  {
    "url": "assets/js/48.53d55320.js",
    "revision": "1ab26002070dd181229faa9434b6389e"
  },
  {
    "url": "assets/js/49.a0835be7.js",
    "revision": "74065d84f37aa4415cf4d5dc4ef99f69"
  },
  {
    "url": "assets/js/5.d335550d.js",
    "revision": "0a6498349b9e85b7a88b3c77b3c85e55"
  },
  {
    "url": "assets/js/50.2115049e.js",
    "revision": "331d0b2dca52373c9a14dbcb7af19a6d"
  },
  {
    "url": "assets/js/51.046eea40.js",
    "revision": "4a28f0a45f7441b7eb5d22e6e09ebf35"
  },
  {
    "url": "assets/js/52.ac9e4df5.js",
    "revision": "9ec5e838c60dc9982b5fdb7daa2b15f1"
  },
  {
    "url": "assets/js/53.09a34eb5.js",
    "revision": "86d832a334228801e952b13b07dadd5a"
  },
  {
    "url": "assets/js/54.f480d5a2.js",
    "revision": "6183657d2fa01e03ed75ee3d7a67b4c8"
  },
  {
    "url": "assets/js/55.3b7e7314.js",
    "revision": "299c08bd2a013071d7af8b6454eca179"
  },
  {
    "url": "assets/js/56.e7df1a30.js",
    "revision": "38e10ab69fa10c45521e01563fb2a294"
  },
  {
    "url": "assets/js/57.4b4e2e22.js",
    "revision": "d6fc8ab0664f3ee5a92f83283dc5bd55"
  },
  {
    "url": "assets/js/58.5f5dfc81.js",
    "revision": "15882a345a67a8ee74b141be5ee80da4"
  },
  {
    "url": "assets/js/59.3b9ffe54.js",
    "revision": "5a1f35f5a059f65b58c5a5fce183406f"
  },
  {
    "url": "assets/js/6.620c698d.js",
    "revision": "fb01dff48ae26096aff4a198d27b44c4"
  },
  {
    "url": "assets/js/60.8f2ce2f4.js",
    "revision": "bf133db32bf2c677534a6f052d9393d9"
  },
  {
    "url": "assets/js/61.a2a22d8a.js",
    "revision": "e133b86068b03d27172d9c3d65d68b8a"
  },
  {
    "url": "assets/js/62.a8f3d14d.js",
    "revision": "e6b0c0678f17f6a485b31b2fda343123"
  },
  {
    "url": "assets/js/63.a51b9910.js",
    "revision": "37bcd18e896bc56c453fe601a162f555"
  },
  {
    "url": "assets/js/64.c64cec98.js",
    "revision": "4b19d087bcc701f776f2f617c6a1513b"
  },
  {
    "url": "assets/js/65.b389a337.js",
    "revision": "ed66b4d1a29972001b6de7bfa08d45b5"
  },
  {
    "url": "assets/js/66.65f79e0a.js",
    "revision": "a45887ecf8e4c7507cbd4f83254e47b4"
  },
  {
    "url": "assets/js/67.8c6bfb76.js",
    "revision": "692178be659a5fca3d3a7cdfe8e65168"
  },
  {
    "url": "assets/js/68.68b7f992.js",
    "revision": "fc29eee3029f34fac6c9b9e57acd294d"
  },
  {
    "url": "assets/js/69.ac63589c.js",
    "revision": "36dbec8a6ec4c894f58a2e041255da0c"
  },
  {
    "url": "assets/js/7.44b7ed45.js",
    "revision": "8c2fa0de3bb702f3a2b525bc3326e2c6"
  },
  {
    "url": "assets/js/70.bfb18e6f.js",
    "revision": "f47a8cd004e7c10d60bcded8282490e0"
  },
  {
    "url": "assets/js/71.b7211519.js",
    "revision": "c611424e1f025d7b5339a38738588820"
  },
  {
    "url": "assets/js/72.7823150d.js",
    "revision": "0c8c484e4335e2e45892fdd95f1bddd6"
  },
  {
    "url": "assets/js/73.7f245ec9.js",
    "revision": "504905bea9256062a60cd1e19bfb67f4"
  },
  {
    "url": "assets/js/74.399c00a2.js",
    "revision": "f0c8267b63d89299dcf01fd2c75acfff"
  },
  {
    "url": "assets/js/75.ef14ee08.js",
    "revision": "05267ca385d2c9d8984421f94c6d6f06"
  },
  {
    "url": "assets/js/76.1ff46e39.js",
    "revision": "2ad089fe0e7917b1c2d1914cff48bcfc"
  },
  {
    "url": "assets/js/77.d0ab9cde.js",
    "revision": "5584a9bbd930dfc8fdbafd841370ef1d"
  },
  {
    "url": "assets/js/78.92cc154f.js",
    "revision": "e5a961123f619740ffd708db7dda7e2a"
  },
  {
    "url": "assets/js/79.da7870c0.js",
    "revision": "b4634f021cf2e5ce102663a9d1e8dbe8"
  },
  {
    "url": "assets/js/8.a79df3aa.js",
    "revision": "c6b95ae524211224173b984f151e25c1"
  },
  {
    "url": "assets/js/80.8e85f4be.js",
    "revision": "c6cd7ab9c4e3d0d9ede9f67197598787"
  },
  {
    "url": "assets/js/81.be145366.js",
    "revision": "ed24496e0548ca1c835b740627f1cb0c"
  },
  {
    "url": "assets/js/82.f6022f09.js",
    "revision": "3de8910ac42a450d2aa2de02a7aac587"
  },
  {
    "url": "assets/js/83.f4c25850.js",
    "revision": "b67e2fb87a0ccdf00427ed7f5fff9238"
  },
  {
    "url": "assets/js/84.19f6a1f3.js",
    "revision": "cbda5ed17535a99251f3d31e21b36c4b"
  },
  {
    "url": "assets/js/85.179aa46e.js",
    "revision": "a317b1994cf7c8374d4b8623b3edb2cd"
  },
  {
    "url": "assets/js/86.64cb4716.js",
    "revision": "f9003bebbbdf24fdb7a1d8de4c069913"
  },
  {
    "url": "assets/js/87.fc1a47c9.js",
    "revision": "5892520776df5fddc0c8b1768fd483aa"
  },
  {
    "url": "assets/js/88.425087f8.js",
    "revision": "cfdaa53a3c7623020ad6dbefae83c6c0"
  },
  {
    "url": "assets/js/89.fdf3710c.js",
    "revision": "584d7a1d1cd65e6cb61b07583ebbcd22"
  },
  {
    "url": "assets/js/9.4d02f6ab.js",
    "revision": "b18cc34334a84faa3473078957cfa43f"
  },
  {
    "url": "assets/js/90.18aa8f89.js",
    "revision": "7e533fe10a0ab2f4804fda15b4392971"
  },
  {
    "url": "assets/js/91.139c4a7b.js",
    "revision": "622bb798068de9bd534fc5f438b30f2d"
  },
  {
    "url": "assets/js/92.3e0a2a35.js",
    "revision": "59a2f8c9da87a7382258005db5d60bfa"
  },
  {
    "url": "assets/js/93.5c476fa5.js",
    "revision": "6dc90527bd45b7fa732cdac51a888cae"
  },
  {
    "url": "assets/js/94.e9037539.js",
    "revision": "2684ee703d23d69df905c35af489f1be"
  },
  {
    "url": "assets/js/95.d88057ff.js",
    "revision": "d937055ca4f361b7d324fe5b408d8612"
  },
  {
    "url": "assets/js/96.55c1a682.js",
    "revision": "c74843ee920a8ee1d534b9f519976357"
  },
  {
    "url": "assets/js/97.341c5f99.js",
    "revision": "58f392803ba89e2896bcaf6dd2851afd"
  },
  {
    "url": "assets/js/98.b6bf64d5.js",
    "revision": "d21c31f9c007d17be7885be212f8c5cf"
  },
  {
    "url": "assets/js/99.a08f51a2.js",
    "revision": "37d1d7e60f6978f4b847118394ecb5fb"
  },
  {
    "url": "assets/js/app.db538c6b.js",
    "revision": "a0d3edc5906df5e81561bcf34745b8f9"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "fa7b39cf052e8a5ec9d93465ca942a8e"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "92871774468ab09f647ffe3be02ecc77"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "9f6587896748d80f7548fbefe1972806"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "3c5f80694059e64f02396779c212f903"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "c901aeef9deb01ded77a842ee44db42f"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "8296a5900e21a30637eb6b76e62d61b7"
  },
  {
    "url": "composable/date/now.html",
    "revision": "7d80acdc169b67a7bb48fb30372f0ec9"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "d4c47968b491597c33cabaddda090450"
  },
  {
    "url": "composable/dom/mouseDistanceFromElement.html",
    "revision": "97327a6f20d67a0101e65fc4b13b02fd"
  },
  {
    "url": "composable/event/event.html",
    "revision": "71222238ef2329ea9984b5148e931079"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "7cc80459c1041067e078be747580f0d1"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "9df580168677a09e12c172306f57961b"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "fa31e0c1f757b5ad924ea6ddc6c984c2"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "f0c11d1bdb3d4dde05d5fde37752d2c0"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "e409269349b9e39120487a302de8816d"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "d5d3fc38ddd313c8e06c743b53caec9e"
  },
  {
    "url": "composable/format/format.html",
    "revision": "14d8117a969d4a846a0c404ca6abceb3"
  },
  {
    "url": "composable/format/path.html",
    "revision": "4cc1be98327d50a06fc01e90065466e0"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "86a73c43e5d3b5bb5f3b94406fe27798"
  },
  {
    "url": "composable/index.html",
    "revision": "ee5509f0e10a7d00426deebeaa28f965"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "9820cb7deaa75cf4badd7bf23b50b136"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "737b148d7d108f9c3f51205cc487e297"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "c25534dece0f7a8c5ee1a6a82d51a4b4"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "af8ecdce745f09a4c831fbc6083863e9"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "3fff9c6d73e9a1efb1477305ec45ab44"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "1b888e69782d67e11cb4fd9d6c2ac3b6"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "653b184d14aeef54bbd5efdd2aaa2406"
  },
  {
    "url": "composable/misc/refDebounced.html",
    "revision": "f63f34a9e19fed9e78ddaab58cae8a0f"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "f6524851ffe77268d769b50c564b1a98"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "90440ffd7786de55ff95ee7ec70fe398"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "c57fffd34631de7f21013678a4a74f0c"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "548b5bf3c695d3e3c2bbeec1d1eab2c4"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "6b4f297da290fd02e9b885807c1b6c6b"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "ba912cbc7948e3ed186915630d291fd0"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "d8a8f7a821a8513d316e7e4920762b73"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "f82f31d77703503c3cd3c6eed975559f"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "de7b22dcbd92b436dc906640720b0c60"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "d1b4ae73726b0b2f8797ceca7f8322a3"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "49f90271baa3fb5ab91a40ef987119df"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "0e4a3633f38b1f0ecd947e4a4d1004ea"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "a54042f5693515ab93567994f583084b"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "e6e4be6434293ac8e9cfa0b8874e676b"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "40c29b16264809861db2616ada5aea61"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "0722ba3d5d3863005b6a06ead395171b"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "2c9094b37ee37107b4bf4d08a9147efa"
  },
  {
    "url": "composable/web/clipboard.html",
    "revision": "ac31f4b694811a372e6f4839326a1001"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "fa778b92619123f18da8f132864fd48b"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "070a447cc8caf7ac479b7e7c45290f0b"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "a96284e7281047b6eb85a141b14745e8"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "1d16adaf4eb70e49a4d3a80687cdc335"
  },
  {
    "url": "composable/web/language.html",
    "revision": "889f314c5317bea09d23c0deb3d3ee18"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "7176b7f66dbcdeb184edb385aee1c9ce"
  },
  {
    "url": "composable/web/online.html",
    "revision": "f737883c425ccadfd07c985d3addca53"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "13216f8018d16fb54aa29ee9bca46edf"
  },
  {
    "url": "composable/web/share.html",
    "revision": "714c8c59a7654cca7d813b8797e6438e"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "bba6e6000844fb8000affb35d27b0d7b"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "9ec19d8d5ff157b185162f915ffa345a"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "60bc4032eef2ae654284b211edf4435c"
  },
  {
    "url": "Examples/index.html",
    "revision": "ea257cc97aa70084e48533fb2a767bad"
  },
  {
    "url": "img/android-chrome-192x192.png",
    "revision": "46feb08a707d6e70139970088cfbf15e"
  },
  {
    "url": "img/android-chrome-512x512.png",
    "revision": "3171a88ec7603f31ac1e598076de056d"
  },
  {
    "url": "img/apple-touch-icon.png",
    "revision": "84d9b37071bc9e5977feec6df62063ec"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "77285ac53516fb6b404d7c5610bd2b5a"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "19a6d4a66917dcda25caae8d34c0c8cf"
  },
  {
    "url": "img/mstile-144x144.png",
    "revision": "cc6105c0fccdf70fd6935fb66c78eb7f"
  },
  {
    "url": "img/mstile-150x150.png",
    "revision": "820538a3b382930b9d93872aac7e4620"
  },
  {
    "url": "img/mstile-310x150.png",
    "revision": "08d0342c2269809d855f41185958a902"
  },
  {
    "url": "img/mstile-310x310.png",
    "revision": "c25adad82f954fff78bee2ff56f7ad24"
  },
  {
    "url": "img/mstile-70x70.png",
    "revision": "9f09d77175ccda1f0adef3ddab039b25"
  },
  {
    "url": "index.html",
    "revision": "2def3f7ca09c9678389eaed160c0dc14"
  },
  {
    "url": "localStorage.gif",
    "revision": "575844f7c491240c02c7b269ed532917"
  },
  {
    "url": "worker.example.js",
    "revision": "f755a971ea3890285ded636071badae5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
