module.exports = function(eleventyConfig) {

  // Add getYear filter
  eleventyConfig.addFilter("getYear", function() {
    return new Date().getFullYear();
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};