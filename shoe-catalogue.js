var shoes = [{
        color: 'Blue',
        price: 1200,
        in_stock: 12,
        size: 4,
        brand: 'Nike',
        image: 'AirMax.jpg'
    },
    {
        color: 'Grey',
        price: 750,
        in_stock: 22,
        size: 5,
        brand: 'Adidas',
        image: 'Adidas.jpg'
    },
    {
        color: 'White',
        price: 550,
        in_stock: 40,
        size: 6,
        brand: 'Superga',
        image: 'superga.jpg'
    },
    {
        color: 'Black',
        price: 800,
        in_stock: 17,
        size: 7,
        brand: 'Puma',
        image: 'puma.jpg'
    },

];
var myTemplate = document.querySelector('.myTemplate');
var colors = document.querySelector('.color');
var brandSelected = document.querySelector('.brand')
var sizeSelected = document.querySelector('.size');
var size = document.querySelector('.size')
var searchShoes = document.querySelector('.shoeStock')
var li = document.querySelector('.li')
var shoe = document.querySelector('.shoeData')
var myshoeSize = document.querySelector('.myshoeSize')


var TemplateInstance = Handlebars.compile(myTemplate.innerHTML);


var myshoe = [];

// size.addEventListener('change', function(evt){
//   var sizeSelected = evt.terget;
//   //console.log(sizeSelected.value)
//   for (var i = 0; i < myshoe.length; i++) {
//     var color = myshoe[i]
//     if (color(sizeSelected.value)) {
//       shoesToDisplay.push(myshoe[i]);
//     }else {
//       (brand(sizeSelected.value))
//       shoesToDisplay.push(myshoe[i]);
//     }
//   }
//   var shoeHTML = TemplateInstance({
//       shoes: myshoe
//   })

searchShoes.addEventListener('click', function() {
    for (var i = 0; i < shoes.length; i++) {
  if (sizeSelected.value == shoes[i].size || colors.value == shoes[i].color || brandSelected.value == shoes[i].brand ){
            myshoe.push(shoes[i]);

        }
    }

localStorage
    var shoeHTML = TemplateInstance({
        shoes: myshoe
    })
    myshoeSize.innerHTML = shoeHTML
});
