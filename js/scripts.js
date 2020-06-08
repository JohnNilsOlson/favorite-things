$(document).ready(function() {
  $("#favorites").submit(function() {

    let favNumber = $("input#number").val();
    let favColor = $("input#color").val();
    let favFood = $("input#food").val();
    let favDay = $("input#day").val();
    let favSeason = $("input#season").val();

    let array = [favNumber, favColor, favFood, favDay, favSeason];

    console.log(array);
    event.preventDefault();
  });
});
