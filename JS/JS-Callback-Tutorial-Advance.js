var accuracy = 1000000;

function time_measure(callback) {
	var params = Array.prototype.slice.call(arguments, 1);
	var start = new Date();
	callback.apply(this, params);
	var end = new Date();
	var duration = end - start; // milisecond
	var fn_name = callback.name;
	console.log("Running time of", fn_name+'('+params+')', "is", duration*1000/accuracy, "nanosecond");
}

function forLoop() {
	for (var i=0; i < accuracy; i++) {};
}

function numToString() {
	for (var i=0; i < accuracy; i++) { i.toString() };
}

function newDate() {
	for (var i=0; i < accuracy; i++) { new Date(); };
}

var test_fns = [forLoop, numToString, newDate];

for (var i=0; i < test_fns.length; i++)
	time_measure(test_fns[i], Math.random().toFixed(2), Math.random().toFixed(2));

(function(){
	console.log('Function is also an Object, and the way to run a function is placing () after it');
})();