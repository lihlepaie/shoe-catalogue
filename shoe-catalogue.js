var myTemplate = document.querySelector('.myTemplate');
var sizedrpDwn = document.querySelector('.myTemplate1')
var colordrpDwn = document.querySelector('.myTemplate2')
var brandDrpDwn = document.querySelector('.myTemplate3')
var colors = document.querySelector('.color');
var brand = document.querySelector('.brand')
var sizeSelected = document.querySelector('.sizes');
var searchShoes = document.querySelector('.shoeStock')
var li = document.querySelector('.li')
var shoe = document.querySelector('.shoeData')
var myshoeSize = document.querySelector('.myshoeSize')
var result = document.querySelector('.results')
var addbttn = document.querySelector('.addBtn')
var bttn = document.querySelector('.bttn')
var add_size = document.querySelector('#size')
var add_color = document.querySelector('#color')
var in_stock = document.querySelector('#in_stock')
var add_price = document.querySelector('#price')
var add_brand = document.querySelector('#brand')
var image = document.querySelector('.bttn')


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
    }
];
var myDropdown = Handlebars.compile(sizedrpDwn.innerHTML);
var results = myDropdown({
    shoes: shoes
});
var sizeSelected = document.querySelector('.selectSize');
sizeSelected.innerHTML = results;

var myDropdown = Handlebars.compile(colordrpDwn.innerHTML);
var results = myDropdown({
    shoes: shoes
});
var colors = document.querySelector('.selectColor');
colors.innerHTML = results;

var myDropdown = Handlebars.compile(brandDrpDwn.innerHTML);
var results = myDropdown({
    shoes: shoes
});
var brand = document.querySelector('.selectBrand')
brand.innerHTML = results;





var TemplateInstance = Handlebars.compile(myTemplate.innerHTML);






searchShoes.addEventListener('click', function() {
    var myshoe = [];
    for (var i = 0; i < shoes.length; i++) {
        if (sizeSelected.value == shoes[i].size || colors.value == shoes[i].color || brand.value == shoes[i].brand) {
            myshoe.push(shoes[i]);

        } else if (sizeSelected.value === 'All') {

            myshoe.push(shoes[i]);

        }

        var shoeHTML = TemplateInstance({
            shoes: myshoe
        })
        myshoeSize.innerHTML = shoeHTML
    }
})
addbttn.addEventListener('click', function() {
    // var add_color = document.getElementById("#color");
    //  //var new_color = document.getElementById("new_color");
    //  var add_size = document.getElementById("#size");
    //  var add_brand = document.getElementById("#brand");
    //  var add_price = document.getElementById("#price");
    //  var in_stock = document.getElementById("#in_stock");

    var imagePath = image.value.substring(12);

    if (add_color !== undefined && add_size !== undefined && add_brand !== undefined && add_price !== undefined && in_stock !== undefined) {
        shoes.push({
            color: add_color.value,
            size: Number(add_size.value),
            brand: add_brand.value,
            price: add_price.value,
            in_stock: in_stock.value,
            image: imagePath,
        })
    }
})
