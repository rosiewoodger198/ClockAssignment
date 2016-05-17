$(document).ready(function() {


  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = amOrPm(h);
    h = convertHours(h);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    changeFont(s);
    color(s);
    $("#txt").html(h + ":" + m + ":" + s + ampm)
    setTimeout(startTime, 500);
  }


  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;   
  }

  function convertHours(i) {
    if (i > 12) {
        i = i - 12;
    }
    return i;
  }

  function amOrPm(i) {
    if (i < 12) {
        return "AM";
    } else {
        return "PM";
    }
  }

  function changecolors() {
      i = 1;
      setInterval(change, 1000);
  }

  function change() {
    var mycolor;

      if (i === 1) {
          mycolor = "lightPink";
          i = 2;
      } else {
          mycolor = "lightBlue";
          i = 1;
      }

      $("body").css("background-color", mycolor);
  }


     function color(i) {
    var acolor;
     if ( (i % 2) === 0 ) {
      acolor = "red";
     } else {
      acolor = "blue"
     }
      $("body").css("color", acolor);
    }


    function changeFont() {
      var myfont;
      setInterval(change, 1000);
      i = 1;

      if (i === 1 ) {
        myfont = "americanTypewriter";
        i = 2;
      } else {
        myfont = "arialBlack";
        i = 1;
      }
      
      $("body").css("fontFamily", myfont);
  }

  var counter = 0;

  function changeFontSizes() {
    var fontSizes = ["40px" , "20px" , "10px" , "5px"];
    $("body").css("fontSize" , fontSizes[counter]);

    counter = counter + 1;
    if (counter > 3) {
      counter = 0;
    }

    setTimeout(changeFontSizes, 5000);
  }


  startTime();
  changecolors();
  changeFontSizes();
});