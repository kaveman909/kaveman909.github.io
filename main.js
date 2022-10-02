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
//var num_of_values = clock_values + run_size - 1 // 14
var num_of_values = clock_values
// var poker_card_ratio = (3.5 / 2.5);
var bridge_card_ratio = (3.5 / 2.25);

var box_colors = [
  'rgb(237, 0, 39)',
  'rgb(219, 25, 40)',
  'rgb(201, 36, 41)',
  'rgb(184, 42, 42)',
  'rgb(166, 46, 42)',
  'rgb(149, 49, 43)',
  'rgb(132, 50, 43)',
  'rgb(115, 51, 44)',
  'rgb(98, 50, 44)',
  'rgb(81, 49, 45)',
  'rgb(64, 47, 45)',
  'rgb(45, 45, 45)',];

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
  var fill_color = box_colors[i];

  var rect = two.makeRoundedRectangle(0, y_offset(i), text_size * scaling * bridge_card_ratio, text_size * scaling, text_size * scaling * 0.2);
  rect.fill = fill_color;
  group_array.push(rect);
}

for (let i = 0; i < num_of_values; i++) {
  var y_text_fudge = text_size / 8; // TBD: how to get text height and compensate for real
  var t = two.makeText(((clock_values + 1) - ((i % clock_values) + 1)).toString(), 0, y_offset(i) + y_text_fudge, styles);
  t.fill = 'rgba(255, 255, 255, ' + (1 - (i/num_of_values) * 0.5).toString() + ')'
  group_array.push(t);
}

var best_run_str = ''
update_best()

var best_run = two.makeText('Best Run:', two.width * 0.25, y_offset(0), styles_flavor);
var best_run2 = two.makeText(best_run_str, two.width * 0.25, y_offset(1), styles_flavor);
group_array.push(best_run)
group_array.push(best_run2)

var worst_ind = [1, 0, num_of_values - 1]
var worst_run_str = ''
update_worst()

var worst_run = two.makeText('Worst Run:', two.width * 0.25, y_offset(num_of_values - 2), styles_flavor);
var worst_run2 = two.makeText(worst_run_str, two.width * 0.25, y_offset(num_of_values - 1), styles_flavor);
group_array.push(worst_run)
group_array.push(worst_run2)

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

function update_worst() {
  worst_run_str = ''
  for (const i of worst_ind) {
    worst_run_str += group_array[i + num_of_values].value;
    if (i <= 1) {
      worst_run_str += '-';
    }
  }
}

function update_best() {
  best_run_str = ''
  for (let i = (run_size - 1); i >= 0; i--) {
    best_run_str += group_array[i + num_of_values].value;
    if (i > 0) {
      best_run_str += '-';
    }
  }
}

function update_best_run() {
  update_best()
  group_array[num_of_values * 2 + 1].value = best_run_str
}

function update_worst_run() {
  update_worst()
  group_array[num_of_values * 2 + 3].value = worst_run_str
}
