var myTemplate = document.querySelector('.myTemplate');
var sizedrpDwn= document.querySelector('.myTemplate1')
var colordrpDwn = document.querySelector('.myTemplate2')
var brandDrpDwn = document.querySelector('.myTemplate3')
var colors = document.querySelector('.color');
var brandSelected = document.querySelector('.brand')
var sizeSelected = document.querySelector('.sizes');
var searchShoes = document.querySelector('.shoeStock')
var li = document.querySelector('.li')
var shoe = document.querySelector('.shoeData')
var myshoeSize = document.querySelector('.myshoeSize')
var result = document.querySelector('.results')


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
        brand: 'superga',
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
    {
        color: 'Pink',
        price: 100,
        in_stock: 3,
        size: 8,
        brand: 'Pringle',
        image: 'pringle.jpg'
    },

];
var myDropdown = Handlebars.compile(sizedrpDwn.innerHTML);
var results =myDropdown({shoes: shoes});
var sizeSelected = document.querySelector('.selectSize')
sizeSelected.innerHTML=results;

var myDropdown = Handlebars.compile(colordrpDwn.innerHTML);
var results =myDropdown({shoes: shoes});
var colors = document.querySelector('.selectColor')
colors.innerHTML=results;

var myDropdown = Handlebars.compile(brandDrpDwn.innerHTML);
var results =myDropdown({shoes: shoes});
var brand = document.querySelector('.selectBrand')
brand.innerHTML=results;





var TemplateInstance = Handlebars.compile(myTemplate.innerHTML);


var myshoe = [];



searchShoes.addEventListener('click', function() {
    for (var i = 0; i < shoes.length; i++) {
  if (sizeSelected.value == shoes[i].size || colors.value == shoes[i].color || brand.value == shoes[i].brand){
            myshoe.push(shoes[i]);

          }
          else if (sizeSelected.value === 'All')
          myshoe.push(shoes[i]);
          var shoeHTML = TemplateInstance({shoes: myshoe})
          myshoeSize.innerHTML = shoeHTML
}
})
