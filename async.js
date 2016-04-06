/*
1. Callbacks
2. Events
3. Promises
*/

/* Sync */
function add(x, y) {
    console.log("[SP] adding ", x, " and ", y);
    var result = x + y;
    console.log("[SP] returning result");
    return result;
}

function addClient(x, y) {
    console.log("[SC] triggering add");
    var result = add(x, y);
    console.log("[SC] result = ", result);
}

/* Async - callback */
function addAsync(x, y, callback) {
    console.log("[SP] adding ", x, " and ", y);
    setTimeout(function () {
        var result = x + y;
        console.log("[SP] returning result");
        callback(result);
    }, 4000);
}

function addAsyncClient(x, y) {
    console.log("[SC] triggering add");
    addAsync(x, y, function (result) {
        console.log("[SC] result = ", result);
    });
}

/* Async - Events */

function getAdder() {
    var _callbacks = [];
    return {
        operate: function (x, y) {
            console.log("[SP] adding ", x, " and ", y);
            setTimeout(function () {
                var result = x + y;
                console.log("[SP] returning result");
                _callbacks.forEach(function (callback) {
                    callback(result)
                });
            }, 4000);
        },
        addListener: function (callback) {
            _callbacks.push(callback);
        }
    }
}

var adder = getAdder();
adder.addListener(function (result) {
    console.log("[SC] result = ", result);
});
console.log("[SC] triggering add");
adder.operate(100, 200);

/* It will not trigger if you subscribe to operate first and event listner after some time and  */
var adder = getAdder();
console.log("[SC] triggering add");
adder.operate(100, 200);
/* After some time  */
adder.addListener(function (result) {
    console.log("[SC] result = ", result);
});

/* Async - Promise */
function addAsync(x, y) {
    var promise = new Promise(function (resolve, reject) {
        console.log("[SP] adding ", x, " and ", y);
        setTimeout(function () {
            var result = x + y;
            console.log("[SP] returning result");
            resolve(result);
        }, 4000);
    });

    return promise;
}

var p = addAsync(100, 200);
p.then(function (result) {
    console.log("[SC] result = ", result);
});
