
var testButton1Canvas = document.getElementById('testButton1');
var testButton2Canvas = document.getElementById('testButton2');
var headerCanvas = document.getElementById("header");
var menuCanvas = document.getElementById("menu");

var headerSize = 200;
var menuSize = 200;

/*あ中心にボタンを描画する */
function drawButton(buttonCanvas, color, scale, text = 'テキスト未定義ですですよ～ん'){
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
	context.measureText(text);
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
		context.font = "bold 200px 'MS ゴシック'";
		context.textAlign = "left";
		context.textBaseline = "top";
		context.fillText("テキストん", 0, 0);
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

function onMouseDown1(){
	drawButton(testButton1Canvas, "#800000", 1.0);
}
function onMouseUp1(){
	drawButton(testButton1Canvas, "#800000", 0.95);
}
function onMouseOver1(){
	drawButton(testButton1Canvas, "#800000", 0.95);
}
function onMouseOut1(){
	drawButton(testButton1Canvas, "#696969", 0.95);
}

window.addEventListener('resize', reload, false);
testButton1Canvas.addEventListener('mousedown', onMouseDown1, false);
testButton1Canvas.addEventListener('mouseup', onMouseUp1, false);
testButton1Canvas.addEventListener('mouseover', onMouseOver1, false);
testButton1Canvas.addEventListener('mouseout', onMouseOut1, false);
resize();

