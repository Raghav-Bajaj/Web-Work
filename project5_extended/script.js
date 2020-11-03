function myFunction() {
    var element = document.getElementById("ca");
  
    if (element.classList) { 
      element.classList.toggle("start");
    } else {
      var classes = element.className.split(" ");
      var i = classes.indexOf("start");
  
      if (i >= 0) 
        classes.splice(i, 1);
      else 
        classes.push("start");
        element.className = classes.join(" "); 
    }
  }
  function myFunction1() {
    var element = document.getElementById("camp");
  
    if (element.classList) { 
      element.classList.remove("starter");
    }
  }
  function myFunction2() {
    var element = document.getElementById("camp");
  
    if (element.classList) { 
      element.classList.add("starter");
    }
  }
  
 