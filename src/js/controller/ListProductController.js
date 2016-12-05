var app = require('../Myapp');

app
 .controller('ListProductController', function($scope) {

    $scope.products = [
      {
        id: 1,
        title: 'la Computadora Vieja',
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