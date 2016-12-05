var app = require('../Myapp');

app
 .controller('ProductController', function($scope) { 

		$scope.product = {

		image : "http://placehold.it/750x500",
		productTitle : "Producto A",
		fecha : "22/11/2016",
		precio : "$ 100.-",
		descripcion : "Producto bla bla bla",
		featured : true,
		tags: ['computadora','diseno','apple']

		}

 })