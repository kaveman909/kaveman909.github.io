import Two from 'https://cdn.skypack.dev/two.js@latest'

var elem = document.body;
var params = {
  fullscreen: true,
  autostart: true,
};
var two = new Two(params).appendTo(elem);
var text_size = two.width/8

var styles = {
  alignment: 'center',
  baseline: 'middle',
  size: text_size,
  family: 'Avenir Next',
  fill: 'rgba(255, 255, 255, 1)'
};

// 43
var winning_msgs = [
  [13, "Perfect score! Can you do it again?"],
  [12, "Incredible! Your friends must be impressed!"],
  [11, "Awesome! That's a score worth celebrating!"],
  [9, "Wow, not bad at all!"],
  [7, "You're in the average. Can you do better?"],
  [4, "That's a good start. Try again!"],
  [0, "Try again, and again, and again."],
]

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

// const words = ["TESTING", "PURPOSES", "HOWDOTO", "ANCIENTCRAFT", "aword", "another", "letsdoit", "cmon", "getthere", "wooot", "lotsowords", "friendship", "beetjuice", "prottractor", "tracterrr"]
const words = ["OSCAR","MECHANIC","GRAND","LIGHT","CIDER","TARGET","BUTCHER","TULIP","CURRY","EFFECT","HERCULES","LEMON","RESPECT","MAGNUM","SPROUT","WELL","FORTRESS","YEAR","HOOK","VINE","REMOTE","CHESS","STRAWBERRY","PROOF","SCROOGE","CARBON","SPIDER","WHISPER","DRIVE","ELEMENT","CONSPIRACY","PLOT","WIFE","TIGER","PRINCE","FANG","DOMINO","WALKER","ORBIT","CARLTON","ALARM","FAST","BINGE","BULL","INSERT","GRANT","ACE","KEEP","HEX","CARIBBEAN","ALICE","MAZE","HOLLY","PHOENIX","FOLD","CLIFF","BRAVE","VILLAIN","PACK","FICTION","CULT","RAP","KNOCK","KINDERGARTEN","GRAPH","SALSA","PINK","DIET","DIMENSION","HOWL","NAME","LURE","FOOTBALL","SONIC","TESLA","QUACK","AFTERLIFE","ANGER","TWIN","DUDE","JIGSAW","TILE","CURE","BASE","DRIZZLE","PANDORA","LASER","RACKET","GROUND","MERCURY","HORIZON","RENT","SKY","VOID","PHANTOM","LIGHTBULB","DENTIST","CEREAL","PIP","GROOVE","OPERATE","SECURITY","PRISM","PRIORITY","CLEAR","PANTHER","MUPPET","DESERT","BOOK","MINUTE","HAIL","TWIST","POINTLESS","ELF","CONTENTS","CYCLE","REBOOT","FREE","SPRING","EDGE","EVE","GHOSTBUSTERS","CLARK","ROCKET","VET","ROTARY","THUMB","DRESS","FEATHER","ODYSSEY","DISCHARGE","INTELLIGENCE","SURROUND","ZODIAC","FOUNDATION","REFEREE","HALLOWEEN","MARATHON","WILD","KIWI","ARM","PRESSURE","WEDNESDAY","WELLINGTON","AQUA","QUILT","PAUSE","PAINTING","BLUSH","WHISKEY","SCAR","MOTION","FLOOR","TERRITORY","COAL","DUMMY","DONKEY","SCROLL","SMITH","BRAZILIAN","DOWNLOAD","BOBBY","COUNTRY","MARTIAN","ABORIGINAL","DIAGONALLY","TIME","DOUBLE","WASH","COLLECT","GEORGE","CRAB","DRAGON","SPOILER","NEWTON","REPLAY","AERIAL","CAMERA","CONTINENT","SOCCER","SECOND","MONK","ACTIVE","HICCUP","TOXIC","WEALTH","HEEL","CAPTAIN","POCKET","SCRATCH","FINGER","SOLO","POTATO","STREET","LITTER","STICK","SUPER","FUSION","MOUNT","SUITCASE","HIP","INK","ONE","FAINT","PAPYRUS","MINIATURE","RESIDENT","COLOSSUS","STANDBY","HUSBAND","OPAL","STAFF","TRADE","TRIP","PENNY","REACTION","MINT","NEPTUNE","CAMEL","KEYBOARD","KOOKABURRA","FRANCE","PEAR","LODGE","PASSPORT","COMIC","STILL","CONNECT","MILD","TROLL","PIANO","SPOKE","MORAL","CANAL","SCOUT","HAMLET","TOAST","FORD","BOWLER","ZOOM","SHUT","NOISE","BEER","CITY","COVER","VICTORIA","FRINGE","CORNER","PILLAR","CHARGE","BATTERY","MIDNIGHT","DRILL","UNIT","RAMSAY","CHAD","BUDGET","YANK","NEBULA","BUDGIE","BOUNTY","ONION","PEANUT","LAST","POLISH","MAGIC","JAM","MUSICAL","GO","BABY","CHEF","KEY","EXPENSIVE","FLIP","DINOSAUR","RECORD","GENESIS","CHILLI","SPINE","CLOUD","SAW","MISS","VELOCITY","ROSEMARY","JELLY","CLAP","ALPHABET","MACRO","HAIRDRESSER","PRICE","MERMAID","FARE","MEMORY","REBEL","PUSH","SHINING","EXAM","EJECT","SOUND","MONSTER","INITIAL","ALBATROSS","VIBE","BREW","JACK","ASSEMBLE","OBSCURE","RACK","CHICKEN","CROW","TRAY","BEETLE","EXERCISE","PANDEMIC","SESAME","CONTROLLER","KIDNEY","SPECTRE","THEORY","FAITH","CLONE","OAK","JONES","FANTASY","EUROPE","VIRGINIA","DRUG","DASH","SKIP","ORGANISATION","ARENA","DICTIONARY","SUSHI","UNDER","AURORA","OTTOMAN","PALINDROME","BRAND","CORDIAL","QUESTION","STY","NORTH","VAN","KILLER","LACE","ROOT","CHINA","DUNGEON","DICE","JUDGE","HACK","MARVEL","CHASER","DALMATIAN","BLIZZARD","TOFU","STOMACH","CLAY","WATERFALL","INN","PREDATOR","JAZZ","UNDERCOVER","WALRUS","TASMANIA","BREAD","JOEY","DAREDEVIL","TOMATO","WEDGE","FROZEN","GAUNTLET","COUSIN","LEVER","PADDLE","BAIT","PASTA","CRICKET","SCOOP","CASE","CHURCH","BROWNIE","ANIMAL","GONG","HOT","ZONE","BASS","DISH","CHANNEL","CAKE","LEVEL","BOB","NAP","QUAD","BOND","DOLPHIN","LIBRARY","DUCT","BOIL","MIGHTY","PONG","CINEMA","TENSE","GAMMA","IDOL","SOUP","ECHO","QUARTZ","VALLEY","UTOPIA","RIO","FALL","SEASON","RIGHT","CIRCUIT","EXCALIBUR","JERSEY","SCRUB","FLOW","PROFESSOR","LIMA","WESTERN","MANNER","STUCK","DELIGHT","ROLLERCOASTER","DAGGER","TOM","NUT","DOLLAR","SAFETY","TINTIN","KEBAB","MAY","ENCYCLOPAEDIA","CRUSH","WAX","BUTLER","BRASS","NEUTRAL","ARK","STAPLE","BACHELOR","SHEEP","PRIVATE","BLEACH","SYMBOL","MANDARIN","RETURN","ARREST","FASHION","MARRIAGE","SWIFT","ACHIEVEMENT","LAP","FENCE","PRAWN","TEACH","OWL","EARNEST","PROM","ORWELL","BOUNDARY","DOME","BANJO","RISOTTO","SERIAL","TOKYO","GREEN","REAPER","PENDULUM","PANCAKE","MASTER","VERSE","WORLD","LANTERN","PROTEIN","BLIND","JAWS","PENTAGON","VIOLET","SUIT","BALLET","SCIENTIST","BEAT","SNARE","KERNEL","ANGLE","PYTHON","RISE","ROO","CALENDAR","PRIME","EAGLE","WARM","TURTLE","CUFF","MORPH","CATALOGUE","HAT","HELP","SALAD","WEST","STORM","REHAB","SHUFFLE","INHALE","FOX","MEDIUM","BASIL","CANDLE","JOKER","MULLET","WEEK","NET","TOLL","WATER","SQUASH","TRADITION","JOB","WORD","CHIEF","DUSTY","AROMA","UMPIRE","LICORICE","COMEDY","GOLD","OLIVE","SYSTEM","SIREN","GOOSE","GENERATION","BATH","CATFISH","BIG","CONE","BUSINESS","SPACE","PEARL","SOIL","TOUCHSCREEN","CITIZEN","TWITCH","BENDER","BILLABONG","CELL","ASTERIX","TOWN","BRANCH","CINDERELLA","CREPE","ISLAND","TAXI","SAIL","CHEDDAR","SHREK","POLE","VIKING","DANCE","HULK","GOAL","DEVIL","PRIMARY","TARZAN","SCREW","RAKE","COMPUTER","STARBUCKS","BALL","SERIES","NEST","SPICE","ELEPHANT","CARNIVAL","VENGEANCE","BOSS","EMERGENCY","CROSS","WALTZ","MAFIA","LARGE","MISSILE","MICROSOFT","SKI","GENIUS","DRACULA","LION","SOCK","FRIDAY","COCKTAIL","MARIO","CORK","VIOLIN","PEACH","RAT","PLIER","AMAZON","TOBACCO","RULER","HANUKKAH","ELASTIC","PAN","FLASH","TUNNEL","POLICE","SIMPSON","LIGHTNING","NEWSPAPER","MOUNTAIN","JEDI","PIMENTO","SOMBRERO","CLOVER","BUTTON","CHEESE","CHEWBACCA","WIDOWMAKER","DOCTOR","NUCLEAR","LOTTERY","CEMETERY","CUPID","UMBRELLA","LEAP","TREASURE","PILOT","MICKEY","SEWER","GALAXY","MYTH","FACEBOOK","ACORN","BONE","BRIDGE","CRANE","OPERATION","MUSE","DEFENSE","SOFA","MOZART","RING","PIZZA","KNIGHT","PEACE","FLOWER","SWITZERLAND","SYRUP","FOREST","SCALE","ZEUS","COCKROACH","PIRATE","VACATION","MAGNET","FORK","BUFFY","VOLCANO","PASSION","ROOSTER","ELECTRICITY","BAKER","PERFUME","FLAME","ZOMBIE","POISON","STAR","WOLF","ANNIVERSARY","HAMMER","CHILE","GUMBO","EMPEROR","POPE","HOLLYWOOD","MOSQUITO","SPEAR","PURSE","END","BOARD","FIREMAN","GLASS","BURRITO","GREECE","SLIPPER","LEAF","COUGAR","REVOLUTION","SAHARA","GROTTO","CASINO","CANDY","FOUNTAIN","FLINTSTONE","ROBOT","LANGUAGE","YELLOW","MUSHROOM","PIGEON","PIKACHU","THUNDER","GARDEN","SHACK","TRUCE","MUMMY","FAIR","KARATE","PARROT","OLYMPICS","CLIMB","LAWYER","TOLKIEN","RIVER","CARPET","PONY","CROWN","NEW","TARANTINO","BARBIE","CHOCOLATE","SNOW","TIE","WIND","THOUGHT","FRANKENSTEIN","SHELF","ACCENT","SHOWER","STEW","CANADA","ZOO","PIPE","TOWEL","VENUS","OCTOPUS","OPERA","LADYBUG","MUSTARD","SHERLOCK","BOTTLE","VIRUS","MUSIC","THROAT","AMERICA","COFFEE","FEVER","GOOGLE","BOW","MARS","GOLF","TICKET","REGISTER","PLAYSTATION","BLOND","IRIS","LIMB","OPRAH","NINJA","COMFORTER","HUNTER","VEGETABLE","OVEN","SOCKET","EASTER","HOSE","RAIL","BUTTERFLY","POWDER","PORCELAIN","MARKET","COCOON","BARBECUE","PANDA","DREAM","BELLYBUTTON","CAVITY","SLEEVE","GREMLINS","POKER","PIE","SUGAR","THEATER","SHOVEL","DUNE","PREGNANT","CAT","PALACE","ELECTION","HONEY","RAMBO","REGGAE","MANURE","LAKE","MONKEY","LIGHTHOUSE","NEIGHBORHOOD","ROCK","NEEDLE","SOAP","PRISON","HOLE","PUNK","EVENING","MAP","NUMBER","DECATHLON","RUM","METAL","TUNA","KING","BAND","ALCOHOL","LAVA","CANVAS","VAMPIRE","MONOPOLY","CARTOON","HOTEL","DARWIN","PARACHUTE","CANNON","BINOCULARS","MIRAGE","RAMSES","BONFIRE","CROSSROADS","PRINCESS","GUILLOTINE","MAGICIAN","HOCKEY","BANANA","FITZGERALD","CAESAR","NOODLE","WHEAT","SHELL","SHAKESPEARE","GIANT","FOAM","CAVE","KNIFE","PILLOW","ARMSTRONG","SWORD","FLIGHT","EXPLOSION","PENGUIN","GANDHI","OASIS","CROCODILE","JEWELRY","SUBWAY","GLASSES","STING","JACKSON","CIGARETTE","BRACELET","WEATHER","TOWER","TATTOO","SPIELBERG","APPLE","BOXING","HEART","MOSCOW","POOL","UNICORN","ORANGE","MELON","ANCHOR","ISRAEL","CACTUS","TENNIS","PEPPER","TRIANGLE","DOLL","ITALY","SCENE","POLAR","MOUSE","NECKLACE","FARM","BELGIUM","MOON","CAFETERIA","HANDLE","TOOL","STRING","AUSTRALIA","CASTLE","GUARD","PUPPET","GAME","VEGAS","SAFE","PLANE","BRAIN","MASK","CONCERT","TROY","SHARK","LONELY","WAVE","SCHOOL","LEGO","HELICOPTER","COLONEL","SNAKE","CUP","PICASSO","WATCH","STALLION","MEXICO","WHITE","BALD","CATERPILLAR","HUMOR","ANTARCTICA","SAUSAGE","PLASTIC","RAY","CARTON","PEBBLE","EVEREST","TERMINATOR","LETTER","DRAG","PARADISE","EGG","NINTENDO","BET","SALT","MANUAL","FROST","HOUSE","GODFATHER","WAR","ROPE","WINE","CLUB","CHRISTMAS","STATION","LAMP","RADIO","GLADIATOR","SUN","BERRY","STUDY","GOTHIC","TITANIC","MACHINE","DWARF","CIRCUS","ELVIS","MOWER","STONE","TRAIN","SHRIMP","ROOM","CLEOPATRA","WINDOW","TANGO","RIPE","TEMPLE","SAND","FRIES","GRENADE","STUFFING","BRUSH","PIG","HUMAN","ALCATRAZ","SMOKE","HAZELNUT","DIAMOND","ROSE","GODZILLA","UNIFORM","RAIN","FIRE","HELMET","SHIP","BOWLING","CHURCHILL","RAM","SPY","CHIP","CANTEEN","PAIR","FAILURE","HISTORY","DISCO","PRESIDENT","MIRROR","PIT","FAIRY","LADDER","ANGEL","MAD","HAIR","MATRIX","MUSTACHE","BUBBLE","CHAIN","STARK","COOKIE","AVATAR","MILL","JUNGLE","NUN","FIRECRACKER","IRON","BATMAN","SONG","NILE","PUMP","ALADDIN","TUBE","BELT","BAR","MOUTH","CAROUSEL","PSYCHO","GRASS","DOPING","GARLIC","CUBE","ROCKY","MILK","ICE","FLUTE","CHAMPAGNE","SAFARI","ALIEN","CANE","MUSKETEER","THREAD","IKEA","CROISSANT","GHOST","STRAW","NAIL","POTTER","SPARTACUS","FUR","TORNADO","PYRAMID","ALLIANCE"];

var den = 9;
var text = two.makeText("TAP TO BEGIN", two.width/2, two.height * 2/den, styles);

var correct_cnt = 0;
var pass_cnt = 0;
var wrong_cnt = 0;

var correct_val = two.makeText(correct_cnt.toString(), two.width * 1/4, two.height * 3/den, styles_left);
var pass_val = two.makeText(pass_cnt.toString(), two.width * 2/4, two.height * 3/den, styles_center);
var wrong_val = two.makeText(wrong_cnt.toString(), two.width * 3/4, two.height * 3/den, styles_right);

var correct = two.makeText("Correct", two.width * 1/4, two.height * 4/den, styles_left);
var pass = two.makeText("Pass", two.width * 2/4, two.height * 4/den, styles_center);
var wrong = two.makeText("Wrong", two.width * 3/4, two.height * 4/den, styles_right);

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
  console.log(mousex, mousey);
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
        pass_list[pass_cnt].value = "???"
        wrong_cnt++;
        pass_cnt++;
        update_val(wrong_val, wrong_cnt);
        update_val(pass_val, pass_cnt);
      }
    }
    word_used = true;
    // check if we've finished game
    if (correct_cnt + pass_cnt + wrong_cnt >= game_len) {
      game_finished = true;
      for (const winning_msg of winning_msgs) {
        if (correct_cnt >= winning_msg[0]) {
          text.value = winning_msg[1]
          text.size = correct_list[0].size * 1.3
          break;
        }
      }
    }
  } else if (mousey <= two.height * 2.5/den) {
    word_used = false;
    // console.log(all_list.length);
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
