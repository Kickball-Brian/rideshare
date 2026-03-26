module.exports = function(eleventyConfig) {
  
  // Add getYear filter used in your templates
  eleventyConfig.addFilter("getYear", (date) => {
    const d = date ? new Date(date) : new Date();
    return d.getFullYear();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    passthroughFileCopy: true
  };
};