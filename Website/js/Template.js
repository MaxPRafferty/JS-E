var template = function (requires, exports, modules) {
    exports = exports || {};
    var d = function (elementId) { return document.getElementById(elementId); }

    var swapMenuState = function () {
        var nav = d("MainNavigation");
        if (nav.className.indexOf("Open") < 0) {
            nav.className += " Open";
        }
        else {
            nav.className = nav.className.replace(" Open", "");
        }
    }

    var swapMobileState = function () {
        var nav = d("BodyContainer");
        if (nav.className.indexOf("Mobile") < 0) {
            nav.className += " Mobile";
        }
        else {
            nav.className = nav.className.replace("Mobile", "");
        }
    }

    exports.swapMenuState = swapMenuState;
    exports.swapMobileState = swapMobileState;
    return exports;
}();

