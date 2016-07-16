Template.singleUrl.rendered = function () {
    url = this.data.url;
    console.log("singleUrl says:");
    console.log(this.data);

    var picture = this.data.pic;
    if (picture.match(/\.svg$/i)) {
        $('#site-img').attr("style", "background-color: #eadcf9;");
    }
    $('#site-img').attr("src", picture);
};

Template.searchResult.rendered = Template.singleUrl.rendered;