module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets", "assets");
    
    eleventyConfig.addLayoutAlias('docs', 'layouts/std.njk');

    eleventyConfig.addCollection("std", function(collection) {
        return collection.getFilteredByGlob("docs/*.md").sort(function(a, b) {
            return a.fileSlug.localeCompare(b.fileSlug);
        });
    });
};