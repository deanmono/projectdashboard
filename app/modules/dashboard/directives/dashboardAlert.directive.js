'use strict';

angular.module('project.dashboard').directive('alert', function(){
    return {
        restrict: 'E',
        replace: true,
        scope: {
            alertInfo: '='
        },
        template: '<div class="alert alert-info col-xs-12 text-center" ng-show="alertInfo">Record Changed: {{alertInfo}} <button type="button" class="close" ng-click="alertInfo = false"><span aria-hidden="true">&times;</span></button></div>'
    }
});