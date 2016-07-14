Template.commentForm.events({
    "submit .js-save-comment-form": function (event) {
        event.preventDefault();

        var $text = $(event.target).find('[name=text]');
        console.log("text:::");
        console.log($text.val());

        var userId = Meteor.userId();
        if (userId) {
            var id = this._id;
            if ($text.val()) {
                Meteor.call('comment', userId, id, $text.val());
                $text.val('');
            }
            else {
                $("#invalid-comment").toggle("display: none");
                return false;
            }
        }
        return false;
    }
});