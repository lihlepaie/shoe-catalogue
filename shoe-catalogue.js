var shoes = [{
        color: 'Red',
        price: 1200,
        in_stock: 12,
        size: 4,
        brand: 'Nike'

    },
    {
        color: 'Brown',
        price: 750,
        in_stock: 22,
        size: 5,
        brand: 'Adidas'

    },


    {
        color: 'Green',
        price: 550,
        in_stock: 40,
        size: 6,
        brand: 'Supegar'



    },
    {
        color: 'Blue',
        price: 800,
        in_stock: 17,
        size: 7,
        brand: 'Jordan'


    },
];


var myTemplate = document.querySelector('.myTemplate');
var color = document.querySelector('.color');
var size = document.querySelector('.size')
var searchShoes = document.querySelector('.shoeStock')
var li = document.querySelector('.li')
var shoe = document.querySelector('.shoe')


var TemplateInstance = Handlebars.compile(myTemplate.innerHTML);

searchShoes.addEventListener('click', function() {
            var myshoe = [];
            var mycolor = color.value;
            var mysize = size.value;

            for (var i = 0; i < shoes.length; i++) {
                var shoecolor = (shoes[i].color == mycolor || mycolor == 'All')
                var shoesize = (shoes[i].size == mysize|| mysize == 'All')
                if (shoecolor) {
                    shoes.push(shoes)

                }
                shoe.innerHTML = TemplateInstance({shoes: myshoe})

                }
              });
