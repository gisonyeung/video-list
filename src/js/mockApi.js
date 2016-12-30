/*
	mock 配置
*/
/*
	response data = [
		{
			title,
			fileUrl,
			id,
			poster,
			score,
		},
	]

*/

import Mock from 'mockjs';

Mock.mock('/test', {
	'data|5-20': [
		{
			'title': '@cword(5, 25)',
			'fileUrl': 'http://flv2.bn.netease.com/tvmrepo/2016/11/8/5/EC5L8RJ85/SD/EC5L8RJ85-mobile.mp4', 
			'id': '@string("lower", 3, 10)',
			'poster': 'http://vimg3.ws.126.net/image/snapshot/2016/12/F/G/VC8K0K9FG.jpg',
			'score|1-100': 100,
		}
	]
});