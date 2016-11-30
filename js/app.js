// console.log(angular) -> con esto vemos si esta angular
// funcion autoinvocada : IIFE
(function(){
	'use strict';

	//console.log(angular)

	//declaramos nuestra app
	angular.module('My-app', []) //con arreglo declaro aplicacion, cuando no hago referencia a instancia ya creada

	.controller('ListFeatureController', function($scope) { // en el callback vamos a definir todo lo que pase en el controlador, con scope le damos el ambiente donde va a trabajar

		$scope.title = 'Productos Destacados'


	})

	.controller('ListProductController', function($scope) { // en el callback vamos a definir todo lo que pase en el controlador, con scope le damos el ambiente donde va a trabajar

		$scope.title = 'Lista de Productos'

	})

	.controller('NavigationController', function($scope) { // en el callback vamos a definir todo lo que pase en el controlador, con scope le damos el ambiente donde va a trabajar


	})

	.controller('ProductController', function($scope) { // en el callback vamos a definir todo lo que pase en el controlador, con scope le damos el ambiente donde va a trabajar

		$scope.image = "http://placehold.it/750x500";
		$scope.productTitle = "Producto A";
		$scope.fecha = "22/11/2016";
		$scope.precio = "$ 100.-"
		$scope.descripcion = "Producto bla bla bla"

	})

})();