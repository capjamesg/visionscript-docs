module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets", "assets");
    
    eleventyConfig.addLayoutAlias('docs', 'layouts/std.njk');
};