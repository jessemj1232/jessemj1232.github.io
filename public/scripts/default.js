angular.module('pleaseWaitApp', [])
  .controller('MainCtrl', ['$scope', '$window', '$timeout', function ($scope, $window, $timeout) {
    var init = false;
    $scope.show_options = true;
    $scope.loading_message = "";
    $scope.show_demo = true;


    $scope.toggleDemo = function () {
      $scope.show_demo = !$scope.show_demo;
      if ($scope.show_demo) {
        $window.loading_screen = $window.pleaseWait({
          logo: "/ngApp/content/u.svg",
          backgroundColor: '#f46d3b',
          loadingHtml: "<p class='loading-message'>Loading, please wait...<p><div class='spinner'><div class='double-bounce1'></div><div class='double-bounce2'></div></div>"
        });
      } else {
        $window.loading_screen.finish();
      }
    };
  }]);