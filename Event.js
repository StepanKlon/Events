let i = 1;
$('#firstButton').click(() => {
  console.log("Yeah, you clicked me");
});
$("#change").click(() => {
    if (i%2===0) {
        $("#firstButton").text("Zmena");
        i++;
    } else {
        $("#firstButton").text("Click!");
        i++;
    }
    
})

$("#thirdButton").click(() => {
    if (i%2===0) {
        $("button").css("background-color","Yellow");
        i++;
    } else {
        $("button").css("background-color","grey");
        i++;
        }
    
})