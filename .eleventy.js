// module.exports = {
//   dir: {
//     input: "src"
//   }
// };

const dayjs = require('dayjs');

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("readableDate", dateObj => {
    return dayjs(dateObj).format('YYYY年M月D日');
  });

  eleventyConfig.addFilter("year", (collection, year) => {
    year = year || new Date().getFullYear(); // 年が指定されない場合は今年を表示する
    return collection.filter(item => item.date.getFullYear() === year);
  });

  return {
    dir: {
      input: "src"
    }
  }
};