(function () {
    function httpGet(url, responseType, success, failure) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status === 200) {
                success(xhr.response);
            } else {
                // Something went wrong (404 etc.)
                failure(xhr.statusText)
            }
        };
        xhr.onerror = function () {
            failure('XMLHttpRequest Error: '+xhr.statusText)
        };
        xhr.open('GET', url);
        xhr.responseType = responseType;
        xhr.send();
    }
    function countComments() {
        // https://github.com/rauschma/exploring-reasonml-comments/issues/1
        // https://api.github.com/repos/rauschma/exploring-reasonml-comments/issues/1
        var cl = document.getElementById('commentLink');
        var pageUrl = cl.href;
        var suffix = /^https:\/\/github.com\/(.*)$/.exec(pageUrl)[1];
        var apiUrl = 'https://api.github.com/repos/' + suffix;
        httpGet(apiUrl, 'text', success, failure);
        function success(jsonText) {
            var json = JSON.parse(jsonText);
            cl.textContent = 'Comments (' + json.comments + ')';
        }
        function failure() {
            // Ignore
        }
    }
    countComments();
})();
