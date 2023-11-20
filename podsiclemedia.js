// var dynamicPixel = function() {
//     var pixelURL = "https://sv.intentflow.net/px/smart/?c=25ae0f63a7c99bd&seg=";
//     var urlPath = window.location.pathname.substr(1).replace(/\/+$/, '');
//     if (urlPath === "") { urlPath = "home"; }
//     console.log(urlPath);
//     var segmentValue = urlPath;
//     var script = document.createElement('script');
//     if (pixelURL.indexOf("seg=") === -1) {
//         pixelURL = pixelURL + "seg=";
//     }
//     script.setAttribute('async', '');
//     script.src = pixelURL + escape(segmentValue);
//     document.body.appendChild(script);
// }();


  var dynamicPixel = function() {
    var pixelURL = "https://sv.intentflow.net/px/smart/?c=25ae0f63a7c99bd&seg=";
    var urlPath = window.location.href;

    // Get the current date
    var currentDate = new Date();
    // Format the date and time as "YYYY-MM-DDTHH:mm:ss"

    var dateString = currentDate.getFullYear() + '-' +
    ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' +
    ('0' + currentDate.getDate()).slice(-2) + 'T' +
    ('0' + currentDate.getHours()).slice(-2) + ':' +
    ('0' + currentDate.getMinutes()).slice(-2) +
    ('0' + currentDate.getSeconds()).slice(-2) + // Added seconds
    currentDate.toISOString().slice(-6); // this will include the timezone offset without seconds


    
    // Append the formatted date and two dashes to the URL path
    var segmentValue = dateString + '--' + urlPath;

    var script = document.createElement('script');
    // The check for "seg=" is not necessary here as the pixelURL already contains it
    // If the pixelURL structure ever changes, the check can be re-enabled

    // Use encodeURIComponent to ensure the segmentValue is properly escaped
    script.src = pixelURL + encodeURIComponent(segmentValue);
    document.getElementsByTagName('script')[0].parentNode.appendChild(script);
}();
