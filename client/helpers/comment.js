Template.comment.helpers({
    username: function () {
        return Meteor.users.findOne({'_id': this.userId}).emails[0].address;
    },
    date: function () {
        return Comments.findOne({'_id': this._id}).date.toDateString();
    }
});