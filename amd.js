!(function () {
    var cache = {};
    window.amd = {
        version: '1.0.0',
        author: 'guosheng (QQ:9169775)',
        add: function (user, modulename, url) {
            cache[user + '.' + modulename] = url;
        },
        ls: function () {
            if (console) {
                console.log(cache);
            }
        },
        addcss: function () {

        },
        loadcss: function () {

        },
        use: function (arr) {
            var dtd = $.Deferred();
            require([getArr(arr)], function () {
                dtd.resolve.apply(this, arguments);
            });
            return dtd.promise();
        }
    };

    function getArr(arr) {
        var _arr = [];
        for (var i = 0, k; k = arr[i++];) {
            if (cache[k]) {
                _arr.push(cache[k]);
            } else {
                throw ('not find module ' + k);
            }
        }
        return _arr.join();
    }
}());

amd.add('kyo', 'mask', 'http://static.dev.lmhcdn.com/lazy/ui/mask.js')