!(function () {
    var cache = {},
        cssurl = {};
    window.amd = {
        version: '1.0.0',
        author: 'guosheng (QQ:9169775)',
        add: function (namespace, modulename, url) {
            if (namespace) {
                cache[namespace + '.' + modulename] = url;
            }
        },
        ls: function (keyword) {
            if (console) {
                console.log(cache);
            }
        },
        addcss: function () {

        },
        loadcss: function (url) {
            if (!cssurl[url]) {
                cssurl[url] = 1;
                var d = document,
                    cssLink = d.createElement('link'),
                    head = d.getElementsByTagName('head')[0];
                cssLink.rel = 'stylesheet';
                cssLink.type = 'text/css';
                cssLink.href = url;
                d.getElementsByTagName('head')[0].appendChild(cssLink);
            }
        },
        use: function (arr) {
            var dtd = $.Deferred();
            require(getArr(arr), function () {
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
        return _arr;
    }
}());

amd.add('kyo', 'cookie', 'http://static.test.lmhcdn.com/amd/module/kyo/cookie/jquery.cookie.js');
amd.add('kyo', 'jBox', 'http://static.test.lmhcdn.com/amd/module/kyo/jbox/jbox.js');
amd.add('kyo', 'lightbox', 'http://static.test.lmhcdn.com/amd/module/kyo/lightbox2/js/lightbox.min.js');