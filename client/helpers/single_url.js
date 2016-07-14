Template.singleUrl.helpers({
    comments: function () {
        return Comments.find({'urlId': this._id}, {sort: {'date': -1}});
    },
    siteImg: function () {
        var re = /(https?:\/\/[a-z0-9]+(\.[a-z0-9]+)+)/ig;
        var url_to_pic = this.url.match(re)[0] + "/favicon.ico";
        return url_to_pic;
    }
});