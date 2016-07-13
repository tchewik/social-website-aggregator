Template.websiteItem.events({
    "click .js-upvote":function(event){
        var website_id = this._id;
        Meteor.call('vote', website_id, 1);
        return false;// prevent the button from reloading the page
    },
    "click .js-downvote":function(event){
        var website_id = this._id;
        Meteor.call('vote', website_id, -1);
        return false;// prevent the button from reloading the page
    }
});

Template.websiteItem.helpers({
    date: function(){
        return Websites.findOne({'_id': this._id}).createdOn.toDateString();
    }
});