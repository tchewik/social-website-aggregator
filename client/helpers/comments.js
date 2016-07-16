Template.comments.helpers({
    comments: function () {
        return Comments.find({'urlId': this._id}, {sort: {'date': -1}});
    }
});