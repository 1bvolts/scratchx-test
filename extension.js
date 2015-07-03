(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.greeting = function(name) {
        return 'こんにちは、' + name + '!';
    };

    ext.mysubstring = function(str, pos1, pos2) {
        return str.substring(pos1 - 1, pos2);
    };

    ext.contains = function(str1, str2) {
        return str1.indexOf(str2) >= 0;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            ['r', '%s にあいさつ', 'greeting', '名前'],
            ['r', '%s の %n 文字めから %n 文字めまで', 'mysubstring', '文字列', 1, 2]
            ['r', '%s に %s が含まれる', 'contains', '文字列1', '文字列2']

        ]
    };

    // Register the extension
    ScratchExtensions.register('test', descriptor, ext);
})({});
