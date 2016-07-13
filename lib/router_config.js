Router.route('/', function () {
    this.render('home_page');
});

var requireLogin = function () {
    pause();
    if (!Meteor.user()) {
        console.log('not meteor.user()');
        this.render('log_in');
        return pause();
    } else {
        console.log('meteor.user()');
        return this.next();
    }
};

Router.onBeforeAction(requireLogin);