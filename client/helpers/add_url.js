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
            if (error) {
                console.log(error);
            }
            if (result.urlExists)
                $('#url-already-exist').toggle("display:none");
            else Router.go('homePage');
        });

        return false;// stop the form submit from reloading the page
    },
    "change #url":function (event) {
        var url = event.target.value;

        setTimeout( function() {
            Meteor.call( "give_description", url, function( error, response ) {
                if ( error ) {
                    console.log( error );
                } else {
                    $("#description").val(response);
                    $("#description").toggleClass("highlight");
                }
            });
        }, 1 );
    },
    "focus #description":function (event) {
        $("#description").removeClass("highlight");
    }
});

Template.addURL.rendered = function(){
    $("#website_form").toggle('slow');
};