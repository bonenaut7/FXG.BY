var colors = [
	//  IMP   |     BG   | BG BORDER| TEXT RECT|   BTN BG |  BTN TEXT
	['#55ff55', '#aa0aaa', '#ff55ff', '#ffffff', '#55ffff', '#0000aa'], 
	['#000000', '#efefef', '#bfbfbf', '#464646', '#808080', '#ffffff'], 
	['#066f06', '#7fabca', '#6092b5', '#ffffff', '#b05959', '#ffffff'],
	['#55ff55', '#aa0aaa', '#ff55ff', '#ffffff', '#55ffff', '#0000aa'], 
	['#55ff55', '#aa0aaa', '#ff55ff', '#ffffff', '#04ffa5', '#b05959'], 
	['#55ff55', '#0d648d', '#1586bb', '#ffffff', '#bba715', '#000000'],
	['#55ff55', '#aa0aaa', '#ff55ff', '#ffffff', '#55ffff', '#0000aa']
];
var randNum = rand(6);

function apply() {
	document.body.style.backgroundImage = "url('res/bg" + randNum + ".gif')";
	document.documentElement.style.setProperty('--color1', colors[randNum][0]);
	document.documentElement.style.setProperty('--color2', colors[randNum][1]);
	document.documentElement.style.setProperty('--color3', colors[randNum][2]);
	document.documentElement.style.setProperty('--color4', colors[randNum][3]);
	document.documentElement.style.setProperty('--color5', colors[randNum][4]);
	document.documentElement.style.setProperty('--color6', colors[randNum][5]);
}

function applyCustom(bg, colors) {
	document.body.style.backgroundImage = "url('res/" + bg + "')";
	document.documentElement.style.setProperty('--color1', colors[0]);
	document.documentElement.style.setProperty('--color2', colors[1]);
	document.documentElement.style.setProperty('--color3', colors[2]);
	document.documentElement.style.setProperty('--color4', colors[3]);
	document.documentElement.style.setProperty('--color5', colors[4]);
	document.documentElement.style.setProperty('--color6', colors[5]);
}

function rand(max) {
	return Math.floor((Math.random() * max));
}