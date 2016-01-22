'use strict';

angular.module('project.dashboard').controller('DashboardCtrl', [
    '$scope',
    'DashboardService',
    '$timeout',
    '$filter',
    function($scope, DashboardService, $timeout, $filter) {

        $scope.DashboardService = DashboardService;

        $scope.statuses = [
            {
                name: ''
            },
            {
                name: 'new'
            },
            {
                name: 'working'
            },
            {
                name: 'archived'
            },
            {
                name: 'delivered'
            }
        ];

        $scope.created = {
            dateStart:  new Date('05/19/2015'),
            dateEnd:  new Date()
        }

        $scope.modified = {
            dateStart:  new Date('05/19/2015'),
            dateEnd:  new Date()
        }

        $scope.budget = {
            min: 0,
            max: 100000
        }

        $scope.alertChange = false;

        $scope.editRecord = function ($index) {
            $scope.alertChange = false;
            $scope.isEditable = $index;
        };

        $scope.recordChanged = function(value) {
            $timeout(function(){
                $scope.alertChange = value;
            }, 1000);
        };


    }
]);
