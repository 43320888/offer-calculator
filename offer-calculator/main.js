function addScript(src) {
	const script = document.createElement('script');
	script.src = src;
	script.async = false;
	document.head.appendChild(script);
}
function clearHTML(...ns) {
	[...ns].forEach(n => document.querySelector(n).remove());
}

addScript('db.js');
addScript('model.js');
addScript('view.js');
addScript('controller.js');
clearHTML('script', 'noscript');
