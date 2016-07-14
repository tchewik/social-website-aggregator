Template.addURL.events({
    "submit .js-save-website-form":function(event){
        event.preventDefault();
        
        var urlAttributes = {
            url: event.target.url.value,
            title: event.target.title.value,
            description: event.target.description.value,
            rating: 0
        };

        var re = /https?:\/\/[0-9a-z.:\/]+\.[0-9a-z.:\/]+/gi;
        var urlIsValid = re.test(urlAttributes.url);

        if (!urlIsValid) {
            $('#invalid-url').toggle("display: none");
            return false;
        }
        if (!urlAttributes.description) {
            $('#invalid-description').toggle("display: none");
            return false;
        }
        Meteor.call('addURL', urlAttributes, function(error, result) {
            if (result.urlExists)
                $('#url-already-exist').toggle("display:none");
            else Router.go('homePage');
        });

        return false;// stop the form submit from reloading the page
    }
});

Template.addURL.rendered = function(){
    $("#website_form").toggle('slow');
};