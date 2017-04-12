var myTemplate = document.querySelector('.myTemplate');
var color = document.querySelector('.color');
var size = document.querySelector('.size')
var searchShoes = document.querySelector('.shoeStock')
var li = document.querySelector('.li')
var displayed = document.querySelector('.display')

var TemplateInstance = Handlebars.compile(myTemplate.innerHTML);

var shoes =[
        {color: 'Red', price: 1200,  in_stock: 12,  size: 4,  brand: 'Nike' , image: 'arfox.jpg'},
        {color: 'Brown', price: 750,  in_stock: 22, size: 5, brand: 'Adidas'},
        {color: 'Green', price: 550, in_stock: 40,  size: 6,  brand: 'Supegar'},
        {color: 'Blue', price: 800,  in_stock: 17,  size: 7,  brand: 'Jordan'},
];

var display = displayed((shoes));
//displaying
