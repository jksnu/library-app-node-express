var EventEmitter = require('events').EventEmitter;

function getEventEmitter(){
    var e = new EventEmitter();
    var numList = [4,6,8,10];
    for(var i=0; i<numList.length; i++){
        console.log("value = "+numList[i]/2);
    }
    return e;
}

var eventEmitter = getEventEmitter();