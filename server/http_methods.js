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
    }
});