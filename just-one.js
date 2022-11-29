import Two from 'https://cdn.skypack.dev/two.js@latest'


const dicts = ["/original_and_fanmade.txt", 
               "/top_5000_nouns.txt", 
               "/top-1000-acl-anthology-ref.txt",
               "/top-1000-ecolexicon.txt",
              ];

async function downloadFile(f) {
	let response = await fetch(f);
		
	if(response.status != 200) {
		throw new Error("Server Error");
	}
	let text_data = await response.text();

	return text_data;
}

let words = [];
for (const dict of dicts) {
  let words_raw_data = await downloadFile(dict);
  words.push(...words_raw_data.split(/\r?\n/));
}
console.log(words)

var elem = document.body;
var params = {
  fullscreen: true,
  autostart: true,
};
var two = new Two(params).appendTo(elem);
const text_size = two.width/8

var styles = {
  alignment: 'center',
  baseline: 'middle',
  size: text_size,
  family: 'Avenir Next',
  fill: 'rgba(255, 255, 255, 1)'
};

var winning_msgs = [
  [13, "Perfect score! Can you do it again?"],
  [12, "Incredible! Your friends must be impressed!"],
  [11, "Awesome! That's a score worth celebrating!"],
  [9, "Wow, not bad at all!"],
  [7, "You're in the average. Can you do better?"],
  [4, "That's a good start. Try again!"],
  [0, "Try again, and again, and again."],
]

// longest word: 13.  Longest winning message: 43
const winning_text_size = text_size * 13 / 43; // doesn't really work that well

var styles_left = {...styles}; // deep copy syntax
styles_left.alignment = 'right';
styles_left.size = text_size / 2;

var styles_center = {...styles_left};
styles_center.alignment = 'center';

var styles_right = {...styles_left};
styles_right.alignment = 'left';

function getRandomInt(max) {
  return Math.min(Math.floor(Math.random() * max), max - 1);
}

var den = 9;
var text = two.makeText("TAP TO BEGIN", two.width/2, two.height * 2/den, styles);

var correct_cnt = 0;
var pass_cnt = 0;
var wrong_cnt = 0;

var correct_val = two.makeText(correct_cnt.toString(), two.width * 1/4, two.height * 3/den, styles_left);
var pass_val = two.makeText(pass_cnt.toString(), two.width * 2/4, two.height * 3/den, styles_center);
var wrong_val = two.makeText(wrong_cnt.toString(), two.width * 3/4, two.height * 3/den, styles_right);

two.makeText("Correct", two.width * 1/4, two.height * 4/den, styles_left);
two.makeText("Pass", two.width * 2/4, two.height * 4/den, styles_center);
two.makeText("Wrong", two.width * 3/4, two.height * 4/den, styles_right);

var correct_list = []
var pass_list = []
var wrong_list = []

var game_len = 13;
var list_start = two.height * 4/den;
var list_incr = (two.height - list_start) / (game_len + 1);
var font_scaling = 0.5
var word_used = false
var words_used = []
var allow_game = false;
var game_finished = false;

for (let i = 1; i <= game_len; i++) {
  correct_list.push(two.makeText("", two.width * 1/4, list_start + i*list_incr, styles_left))
  correct_list[i-1].size = correct_list[i-1].size*font_scaling
  pass_list.push(two.makeText("", two.width * 2/4, list_start + i*list_incr, styles_center))
  pass_list[i-1].size = pass_list[i-1].size*font_scaling
  wrong_list.push(two.makeText("", two.width * 3/4, list_start + i*list_incr, styles_right))
  wrong_list[i-1].size = wrong_list[i-1].size*font_scaling
}

two.update();

window.addEventListener('pointerup', pointerup, false);

function update_val(val, cnt) {
  val.value = cnt.toString();
}

function pointerup(e) {
  if (game_finished) {
    return;
  }
  var mousex = e.clientX;
  var mousey = e.clientY;
  if (mousey > two.height * 2.5/den && !word_used && allow_game) {
    if (mousex < two.width * 1/3) {
      if (!correct_list.some(e => e.value === text.value)) {
        correct_list[correct_cnt].value = text.value
        correct_cnt++;
        update_val(correct_val, correct_cnt);
      }
    } else if (mousex < two.width * 2/3) {
      if (!pass_list.some(e => e.value === text.value)) {
        pass_list[pass_cnt].value = text.value
        pass_cnt++;
        update_val(pass_val, pass_cnt);
      }
    } else {
      if (!wrong_list.some(e => e.value === text.value)) {
        // special case; we discard a card as well, so we use 'pass' for this
        wrong_list[wrong_cnt].value = text.value
        wrong_cnt++;
        if (correct_cnt + pass_cnt + wrong_cnt == game_len) {
          // special case; if our last card was wrong, we remove the most recent "Correct"
          // card, so we'll just use "pass" for this as well.
          pass_list[pass_cnt].value = correct_list[correct_cnt].value
          pass_cnt++;
          correct_cnt--;
          correct_list[correct_cnt].value = "";
        } else {
          pass_list[pass_cnt].value = "???"
          pass_cnt++;
        }
        update_val(wrong_val, wrong_cnt);
        update_val(pass_val, pass_cnt);
      }
    }
    word_used = true;
    // check if we've finished game
    if (correct_cnt + pass_cnt + wrong_cnt == game_len) {
      game_finished = true;
      for (const winning_msg of winning_msgs) {
        if (correct_cnt >= winning_msg[0]) {
          text.value = winning_msg[1];
          text.size = winning_text_size;
          break;
        }
      }
    }
  } else if (mousey <= two.height * 2.5/den) {
    word_used = false;
    var new_word = "";
    while(words_used.length < words.length) {
      new_word = words[getRandomInt(words.length)]
      if (!words_used.includes(new_word)) {
        break;
      }
    }
    if (words_used.length === words.length) {
      text.value = "NO MORE WORDS"
      allow_game = false
    } else {
      text.value = new_word
      words_used.push(new_word)
      allow_game = true;
    }
  }
  two.update()
}
