Websites = new Mongo.Collection("websites");

Meteor.methods({
    addURL: function(urlAttributes){

        if (Websites.find({url: urlAttributes.url}).count() != 0)
            return { urlExists: true };

        Websites.insert({
            title: urlAttributes.title || undefined,
            url: urlAttributes.url,
            description: urlAttributes.description,
            createdOn: new Date()
        });

        return true;
    }
})