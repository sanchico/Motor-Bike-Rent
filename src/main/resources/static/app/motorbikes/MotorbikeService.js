'use strict';

angular.module('ProjectApp').factory('MotorBikesService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllMotorBikes: loadAllMotorBikes,
                getAllMotorBikes: getAllMotorBikes,
                getMotorBike: getMotorBike,
                createMotorBike: createMotorBike,
                updateMotorBike: updateMotorBike,
                removeMotorBike: removeMotorBike
            };

            return factory;

            function loadAllMotorBikes() {
                console.log('Fetching all motorBikes');
                var deferred = $q.defer();
                $http.get(urls.MOTORBIKE_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all motorBikes');
                            $localStorage.motorBikes = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading motorBikes');
                            $localStorage.motorBikes = null;
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllMotorBikes(){
                return $localStorage.motorBikes;
            }

            function getMotorBike(id) {
                console.log('Fetching MotorBike with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.MOTORBIKE_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully MotorBike with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading MotorBike with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createMotorBike(motorBike) {
                console.log('Creating MotorBike');
                var deferred = $q.defer();
                $http.post(urls.MOTORBIKE_SERVICE_API, motorBike)
                    .then(
                        function (response) {
                            loadAllMotorBikes();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.error('Error while creating MotorBike : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateMotorBike(motorBike, id) {
                console.log('Updating MotorBike with id '+id);
                var deferred = $q.defer();
                $http.put(urls.MOTORBIKE_SERVICE_API + id, motorBike)
                    .then(
                        function (response) {
                            loadAllMotorBikes();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating MotorBike with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeMotorBike(id) {
                console.log('Removing MotorBike with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.MOTORBIKES_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllMotorBikes();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing MotorBike with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ]);