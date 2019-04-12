'use strict';

/* Fractalのインスタンスの作成とエクスポート */
const fractal = module.exports = require('@frctl/fractal').create();

/* プロジェクト・タイトルの設定 */
fractal.set('project.title', 'YUI-Style-Guide');

/* componentsディレクトリの指定 */
fractal.components.set('path', __dirname + '/src/components');

/* documentationディレクトリの指定 */
fractal.docs.set('path', __dirname + '/src/docs');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/assets');
fractal.web.set('static.mount', '/assets');

//biuild後のディレクトリ
fractal.web.set('builder.dest', __dirname + '/dist');

