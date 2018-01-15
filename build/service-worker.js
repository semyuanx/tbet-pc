"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","148d2397e175beb3ee4d08fd3dff5b4f"],["/static/css/main.8d3c97d9.css","c394aa181eba6ca2504f6e84dd0cbab2"],["/static/js/main.687bfc36.js","177acf638018255e9317259dcc46e569"],["/static/media/bank-icon.d4717eca.png","d4717ecaaa759d789dbddaeee3be1823"],["/static/media/button_quan1.d7885653.png","d7885653d86ae7b45e1284aa1afc6414"],["/static/media/contact1.6f366521.jpg","6f366521bd0be089a0d37a404f315559"],["/static/media/contact10.9b16172b.jpg","9b16172bf54b784da94d1a054c25bd42"],["/static/media/contact3.a049c9cf.jpg","a049c9cf964d81412a79fc1c4a497746"],["/static/media/contact4.79751d10.jpg","79751d102d1c084e41b49e37be28388d"],["/static/media/contact5.5dc19846.jpg","5dc1984639ee6c41853b5432c956d726"],["/static/media/contact6.a2a300fd.jpg","a2a300fd84a812ef5f2a3ec3cbbf8e8c"],["/static/media/error_bgf.1a464ebb.jpg","1a464ebb9544e947484bfa4919559539"],["/static/media/error_logo.672ea81e.png","672ea81e764a574889c447114b11bb5a"],["/static/media/error_tip.7fa5c6d7.png","7fa5c6d76c53a130c0118cd43f387451"],["/static/media/footer_icon.75698c7b.png","75698c7bd3777c557411b6147a9396a6"],["/static/media/gameErrorBgf.18620574.png","18620574b381ff6c479f061236801482"],["/static/media/gameErrorMain.59691d42.png","59691d421107d631d27cd422f8f5d88b"],["/static/media/gameNavImg7.0e055beb.png","0e055beb4ec66d7653eb4377e19255fe"],["/static/media/game_bgf.c1610903.png","c16109036d1f7d5a9a9e04eec5a333e7"],["/static/media/giftdot.1e7b1fae.gif","1e7b1fae22183f47b4584825d76a451c"],["/static/media/giftimg1.c2290d10.png","c2290d108df94c38343bc6929e261365"],["/static/media/i_gameBan.3f4fd4d6.jpg","3f4fd4d6f85bd7a52cf136d6048a789f"],["/static/media/i_gameBan2.ca29fc2e.jpg","ca29fc2eacf892376a1e5decf8a47c24"],["/static/media/i_gameBan3.e169a6b6.jpg","e169a6b602bb314d5a603e4512a35002"],["/static/media/i_gameBan4.f7f271dd.jpg","f7f271dd6a1c1bb9d6a55ff44b4ec2e6"],["/static/media/live_img1.9729ebd1.jpg","9729ebd1e6e5cbb4d327a91472d3fadf"],["/static/media/live_img2.643ceeeb.jpg","643ceeeb91c7fabe0c95658d2d512f3b"],["/static/media/live_img3.e9b848f5.jpg","e9b848f5fbdd74e0b7157f20d9cf6bae"],["/static/media/live_img4.6e720538.jpg","6e720538a09e19085b718d00c502eb67"],["/static/media/live_img5.005e2036.jpg","005e2036fbf6644a0ec934877120b4e3"],["/static/media/live_img6.41cdcbed.jpg","41cdcbed9ca76593173725f6ad1a9e0b"],["/static/media/live_img7.c0698f71.jpg","c0698f7182c9f82f1d2b0e279cc0dc7a"],["/static/media/live_img8.1dafcff0.jpg","1dafcff0da79d21285f56a4b44d8b34f"],["/static/media/livegame_gpi.c3613510.jpg","c36135108dfbf17428ced7edc8e027ac"],["/static/media/livegame_tgp.6763a40d.jpg","6763a40d67380ffa054a180154c07e87"],["/static/media/lottery1.9c2041f5.jpg","9c2041f5257108b68674f377b09cdc20"],["/static/media/lottery2_2.93401b43.jpg","93401b43bc51e7ae58f049fb619c2412"],["/static/media/pt_subBan1.8659ffc8.jpg","8659ffc875a2e18dcd70b3761607eede"],["/static/media/register.8b27b643.jpg","8b27b64393bb4040983ade0983365174"],["/static/media/rule-title.76340a55.png","76340a5521cc32f14d2338f960b0c93b"],["/static/media/sprite_icon.b10209db.png","b10209dbab35637f0669fce08ce3a71c"],["/static/media/subBanner2.3f513bdd.jpg","3f513bdd1daab84e6820da53f7e11b15"],["/static/media/subBanner3.91abc14b.jpg","91abc14b39336eb19f79ead8cf7a4bf8"],["/static/media/subBanner4.12c47ace.jpg","12c47ace136e46ad322c0f60dd1d33f9"],["/static/media/subBanner6.14800dbf.jpg","14800dbf480afeb3de75ce7d72a88232"],["/static/media/subBanner7.0dbef74a.jpg","0dbef74ae10abbed6e7e15a8a46478cf"],["/static/media/subBanner8.28c01cd0.jpg","28c01cd03186c92c567a71b45965c562"],["/static/media/subBanner9.35c6157b.jpg","35c6157b176d2204f1f65c90c6e9a41c"],["/static/media/user_icon.013caeb2.png","013caeb2f65d22d19c8b16287cdcd7bc"],["/static/media/vip101.05ce75a6.png","05ce75a6b71144a8fbeb20ad971a9c02"],["/static/media/vip102.0884ff27.png","0884ff27a191b16160c0f4b38c0ae95c"],["/static/media/vip103.5998e6b1.png","5998e6b1d453662631857aa6f8c92c8e"],["/static/media/vip105.3a9f5600.png","3a9f5600157f21e5c969f087dc324561"],["/static/media/vip106.2f16e593.png","2f16e59382b514a201a013feab6f232f"],["/static/media/vip201.7d970375.png","7d9703756824db9cbc98e1c5c9ad2665"],["/static/media/vip202.9f512d84.png","9f512d845dc1fa929701cb393a24237d"],["/static/media/vip203.213f1547.png","213f1547ca99921c3e758f5eb6123aaf"],["/static/media/vip_bgf.3ed8acee.jpg","3ed8aceed2e77c65738b90d410b216ac"],["/static/media/vip_fanshui.4f537bfa.png","4f537bfa269f4243b1827efbdf8f7380"],["/static/media/vip_fanshui_hover.ebfa39dd.png","ebfa39dd0f140fdfcacf30ba9e59358a"],["/static/media/vip_laohu.458bfe5d.png","458bfe5dcd6662ec96ad922679428097"],["/static/media/vip_laohu_hover.93429643.png","934296434e5302db73dd9948883b56e5"],["/static/media/vip_lv.da256bc6.png","da256bc6b783eaf5e8ff21d40589ad59"],["/static/media/vip_lv1.9d8cf946.png","9d8cf946829c8c36a6e4f674a7a0bae9"],["/static/media/xiaojin1.3d3bb96a.jpg","3d3bb96ad8f154f9bae1911464299025"],["/static/media/xiaojin2.28ee0f99.jpg","28ee0f995ca21ab910583de71aedb365"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});