// console.log(angular) -> con esto vemos si esta angular
// funcion autoinvocada : IIFE
/*

{{}} espera string

	ng-if

	ng-require

	ng-show = funciona como if pero siempre esta el elemento en el DOM escondido

*/

(function(){
	'use strict';

	//console.log(angular)

	//declaramos nuestra app
	angular.module('My-app', []) //con arreglo declaro aplicacion, cuando no hago referencia a instancia ya creada

	.controller('ListFeatureController', function($scope) { // en el callback vamos a definir todo lo que pase en el controlador, con scope le damos el ambiente donde va a trabajar

		$scope.title = 'Productos Destacados'


	})

	.controller('ListProductController', function($scope) {

	    $scope.products = [
	      {
	        id: 1,
	        title: 'Computadora Vieja',
	        image: 'http://placehold.it/350x150',
	        precio: 5000,
	        featured: true,
	        tags: []
	      },
	      {
	        id: 2,
	        title: 'Otro producto dirente...',
	        image: 'http://placehold.it/350x150',
	        precio: 10000,
	        featured: false,
	        tags: ['viejo', 'comida']
	      },
	    ]
	  })

	.controller('NavigationController', function($scope) { // en el callback vamos a definir todo lo que pase en el controlador, con scope le damos el ambiente donde va a trabajar


	})

	.controller('FormController', function($scope) { // en el callback vamos a definir todo lo que pase en el controlador, con scope le damos el ambiente donde va a trabajar

		$scope.form = {

		imgTitle : "Imagen de Producto",
		title  : "Producto",
		description : "Discripcion del producto"

		}

	})

	.controller('ProductController', function($scope) { // en el callback vamos a definir todo lo que pase en el controlador, con scope le damos el ambiente donde va a trabajar

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

})();