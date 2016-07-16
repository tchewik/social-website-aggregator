Template.searchBox.events({
    "focus #search-box": function(e) {
        Router.go('search_result');
    },
    "keyup #search-box": _.throttle(function(e) {
        var text = $(e.target).val().trim();
        WebsiteSearch.search(text);
    }, 200)
});