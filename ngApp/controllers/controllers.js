export class HomeController {
  constructor($scope, $q, $timeout) {



    $scope.button = document.getElementById('TypedButton');
    function toggleButton() {
      $scope.button.classList.toggle('fade');
    }



    var loading_screen = pleaseWait({
      logo: "/ngApp/content/u.svg",
      backgroundColor: '#f46d3b',
      loadingHtml: "<p class='loading-message'>Loading, please wait...<p><div class='spinner'><div class='double-bounce1'></div><div class='double-bounce2'></div></div>"
    });

    $scope.i = 0;
    $scope.txt = 'Lorem ipsum typing effect!'; /* The text */
    $scope.speed = 75 /* The speed/duration of the effect in milliseconds */
    var deferred = $q.defer();


    $scope.typeWriter = function (text, id) {



      if ($scope.i < text.length) {
        document.getElementById(id).innerHTML += text.charAt($scope.i);
        $scope.i++;

        $timeout($scope.typeWriter.bind(null, text, id), $scope.speed);
      } else {
        $scope.i = 0;
        deferred.resolve(true);

      }

      return deferred.promise;
    }



    function finishLoad() {
      loading_screen.finish();
    }

    setTimeout(finishLoad, 3000);
    setTimeout(typewriting, 3800);
    // setTimeout(toggleButton, 4000);



    function typewriting() {

      $scope.typeWriter("Jesse Jones", "Name").then(function () {

        deferred = $q.defer();
        $scope.typeWriter("Web Developer", "Title").then(function () {
          deferred = $q.defer();
          $scope.typeWriter("Front End / Back End Developer", "Title2").then(function () {
            toggleButton();

          })
        });
      }, function () {
        console.log("Failed");
      })

    }

  }
}



export class AboutController {
  constructor() {

  }
}


export class skillsCtrl {
  constructor($scope) {
    $scope.sphereView = function () {
      try {
        TagCanvas.Start('myCanvas', 'tags', {
          textColour: '#dbba0b',
          outlineColour: '#dbba0b',
          reverse: true,
          depth: 1.3,
          maxSpeed: 0.08
        });
      } catch (e) {
        // something went wrong, hide the canvas container
        document.getElementById('myCanvasContainer').style.display = 'none';
      }
    };
    this.$onInit = function () {
      $scope.sphereView();
    }
  }

}


export class contactCtrl {
  constructor() {
    this.message = 'ContactCtrl message ';
  }
}