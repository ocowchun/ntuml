var _ = require('underscore');
var fs = require('fs')
fs.readFile('hw1_15_train.dat.txt', 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	var datas = txt2Datas(data);
	excutePLA(datas);
	// console.log(datas);
});

function txt2Datas(text) {
	var ar1 = text.split('\n');
	ar1.pop();
	var ar2 = _.map(ar1, function(str) {
		return toNum(str.replace('\t', ' ').split(' '));
	})
	return ar2;
}

function toNum(data) {
	return _.map(data, function(d) {
		return d * 1;
	});
}

function excutePLA(datas) {
	var weight = [0, 0, 0, 0, 0.5],
		isHalt = false,
		y, x, currentData,
		count = 0;
	while (!isHalt && count++ < 5000) {
		var isMistake = _.find(datas, function(data) {
			x = _.clone(data);
			y = x.pop(); 
			return (sign(weight, x) * y) < 0;
		});
		if (isMistake) {
			weight = updateWeight(weight, x, y);
		} else {
			isHalt = true;
			console.log(count);
			console.log("you got it");
			console.log(weight);
		}
	}
	return weight
}

var sign = function(weight, x) {
	var result = 0,
		max = x.length,
		i;
	for (i = 0; i < max; i++) {
		result += weight[i] * x[i];
	}
	return result - _.last(weight);
}

var updateWeight = function(weight0, x, y) {
	var weight1 = [],
		max = x.length,
		i;

	for (i = 0; i < max; i++) {
		weight1[i] = weight0[i] + x[i] * y * 0.1;
	}
	var threshold = _.last(weight0); // + _.last(weight0) * (y);
	weight1.push(threshold);
	return weight1;
}

// how to fix threshold