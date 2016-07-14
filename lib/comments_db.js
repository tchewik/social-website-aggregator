Comments = new Mongo.Collection("comments");

Meteor.methods({
    comment: function (userId, urlId, text) {
        Comments.insert({
            urlId: urlId,
            userId: userId,
            date: new Date(),
            data: text
        });
    }
});