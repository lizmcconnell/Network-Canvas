var Session=function e(t){var a={},n=0,o=$("#content");window.dataStore={},a.id=0,a.userData={};var i;a.stages=[{label:"Intro",page:"intro.html"},{label:"NG: closest",page:"namegen1.html"},{label:"NG: $25",page:"namegen3.html"},{label:"NG: time, energy",page:"namegen2.html"},{label:"NG: other people drugs or alcohol",page:"namegen5.html"},{label:"NG: drugs, two or more",page:"namegenmod6.html"},{label:"NG: other people sex",page:"namegen7.html"},{label:"NG: sex, two or more",page:"namegenmod8.html"},{label:"CANVAS: layout and social network",page:"canvasedge1.html"},{label:"CANVAS: who recruited",page:"canvasselect2.html"},{label:"CANVAS: who drunk with",page:"canvasselect3.html"},{label:"CANVAS: who drugs with",page:"canvasselect4.html"},{label:"CANVAS: who sex with",page:"canvasselect5.html"},{label:"ORD: contact frequency",page:"ordbin1a.html"},{label:"ORD: relationship strength",page:"ordbin1.html"},{label:"CANVAS: get advice",page:"canvasselect6.html"},{label:"CAT: gender identity",page:"multibin5.html"},{label:"CAT: race/ethnicity",page:"multibin2.html"},{label:"CAT: sexuality",page:"multibin3.html"},{label:"CAT: location",page:"multibin4.html"},{label:"ORD: drug and alcohol freq.",page:"ordbin5.html"},{label:"CANVAS: alcohol",page:"canvasselect1.html"},{label:"ORD: oral sex freq.",page:"ordbin2.html"},{label:"ORD: vaginal sex freq.",page:"ordbin3.html"},{label:"ORD: anal sex freq.",page:"ordbin4.html"},{label:"map",page:"map1.html"},{label:"CANVAS: edge drugs",page:"canvasedge2.html"},{label:"CANVAS: edge sex",page:"canvasedge3.html"},{label:"Finish",page:"finish.html"}];var s;return a.options={fnBeforeStageChange:function(e,t){var a=new CustomEvent("changeStageStart",{detail:{oldStage:e,newStage:t}});window.dispatchEvent(a)},fnAfterStageChange:function(e,t){var a=new CustomEvent("changeStageEnd",{detail:{oldStage:e,newStage:t}});window.dispatchEvent(a)}},a.init=function(){notify("Session initialising.",1),extend(a.options,t),window.addEventListener("changeStageStart",function(){$(".loader").transition({opacity:1})},!1),window.addEventListener("changeStageEnd",function(){$(".loader").transition({opacity:0})},!1),window.dataStore=new IOInterface,localStorage.getObject("activeSession")!==!1?(a.id=localStorage.getObject("activeSession"),notify("Existing session found (session id: "+a.id+"). Loading.",3),window.dataStore.init(a.id),window.dataStore.load(a.updateUserData)):(notify("No existing session found. Creating new session.",3),a.id=window.dataStore.init()),a.registerData("session"),History.Adapter.bind(window,"statechange",function(){});var e=History.getState();a.goToStage(e.data.stage?e.data.stage:0),window.addEventListener("unsavedChanges",function(){a.saveManager()},!1);var n=menu.addMenu("Session","hi-icon-cog");menu.addItem(n,"Load Data by ID","icon-user",function(){return!0}),menu.addItem(n,"Reset Session","icon-globe",a.reset),menu.addItem(n,"Download Data","icon-briefcase",function(){a.downloadData()});var o=menu.addMenu("Stages","hi-icon-list");$.each(a.stages,function(e,t){menu.addItem(o,t.label,"icon-play",function(){setTimeout(function(){a.goToStage(e)},500)})})},a.downloadData=function(){var e=a.returnSessionID()+".json",t=JSON.stringify(a.userData,void 0,2),n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.click()},a.reset=function(){notify("Resetting session.",2),localStorage.removeItem("activeSession"),localStorage.removeItem("nodes"),localStorage.removeItem("edges"),localStorage.removeItem("session"),localStorage.removeItem("log"),a.id=0,a.currentStage=0,window.dataStore.save(a.userData),History.pushState({stage:0},null,"?stage=0"),location.reload()},a.saveManager=function(){clearTimeout(s),s=setTimeout(a.saveData,3e3)},a.updateUserData=function(e){notify("Updating user data.",2),notify("Using the following to update:",1),notify(e,1),notify("session.userData is:",1),notify(a.userData,1),extend(a.userData,e),notify("Combined output is:",0),notify(a.userData,0);var t=new Event("newDataLoaded");window.dispatchEvent(t);var n=new Event("unsavedChanges");window.dispatchEvent(n)},a.returnSessionID=function(){return a.id},a.saveData=function(){window.dataStore.save(a.userData),i=new Date},a.goToStage=function(e){if("undefined"==typeof e||"undefined"==typeof a.stages[e])return!1;notify("Session is moving to stage "+e,3),a.options.fnBeforeStageChange(n,e);var t=e;o.transition({opacity:"0"},400,"easeInSine").promise().done(function(){o.load("stages/"+a.stages[e].page,function(){o.transition({opacity:"1"},400,"easeInSine")})});var i=n;n=t,History.pushState({stage:e},null,"?stage="+e),a.options.fnAfterStageChange(i,n);var s=new Event("unsavedChanges");window.dispatchEvent(s)},a.nextStage=function(){a.goToStage(n+1)},a.prevStage=function(){a.goToStage(n-1)},a.addStage=function(){},a.registerData=function(e,t){notify('A script requested a data store be registered with the key "'+e+'".',2),void 0===a.userData[e]?(notify('Key named "'+e+'" was not already registered. Creating.',1),a.userData[e]=t?[]:{}):notify("A data store with this key already existed. Returning a pointer.",1);var n=new Event("unsavedChanges");return window.dispatchEvent(n),a.userData[e]},a.addData=function(e,t,n){n||(n=!1),n===!0?a.userData[e].push(t):extend(a.userData[e],t),notify("Adding data to key '"+e+"'.",2),notify(t,1);var o=new Event("unsavedChanges");window.dispatchEvent(o)},a.returnData=function(e){return e&&"undefined"!=typeof a.userData[e]?a.userData[e]:a.userData},a.init(),a};
//# sourceMappingURL=./session-min.js.map