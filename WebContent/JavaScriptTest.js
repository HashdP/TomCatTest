
var headerCanvas = document.getElementById('sample1');
var testButtonCanvas = document.getElementById('testButton');

function draw(){
	if(headerCanvas.getContext){
		var context = headerCanvas.getContext('2d');
		
		var sw = window.innerWidth;
		var sh = window.innerHeight;

		context.fillStyle = '#100000';
		context.fillRect(0,0,200, sh);

		context.fillStyle = '#800000';
		context.fillRect(0,0,sw,200);
		
		context.fillStyle = '#b22222';
		context.fillRect(0,0,200,200);
		
		context.strokeStyle = "#c0c0c0";
		context.strokeRect(0,0,200,200);
	}
	
	if(testButtonCanvas.getContext){
		var context = testButtonCanvas.getContext('2d');
		
		context.fillStyle = "#696969";
		context.fillRect(sw / 2,300,200,60);

		context.fillStyle = "#696969";
		context.fillRect(sw / 2,1300,200,60);
	}
}

function resize(){
	var sw = window.innerWidth;
	var sh = window.innerHeight;
	
	headerCanvas.setAttribute('width', sw);
	headerCanvas.setAttribute('height', sh);

	testButtonCanvas.setAttribute('width', sw);
	testButtonCanvas.setAttribute('height', sh * 2);
}

window.addEventListener('resize', resize, false);
resize();

