if((document.location.href.search('appspot.com')==-1)&&(document.referrer.search('appspot.com')==-1)) {

  !function(){var e=window.rudderanalytics=window.rudderanalytics||[];e.methods=["load","page","track","identify","alias","group","ready","reset","getAnonymousId","setAnonymousId","getUserId","getUserTraits","getGroupId","getGroupTraits","startSession","endSession"],e.factory=function(t){return function(){e.push([t].concat(Array.prototype.slice.call(arguments)))}};for(var t=0;t<e.methods.length;t++){var r=e.methods[t];e[r]=e.factory(r)}e.loadJS=function(e,t){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.rudderlabs.com/v1.1/rudder-analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a)},e.loadJS(),



  e.load("2NVmRn2kZhvAHL5fRAnk5U3Y6fP","https://intentflowoggx.dataplane.rudderstack.com"),



   e.page()}();



  var dynamicPixel = function() {



    var pixelURL = "https://sv.intentflow.net/px/smart/?c=2568f8ecdcf637a&seg=";



    var urlPath = window.location.pathname.substr(1).replace(/\/+$/, '');



    if (urlPath === "") { urlPath = "home"; }



    console.log(urlPath);



    var segmentValue = urlPath;



    var script = document.createElement('script');



    if (pixelURL.indexOf("seg=") === -1) {



      pixelURL = pixelURL + "seg=";



    }



    script.setAttribute('async', '');



    script.src = pixelURL + escape(segmentValue);



    document.body.appendChild(script);



  }();

}
