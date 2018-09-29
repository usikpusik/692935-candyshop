'use strict';

var GOOD_AMOUNT = 26;
var GOOD_AMOUNT_CARD = 3;
var NAMES = ['Чесночные сливки', 'Огуречный педант', 'Молочная хрюша', 'Грибной шейк', 'Баклажановое безумие', 'Паприколу итальяно', 'Нинзя - удар васаби', 'Хитрый баклажан', 'Горчичный вызов', 'Кедровая липучка', 'Корманный портвейн', 'Чилийский задира', 'Беконовый взрыв', 'Арахис vs виноград', 'Сельдерейная душа', 'Початок в бутылке', 'Чернющий мистер чеснок', 'Раша федераша', 'Кислая мина', 'Кукурузное утро', 'Икорный фуршет', 'Новогоднее настроение', 'С пивком потянет', 'Мисс креветка', 'Бесконечный взрыв', 'Невинные винные', 'Бельгийское пенное', 'Острый язычок'];
var IMAGES = ['img/cards/ice-garlic.jpg', 'img/cards/ice-cucumber.jpg', 'img/cards/ice-pig.jpg', 'img/cards/ice-mushroom.jpg', 'img/cards/ice-eggplant.jpg', 'img/cards/ice-italian.jpg', 'img/cards/gum-wasabi.jpg', 'img/cards/gum-eggplant.jpg', 'img/cards/gum-mustard.jpg', 'img/cards/gum-cedar.jpg', 'img/cards/gum-portwine.jpg', 'img/cards/gum-chile.jpg', 'img/cards/soda-bacon.jpg', 'img/cards/soda-peanut-grapes.jpg', 'img/cards/soda-celery.jpg', 'img/cards/soda-cob.jpg', 'img/cards/soda-garlic.jpg', 'img/cards/soda-russian.jpg', 'img/cards/marmalade-sour.jpg', 'img/cards/marmalade-corn.jpg', 'img/cards/marmalade-caviar.jpg', 'img/cards/marmalade-new-year.jpg', 'img/cards/marmalade-beer.jpg', 'img/cards/marshmallow-shrimp.jpg', 'img/cards/marshmallow-bacon.jpg', 'img/cards/marshmallow-wine.jpg', 'img/cards/marshmallow-beer.jpg', 'img/cards/marshmallow-spicy.jpg'];
var CONTENTS = ['молоко', 'сливки', 'вода', 'пищевой краситель', 'патока', 'ароматизатор бекона', 'ароматизатор свинца', 'ароматизатор дуба, идентичный натуральному', 'ароматизатор картофеля', 'лимонная кислота', 'загуститель', 'эмульгатор', 'консервант: сорбат калия', 'посолочная смесь: соль, нитрит натрия', 'ксилит', 'карбамид', 'вилларибо', 'виллабаджо'];
//функцию генерации случайных данных
var randomIntegerRound = function (min, max) {
  var rand = min - 0.5 + Math.random () * (max - min + 1)
  rand = Math.round(rand);
  return rand;
};
//функция рандомной строки
var randomIntegrStroke = function () {
  var sentense = [];
  var sentenseContentLength = randomIntegerRound (1, CONTENTS.length - 1);
  for (var j = 0; j < sentenseContentLength; j++) {
    var partSentense = /** string */ CONTENTS[randomIntegerRound (0, CONTENTS.length - 1)];
    var findCallback = function (word) {
      return word === partSentense;
    };
    if (sentense.find (findCallback) == undefined) {
      sentense.push (partSentense);
    }
  }
  return sentense.join(', ');
};

//функция создания карточки товара
var createGoods = function () {
  var result = [];
  for (var i = 0; i < GOOD_AMOUNT; i++) {
    var good = {};
    good.name = NAMES[i];
    good.picture = IMAGES[Math.floor (Math.random () * IMAGES.length)];
    good.amount = randomIntegerRound (0, 20);
    good.price = randomIntegerRound (100, 1500);
    good.weight = randomIntegerRound (30, 300);
    good.rating = {
      value: Math.round(Math.random () * 5),
      number: randomIntegerRound (10, 900)
    };
    good.nutritionFacts = {
      sugar: Math.round (Math.random ()),
      energy: randomIntegerRound (70, 500),
      contents: randomIntegrStroke (CONTENTS)
    };
    result.push(good);
  }
  return result;
};
//вызываю функцию и она мне создает массив с товарами
createGoods ();

//задание 2
var loadedCatalog = document.querySelector ('.catalog__cards');
loadedCatalog.classList.remove ('catalog__cards--load');

var catalogHide = document.querySelector ('.catalog__load');
catalogHide.classList.add ('visually-hidden');
//сделала несколько карточек товаров
var card_arr = [];
for (var i = 0; i < GOOD_AMOUNT_CARD; i++) {
  var content = createGoods(i);
  card_arr.push (content);
}
// var cardOrder = document.querySelector('#card-order').content;
var cardOrder = document.getElementById ('card-order');
var goods_card = cardOrder.getElementsByClassName ('goods_card');

for (var i = 0; i < GOOD_AMOUNT_CARD; i++) {
  var temp = goods_card.cloneNode (true);
  var goods_card_title = temp.querySelector ('.card-order__title');
  var goods_card_img = temp.querySelector ('.card-order__img');
  var goods_card_price = temp.querySelector ('.card-order__price');
  var goods_card_count = temp.querySelector ('.card-order__count');
  var goods_card_weight = temp.querySelector ('.card-order__weight');
  var goods_card_star_count = temp.querySelector ('.star__count');
  var goods_card_composition_list = temp.querySelector ('.card__composition-list');
  var goods_card_characteristic = temp.querySelector ('.card__characteristic');
  goods_card_title.textContent = card_arr[i].title;
  goods_card_price.textContent = card_arr[i].p <span class="card__currency">₽</span><span class="card__weight">/ card_arr[i].weight Г</span>;
  goods_card_img.src = card_arr[i].img;
  goods_card_count.textContent = card_arr[i].amount;
  goods_card_star_count.textContent = card_arr[i].rating.number;
  goods_card_composition_list.textContent = card_arr[i].nutritionFacts.contents;
  if (nutritionFacts.sugar) {
    goods_card_characteristic.textContent = 'Содержит сахар'
  } else {
    goods_card_characteristic.textContent = 'Без сахара'
  }
  if (card_arr[i].amount >= 0) {
    if (card_arr[i].amount = 0) {
      catalog__card.classList.add ('card--soon')
    };
    if (card_arr[i].amount > 5) {
      catalog__card.classList.add ('card--in-stock')
    } else {
      catalog__card.classList.add ('card--little')
    };
  }
  cardOrder.appendChild (temp);
}
