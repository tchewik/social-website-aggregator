if (Meteor.isClient) {
    var options = {
        keepHistory: 1000 * 60 * 5,
        localSearch: true
    };
    var fields = ['url', 'title', 'description'];

    WebsiteSearch = new SearchSource('websites', fields, options);
}

if (Meteor.isServer) {
    SearchSource.defineSource('websites', function(searchText, options) {
        var options = {sort: {isoScore: -1}, limit: 20};

        if(searchText) {
            var regExp = buildRegExp(searchText);
            var selector = {$or: [
                {packageName: regExp},
                {description: regExp}
            ]};

            return Websites.find(selector, options).fetch();
        } else {
            return Websites.find({}, options).fetch();
        }
    });

    function buildRegExp(searchText) {
        // this is a dumb implementation
        var parts = searchText.trim().split(/[ \-\:]+/);
        return new RegExp("(" + parts.join('|') + ")", "ig");
    }
}