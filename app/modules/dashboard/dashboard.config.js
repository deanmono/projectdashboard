'use strict';

angular.module('project.dashboard', ['ui.router', 'ngAnimate'])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");
        $stateProvider
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: 'modules/dashboard/views/dashboard.view.html',
                controller: 'DashboardCtrl'
            });
    }])

    .filter('budgetRange', function() {
        return function(records, from, to) {
            return records.filter(function(record) {

                return record.budget >= from && record.budget <= to;

            });
        }
    })

    .filter('createdRange', function() {
        return function(records, from, to) {
            return records.filter(function(record) {
                var toP = (new Date(to).getTime() / 1000).toFixed(0);
                var fromP = (new Date(from).getTime() / 1000).toFixed(0);
                var created = (new Date(record.created).getTime() / 1000).toFixed(0);

                if(fromP && toP) {
                    return created >= fromP && created <= toP;
                } else {
                    return created;
                }

            });
        }
    })

    .filter('modifiedRange', function() {
        return function(records, from, to) {
            return records.filter(function(record) {
                var toP = (new Date(to).getTime() / 1000).toFixed(0);
                var fromP = (new Date(from).getTime() / 1000).toFixed(0);
                if (record.modified) {
                    var modified = (new Date(record.modified).getTime() / 1000).toFixed(0);
                    if(fromP && toP)
                    {
                        return modified >= fromP && modified <= toP;
                    } else {
                        return modified;
                    }
                }
                return record;

            });
        }
    });

