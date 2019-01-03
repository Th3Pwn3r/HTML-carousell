window.onload = function(){

index = 0;
count = $(".imgContainer").children().length;
img = $(".imgContainer").find("img");

function next() {
  $(img[index]).removeClass("active")
  $(img[index]).addClass("disabled")
  index+=1;
  if (index>count-1) {index = 0}
  $(img[index]).removeClass("disabled")
  $(img[index]).addClass("active")
}

$( ".imgContainer" ).click(function() {
  next();
});

}