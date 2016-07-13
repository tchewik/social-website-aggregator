Meteor.publish('websites', function(){
    return Websites.find({}, {sort: {'rating': -1}});
});