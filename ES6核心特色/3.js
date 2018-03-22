/**
 * 从连接字符 到 模板
 * 在ES6 javascript得到字面量对于字符串插入和多行字符
 */

/**
 * 在ES5 你可以把值放到字符通过连接值和字符片段
 * 
 */

function printCoord(x, y) {
    console.log('(' + x + ', ' + y + ')');
}

/**
 * 在ES6 通过模板字面量来完成字符连接
 * 
 */

function printCoord(x, y) {
    console.log(`(${x}, ${y})`);
}

/**
 * 多行字符
 * 模板可以实现多行字符
 */


/**
 * 在ES5中想呈现多行字符
 */

var HTML5_SKELETON =
    '<!doctype html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title></title>\n' +
    '</head>\n' +
    '<body>\n' +
    '</body>\n' +
    '</html>\n';

/**
 * 如果你想转义换行通过反斜杠
 */

var HTML5_SKELETON = '\
<!doctype html>\n\
<html>\n\
<head>\n\
    <meta charset="UTF-8">\n\
    <title></title>\n\
</head>\n\
<body>\n\
</body>\n\
</html>';

/**
 * ES6 模板可以分隔多行
 */

const HTML5_SKELETON = `
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
</body>
</html>`;