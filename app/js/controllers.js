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
        $scope.Generate = function (Data,Name){$http.post("/brokerspg/Generate/"+Name+"/"+Name,Data)
            .success(function(data){
                console.log("Финальная генерация произведена ")}).error(function(data,status){
                console.log("Не генерит :(" + status + data) });
        }

        $scope.Test=function() {
            $scope.resultIsOk='';
            // создаём БД, монтируем её, область и связанные с ней веб приложение и брокер
            $scope.newProject($scope.ProjectName,"");
            var NameSpace = $scope.ProjectName;
            // создаём классы
             for (var i = $scope.Classes.length - 1; i >= 0; i--) {
                var Class =  $scope.Classes[i];
                 Class.namespace = NameSpace;
                 Class.nameClass = $scope.ProjectName + "." + Class.Name;
                 Class.Super =  "%Persistent,%Populate";
                 Class.Abstract = "0";
                 Class.Description = "This is auto generated Class by SPG"
                 $scope.newClass(NameSpace,Class);
                console.log("class - "+$scope.Classes[i].Name);
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
                    console.log("2--"+Property)
                    $scope.newProperty(Property);
                    console.log(" property  - "+$scope.Classes[i].Properties[j].Name);
                }
            }
            // создаём веб часть и обработчики
            var z = [];
            $scope.Generate(z,NameSpace);
            $scope.resultIsOk='Проект доступен <a href="/web/' + NameSpace + '/index.html" target = "_blank">';
        }



  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
