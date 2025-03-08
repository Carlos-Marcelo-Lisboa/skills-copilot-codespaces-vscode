function skillsMember()() {
    return {
        restrict: 'E',
        scope: {
            member: '='
        },
        templateUrl: 'views/skills/skillsMember.html',
        controller: ['$scope', '$http', function($scope, $http) {
            $scope.getSkill = function(skillId) {
                if (skillId) {
                    $http.get('/api/skills/' + skillId).then(function(response) {
                        $scope.skill = response.data;
                    });
                }
            };
        }]
    };
}