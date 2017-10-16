/*var progressBar = document.querySelector('.progress-bar-wrapper');
var progressInner = progressBar.querySelector('.progress-bar-inner');

function calcPercent(elemWidth, offset) {
	return offset * 100 / elemWidth;
}

progressBar.addEventListener('mousemove', function(e) {
	var percent = calcPercent(this.clientWidth, e.offsetX);
	progressInner.style.width = percent + '%';
})

///////////////////////////////////////////////////////////
var verticalBar = document.querySelector('.vertical-bar');
var verticalInner = verticalBar.querySelector('.vertical-bar-inner');

function calcPercentV(elemHeight, offset) {
	return offset * 100 / elemHeight;
}

verticalBar.addEventListener('mousemove', function(e) {
	var percent = calcPercentV(this.clientHeight, e.offsetY);
	verticalInner.style.height = percent + '%';
})*/

/////////////////////////////////////////

var a = ["дом", "парк", "машина", "кот", "ключ", "школа", "самолет", "праздник", "месяц", "звезда"];
var b = ["постройка", "деревья, дорожки", "транспортное средство", "домашний питомец", "путь к дверному замку", "много детей с учебниками", "воздушный поезд", "День рождения, Новый год", "12 в году", "небесное, светящееся тело"]

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var rand = a[getRandom(1, a.length)];

//////////////////////time///////////
var report = document.body.querySelector('textarea');
var when = new Date().toLocaleString();
/////////////////////////////////


function game(a) {
	var genBlocks = rand.split('');
	var words = document.querySelector('.words');

	/////////////////////generate block/////////
	for (var i = 0; i < genBlocks.length; i++) {
		var block = document.createElement('div');
		block.setAttribute('data-item', i);
		words.appendChild(block);
	}
	var about = document.querySelector('p');
	about.innerHTML = b[a.indexOf(rand)];

	///////////////////////progressBar////////////
	var correctIn = document.querySelector('.correct-inner');
	var falseIn = document.querySelector('.false-inner');
	var parentBar = correctIn.parentElement;
	var corPer = (parentBar.clientWidth / genBlocks.length);
	var falPer = 50;
	///////////////////////////////////

	document.body.addEventListener('keydown', function(e) {
		var allBlocks = words.querySelectorAll('div');
		correctIn.style.width = 0;
		for (var i = 0; i < genBlocks.length; i++) {	
			if (e.key == genBlocks[i]) {
				allBlocks[i].innerHTML = genBlocks[i];
				report.value += 'Отгадано букву №' + (i + 1) + ' - "' + e.key + '" в ' + when + '\n';
			}

			if (allBlocks[i].innerHTML) {
				correctIn.style.width = (parseInt(getComputedStyle(correctIn).width, 10) + corPer) + 'px';
			} 
		}

		if (!genBlocks.includes(e.key)) {
			report.value += 'Буквы "' + e.key + '" нет в этом слове. ' + when + '\n';
			falseIn.style.width = (parseInt(getComputedStyle(falseIn).width, 10) + falPer) + 'px';
		}

		var modCor = document.querySelector('.modal-correct');
		var modFal = document.querySelector('.modal-false');

		if (parseInt(getComputedStyle(correctIn).width, 10) >= 195) {
			modCor.style.display = 'block';
		} else if (parseInt(getComputedStyle(falseIn).width, 10) >= 195) {
			modFal.style.display = 'block';
		}
	});
};
game(a);

var retry = document.querySelectorAll('.retry');
for (var j = 0; j < retry.length; j++) {
	retry[j].addEventListener('click', function(e) {
		document.location.reload()
	})
}

/* 
function sum(a, b) {
  return a + b;
}

function decor(fn) {
  return function() {
    var result = fn.apply(this, arguments);
    log.push({
      arg: arguments,
      result: result,
      when: new Date().toString()
    })
    return result;
  }
};

sum = decor(sum);
  */

  /*document.body.addEventListener('keyup', function(e) {
		var allBlocks = words.querySelectorAll('div');
		var check = genBlocks.reduce(function(init, current, index, arr) {
			if (e.key === current) init.push(index);
			return init;
		}, []);

		if (check != -1) {
			genBlocks[check] = '';
			for (var j = 0; j < check.length; j++) {
				for (var i = 0; i < allBlocks.length; i++) {
					var d = allBlocks[i];
					if (check[j] == d.getAttribute('data-item') && !d.innerHTML.length) {
							d.innerHTML = e.key;
					}
				}
			}
		}
	})*/


////////////////////////////////////////////////////////////
/*document.body.addEventListener('keydown', function(e) {
		var allBlocks = words.querySelectorAll('div');
		for (var i = 0; i < genBlocks.length; i++) {	
			if (e.key == genBlocks[i]) {
				allBlocks[i].innerHTML = genBlocks[i];
				report.value += 'Отгадано букву №' + (i + 1) + ' - "' + e.key + '" в ' + now.format(when) + '\n';
				correctIn.style.width = (parseInt(getComputedStyle(correctIn).width, 10) + corPer) + 'px';
			} 
		}

		if (!genBlocks.includes(e.key)) {
			report.value += 'Буквы "' + e.key + '" нет в этом слове. ' + now.format(when) + '\n';
			falseIn.style.width = (parseInt(getComputedStyle(falseIn).width, 10) + falPer) + 'px';
		}

		var modCor = document.querySelector('.modal-correct');
		var modFal = document.querySelector('.modal-false');

		if (parseInt(getComputedStyle(correctIn).width, 10) >= 195) {
			modCor.style.display = 'block';
		} else if (parseInt(getComputedStyle(falseIn).width, 10) >= 195) {
			modFal.style.display = 'block';
		}
		});*/