$(function(){
  $("form#qq").submit(function(event){
    var answer1 = parseInt($("input:radio[name=q1]:checked").val());
    var answer2 = parseInt($("input:radio[name=q2]:checked").val());
    var answer3 = parseInt($("input:radio[name=q3]:checked").val());
    var answer4 = parseInt($("input:radio[name=q4]:checked").val());
    var answer5 = parseInt($("input:radio[name=q5]:checked").val());
    var imp = parseInt($("input:radio[name=important]:checked").val());

    var js = 0;
    var java = 0;
    var object = 0;
    var swift = 0;
    var php = 0;
    var python = 0;
    var ruby = 0;
    var html = 0;
    var c = 0;

    if (answer1 === 1){
      js += 1;
      java += 1;
      object += 1;
      php += 1;
      python += 1;
      c += 1;
    }else if (answer1 === 10){
      swift += 1;
      ruby += 1;
      html += 1;
    };


    if (answer2 === 3){
      js += 1;
      java += 1;
      object += 1;
      swift += 1;
      php += 1;
      python += 1;
      c += 1;
    }else if (answer2 === 4){
      ruby += 1;
      html += 1;
    };


    if (answer3 === 21) {
      c += 1;
    }else if (answer3 === 7){
      object += 1;
      swift += 1;
    }else if (answer3 === 8){
      java += 1;
    }else if (answer3 === 9){
      js += 1;
      php += 1;
      ruby += 1;
      html += 1;
    }else if (answer3 === 10){
      python += 1;
    };

    if (answer4 === 11){
      js += 1;
      html += 1;
    }else if (answer4 === 12){
      java += 1;
      object += 1;
      swift += 1;
      php += 1;
      python += 1;
      ruby += 1;
    }else if (answer4 === 13){
      c += 1;
    };

    if (answer5 === 14){
      object += 1;
      c += 1;
    }else if (answer5 === 15){
      java += 1;
      swift += 1;
    }else if(answer5 === 16){
      js += 1;
      php += 1;
      python += 1;
      ruby += 1;
      html += 1;
    };
    var test = 0;
    var max = 0;

    if (imp === 100 && answer1 === 1){
      test += 1;
      java += 5;
    }else if (imp === 100 && answer1 === 10){
      test += 1;
      ruby += 5;
    }else if (imp === 200 && answer2 === 3){
      swift += 2;
    }else if (imp === 200 && answer2 === 4){
      test += 1;
      html += 5;
    }else if (imp === 300 && answer3 === 21){
      test += 1;
      c+= 5;
    }else if (imp === 300 && answer3 === 7){
      swift += 2;
    }else if (imp === 300 && answer3 === 8){
      test += 1;
      java += 5;
    }else if (imp === 300 && answer3 === 9){
      js += 2;
    }else if (imp === 300 && answer3 === 10){
      test += 1;
      python += 5;
    }else if (imp === 400 && answer4 === 11){
      test += 1;
      html += 5;
    }else if (imp === 400 && answer4 === 12){
      php += 2;
    }else if (imp === 400 && answer4 === 13){
      test += 1;
      c += 5;
    }else if (imp === 500 && answer5 === 14){
      object += 2;
    }else if (imp === 500 && answer5 === 15){
      java += 2;
    }else if (imp === 500 && answer5 === 16){
      test += 1;
      html += 5;
    };

    if (test === 1){
      max = 10;
    }else if (test === 0){
      max = 7;
    };

    var match = 0.00;




    if (object > c && object > java && object > swift && object > js && object > php && object > python && object > ruby && object > html){
      if(object === c ){
       match = (object/max)*100;
       match = match.toFixed(2);
       $("#output").text("I suggest Objective -C. With a " + match + "% match Or").show();
       $("#output2").text("C# as your language also at a " + match + "% match").show();
     }else if (object === java) {
       match = (object/max)*100;
       match = match.toFixed(2);
       $("#output").text("I suggest Objective -C. With a " + match + "% match Or").show();
       $("#output2").text("Java as your language also at a " + match + "% match").show();
   }else if (object === swift){
     match = (object/max)*100;
     match = match.toFixed(2);
     $("#output").text("I suggest Objective -C. With a " + match + "% match Or").show();
     $("#output2").text("Swift as your language also at a " + match + "% match").show();
   }else if (object === js ){
     match = (object/max)*100;
     match = match.toFixed(2);
     $("#output").text("I suggest Objective -C. With a " + match + "% match Or").show();
     $("#output2").text("Javascript as your language also at a " + match + "% match").show();
   }else if(object === php){
     match = (object/max)*100;
     match = match.toFixed(2);
     $("#output").text("I suggest Objective -C. With a " + match + "% match Or").show();
     $("#output2").text("PHP as your language also at a " + match + "% match").show();
   }else if(object === python){
     match = (object/max)*100;
     match = match.toFixed(2);
     $("#output").text("I suggest Objective -C. With a " + match + "% match Or").show();
     $("#output2").text("Python as your language also at a " + match + "% match").show();
   }else if (object === ruby){
     match = (object/max)*100;
     match = match.toFixed(2);
     $("#output").text("I suggest Objective -C. With a " + match + "% match Or").show();
     $("#output2").text("Ruby as your language also at a " + match + "% match").show();
   }else if (object === html){
     match = (object/max)*100;
     match = match.toFixed(2);
     $("#output").text("I suggest Objective -C. With a " + match + "% match Or").show();
     $("#output2").text("HTML/CSS as your language also at a " + match + "% match").show();
   }else {
      match = (object/max)*100;
      match = match.toFixed(2);
      $("#output").text("Objective -C is your best language. With a " + match + "% match!").show();
    };
  };

  if (c > object && c > java && c > swift && c > js && c > php&& c > python && c > ruby && c > html) {
    if (c === java){
     match = (c/max)*100;
     match = match.toFixed(2);
     $("#output").text("I suggest C#. With a " + match + "% match Or").show();
     $("#output2").text("Java as your language also at a " + match + "% match").show();
   }else if (c === swift){
     match = (c/max)*100;
     match = match.toFixed(2);
     $("#output").text("I suggest C#. With a " + match + "% match Or").show();
     $("#output2").text("Swift as your language also at a " + match + "% match").show();
   }else if (c === php){
     match = (c/max)*100;
     match = match.toFixed(2);
     $("#output").text("I suggest C#. With a " + match + "% match Or").show();
     $("#output2").text("PHP as your language also at a " + match + "% match").show();
   }else if (c === js){
     match = (c/max)*100;
     match = match.toFixed(2);
     $("#output").text("I suggest C#. With a " + match + "% match Or").show();
     $("#output2").text("Javascript as your language also at a " + match + "% match").show();
   }else if (c === python){
     match = (c/max)*100;
     match = match.toFixed(2);
     $("#output").text("I suggest C#. With a " + match + "% match Or").show();
     $("#output2").text("Python as your language also at a " + match + "% match").show();
   }else if (c === ruby){
     match = (c/max)*100;
     match = match.toFixed(2);
     $("#output").text("I suggest C#. With a " + match + "% match Or").show();
     $("#output2").text("Ruby as your language also at a " + match + "% match").show();
   }else if (c === html){
     match = (c/max)*100;
     match = match.toFixed(2);
     $("#output").text("I suggest C#. With a " + match + "% match Or").show();
     $("#output2").text("HTML/CSS as your language also at a " + match + "% match").show();
   }else{

      match = (c/max)*100;
      match = match.toFixed(2);
      $("#output").text("C# is your best language. With a " + match + "% match!").show();
    };
  };

    if (java > object && java > c && java > swift && java > js && java > php && java > python && java > ruby && java > html){
      if (java === swift){
        match = (java/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Java. With a " + match + "% match Or").show();
        $("#output2").text("Swift as your language also at a " + match + "% match").show();
      }else if (java === js){
        match = (java/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Java. With a " + match + "% match Or").show();
        $("#output2").text("Javascript as your language also at a " + match + "% match").show();
      }else if (java === php){
        match = (java/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Java. With a " + match + "% match Or").show();
        $("#output2").text("PHP as your language also at a " + match + "% match").show();
      }else if (java === python){
        match = (java/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Java. With a " + match + "% match Or").show();
        $("#output2").text("Python as your language also at a " + match + "% match").show();
      }else if (java === ruby){
        match = (java/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Java. With a " + match + "% match Or").show();
        $("#output2").text("Ruby as your language also at a " + match + "% match").show();
      }else if (java === html){
        match = (java/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Java. With a " + match + "% match Or").show();
        $("#output2").text("HTML/CSS as your language also at a " + match + "% match").show();
      }else {
      match = (java/max)*100;
      match = match.toFixed(2);
      $("#output").text("Java is your best language. With a " + match + "% match!").show();
    };
  };

    if (swift > object && swift > c && swift > java && swift > js && swift > php && swift > python && swift > ruby && swift > html){
      if (swift === js){
        match = (swift/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Swift. With a " + match + "% match Or").show();
        $("#output2").text("Javascript as your language also at a " + match + "% match").show();
      }else if (swift === php){
        match = (swift/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Swift. With a " + match + "% match Or").show();
        $("#output2").text("PHP as your language also at a " + match + "% match").show();
      }else if (swift === python){
        match = (swift/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Swift. With a " + match + "% match Or").show();
        $("#output2").text("Python as your language also at a " + match + "% match").show();
      }else if (swift === ruby){
        match = (swift/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Swift. With a " + match + "% match Or").show();
        $("#output2").text("Ruby as your language also at a " + match + "% match").show();
      }else if (swift === html){
        match = (swift/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Swift. With a " + match + "% match Or").show();
        $("#output2").text("HTML/CSS as your language also at a " + match + "% match").show();
      }else {
      match = (swift/max)*100;
      match = match.toFixed(2);
      $("#output").text("Swift is your best language. With a " + match + "% match!").show();
    };
  };

    if (js > object && js > c && js > java && js > swift && js > php && js > python && js > ruby && js >  html){
      if (js === php){
        match = (js/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Javascript. With a " + match + "% match Or").show();
        $("#output2").text("PHP as your language also at a " + match + "% match").show();
      }else if (js === python){
        match = (js/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Javascript. With a " + match + "% match Or").show();
        $("#output2").text("ython as your language also at a " + match + "% match").show();
      }else if (js === ruby){
        match = (js/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Javascript. With a " + match + "% match Or").show();
        $("#output2").text("Ruby as your language also at a " + match + "% match").show();
      }else if (js === html){
        match = (js/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Javascript. With a " + match + "% match Or").show();
        $("#output2").text("HTML/CSS as your language also at a " + match + "% match").show();
      }else {
      match = (js/max)*100;
      match = match.toFixed(2);
      $("#output").text("Javascript is your best language. With a " + match + "% match!").show();
    };
  };

    if (php > object && php > c && php > java && php > swift && php > js && php > python && php > ruby && php > html){
      if (php === python){
        match = (php/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest PHP. With a " + match + "% match Or").show();
        $("#output2").text("Python as your language also at a " + match + "% match").show();
      }else if (php === ruby){
        match = (php/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest PHP. With a " + match + "% match Or").show();
        $("#output2").text("Ruby as your language also at a " + match + "% match").show();
      }else if (php === html){
        match = (php/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest PHP. With a " + match + "% match Or").show();
        $("#output2").text("HTML/CSS as your language also at a " + match + "% match").show();
      }else{
      match = (php/max)*100;
      match = match.toFixed(2);
      $("#output").text("PHP is your best language. With a " + match + "% match!").show();
    };
  };

    if (python > object && python > c && python > java && python > swift && python > js && python > php && python > ruby && python > html){
      if (python === ruby){
        match = (python/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Python. With a " + match + "% match Or").show();
        $("#output2").text("Ruby as your language also at a " + match + "% match").show();
      }else if (python === html){
        match = (python/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Python. With a " + match + "% match Or").show();
        $("#output2").text("HTML/CSS as your language also at a " + match + "% match").show();
      }else {
      match = (python/max)*100;
      match = match.toFixed(2);
      $("#output").text("Python is your best language. With a " + match + "% match!").show();
    };
  };

    if (ruby > object && ruby > c && ruby > java && ruby > swift && ruby > js && ruby > php && ruby > python && ruby > html){
      if (ruby === html){
        match = (ruby/max)*100;
        match = match.toFixed(2);
        $("#output").text("I suggest Ruby. With a " + match + "% match Or").show();
        $("#output2").text("HTML/CSS as your language also at a " + match + "% match").show();
      }else {
      match = (ruby/max)*100;
      match = match.toFixed(2);
      $("#output").text("Ruby is your best language. With a " + match + "% match!").show();
    };
  };

    if (html > object && html > c && html > java && html > swift && html > js && html > php && html > python && html > ruby){
      match = (html/max)*100;
      match = match.toFixed(2);
      $("#output").text("HTML/Css is your best language. With a " + match + "% match!").show();
    };


    console.log(python, object, ruby, html, swift, js, java, c, php);







    event.preventDefault();

  });





});
