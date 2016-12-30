import Mock from 'mockjs';
import $ from 'jquery';

require('./style/main.scss');

// 测试用 mockApi 上线时删除
require('./js/mockApi');

// 获取每个 video 模块的模板
var video_tpl = $('#video-item-tpl').html().trim();

// ajax 请求
$.ajax({
	url: '/test',
	method: 'POST',
	beforeSend: function() {
		$('.loading').text('请求资源中…');
	},
	success: function(response) {
		var data = JSON.parse(response).data;

		var _html = '';
		// 遍历数组
		data.forEach(function(item, index) {
			_html += video_tpl
				.replace(/{{index}}/g, index + 1)
				.replace(/{{title}}/g, item.title)
				.replace(/{{fileUrl}}/g, item.fileUrl)
				.replace(/{{id}}/g, item.id)
				.replace(/{{poster}}/g, item.poster || '')
				.replace(/{{score}}/g, item.score);
		});

		$('#container').empty().append(_html);

	},
	error: function() {
		$('.loading').text('网络错误');
	}
});



// 视频播放暂停
$('#container').on('click', '.main_video', function() {

	var video = $(this)[0];

	video.paused ? video.play() : video.pause();

});
	
// 初始化总体排序按钮
$(function() {
	var search = window.location.search || '';
	search = search.replace('?', '');



	// 未开启
	if ( !search || /order=false/.test(search) ) {
		$('.sort-wrap')
			.attr('title', '进行总体排序')
			.attr('href', '?order=true');
		$('.sort-text').text('总体排序')
	} else if ( /order=true/.test(search) ) { // 已开启
		$('.sort-wrap')
		.attr('href', '?order=false')
		.addClass('open');
		$('.sort-text').text('取消排序');
	}

	$('.sort-wrap').on('click', function() {
		$(this).toggleClass('open');
	});

});