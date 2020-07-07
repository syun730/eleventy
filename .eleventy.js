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

  return {
    dir: {
      input: "src"
    }
  }
};