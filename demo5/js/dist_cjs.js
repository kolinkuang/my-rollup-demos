var result = (function (exports) {
    'use strict';

    var logA = function logA() {
        console.log('function logA called');
    };

    var logB = function logB() {
        console.log('function logB called');
    };

    var demo5 = {
    	logA: logA,
    	logB: logB
    };

    exports.default = demo5;
    exports.logA = logA;
    exports.logB = logB;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
