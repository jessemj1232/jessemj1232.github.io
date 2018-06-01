export class HomeController {

  constructor($q) {
    this.message = 'hello world';
    this.list = ['Car', 'Bike', 'Legs'];
    this.$q = $q;
    this.message = 'about page';
    this.i = 0;
    this.txt = "hello world";

    this.speed = 500;

    var scope = this;
    scope.firstName = "Jesse Jones";
    scope.Title = "Web Developer";
    scope.Title2 = "Front End/ Back End Developer";






    scope.wordFunction = function (text, id) {
      var deferred = scope.$q.defer();

      if (scope.i < text.length) {
        document.getElementById(id).innerHTML += text.charAt(scope.i);
        scope.i++;
        setTimeout(scope.wordFunction(text, id), scope.speed);
      }
      else {
        deferred.resolve(true);
      }

      return deferred.promise;
    }
    //onit type out first name then title then title 2
    scope.wordFunction(scope.firstName, "Name").then(function () {
      scope.i = 0;
      setTimeout(scope.wordFunction(scope.Title, "Title").then(function () {
        scope.i = 0;
        setTimeout(scope.wordFunction(scope.Title2, "Title2"), 500);
      }), 500);
    });

  }

}


export class AboutController {
  constructor() {
    this.message = 'about page';
    this.i = 0;
    this.txt = "hello world";
    this.speed = 1000;

    var scope = this;

    this.typeWriter = function () {
      console.log("test1");

      if (scope.i < scope.txt.length) {
        document.getElementById("demo").innerHTML += scope.txt.charAt(scope.i);
        scope.i++;
        setTimeout(scope.typeWriter, scope.speed);
        console.log("test", scope.txt.length);
      }

    }
    this.typeWriter();
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