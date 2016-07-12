Meteor.startup(function() {
    AccountsUi.config({
        forceEmailLowercase: true,
        forceUsernameLowercase: true,
        forcePasswordLowercase: true
    });
});