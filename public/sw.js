if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return s[e]||(n=new Promise((async n=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},n=(n,s)=>{Promise.all(n.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(n)};self.define=(n,i,c)=>{s[n]||(s[n]=Promise.resolve().then((()=>{let s={};const a={uri:location.origin+n.slice(1)};return Promise.all(i.map((n=>{switch(n){case"exports":return s;case"module":return a;default:return e(n)}}))).then((e=>{const n=c(...e);return s.default||(s.default=n),s}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/framework-b97a0ed4f13ff8397343.js",revision:"kVNQLUXvP3VdCwQ2JvY7d"},{url:"/_next/static/chunks/main-da1bc8f8d312ca485cee.js",revision:"kVNQLUXvP3VdCwQ2JvY7d"},{url:"/_next/static/chunks/pages/_app-68998cd3c2087b94033f.js",revision:"kVNQLUXvP3VdCwQ2JvY7d"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"kVNQLUXvP3VdCwQ2JvY7d"},{url:"/_next/static/chunks/pages/index-b0e5f3b94669f20fa34a.js",revision:"kVNQLUXvP3VdCwQ2JvY7d"},{url:"/_next/static/chunks/pages/patients-1a927c4d8b45eef98ceb.js",revision:"kVNQLUXvP3VdCwQ2JvY7d"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"kVNQLUXvP3VdCwQ2JvY7d"},{url:"/_next/static/chunks/webpack-fb76148cfcfb42ca18eb.js",revision:"kVNQLUXvP3VdCwQ2JvY7d"},{url:"/_next/static/css/120f2e2270820d49a21f.css",revision:"kVNQLUXvP3VdCwQ2JvY7d"},{url:"/_next/static/css/5dd3a863eec8dc33b66f.css",revision:"kVNQLUXvP3VdCwQ2JvY7d"},{url:"/_next/static/kVNQLUXvP3VdCwQ2JvY7d/_buildManifest.js",revision:"kVNQLUXvP3VdCwQ2JvY7d"},{url:"/_next/static/kVNQLUXvP3VdCwQ2JvY7d/_ssgManifest.js",revision:"kVNQLUXvP3VdCwQ2JvY7d"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/android-icon-144x144.png",revision:"e9ad41593eb5fb52d3f875922cd2be04"},{url:"/icons/android-icon-192x192.png",revision:"de30eccca6da651dc5a32f28c0ed00d3"},{url:"/icons/android-icon-36x36.png",revision:"d250232bdbd73967ae52aaec27f1fae5"},{url:"/icons/android-icon-48x48.png",revision:"789041f9043f32353f042a994b28ae00"},{url:"/icons/android-icon-72x72.png",revision:"b1979303f955ce701fc11233a38b1d8c"},{url:"/icons/android-icon-96x96.png",revision:"4e68d14a0e07c8419701b68a3b3231fa"},{url:"/icons/apple-icon-114x114.png",revision:"14ff5bcf059ffac34fefd20aa573b89e"},{url:"/icons/apple-icon-120x120.png",revision:"4c845be23b0518d1400e468005de6225"},{url:"/icons/apple-icon-144x144.png",revision:"e21c357d6036dbde1796f0c7b532289b"},{url:"/icons/apple-icon-152x152.png",revision:"c076cb31a6e89d332e777ae5fc9a3257"},{url:"/icons/apple-icon-180x180.png",revision:"850a251d40ffd99331ca41c29abb6496"},{url:"/icons/apple-icon-57x57.png",revision:"43c223668ae052a7a107cb7d0ebde457"},{url:"/icons/apple-icon-60x60.png",revision:"a2cc2d38d08d8c4c7803280efe328c3f"},{url:"/icons/apple-icon-72x72.png",revision:"fa75042740ec5b5c3d4384d0750b1c1a"},{url:"/icons/apple-icon-76x76.png",revision:"8d5ffb7594716fce6920f80cfb01b85a"},{url:"/icons/apple-icon-precomposed.png",revision:"08ebcc81616719ee106e8333bd1f1874"},{url:"/icons/apple-icon.png",revision:"08ebcc81616719ee106e8333bd1f1874"},{url:"/icons/favicon-16x16.png",revision:"e4200627cc19743d3c5a585493ad7033"},{url:"/icons/favicon-32x32.png",revision:"0ecc1bf5e1fc3854985d935f131bdc89"},{url:"/icons/favicon-96x96.png",revision:"4bf7750ed62f74171835cbb787f2edda"},{url:"/icons/favicon.ico",revision:"4126cb502a1eabee8b8fd6e0e70dbdad"},{url:"/icons/ms-icon-144x144.png",revision:"e21c357d6036dbde1796f0c7b532289b"},{url:"/icons/ms-icon-150x150.png",revision:"880b37ec1219f29f9dbd3a4d28f7c42a"},{url:"/icons/ms-icon-310x310.png",revision:"d140f8adfd20b0d727041e8186363bd1"},{url:"/icons/ms-icon-70x70.png",revision:"31ef12f35de5e86a0c5a92fe88255c71"},{url:"/manifest.json",revision:"928aa1481ae9837ef9c9a280c5c972a1"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
