import Two from 'https://cdn.skypack.dev/two.js@latest'

var params = {
  fullscreen: true
};
var isClicking = false
var elem = document.body;
var text_spacing = 1
var rect_height_prop = 1
var run_size = 3
var clock_values = 12
var num_of_values = clock_values + run_size - 1 // 14
// var poker_card_ratio = (3.5 / 2.5);
var bridge_card_ratio = (3.5 / 2.25);

var two = new Two(params).appendTo(elem);
var ver_height = two.height * rect_height_prop;
var text_size = ver_height / num_of_values / text_spacing;
var group_array = [];
var styles = {
  alignment: 'center',
  baseline: 'middle',
  size: text_size,
  family: 'Avenir Next',
  fill: 'rgba(255, 255, 255, 1)'
};
var styles_flavor = {
  alignment: 'left',
  baseline: 'middle',
  size: text_size * 0.65,
  family: 'Avenir Next',
  fill: 'rgba(255, 255, 255, 1)',
  style: 'italic'
}

function y_offset(i) {
  return i * (styles.size * text_spacing) - two.height * (rect_height_prop / 2);
}


for (let i = 0; i < num_of_values; i++) {
  var scaling = .925
  var fill_color = '';
  if (i < run_size) {
    // top dogs
    fill_color = 'rgba(76, 158, 65, 1';
  } else if (i >= num_of_values - run_size) {
    // worst
    fill_color = 'rgba(138, 62, 72, 1)';
  } else {
    // middle
    fill_color = 'rgba(62, 111, 138, 1)';
  }
  var rect = two.makeRoundedRectangle(0, y_offset(i), text_size * scaling * bridge_card_ratio, text_size * scaling, text_size * scaling * 0.2);
  rect.fill = fill_color;
  group_array.push(rect);
}

for (let i = 0; i < num_of_values; i++) {
  var y_text_fudge = text_size / 8; // TBD: how to get text height and compensate for real
  var t = two.makeText(((clock_values + 1) - ((i % clock_values) + 1)).toString(), 0, y_offset(i) + y_text_fudge, styles);
  group_array.push(t);
}

var best_run_str = ''
for (let i = (run_size - 1); i >= 0; i--) {
  best_run_str += group_array[i + num_of_values].value;
  if (i > 0) {
    best_run_str += '-';
  }
}

var best_run = two.makeText('Best Run:', two.width * 0.25, y_offset(0), styles_flavor);
var best_run2 = two.makeText(best_run_str, two.width * 0.25, y_offset(1), styles_flavor);
group_array.push(best_run)
group_array.push(best_run2)

var worst_run_str = ''
for (let i = (run_size - 1); i >= 0; i--) {
  worst_run_str += group_array[i + num_of_values + clock_values - 1].value;
  if (i > 0) {
    worst_run_str += '-';
  }
}

var worst_run = two.makeText('Worst Run:', two.width * 0.25, y_offset(11), styles_flavor);
var worst_run2 = two.makeText(worst_run_str, two.width * 0.25, y_offset(12), styles_flavor);
group_array.push(worst_run)
group_array.push(worst_run2)


function update_best_run() {
  best_run_str = ''
  for (let i = (run_size - 1); i >= 0; i--) {
    best_run_str += group_array[i + num_of_values].value;
    if (i > 0) {
      best_run_str += '-';
    }
  }
  group_array[num_of_values * 2 + 1].value = best_run_str
}

function update_worst_run() {
  worst_run_str = ''
  for (let i = (run_size - 1); i >= 0; i--) {
    worst_run_str += group_array[i + num_of_values + clock_values - 1].value;
    if (i > 0) {
      worst_run_str += '-';
    }
  }
  group_array[num_of_values * 2 + 3].value = worst_run_str
}

var cx = two.width * 0.25;
var cy = two.height * 0.5 + text_size / 2;
var group = two.makeGroup(group_array);
group.position.set(cx, cy);
group.scale = 1;

window.addEventListener('pointerdown', pointerdown, false);
window.addEventListener('pointerup', pointerup, false);

two.update();

var scale_idx = 0
function pointerdown(e) {
  if (!isClicking) {
    isClicking = true
    // get value of new highest-rank number
    var mousey = e.clientY;
    // from 0 to (height / 14), 0, etc..
    scale_idx = num_of_values + Math.floor(mousey / (two.height / num_of_values));
    group_array[scale_idx].scale = 1.5;
    group_array[scale_idx - num_of_values].scale = 1.5;
    two.update();
  }
}

function pointerup(e) {
  if (isClicking) {
    isClicking = false
    group_array[scale_idx].scale = 1;
    group_array[scale_idx - num_of_values].scale = 1;
    var new_highest = parseInt(group_array[scale_idx].value);
    // update the boxes
    for (let i = 0; i < num_of_values; i++) {
      group_array[i + num_of_values].value = ((clock_values + 1) - (((i + (clock_values - new_highest)) % clock_values) + 1)).toString();
    }
    // add animation in the future for fun
    update_best_run()
    update_worst_run()
    two.update();
  }
}