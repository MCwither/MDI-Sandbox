(async()=>{
	const 	script=document.querySelector(`script`),
		a=document.createElement(`a`),
		icons=await(await fetch`../json/other.json`).json(),
		statuses=[`complete`,`ignore`,`new`];
	let 	article=document.createElement(`article`),
		svg=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`),
		path=document.createElementNS(`http://www.w3.org/2000/svg`,`path`),
		status,data,key,target;
	article.classList.add(`oh`,`pr`,`tac`);
	svg.classList.add(`db`);
	/*svg.setAttribute(`height`,24);*/
	svg.setAttribute(`viewBox`,`0 0 24 24`);
	/*svg.setAttribute(`width`,24);*/
	path.setAttribute(`transform`,`scale(.05) scale(1,-1) translate(0,-480)`);
	for(key in icons)
		if(icons.hasOwnProperty(key)){
			article=article.cloneNode(0);
			if(status=icons[key].status)
				statuses.forEach(x=>article.classList.toggle(x,status===x));
			else article.classList.remove(...statuses);
			svg=svg.cloneNode(0);
			path=path.cloneNode(1);
			path.setAttribute(`d`,data=icons[key].data);
			Math.max(...data.match(/(\d|\.)+/g).map(x=>parseFloat(x)))>24?path.setAttribute(`transform`,`scale(.05) scale(1,-1) translate(0,-480)`):path.removeAttribute(`transform`);
			svg.append(path);
			article.append(svg,document.createTextNode(key.replace(/_/g," ")));
			script.before(article);
		}
	document.body.addEventListener(`click`,event=>{
		target=event.target;
		while(target.nodeName.toLowerCase()!==`article`&&target!==document.body)
			target=target.parentNode;
		if(target.nodeName.toLowerCase()===`article`&&!target.classList.contains(`complete`)){
			a.href=`data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">`+target.firstChild.outerHTML;
			a.download=target.lastChild.nodeValue.replace(/ /g,`-`)+`.svg`;
			document.body.append(a);
			a.click();
			a.remove();
			URL.revokeObjectURL(a.href);
		}
	},0);
})();