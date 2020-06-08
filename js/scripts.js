$(document).ready(function() {
  $("#favorites").submit(function() {

    let favNumber = $("input#number").val();
    let favColor = $("input#color").val();
    let favFood = $("input#food").val();
    let favDay = $("input#day").val();
    let favSeason = $("input#season").val();

    let array = [favNumber, favColor, favFood, favDay, favSeason];
    
    let newArray = [];

    newArray.push(array[0],array[1],array[2]);

    $("#output1").text(newArray[0]);
    $("#output2").text(newArray[1]);
    $("#output3").text(newArray[2]);

    event.preventDefault();
  });
});
