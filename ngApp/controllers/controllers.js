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
     var init = false;
    $scope.show_options = true;
    $scope.loading_message = "";
    $scope.show_demo = true;


    
    setTimeout(function(){
      var loading_screen = pleaseWait({
        logo: "/ngApp/content/u.svg",
        backgroundColor: '#f46d3b',
        loadingHtml: "<p class='loading-message'>Loading, please wait...<p><div class='spinner'><div class='double-bounce1'></div><div class='double-bounce2'></div></div>"
      });
    }, 2000);
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
  constructor() {

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