module.exports = function(eleventyConfig) {

  // Copy assets to _site output
  eleventyConfig.addPassthroughCopy("src/assets");

  // Add getYear filter used in templates
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
