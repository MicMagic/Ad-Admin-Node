// 路径别名配置
const path = require('path');
const moduleAlias = require('module-alias');

moduleAlias.addAliases({
	'@config': path.resolve(__dirname, '../config'),
	'@constant': path.resolve(__dirname, '../constant'),
	'@controller': path.resolve(__dirname, '../controller'),
	'@middleware': path.resolve(__dirname, '../middleware'),
	'@model': path.resolve(__dirname, '../model'),
	'@public': path.resolve(__dirname, '../public'),
	'@router': path.resolve(__dirname, '../router'),
	'@service': path.resolve(__dirname, '../service'),
	'@utils': path.resolve(__dirname, '../utils')
});
moduleAlias();