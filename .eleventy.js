const fs = require("fs");
const fm = require("front-matter");

const docs = fs.readdirSync("docs");


module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets", "assets");
    
    eleventyConfig.addLayoutAlias('docs', 'layouts/std.njk');

    eleventyConfig.addCollection("std", function(collection) {
        return collection.getFilteredByGlob("docs/*.md").sort(function(a, b) {
            return a.fileSlug.localeCompare(b.fileSlug);
        });
    });

    // open all files in docs, get the title from their front matter
    const hovercards = {};

    for (let i = 0; i < docs.length; i++) {
        const doc = docs[i];
        const docContents = fs.readFileSync("docs/" + doc, "utf8");

        const docFrontMatter = fm(docContents);

        var url = doc.replace(".md", "");

        hovercards["https://visionscript.dev/docs/" + url] = {
            title: docFrontMatter.attributes["title"],
            description: docFrontMatter.attributes["definition"]
        };
    }

    fs.writeFileSync("assets/definitions.js", "var hovercards = " + JSON.stringify(hovercards) + ";");
};