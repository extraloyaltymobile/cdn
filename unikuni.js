if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
 console.log("ok");

String.prototype.nthLastIndexOf = function(searchString, n){
    var url = this;
    if(url === null) {
        return -1;
    }
    if(!n || isNaN(n) || n <= 1){
        return url.lastIndexOf(searchString);
    }
    n--;
    return url.lastIndexOf(searchString, url.nthLastIndexOf(searchString, n) - 1);
}


var pageURL = window.location.href;

var parts = pageURL.split("/");
var beforeLast = parts[parts.length - 2];
    
var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
var infoURLSegment = beforeLast;
console.log(lastURLSegment);
console.log(infoURLSegment);



var twMessage = "Your Message to share";
var now = new Date().valueOf();
setTimeout(function () {
    if (new Date().valueOf() - now > 100) return;
    console.log("not installed");
    var twitterUrl = "http://onelink.to/zhshcn";
    window.open(twitterUrl, '_blank');
}, 50);
window.location.href = "unikuni://unikuni.com/yukle/"+infoURLSegment+"/"+lastURLSegment

}