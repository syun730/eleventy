// JSON形式のデータ ファル名の拡張子を.json
// {
//   "authors": [
//     {
//       "name": "kyosuke",
//       "title": "Jamstackエンジニア"
//     },
//     {
//       "name": "geckotang",
//       "title": "フロントエンド・エンジニア"
//     }
//   ]
// }

// JavaScriptをテンプレートデータファイルとして利用する
// const engineer = "エンジニャー";

// module.exports = {
//   authors: [
//     {
//       name: "kyosuke",
//       title: `Jamstack${engineer}`
//     },
//     {
//       name: "geckotang",
//       title: `フロントエンド・${engineer}`
//     }
//   ]
// };

// JavaScript形式でfunctionを扱う
// module.exports = () => {
//   const engineer = "エンジニャー";

//   return {
//     authors: [
//       {
//         name: "kyosuke",
//         title: `Jamstack${engineer}`
//       },
//       {
//         name: "geckotang",
//         title: `フロントエンド・${engineer}`
//       }
//     ]
//   };
// };


// JavaScript形式で非同期functionを扱う
// const fetch = require('node-fetch');

// module.exports = async function() {
//   const result = await fetch('https://codegrid-11ty-samples.netlify.com/authors.json')
//     .then(res => res.json());
//   return result;
// }

// Promiseをreturn
const fetch = require('node-fetch');

module.exports = function() {
  return fetch('https://codegrid-11ty-samples.netlify.com/authors.json')
    .then(res => res.json());
}