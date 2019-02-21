console.log("CLIENTJS LINKED")

$("#surveySubmit").on("click" , function () {
    event.preventDefault();
    var answerArray = []
    $(".custom-select").each(function(i) {
        var answerVal = ($(this).val())
        answerArray.push(answerVal)
    })
})

