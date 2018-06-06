export class HomeController {
   constructor($scope, $q, $timeout) {

     $scope.i = 0;
     $scope.txt = 'Lorem ipsum typing effect!'; /* The text */
     $scope.speed = 100; /* The speed/duration of the effect in milliseconds */

     var deferred = $q.defer();
   
    
     $scope.typeWriter = function (text, id) {

      
      
       if ($scope.i < text.length) {
         document.getElementById(id).innerHTML += text.charAt($scope.i);
         $scope.i++;

         $timeout($scope.typeWriter.bind(null, text, id), $scope.speed);
       } else {
         $scope.i=0;
         deferred.resolve(true);
         
       }

       return deferred.promise;
     }
     $scope.typeWriter("Jesse Jones", "Name").then(function(){

      deferred = $q.defer();
      $scope.typeWriter("Web Developer", "Title").then(function(){
        deferred = $q.defer();
        $scope.typeWriter("Front End / Back End Developer", "Title2")
      });
    }, function(){
      console.log("Failed");
    })
    
   }
}


export class AboutController {
  constructor($scope, $q, $timeout) {

    $scope.i = 0;
    $scope.txt = 'Lorem ipsum typing effect!'; /* The text */
    $scope.speed = 50; /* The speed/duration of the effect in milliseconds */

    /*this.$onInit = function(){
      $scope.typeWriter('Test MOFO DAMN THIS TOOKO SO LONG', 'demo')
    } */

    function asyncWrite(text, id) {
      return $q(function(resolve, reject){
        if ($scope.i < text.length) {
          document.getElementById(id).innerHTML += text.charAt($scope.i);
          $scope.i++;
  
          $timeout($scope.typeWriter.bind(null, text, id), $scope.speed);
        } else {
          $scope.i=0;
          resolve();
        }
      })
    }
 
    $scope.typeWriter("some text", "demo").then(function(){
      $scope.typeWriter("text2", "demo2");
    })
   
    
    $scope.typeWriter = function (text, id) {

      var defer = $q.defer();
      
      if ($scope.i < text.length) {
        document.getElementById(id).innerHTML += text.charAt($scope.i);
        $scope.i++;

        $timeout($scope.typeWriter.bind(null, text, id), $scope.speed);
      } else {
        $scope.i=0;
        defer.resolve(true)
      }

      return defer.promise;
    }

    
  }
}


export class skillsCtrl {
  constructor() {
    this.message = '';
  }
}


export class contactCtrl {
  constructor() {
    this.message = 'ContactCtrl message ';
  }
}