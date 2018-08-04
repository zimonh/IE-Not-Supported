var all = '';
var supported = [
	{ img: 'firefox.svg', 	name: 'Firefox', 	open: '', 				link: 'https://www.mozilla.org/en-US/firefox/new/' },
	{ img: 'edge.svg', 		name: 'Edge', 		open: 'microsoft-edge', link: 'https://www.microsoft.com/en-us/download/' },
	{ img: 'chrome.svg', 	name: 'Chrome', 	open: '', 				link: 'https://www.google.com/chrome/' },
];
supported.map(function(b){
	let supported = '',
		pointer = '',
		supportedClass = '';
	if(b.open !== ''){
		supported = 'href="' + b.open + ':https://www.google.com/"';
		supportedClass = ' class="noie"';
	}else{
		supported = 'href="' + b.link + '"';
		pointer = 'style="pointer-events:none;"';
	}

	all +=
		'<div>' +
		'<a ' + supported + '>' +
		'<img src="' + b.img + '">' +
		'<div>' + b.name + '</div>' +
		'</a>' +
		'<a ' + pointer + supportedClass + ' href="' + b.link + '"><img src="download.svg"/></a>' +
		'</div>';
});
//add <div id="noie"></div> to body
document.querySelector('#noie').innerHTML = '<div><div>Oops...</div><div><div>Looks like you are using Internet Explorer. Please use one of these browsers instead:</div></div><div>'+all+'</div></div>';