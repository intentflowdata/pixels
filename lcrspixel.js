<!-- Initialize Intentflow Event -->



<script type="text/javascript">
console.log("line 6");
if((document.location.href.search('appspot.com')==-1)&&(document.referrer.search('appspot.com')==-1)) {


console.log("line 10");
  !function(){var e=window.rudderanalytics=window.rudderanalytics||[];e.methods=["load","page","track","identify","alias","group","ready","reset","getAnonymousId","setAnonymousId","getUserId","getUserTraits","getGroupId","getGroupTraits","startSession","endSession"],e.factory=function(t){return function(){e.push([t].concat(Array.prototype.slice.call(arguments)))}};for(var t=0;t<e.methods.length;t++){var r=e.methods[t];e[r]=e.factory(r)}e.loadJS=function(e,t){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.rudderlabs.com/v1.1/rudder-analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a)},e.loadJS(),



  e.load("2WaFWY5CbqNnnMiXOyZnSoNbGsY","https://intentflowoggx.dataplane.rudderstack.com"),
console.log("line 11");


   e.page()}();



  var dynamicPixel = function() {



    var pixelURL = "https://sv.intentflow.net/px/smart/?c=25ae0f63a7c99bd&seg=";
console.log("line 28");


    var urlPath = window.location.pathname.substr(1).replace(/\/+$/, '');



    if (urlPath === "") { urlPath = "home"; }



    console.log(urlPath);
    console.log("Fx5X28W4");



    var segmentValue = urlPath;



    var script = document.createElement('script');



    if (pixelURL.indexOf("seg=") === -1) {



      pixelURL = pixelURL + "seg=";

console.log("line 58");

    }



    script.setAttribute('async', '');



    script.src = pixelURL + escape(segmentValue);



    document.body.appendChild(script);



  }();

}

</script>
