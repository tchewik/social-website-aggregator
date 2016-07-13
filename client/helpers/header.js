Template._loginButtonsAdditionalLoggedInDropdownActions.events({
    'click #login-buttons-add-url': function(event) {
        Router.go('addURL');
    },
    'click #login-buttons-home-page': function(event) {
        Router.go('homePage');
    }
});