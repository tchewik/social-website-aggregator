Template.singleUrl.helpers({
    comments: function () {
        return Comments.find({'urlId': this._id}, {sort: {'date': -1}});
    },
    siteImg: function () {
        console.log("this::::");
        console.log(this);
        var re = /(https?:\/\/[a-z0-9]+(\.[a-z0-9]+)+)/ig;
        var url_to_pic = this.url.match(re)[0] + "/favicon.ico";
        console.log("url_to_pic:::"+ url_to_pic);
        return url_to_pic;
    }
});