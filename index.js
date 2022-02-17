var arth = "";

$("button").on("click", function(){
  if($(event.target).hasClass("equal")){
    arth = String(eval(arth));
    $("h1").text(arth);
  }
  else if($(event.target).hasClass("del")){
    arth = arth.slice(0, (arth.length)-1);
    $("h1").text(arth);
  }
  else if($(event.target).hasClass("reset")){
    arth = "";
    $("h1").text(arth);
  }
  else{
    if($("h1").text().length <= 15){
      arth += $(event.target).attr("value");
      $("h1").text($("h1").text() + $(event.target).text());
    }
  }
});

$(document).on("keydown", function(){
  if(event.key === "Enter"){
    arth = String(eval(arth));
    $("h1").text(arth);
  }
  else if(event.key === "Backspace"){
    arth = arth.slice(0, (arth.length)-1);
    $("h1").text(arth);
  }
  else if(event.key === "Escape"){
    arth = "";
    $("h1").text(arth);
  }
  else if(!isNaN(event.key) || event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.key === "."){
    if($("h1").text().length <= 15){
      arth += event.key;
      if(event.key === "*") $("h1").text($("h1").text() + "×");
      else if(event.key === "/") $("h1").text($("h1").text() + "÷");
      else $("h1").text($("h1").text()+event.key);
    }
  }
});
