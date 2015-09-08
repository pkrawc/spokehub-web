angular
  .module('WeCtrl', [])
  .controller('WeController', function($scope) {
    $scope.greeting = "Hello World";

    $scope.conversations = [
      {
        question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, perferendis commodi amet soluta, voluptatum rerum explicabo delectus ad numquam officia dolorum minus quos repellendus.',
        date: new Date().toDateString(),
        author: {
          _userId: '17301283108231',
          name: 'The Users Name',
          location: 'City, Country',
          title: 'UX Designer'
        }
      },
      {
        question: 'Reiciendis maxime inventore, nihil placeat dolor.',
        date: new Date().toDateString(),
        author: {
          _userId: '17301283108231',
          name: 'The Users Name',
          location: 'City, Country',
          title: 'UX Designer'
        }
      },
      {
        question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis maxime inventore, nihil placeat dolor.',
        date: new Date().toDateString(),
        author: {
          _userId: '17301283108231',
          name: 'The Users Name',
          location: 'City, Country',
          title: 'UX Designer'
        }
      }
    ];


  });
