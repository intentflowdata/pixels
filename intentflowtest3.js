  var dynamicPixel = function() {
    var pixelURL = "https://sv.intentflow.net/px/smart/?c=2425c10edbb9216&seg=";
    var urlPath = window.location.href;
    var segmentValue = urlPath;
    var script = document.createElement('script');
    if (pixelURL.indexOf("seg=") === -1) {
        pixelURL = pixelURL + "seg=";
    }
    script.src = pixelURL + escape(segmentValue);
    document.getElementsByTagName('script')[0].parentNode.appendChild(script);
}();
