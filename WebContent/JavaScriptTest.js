
var testButton1Canvas = document.getElementById('testButton1');
var testButton2Canvas = document.getElementById('testButton2');
var headerCanvas = document.getElementById("header");
var menuCanvas = document.getElementById("menu");

var headerSize = 200;
var menuSize = 200;

/*あ中心にボタンを描画する */
function drawButton(buttonCanvas, color, scale, text = 'テキスト未定義'){
	var context = buttonCanvas.getContext('2d');
	
	context.clearRect(0,0,buttonCanvas.width,buttonCanvas.height);
	
	var buttonWidth = 200 * scale;
	var buttonHeight = 60 * scale;
	
	var cCenterX = buttonCanvas.width / 2;
	var cCenterY = buttonCanvas.height / 2;
	
	context.strokeStyle = "#434343";
	context.lineWidth = 5;
	context.strokeRect(cCenterX-buttonWidth/2, cCenterY-buttonHeight/2, buttonWidth, buttonHeight);
	
	context.fillStyle = color;
	context.fillRect(cCenterX-buttonWidth/2, cCenterY-buttonHeight/2, buttonWidth, buttonHeight);
	
	context.fillStyle = "#ffffff";
	context.font = `bold ${20 * scale}px "MS ゴシック"`;
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillText(text, cCenterX, cCenterY);
}

function draw(){
	var sw = window.innerWidth;
	var sh = window.innerHeight;
	
	if(headerCanvas.getContext){
		var context = headerCanvas.getContext('2d');
		context.fillStyle = '#800000';
		context.fillRect(0,0,sw,headerSize);
		
		context.fillStyle = '#FFFFFF';
		context.font = "bold 120px 'MS ゴシック'";
		context.textAlign = "left";
		context.textBaseline = "top";
		context.fillText("テキスト", 50, headerSize-120);
	}
	
	if(menuCanvas.getContext){
		var context = menuCanvas.getContext('2d');

		context.fillStyle = '#100000';
		context.fillRect(0,0,menuSize, sh);

		context.fillStyle = '#b22222';
		context.fillRect(0,0,menuSize,menuSize);
		
		context.strokeStyle = "#c0c0c0";
		context.lineWidth = 5;
		context.strokeRect(0,0,menuSize,menuSize);
	}
	
	if(testButton1Canvas.getContext){
		drawButton(testButton1Canvas, "#696969", 0.95);
	}
	
	if(testButton2Canvas.getContext){
		drawButton(testButton2Canvas, "#696969", 0.95);
	}
}

function resize(){
	var sw = window.innerWidth;
	var sh = window.innerHeight;
	
	headerCanvas.setAttribute('width', sw - menuSize);
	headerCanvas.setAttribute('height', headerSize);
	headerCanvas.style.left = menuSize;
	
	menuCanvas.setAttribute('width', menuSize);
	menuCanvas.setAttribute('height', sh);
	
	testButton1Canvas.style.left = testButton2Canvas.style.left = sw / 2;
	
	testButton1Canvas.style.top = 400;
	testButton2Canvas.style.top = 1300;
}

function reload(){
	resize();
	draw();
}

function onMouseDown1(){ drawButton(testButton1Canvas, "#800000", 1.0);  }
function onMouseUp1(){   drawButton(testButton1Canvas, "#800000", 0.95); }
function onMouseOver1(){ drawButton(testButton1Canvas, "#800000", 0.95); flipSquare(0.2, "#00ff00"); }
function onMouseOut1(){  drawButton(testButton1Canvas, "#696969", 0.95); flipSquare(0.2, "#ff0000"); }

window.addEventListener('resize', reload, false);
testButton1Canvas.addEventListener('mousedown', onMouseDown1, false);
testButton1Canvas.addEventListener('mouseup', onMouseUp1, false);
testButton1Canvas.addEventListener('mouseover', onMouseOver1, false);
testButton1Canvas.addEventListener('mouseout', onMouseOut1, false);
resize();

/*comment canvasのアニメーション*/
const timeCanvas = document.getElementById('time');

function drawTime(ctx, t) {
	ctx.save();
    
    /*comment　イージング*/
    var easeInOutCubic = function (t, b, c, d) {
    	t /= d/2;
    	if (t < 1) return c/2*t*t*t + b;
    	t -= 2;
    	return c/2*(t*t*t + 2) + b;
    };
	
	/*comment 描画をクリア*/
	ctx.clearRect(0,0,timeCanvas.width,timeCanvas.height);
	
	/*comment 時計を描画*/
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = devicePixelRatio * 20 + 'px Courier,monospace';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(new Date().toISOString(), timeCanvas.width / 2, timeCanvas.height / 2);
    ctx.fillText((1000 / (t - draw.lastT)).toFixed(3) + 'FPS', timeCanvas.width / 2, timeCanvas.height / 2 + devicePixelRatio * 20);
    draw.lastT = t;
    
    /*comment 円を描画*/
    const phase = (t % 2000) / 2000;
    const phase1 = easeInOutCubic(phase, 0, 1, 1);
    const phase2 = easeInOutCubic(2 * Math.max(phase - 0.5, 0), 0, 1, 1);
    const radius = 0.4 * Math.min(timeCanvas.width, timeCanvas.height);
    const PI2 = Math.PI * 2;
    ctx.beginPath();
    ctx.translate(timeCanvas.width/2, timeCanvas.height/2);
    ctx.rotate(-0.5 * Math.PI);
    ctx.arc(0, 0, radius, PI2 * phase2, PI2 * phase1);
    ctx.strokeStyle='#000000';
    ctx.lineWidth=radius/6;
    ctx.lineCap = 'round';
    ctx.stroke();
    
    ctx.restore();
}

requestAnimationFrame(function (t0) {
    const ctx = timeCanvas.getContext('2d');
    render(t0);
    function render(t1) {
    	drawTime(ctx, t1 - t0);
    	requestAnimationFrame(render);
    	
    	/*
    	const progress = (t1-t0) / 1000;
    	
    	if(progress < 3){
            requestAnimationFrame(render);
    	}
    	else{
    	}
    	*/
    }
});


/*comment フリップアニメーション*/
const flipCanvas = document.getElementById('flip');
var flipCanvasColor = "#ff0000"

function drawFlipSquare(theta){
	var ctx = flipCanvas.getContext('2d');
	
	ctx.clearRect(0,0,flip.width,flip.height);
	
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,flip.width,flip.height);
	
	var radius = Math.sqrt(Math.pow(flip.width/2, 2) + Math.pow(flip.height/2, 2));
	var diagonalLength = radius * Math.cos(theta);
	var diagonalPos = diagonalLength / Math.sqrt(2);
	
	ctx.fillStyle = flipCanvasColor;
	ctx.beginPath();
	ctx.moveTo(flip.width/2 - diagonalPos, flip.height/2 - diagonalPos);
	ctx.lineTo(200,   0);
	ctx.lineTo(flip.width/2 + diagonalPos, flip.height/2 + diagonalPos);
	ctx.lineTo(  0, 200);
	ctx.closePath();
	ctx.fill();
}

function flipSquare(time, toColor){
	requestAnimationFrame(function (t0) {
	    render(t0);
	    function render(t1) {
	    	const progress = (t1-t0) / 1000;
	    	var theta = Math.PI * (progress / time);
	    	
	    	if(progress < time/2){
		    	drawFlipSquare(theta);
	    	    requestAnimationFrame(render);
	    	}else if(progress < time){
	    		flipCanvasColor = toColor;
		    	drawFlipSquare(theta);
	    	    requestAnimationFrame(render);
	    	}else{
	    		drawFlipSquare(Math.PI);
	    	}
	    }
	});
}

drawFlipSquare(Math.PI);
