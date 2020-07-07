// module.exports = {
//   dir: {
//     input: "src"
//   }
// };

const dayjs = require('dayjs');
const CleanCSS = require("clean-css");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("readableDate", dateObj => {
    return dayjs(dateObj).format('YYYY年M月D日');
  });

  eleventyConfig.addFilter("year", (collection, year) => {
    year = year || new Date().getFullYear(); // 年が指定されない場合は今年を表示する
    return collection.filter(item => item.date.getFullYear() === year);
  });

  // assetsディレクトリはそのまま出力先にコピー
  eleventyConfig.addPassthroughCopy("assets");

  // css minify
  eleventyConfig.addFilter("cssmin", code => {
    return new CleanCSS({}).minify(code).styles;
  });

  // postcss Autoprefixer
  eleventyConfig.addFilter("postcss", function(code) {
    return postcss([autoprefixer]).process(code).css;
  });

  return {
    dir: {
      input: "src"
    }
  }
};