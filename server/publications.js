Meteor.publish('websites', function(){
    return Websites.find({}, {sort: {'rating': -1}});
});

Meteor.publish('singleUrl', function(id){
    return Websites.find({'_id':id},{});
});

Meteor.publish('comments', function (id) {
    return Comments.find({'urlId':id});
});