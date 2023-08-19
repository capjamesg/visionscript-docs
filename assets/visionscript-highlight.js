var schema = {
    "$schema": "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
    "name": "VisionScript",
    "patterns": [
        {
            "include": "#keywords"
        },
        {
            "include": "#strings"
        },
        {
            "include": "#comments"
        },
        {
            "include": "#numbers"
        }
    ],
    "repository": {
        "keywords": {
            "patterns": [
                {
                    "name": "keyword.input.vic",
                    "match": "\\bLoad\\b"
                },
                {
                    "name": "keyword.process.vic",
                    "match": "\\b(Greyscale|Rotate|Resize|Crop|Blur|SetBrightness|Replace|Cutout|Size|Contrast)\\b"
                },
                {
                    "name": "keyword.find.vic",
                    "match": "\\b(SetRegion|FilterByClass|Classify|Detect|Segment|Search|Caption|Count|ReadQR|GetText|Similarity|GetColours|GetColors|GetEdges)\\b"
                },
                {
                    "name": "keyword.output.vic",
                    "match": "\\b(Say|Show|Compare|Save|Read|Input)\\b"
                },
                {
                    "name": "keyword.logic.vic",
                    "begin": "\\b(UseCamera|If|In|Else|Exit|Use)\\b",
                    "end": "\\b(EndIf|EndIn|EndCamera)\\b"
                }
            ]
        },
        "comments": {
            "patterns": [
                {
                    "name": "comment.vic",
                    "match": "#.*$"
                }
            ]
        },
        "strings": {
            "patterns": [
                {
                    "name": "string.quoted.double.vic",
                    "match": "\".*?\""
                }
            ]
        },
        "numbers": {
            "patterns": [
                {
                    "name": "constant.numeric.vic",
                    "match": "\\b(\\d+(\\.\\d+)?)\\b"
                }
            ]
        }
    },
    "scopeName": "source.visionscript"
};

function prettifyCode (code) {
    var keywords = schema.repository.keywords.patterns;
    var comments = schema.repository.comments.patterns;
    var strings = schema.repository.strings;
    var numbers = schema.repository.numbers.patterns;

    var keywordrules = {};

    for (var i = 0; i < keywords.length; i++) {
        var keyword = keywords[i];
        keywordrules[keyword.name] = keyword;
    }

    for (var i = 0; i < comments.length; i++) {
        var comment = comments[i];
        keywordrules[comment.name] = comment;
    }

    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        keywordrules[number.name] = number;
    }

    for (var i = 0; i < strings.patterns.length; i++) {
        var string = strings.patterns[i];
        keywordrules[string.name] = string;
    }

    var lines = code.split("\n");

    var result = [];

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        // console.log(line);
        for (var rule in keywordrules) {
            var keywordrule = keywordrules[rule];
            var match = line.match(keywordrule.match);
            if (match) {
                var replacement = "<span class=\"" + keywordrule.name + "\">" + match.input + "</span>";
                // console.log(replacement);
                line = line.replace(match.input, replacement);
                console.log(line);
            }
        }

        result.push(line.trim());
    }

    return result;
}

console.log(prettifyCode("Test[]"))

// // apply to all elements with class `visionscript-code`
// console.log("Prettifying code...");
// // console.log(document.getElementsB
for (var i = 0; i < document.getElementsByTagName("pre").length; i++) {
    var element = document.getElementsByTagName("pre")[i];
    var code = element.innerHTML;
    // console.log(code);
    var result = prettifyCode(code);
    console.log(result);
    element.innerHTML = result.join("\n");
}