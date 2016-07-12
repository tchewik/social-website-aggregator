Router.route('/', function () {
    this.render('home_page');
});

Router.onBeforeAction(function() {
    //AccountsUi.signInRequired(this);
    this.next()
});