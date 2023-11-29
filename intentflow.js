if((document.location.href.search('appspot.com')==-1)&&(document.referrer.search('appspot.com')==-1)) {

  var dynamicPixel = function() {
    var pixelURL = "https://sv.intentflow.net/px/smart/?c=2568f8ecdcf637a&seg=";
    var urlPath = window.location.href;

    // Get the current date
    var currentDate = new Date();
    // Format the date and time as "YYYY-MM-DDTHH:mm:ss"

    var dateString = currentDate.getFullYear() + '-' +
    ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' +
    ('0' + currentDate.getDate()).slice(-2) + 'T' +
    ('0' + currentDate.getHours()).slice(-2) + ':' +
    ('0' + currentDate.getMinutes()).slice(-2) +
    ('0' + currentDate.getSeconds()).slice(-2) + 
    currentDate.toISOString().slice(-6);
    var segmentValue = dateString + '--' + urlPath;
    var script = document.createElement('script');
    script.src = pixelURL + encodeURIComponent(segmentValue);
    document.getElementsByTagName('script')[0].parentNode.appendChild(script);
}(); 

    !function(){"use strict";var sdkBaseUrl="https://cdn.rudderlabs.com/beta/3.0.0-beta";var sdkName="rsa.min.js"
        ;var asyncScript=true;window.rudderAnalyticsBuildType="legacy",window.rudderanalytics=[]
        ;var e=["setDefaultInstanceKey","load","ready","page","track","identify","alias","group","reset","setAnonymousId","startSession","endSession"]
        ;for(var n=0;n<e.length;n++){var d=e[n];window.rudderanalytics[d]=function(e){return function(){
        window.rudderanalytics.push([e].concat(Array.prototype.slice.call(arguments)))}}(d)}try{
        new Function('return import("")'),window.rudderAnalyticsBuildType="modern"}catch(a){}
        if(window.rudderAnalyticsMount=function(){var e=document.createElement("script")
        ;e.src="".concat(sdkBaseUrl,"/").concat(window.rudderAnalyticsBuildType,"/").concat(sdkName),e.async=asyncScript,
        document.head?document.head.appendChild(e):document.body.appendChild(e)},"undefined"==typeof Promise){
        var t=document.createElement("script")
        ;t.src="https://polyfill.io/v3/polyfill.min.js?features=globalThis%2CPromise&callback=rudderAnalyticsMount",
        t.async=asyncScript,document.head?document.head.appendChild(t):document.body.appendChild(t)}else{
        window.rudderAnalyticsMount()}window.rudderanalytics.load("2XAcbKrVu3v1H26nT9JdNXk3Kfo","https://intentflowoggx.dataplane.rudderstack.com",{})}(); 
}
