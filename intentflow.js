if((document.location.href.search('appspot.com')==-1)&&(document.referrer.search('appspot.com')==-1)) {

function checkSiteApproval() {
  // Get the hostname and strip 'www.'
  var fullDomain = window.location.hostname;
  var homeDomain = fullDomain.replace(/^www\./, '');

  var apiURL = 'https://xirs-i9el-bv5i.n7c.xano.io/api:kVbSJclO/approved_sites?site=' + encodeURIComponent(homeDomain);

  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      if (data === true) {
        // If API returns true, run the dynamicPixel function
        dynamicPixel();
      } else {
        console.log('Site not approved');
      }
    })
    .catch(error => console.error('Error in API call:', error));
}

var dynamicPixel = function() {
  var pixelURL = "https://sv.intentflow.net/px/smart/?c=2568f8ecdcf637a&seg=";
  var urlPath = window.location.href;
  var currentDate = new Date();
  var dateString = currentDate.getFullYear() + '-' +
  ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' +
  ('0' + currentDate.getDate()).slice(-2) + 'T' +
  ('0' + currentDate.getHours()).slice(-2) + ':' +
  ('0' + currentDate.getMinutes()).slice(-2) + ':' +
  ('0' + currentDate.getSeconds()).slice(-2) + 'Z';
  var segmentValue = dateString + '--' + urlPath;
  var script = document.createElement('script');
  script.src = pixelURL + encodeURIComponent(segmentValue);
  document.getElementsByTagName('script')[0].parentNode.appendChild(script);
};

// Call the checkSiteApproval function to start the process
checkSiteApproval();

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

}(); 


