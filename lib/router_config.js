Router.route('homePage', {
    path: '/',
    waitOn: function() {
        return Meteor.subscribe('websites', this.params._id);
    }
});

Router.route('addURL', {
    path: '/new'
});

Router.onBeforeAction(function() {
    if (! Meteor.userId()) {
        this.render('log_in');
    } else {
        this.next();
    }
});