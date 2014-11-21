var _ = require('underscore');
var fs = require('fs')
fs.readFile('hw1_15_train.dat.txt', 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	var datas = txt2Datas(data);
	var weight = [1.8080927999999994, -1.006751,
		1.5615790000000003,
		2.749154280000001, -2
	];
	pocket(datas, 500);
	// excutePLA(datas)
	// evaluate(datas, randomPLA);
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

function evaluate(datas, algorithm) {

	var updates = [];
	_.times(2000, function() {
		updates.push(algorithm(datas));
	});

	var sum = _.reduce(updates, function(memo, num) {
		return memo + num;
	}, 0);
	console.log(sum / 2000)
}


function randomPLA(datas) {
	var weight = [0, 0, 0, 0, 0],
		isHalt = false,
		y, x, currentData,
		count = 0;
	while (!isHalt && count++ < 100) {
		datas = _.shuffle(datas);

		var isMistake = _.find(datas, function(data) {
			x = _.clone(data);
			y = x.pop();

			return (sign(weight, x) !== y);
		});
		if (isMistake) {
			weight = updateWeight(weight, x, y);
		} else {
			isHalt = true;
			// console.log(count);
			console.log("you got it");
			// console.log(weight);
		}
	}
	return count
}

function excutePLA(datas) {
	var weight = [0, 0, 0, 0, 0],
		isHalt = false,
		y, x, currentData,
		count = 0;
	while (!isHalt && count++ < 100) {
		var isMistake = _.find(datas, function(data) {
			x = _.clone(data);
			y = x.pop();

			return (sign(weight, x) !== y);
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

function pocket(datas, round) {
	var weight = [0, 0, 0, 0, 0],
		current_round = 0,
		y, x,
		mistakeCount;
	while (current_round++ < round) {
		datas = _.shuffle(datas);
		mistakeCount = getMistakeCount(weight, datas);
		var isMistake = _.find(datas, function(data) {
			x = _.clone(data);
			y = x.pop();

			return (sign(weight, x) !== y);
		});

		if (isMistake) {
			weight1 = updateWeight(weight, x, y);

			mistakeCount1 = getMistakeCount(weight1, datas);
			// console.log("==================")
			// console.log(weight1)
			// console.log("mistakeCount:" + mistakeCount);
			// console.log("mistakeCount1:" + mistakeCount1);

			if (mistakeCount1 < mistakeCount) {
				weight = weight1;
				console.log("change");
			}
		} else {
			isHalt = true;
			console.log(count);
			console.log("you got it");
			console.log(weight);
		}
	}
}

var getMistakeCount = function(weight, datas) {
	var g = _.filter(datas, function(data) {
		x = _.clone(data);
		y = x.pop();
		return (sign(weight, x) !== y);
	});
	return g.length;
}

var sign = function(weight, x) {
	var result = 0,
		max = x.length,
		i;
	for (i = 0; i < max; i++) {
		result += weight[i] * x[i];
	}
	var is_postive = (result + _.last(weight)) > 0;
	return is_postive ? 1 : -1;
}

var updateWeight = function(weight0, x, y, learningRate) {
	var weight1 = [],
		max = x.length,
		i;
	learningRate = learningRate || 1;
	for (i = 0; i < max; i++) {
		weight1[i] = weight0[i] + x[i] * y * learningRate;
	}
	var threshold = _.last(weight0) + learningRate * (y);
	weight1.push(threshold);
	return weight1;
}