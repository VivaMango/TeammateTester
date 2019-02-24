console.log("CLIENTJS LINKED")

$("#surveySubmit").on("click" , function () {
    event.preventDefault();
    var answerArray = [];
    var intArray = [];
    var userName = $("#nameInput").val().trim();
    var userPhoto = $("#photoInput").val().trim();
    $(".custom-select").each(function(i) {
        var answerVal = ($(this).val())
        answerArray.push(answerVal)
    })
    
    // answerArray.forEach(function(element) {
    //     var parsedEl = parseAnswers(element);
    //     var typeEl = typeof(parsedEl)
    //     console.log(`PARSEDEL ${parsedEl} TYPEOF: ${typeEl}`)
    //     intArray.push(parsedEl);
    // })  

    var currentUser = new Teammate (userName , userPhoto , answerArray)
    console.log(`CURRENT USER: 
    NAME: ${currentUser.name}
    PHOTO: ${currentUser.photoLink}
    SURVEY ARR: ${currentUser.ansArray}`)
    $.ajax("/api/teammates", {
        type: "POST",
        data: currentUser
      }).then(
        console.log((`NEW TEAMMATE: ${currentUser.name} ADDED`))
      );
    

})

function parseAnswers(ans) {
    return parseInt(ans)
};

//TEAMMATE CONSTRUCTOR
function Teammate (name , photoLink , ansArray) {
    this.name = name;
    this.photoLink = photoLink;
    this.ansArray = ansArray;
}