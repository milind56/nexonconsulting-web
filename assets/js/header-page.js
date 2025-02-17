function myLoadFunction() {
      document.getElementById("topDiv").style.display = "block";
      document.getElementById("msgDiv").style.paddingBottom = "15px";
      document.getElementById("mainDiv").style.paddingTop = "15px";
   }

   function myHideFunction() {
     if (document.documentElement.scrollTop > 20) {
       document.getElementById("topDiv").style.display = "none";
       document.getElementById("msgDiv").style.paddingBottom = "0px";
       document.getElementById("mainDiv").style.paddingTop = "0px";
     } else {
       document.getElementById("topDiv").style.display = "block";
       document.getElementById("msgDiv").style.paddingBottom = "15px";
       document.getElementById("mainDiv").style.paddingTop = "15px";
     }
   }