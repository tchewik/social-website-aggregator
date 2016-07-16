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
            pic: Meteor.call("findPic", urlAttributes.url),
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


if (Meteor.isServer) {
    if (Websites.find().count() === 0) {
        console.log("No websites yet. Creating starter data.");
        Meteor.call("addURL", {
            title: "Goldsmiths Computing Department",
            url: "http://www.gold.ac.uk/computing/",
            description: "This is where this course was developed.",
        });
        Meteor.call("addURL", {
            title: "University of London",
            url: "http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
            description: "University of London International Programme.",
        });
        Meteor.call("addURL", {
            title: "Coursera",
            url: "http://www.coursera.org",
            description: "Universal access to the world’s best education.",
        });
        Meteor.call("addURL", {
            title: "Google",
            url: "http://www.google.com",
            description: "Popular search engine.",
        });
    }
}