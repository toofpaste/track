$(function(){

  $("form#qq").submit(function(event){
    var answer1 = parseInt($("input:radio[name=q1]:checked").val());
    var answer2 = parseInt($("input:radio[name=q2]:checked").val());
    var answer3 = parseInt($("input:radio[name=q3]:checked").val());
    var answer4 = parseInt($("input:radio[name=q4]:checked").val());
    var answer5 = parseInt($("input:radio[name=q5]:checked").val());
    var total = answer1 + answer2 + answer3 + answer4 + answer5;
    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);
    console.log(answer5);
        if (total === 40 || total === 39 || total === 37 || total === 47 || total === 41 || total === 42 || total === 51 || total === 50 || total === 52){
            if (answer1 === 1 && answer2 === 3 && answer3 === 9 && answer4 === 11 && answer5 === 16){
              //total = 40
              $("#output").text("Javascript is your best language").show();
            }else if (answer1 === 1 && answer2 === 3 && answer3 === 8 && answer4 === 12 && answer5 === 15){
                //total = 39
              $("#output").text("Java is your best language").show();
            }else if (answer1 === 1 && answer2 === 3 && answer3 === 7 && answer4 === 12 && answer5 === 14){
              //total = 37
              $("#output").text("Objective -C is your best language").show();
            }else if (answer1 === 10 && answer2 === 3 && answer3 === 7 && answer4 === 12 && answer5 === 15){
              //total = 47
              $("#output").text("Swift is your best language").show();
            }else if (answer1 === 1 && answer2 === 3 && answer3 === 9 && answer4 === 12 && answer5 === 16){
              //total = 41
              $("#output").text("PHP is your best language").show();
            }else if (answer1 === 1 && answer2 === 3 && answer3 === 10 && answer4 === 12 && answer5 === 16){
              //total = 42
              $("#output").text("Python is your best language").show();
            }else if (answer1 === 10 && answer2 === 4 && answer3 === 9 && answer4 === 12 && answer5 === 16){
              //total = 51
              $("#output").text("Ruby is your best language").show();
            }else if (answer1 === 10 && answer2 === 4 && answer3 === 9 && answer4 === 11 && answer5 === 16){
              //total = 50
              $("#output").text("HTML/Css is your best language").show();
            }else if (answer1 === 1 && answer2 === 3 && answer3 === 21 && answer4 === 13 && answer5 === 14){
              //total = 52
              $("#output").text("C# is your best language").show();
            }else alert("Error with standard answers");

        }else alert("No language selected");






    event.preventDefault();

  });





});
