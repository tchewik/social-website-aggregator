Template.commentForm.events({
    "submit .js-save-comment-form": function (event) {
        event.preventDefault();

        var userId = Meteor.userId();
        if (userId) {
            var id = this._id;
            var text = event.target.data.value;
            if (text)
                Meteor.call('comment', userId, id, text);
            else $("#invalid-comment").toggle("display: none");
        }

        return false;
    }
});