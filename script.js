   if (!scrollInterval) {
      var scrollInterval = setInterval(function() {
         document.body.scrollTop = document.body.scrollHeight;
         console.log("tried to scroll");
      }, 300);
      isScrollIntervalOn = true;
   }
   else{
      // Disable if already active
      clearInterval(scrollInterval);
      scrollInterval = false;
   }
