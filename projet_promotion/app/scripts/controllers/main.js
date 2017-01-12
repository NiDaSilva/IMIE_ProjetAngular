/**
 * Created by ndasilva on 22/12/2016.
 */
var app = angular.module("route-app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/default.html",
            controller: "defaultCtrl"
        })
        .when("/promotions", {
            templateUrl: "views/promotions.html",
            controller: "promoCtrl"
        })
        .when("/formateurs", {
            templateUrl: "views/formateurs.html",
            controller: "formatCtrl"
        })
        .when("/admin", {
            templateUrl: "views/admin.html",
            controller: "adminCtrl"
        })
});

app.controller("mainCtrl", function ($scope, $location) {
    $scope.go = function (path) {
        $location.path(path).replace();
    }
});

app.controller("defaultCtrl", function ($scope) {
    $scope.message = "Cliquer sur le bouton afin de voir nos produits";
});

app.controller("promoCtrl", function ($scope, $http) {
    $scope.majmodules = function () {
        $http({
            method: "GET",
            url: "/modules"
        }).then(function successCallback(response) {
            $scope.lesmodules = response.data;
        }, function errorCallback() {
            alert("Erreur dans la recupération des données");
        });
    };
    $scope.majpromo = function () {
        $http({
            method: "GET",
            url: "/promotions"
        }).then(function successCallback(response) {
            $scope.lespromotions = response.data;
        }, function errorCallback() {
            alert("Erreur dans la recupération des données");
        });
    };
    $scope.majformateurs = function () {
        $http({
            method: "GET",
            url: "/formateurs"
        }).then(function successCallback(response) {
            $scope.lesformateurs = response.data;
        }, function errorCallback() {
            alert("Erreur dans la recupération des données");
        });
    };
});

app.controller("formatCtrl", function ($scope , $http) {
    $http({
        method: "GET",
        url: "/formateurs"
    }).then(function successCallback(response) {
        $scope.lesformateurs = response.data;
    }, function errorCallback() {
        alert("Erreur dans la recupération des données");
    });
});

app.controller("adminCtrl", function ($scope , $http) {
    $scope.getCursus = function () {
        $http({
            method: "GET",
            url: "/cursus"
        }).then(function successCallback(response) {
            $scope.lesCursus = response.data;
        }, function errorCallback() {
            alert("Erreur dans la recupération des données");
        });
    };
    $scope.ajoutCursus = function () {
        $http.post('/ajoutCursus', {
            nom: $scope.nom
        }).then(function(response) {
            alert("Ajout du cursus " + $scope.nom);
        });
    };
    $scope.getPromo = function () {
        $http({
            method: "GET",
            url: "/promotions"
        }).then(function successCallback(response) {
            $scope.lesPromotions = response.data;
        }, function errorCallback() {
            alert("Erreur dans la recupération des données");
        });
    };
    $scope.getFormateurs = function () {
        $http({
            method: "GET",
            url: "/formateurs"
        }).then(function successCallback(response) {
            $scope.lesFormateurs = response.data;
        }, function errorCallback() {
            alert("Erreur dans la recupération des données");
        });
    };
    $scope.getModules = function () {
        $http({
            method: "GET",
            url: "/modules"
        }).then(function successCallback(response) {
            $scope.lesModules = response.data;
        }, function errorCallback() {
            alert("Erreur dans la recupération des données");
        });
    };
    $scope.getModulesAdd = function () {
        $http({
            method: "GET",
            url: "/modulesAdd"
        }).then(function successCallback(response) {
            $scope.lesModulesAdd = response.data;
        }, function errorCallback() {
            alert("Erreur dans la recupération des données");
        });
    };
});