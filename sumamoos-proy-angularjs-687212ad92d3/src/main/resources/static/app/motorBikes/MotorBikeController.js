'use strict';

angular.module('ProjectApp').controller('MotorBikeController',
    ['MotorBikeService', '$scope',  '$location', '$stateParams', function( MotorBikeService, $scope, $location, $stateParams) {

        var self = this;
        self.motorBike= {};
        self.motorBikes=[];

        self.submit = submit;
        self.getAllMotorBikes = getAllMotorBikes;
        self.createMotorBike = createMotorBike;
        self.updateMotorBike = updateMotorBike;
        self.removeMotorBike = removeMotorBike;
        self.editMotorBike = editMotorBike;
        self.showMotorBike = showMotorBike;
        self.reset = reset;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;

        function submit() {
            console.log('Submitting');
            if (self.motorBike.id === undefined || self.motorBike.id === null) {
                console.log('Saving New MotorBike', self.motorBike);
                createMotorBike(self.motorBike);
            } else {
                updateMotorBike(self.motorBike, self.motorBike.id);
                console.log('MotorBike updated with id ', self.motorBike.id);
            }
        }

        function createMotorBike(motorBike) {
            console.log('About to create motorBike');
            MotorBikeService.createMotorBike(motorBike)
                .then(
                    function (response) {
                        console.log('MotorBike created successfully');
                        self.successMessage = 'MotorBike created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.motorBike={};
                        $location.path("motorBike-list.html");
                    },
                    function (errResponse) {
                        console.error('Error while creating MotorBike');
                        self.errorMessage = 'Error while creating MotorBike: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }


        function updateUser(motorBike, id){
            console.log('About to update motorBike');
            MotorBikeService.updateMotorBike(motorBike, id)
                .then(
                    function (response){
                        console.log('MotorBike updated successfully');
                        self.successMessage='MotorBike updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $location.path("motorBikes-list.html");
                    },
                    function(errResponse){
                        console.error('Error while updating MotorBike');
                        self.errorMessage='Error while updating MotorBike '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }


        function removeMotorBike(id){
            console.log('About to remove MotorBike with id '+id);
            MotorBikeService.removeMotorBike(id)
                .then(
                    function(){
                        console.log('MotorBike '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing motorBike '+id +', Error :'+errResponse.data);
                    }
                );
        }


        function getAllMotorBikes(){
            return MotorBikeService.getAllMotorBikes();
        }

        function showMotorBike(id) {
            $location.path("motorBikes-edit.html").search({id: id});
        }

        function editMotorBikes() {
            self.successMessage='';
            self.errorMessage='';
            var id = $stateParams.id;
            if (id !== null) {
            	MotorBikeService.getMotorBike(id).then(
                    function (motorBike) {
                        self.motorBike = motorBike;
                    },
                    function (errResponse) {
                        console.error('Error while removing motorBike ' + id + ', Error :' + errResponse.data);
                    }
                );
            }
        }

        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.motorBike={};
            $location.path("motorBikes-list.html");
        }
    }


    ]);