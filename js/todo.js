var todo = angular.module('todoApp', []);
todo.controller('todoController', ['$scope', function($scope) {
    $scope.todos = [{
        'title': 'my first task',
        'done': false
    }];
    $scope.totalitems=0;
    $scope.remainingitems=0;
    $scope.selecteditems=0;

    $scope.addTodo = function() {
        $scope.todos.push({
            'title': $scope.todoItem,
            'done': false
        });
        $scope.todoItem = "";
    }
    $scope.clearTodo = function() {
        $scope.todos = $scope.todos.filter(function(item) {
            return !item.done;
        })
        console.log($scope.todos);

    }
    $scope.clearAll = function() {
        $scope.todos = [];
    }
    $scope.selectAll=function(){
        flag=true;
        $scope.todos.forEach(function loop(item){
            if(!item.done){
                $scope.todos.forEach(function loop(i){
                    i.done=true;
                    flag=false;
                });
            }
        });
            if(flag){
                $scope.todos.forEach(function loop(item){
                    item.done=false;
                });
            }
    }
}]);
