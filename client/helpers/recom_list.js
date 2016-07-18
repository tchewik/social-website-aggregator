Template.recomList.helpers({
    recommendations: function () {
        // take descriptions of sites, that user voted
        // and find other sites with similar descriptions.
        if (Meteor.user().profile.library){
            $("#no-recommendations").attr("style", "display:none");
            var data;
            var liked = Meteor.user().profile.library.liked;

            liked.forEach(function(id) {
                recommendSearch.search(Websites.findOne({'_id': id}).description);
            });

            setTimeout(function () {
                data = recommendSearch.getData({sort: {isoScore: -1}});
                return data;
            }, 1000);

        }
        return false;
    },

    isLoading: function() {
        return WebsiteSearch.getStatus().loading;
    }
});