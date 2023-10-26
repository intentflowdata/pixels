var dynamicPixel = function() {
    var pixelURL = "https://sv.intentflow.net/px/smart/?c=25ae0f63a7c99bd&seg=";
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
