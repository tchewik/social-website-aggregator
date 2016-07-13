Websites = new Mongo.Collection("websites");

Websites.allow({
    update: function () {
        return !!Meteor.user();
    }
});

Meteor.methods({
    addURL: function(urlAttributes){

        if (Websites.find({url: urlAttributes.url}).count() != 0)
            return { urlExists: true };

        Websites.insert({
            title: urlAttributes.title || undefined,
            url: urlAttributes.url,
            description: urlAttributes.description,
            createdOn: new Date(),
            rating: 0
        });

        return true;
    },
    vote: function (id, smbVote) {
        url = Websites.findOne({"_id": id});
        Websites.update({_id: id},
            {$set: {
                'rating': url.rating + smbVote
            }}
        );
    }
});