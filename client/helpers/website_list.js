Template.websiteList.helpers({
    websites:function(){
        console.log("i'm in website_list helper");
        console.log(Websites.find());
        console.log(Websites.find().count());
        return Websites.find({});
    }
});