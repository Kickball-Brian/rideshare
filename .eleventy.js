module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("getYear", (date) => {
    const d = date ? new Date(date) : new Date();
    return d.getFullYear();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    },
  };
};
