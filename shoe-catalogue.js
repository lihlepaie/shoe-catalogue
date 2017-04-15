var myTemplate = document.querySelector('.myTemplate');
var color = document.querySelector('.color');
var size = document.querySelector('.size')
var searchShoes = document.querySelector('.shoeStock')
var li = document.querySelector('.li')
var shoe = document.querySelector('.shoeData')
var myshoeSize = document.querySelector('.myshoeSize')


var TemplateInstance = Handlebars.compile(myTemplate.innerHTML);

var shoes =[
        {color: 'Red', price: 1200,  in_stock: 12,  size: 4,  brand: 'Nike' , image: 'arfox.jpg'},
        {color: 'Brown', price: 750,  in_stock: 22, size: 5, brand: 'Adidas' , image: 'Adidas.jpg'},
        {color: 'Green', price: 550, in_stock: 40,  size: 6,  brand: 'Superga' , image: 'superga.jpg'},
        {color: 'Blue', price: 800,  in_stock: 17,  size: 7,  brand: 'Puma' , image: 'puma.jpg'},

];
var myshoe = [];

searchShoes.addEventListener('click', function(){
  var shoe = myshoeSize.value;
  myshoe.push(shoes);

  

var shoeHTML = TemplateInstance ({shoe:myshoe})
myshoeSize.innerHTML = shoeHTML
  });
