chrome.commands.onCommand.addListener(function(command) {
   if(command === "scroll-bottom"){
       chrome.tabs.executeScript(tab.id, {file: "script.js"})

   }

})

chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(tab.id, {file: "script.js"})

});


