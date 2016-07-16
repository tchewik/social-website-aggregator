Template.singleUrl.helpers({
    comments: function () {
        return Comments.find({'urlId': this._id}, {sort: {'date': -1}});
    }
});

Template.singleUrl.rendered = function () {
    url = this.data.url;
    setTimeout(function () {
        Meteor.call("findPic", url, function(error, response){
            if (error) {
                $('#site-img').attr("src", "img_not_found.jpg");
            }
            if (response) {
                $('#site-img').attr("src", response);
                // if function returns .svg, it is black. let's change it's color to eadcf9 (white)
                if (response.match(/\.svg$/i)) {
                    $('#site-img').attr("style", "background-color: #eadcf9;");
                }
            }
        });
        console.log('done.');
        return false;
    }, 0.5);
};