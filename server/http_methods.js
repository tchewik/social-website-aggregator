Meteor.methods({
    "give_description": function (url) {
        var re = /<meta name=\"description\"[ a-z\"\']+content=\"([^\"]*)\"/i;
        var content = HTTP.get(url).content;
        try {
            var description = content.match(re)[1];
            console.log(content.match(re)[1]);
            return description;
        } catch(e) {
            console.log(">>>>"+url+"  description is not found");
        }
    },
    "findPic": function(url) {
        var re = /(https?:\/\/[a-z0-9]+(\.[a-z0-9]+)+)/ig;
        url = ''+url.match(re);

        var content = HTTP.get(url.match(re)[0]).content;
        try {
            // check if icon for page is in <link rel="icon" href="..."> (like in coursera.org)
            re = /<link rel="icon"[^>]+href=\"([^ \"\']+)\"/i;
            var matches = content.match(re);
            if (matches) {
                url_to_pic = matches[1];
                console.log(url_to_pic);
                if (url_to_pic.match(/^\/.*/)) {
                    return url+url_to_pic;
                } else {
                    return url_to_pic;
                }
            }

            // check if icon for page is in <link rel="...-icon" href="..."> (like in twitter.com)
            re = /<link rel=\"[^">]+-icon\"[^>]+href=\"([^ \"\']+)\"/i;
            var matches = content.match(re);
            if (matches) {
                url_to_pic = matches[1];
                console.log(url_to_pic);
                return url_to_pic;
            }

            // just take .../favicon.ico (like in google.com)
            throw(e);
        } catch(e) {
            console.log(">>> picture is not found for url "+url);
            return url+'/favicon.ico';
        }
    }
});