Template.searchResult.helpers({
    getWebsites: function() {
        var data = WebsiteSearch.getData({
            transform: function(matchText, regExp) {
                return matchText.replace(regExp, "<b>$&</b>")
            },
            sort: {isoScore: -1}
        });
        console.log(data);
        return data;
    },

    isLoading: function() {
        return WebsiteSearch.getStatus().loading;
    }
});