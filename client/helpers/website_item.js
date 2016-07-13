Template.websiteItem.events({
    "click .js-upvote":function(event){
        // example of how you can access the id for the website in the database
        // (this is the data context for the template)
        var website_id = this._id;
        Meteor.call('vote', website_id, 1);

        return false;// prevent the button from reloading the page
    },
    "click .js-downvote":function(event){

        // example of how you can access the id for the website in the database
        // (this is the data context for the template)
        var website_id = this._id;
        Meteor.call('vote', website_id, -1);

        // put the code in here to remove a vote from a website!

        return false;// prevent the button from reloading the page
    }
});