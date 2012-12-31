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

    exports.swapMenuState = swapMenuState;
    return exports;
}();

