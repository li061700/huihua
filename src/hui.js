function Huihua(obj) {
		this.aa = "";
		this.kaung = document.querySelector(".kaung") || this.aa ;
		this.hu_guan = document.querySelector("#hu_guan") || this.aa ;
		this.hu_in = document.querySelector(".hu_in") || this.aa ;
		this.hu_que = document.querySelector("#hu_que") || this.aa ;
		this.hu_qu = document.querySelector("#hu_qu") || this.aa ;
		this.hukW = obj.hukW || 300;
		this.guan = obj.guan || 0;
		this.dai = function(){};
		this.guanl = obj.guanl || this.dai;
		this.que = obj.que || this.dai;
		this.quxiao = obj.quxiao || this.dai;
		this.bacolor = obj.bacolor || "#ffffff";
		this.cu();
		this.shijian();
	}
	// 初始化绘画框
	Huihua.prototype.cu = function(){
		var that = this;
		// 获取浏览器窗口的宽高
		this.kaung.style.width = this.hukW + "px";
		this.kaung.style.backgroundColor = this.bacolor;
		if(this.guan === 0){
			this.hu_guan.onclick = function(){
				that.yin();
				that.guanl();
			};
		}
	};
	Huihua.prototype.yin = function(){
		this.kaung.style.display = "none";
		this.hu_in.style.display = "none";
	};
	Huihua.prototype.xian = function(){
		this.kaung.style.display = "block";
		this.hu_in.style.display = "block";
	};
	// 添加事件
	Huihua.prototype.shijian = function(){
		var that = this;
		this.hu_que.onclick = function(){
			that.que();
		};
		this.hu_qu.onclick = function(){
			that.quxiao();
		};
	};