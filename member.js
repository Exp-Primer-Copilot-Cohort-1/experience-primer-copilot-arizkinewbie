function skillsMember() {
    return {
        name: 'skillsMember',
        restrict: 'E',
        templateUrl: 'templates/skills-member.html',
        controller: function() {
            this.skill = 1;
            this.setSkill = function(newValue) {
                this.skill = newValue;
            };
            this.isSet = function(skillName) {
                return this.skill === skillName;
            };
        },
        controllerAs: 'skill'
    };
}