Router.route('homePage', {
    path: '/',
    waitOn: function() {
        return Meteor.subscribe('websites', this.params._id);
    }
});

Router.route('single_url', {
    path: 'websites/:_id',
    waitOn: function () {
        return [ Meteor.subscribe('singleUrl', this.params._id),
                 Meteor.subscribe('comments', this.params._id)
               ];
    },
    data: function () {
        return Websites.findOne(this.params._id)
    }
});

Router.route('addURL', {
    path: '/new'
});

Router.route('search_result', {
    path: '/search',
    waitOn: function () {
        return Meteor.subscribe('websites', this.params._id);
    }
});

Router.onBeforeAction(function() {
    if (! Meteor.userId()) {
        this.render('log_in');
    } else {
        this.next();
    }
});