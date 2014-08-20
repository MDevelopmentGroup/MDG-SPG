'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope','$http', function($scope,$http) {
        $scope.newProject = function (Name, Data){$http.post("/brokerspg/createproject/"+Name,Data)
            .success(function(data){
                console.log("Созданы область и БД")}).error(function(data,status){
                console.log("Что то пошло не так :(" + status) });
        }
        $scope.newClass = function (NameSpace, Data){$http.post("/brokerspg/createclass/"+NameSpace,Data)
            .success(function(data){
                console.log("Создан класс " + Data.Name +" в области " + Data.namespace)}).error(function(data,status){
                console.log("Класс не создан :(" + status + data) });
        }
        /*
        *
        * */
        $scope.newProperty = function (Data){$http.post("/brokerspg/createproperty",Data)
            .success(function(data){
                console.log("Создано свойство " + Data.Name)}).error(function(data,status){
                console.log("Свойство не создано :(" + status + data) });
        }
        $scope.Generate = function (Data,Name,Pack){$http.post("/brokerspg/Generate/"+Name+"/"+Pack,Data)
            .success(function(data){
                console.log("Финальная генерация произведена ")}).error(function(data,status){
                console.log("Не генерит :(" + status + data) });
        }
        $scope.GenButton = function(){
            var NameSpace = $scope.ProjectName;
            $http.post("/brokerspg/createproject/"+NameSpace)
                .success(function(data){
                    console.log("Созданы область и БД")


                }).
                error(function(data,status){console.log("Что то пошло не так :(" + status) });

        }
        $scope.Test=function() {
            $scope.resultIsOk=1;
            // создаём БД, монтируем её, область и связанные с ней веб приложение и брокер
            $scope.newProject($scope.ProjectName,"");
            var NameSpace = $scope.ProjectName;
            // создаём классы
             for (var i = $scope.Classes.length - 1; i >= 0; i--) {
                var Class =  $scope.Classes[i];
                 Class.namespace = NameSpace;
                 Class.nameClass = $scope.PackName + "." + Class.Name;
                 Class.Super =  "%Persistent,%Populate";
                 Class.Abstract = "0";
                 Class.Description = "This is auto generated Class by SPG"
                 $scope.newClass(NameSpace,Class);
                console.log("****** class ****** ")
                console.log($scope.Classes[i].Name);
                 console.log("properties - ")
                 // создаём свойства
                for (var j = $scope.Classes[i].Properties.length - 1; j >= 0; j--) {
                    var Property =  $scope.Classes[i].Properties[j];
                    console.log("1--"+Property)
                    Property.namespace = Class.namespace;
                    Property.nameClass = Class.nameClass;
                    Property.nameProperty = Property.Name;
                    Property.Type = "%String";
                    Property.Relationship = "0";
                    Property.Required = "0";
                    Property.Calculated = "0";
                    console.log(Property)
                    $scope.newProperty(Property);
                    console.log($scope.Classes[i].Properties[j].Name);
                }
            }
            // создаём веб часть и обработчики
            var z = [];
            $scope.Generate(z,NameSpace,$scope.PackName);
            $scope.resultIsOk=0;
        }




  }])
  .controller('MyCtrl2', ['$scope','$http', function($scope,$http) {
        $scope.Generate = function (Data,Name,Pack){$http.post("/brokerspg/Generate2/"+Name+"/"+Pack,Data)
            .success(function(data){
                $scope.resultIsOk=0;
                $scope.inProgress=1;
                console.log("Финальная генерация произведена ")}).error(function(data,status){
                console.log("Не генерит :(" + status + data) });
        }

        $scope.resultIsOk=1;
        $scope.GeneratePrj = function(){

          /*  var cl = $scope.ClassList;
            cl.list =  $scope.Classes;
            cl.namespace = $scope.ProjectName;
            cl.package = $scope.PackName;*/
            $scope.Generate($scope.Classes,$scope.ProjectName,$scope.PackName);
            //$scope.Generate($scope.Classes,$scope.ProjectName,$scope.PackName);

/*
            $scope.newProject = function (Name, Data){$http.post("/brokerspg/createproject/"+Name,Data)
                .success(function(data){
                    console.log("Созданы область и БД");
                    // в случае успеха создаём остальное
                }).
                error(function(data,status){console.log("Что то пошло не так :(" + status) });
            }
*/
        }

  }]);
