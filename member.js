function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/skills/member.html',
    scope: {
      member: '='
    },
    link: function(scope) {
      scope.getMemberSkillLevel = function(member) {
        if (!member.skills || !member.skills.length) return 0;
        var total = 0;
        for (var i = 0; i < member.skills.length; i++) {
          total += member.skills[i].level;
        }
        return total / member.skills.length;
      };
    }
  };
}