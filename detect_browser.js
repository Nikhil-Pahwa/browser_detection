var detectBrowser = (function () {

    // Internet Explorer 6-11
    var isBrowserIE = function () {
        return /*@cc_on!@*/ false || !!document.documentMode;
    }

    // Edge 20+
    var isBrowserEdge = function () {
        return !isBrowserIE && !!window.StyleMedia;
    }

    // Chrome 1+
    var isBrowserChrome = function () {
        return !!window.chrome && !!window.chrome.webstore;
    }

    // Opera 8.0+
    var isBrowserOpera = function () {
        return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    }

    // Firefox 1.0+
    var isBrowserFirefox = function () {
        return typeof InstallTrigger !== 'undefined';
    }

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isBrowserSafari = function () {
        return /constructor/i.test(window.HTMLElement) || (function (p) {
            return p.toString() === "[object SafariRemoteNotification]";
        })(!window['safari'] || safari.pushNotification);
    }

    var isBrowserBlink = function () {
        return (isBrowserChrome || isBrowserOpera) && !!window.CSS;;
    }

    return {
        isIE: isBrowserIE(),
        isEdge: isBrowserEdge(),
        isChrome: isBrowserChrome(),
        isOpera: isBrowserOpera(),
        isFirefox: isBrowserFirefox(),
        isSafari: isBrowserSafari(),
        isBlink: isBrowserBlink()
    }
})();