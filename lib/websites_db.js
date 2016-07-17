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

        var liked, unliked;
        if (Meteor.user().profile.library) {
            liked = Meteor.user().profile.library.liked;
            unliked = Meteor.user().profile.library.unliked;
        } else {
            liked = [];
            unliked = [];
        }
        if (smbVote > 0) {
            // if vote === 1, add id of website to the array 'liked' in user's data
            if (unliked.indexOf(id) > -1)
                unliked.pop(id);
            if (liked.indexOf(id) === -1)
                liked.push(id)
        } else {
            // if vote === -1, add id of website to the array 'unliked' in user's data
            if (liked.indexOf(id) > -1)
                liked.pop(id);
            if (unliked.indexOf(id) === -1)
                unliked.push(id)
        }
        // update user information
        Meteor.users.update({_id: Meteor.userId()},
            {$set: {
                'profile': {
                    'library': {
                        'liked': liked,
                        'unliked': unliked
                    }
                }
            }});
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