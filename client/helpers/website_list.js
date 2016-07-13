Template.websiteList.helpers({
    websites:function(){
        return Websites.find({}, {sort: {'rating': -1}});
    }
});