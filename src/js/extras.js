{
	const menu={
		functions:{},
		show:0,
		size:(document.body.offsetWidth>1199)+(document.body.offsetWidth>1299),
		menu:document.getElementById(`menu`),
		nav:document.getElementById(`nav`),
		navicon:document.getElementById(`navicon`),
		init(){
			this.nav.addEventListener(`click`,event=>{
				let target=event.target;
				target.blur();
				switch(target){
					case this.nav:
						this.size<2&&this.toggle();
						break;
					case this.navicon:
						this.toggle();
						break;
				}
			},0);
			if(this.size===2)
				this.toggle();
			else document.addEventListener(`touchstart`,event=>this.touchstart(event),0);
		},
		toggle(){
			document.body.classList.toggle(`menu`,this.show=!this.show);
			if(this.size<2&&this.show)
				document.body.addEventListener(`keydown`,this.functions.close=event=>
					event.keyCode===27&&this.toggle()
				,0);
			else document.body.removeEventListener(`keydown`,this.functions.close);
		},
		touchend(clientx){
			document.removeEventListener(`touchmove`,this.functions.move);
			document.removeEventListener(`touchend`,this.functions.end);
			this.nav.removeAttribute(`style`);
			this.menu.removeAttribute(`style`);
			clientx>=this.width/2&&this.toggle();
		},
		touchstart(event){
			this.width=this.menu.offsetWidth;
			this.clientx=event.touches[0].clientX;
			if((event.target===document.body&&!this.show&&this.clientx<=50)||(this.show&&this.clientx>this.width)){
				this.nav.style.transition=this.menu.style.transition=`none`;
				document.addEventListener(`touchmove`,this.functions.move=event=>{
					let clientx=event.touches[0].clientX-this.clientx;
					this.nav.style.background=`rgba(0,0,0,${Math.min((clientx+(this.show?285.185:0))/285.185*.54,.54)})`;
					this.menu.style.left=`${this.show?Math.min(Math.max(clientx,-this.width),0):Math.min(Math.max(clientx,0)-this.width,0)}px`;
					this.menu.style.boxShadow=`0 14px 28px rgba(0,0,0,${Math.min((clientx+(this.show?500:0))/500*.25,.25)}),0 10px 10px rgba(0,0,0,${Math.min((clientx+(this.show?545.545:0))/545.545*.22,.22)})`;
					event.stopPropagation();
				},0);
				document.addEventListener(`touchend`,this.functions.end=event=>
					this.touchend(this.show?this.clientx-event.changedTouches[0].clientX:event.changedTouches[0].clientX-this.clientx),0
				,0);
				event.stopPropagation();
			}
		}
	};
	menu.init();
	(async()=>{
		await new Promise(resolve=>{
			let ga=document.createElement(`script`);
			ga.async=1;
			ga.src=`https://www.googletagmanager.com/gtag/js?id=UA-109147935-1`;
			document.body.append(ga);
			ga.addEventListener(`load`,resolve,0);
		});
		let 	date=new Date,
			month=date.getMonth(),
			day=date.getDate();
		if(month===11&&day>12||month===0&&day<6)
			this.header.classList.add("snow");
		window.dataLayer=window.dataLayer||[];
		let gtag=function(){window.dataLayer.push(arguments);};
		gtag(`js`,date);
		gtag(`config`,`UA-109147935-1`);
	})();
}