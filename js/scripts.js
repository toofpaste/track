$(function(){

  $("form#qq").submit(function(event){
    var answer1 = $("input:radio[name=q1]:checked").val();
    var answer2 = $("input:radio[name=q2]:checked").val();
    var answer3 = $("input:radio[name=q3]:checked").val();
    var answer4 = $("input:radio[name=q4]:checked").val();
    var answer5 = $("input:radio[name=q5]:checked").val();
    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);
    console.log(answer5);
      
    event.preventDefault();

  });





});
