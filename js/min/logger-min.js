var Logger=function t(){var t={},e=[];return t.init=function(){return!0},t.addToLog=function(t,n,o){if(!n&&!t)return!1;var r=new Date,i=r.toString("H:mm:ss"),u={};return u.timestamp=r,u.eventType=t,u.eventValue=n,u.objectID=o,e.push(u),notify("Logged "+u.eventType+" on object "+u.objectID+" at time point "+i,2),!0},t.getLog=function(){return e},t};
//# sourceMappingURL=./logger-min.map