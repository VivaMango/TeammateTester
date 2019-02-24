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
      }).then(function(data){
        console.log(`NEW TEAMMATE: ${currentUser.name} ADDED`)
        console.log(`DATA TEST: ${data[0].name}`)
        var matchArrOuter = []
        var matchSumArr = []
        data.forEach(function(element) {
            var matchArrRes = currentCompare(currentUser , element)
            if (matchArrRes === undefined) {
                console.log("dupe thrown out")
            } else {
                matchArrOuter.push(matchArrRes)
            }
        })
        console.log(matchArrOuter)
        matchArrOuter.forEach(function(element) {
            var matchSum = 0
            element.forEach(function(elementEl) {
               matchSum += elementEl
            })
            console.log(`matchSum Test ${matchSum}`)
            matchSumArr.push(matchSum);
        })
        console.log(`MATCHSUMARR ${matchSumArr}`)
        var lowestVal = Math.min(...matchSumArr)
        console.log(`LOWEST VAL ${lowestVal}`)
        var lowestIndex = matchSumArr.indexOf(lowestVal)
        console.log(`LOW IND ${lowestIndex}`)
        var matchMade = data[lowestIndex]
        console.log(`MM NAME ${matchMade.name}`)
        window.alert(`YOUR MATCH IS ${matchMade.name}`)//placeholder for modal
    });
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

function currentCompare(user , teammate) {
    var matchArr = []
    if (user.name === teammate.name) {
        console.log("handle dupe here")
    } else {
        userArr = user.ansArray
        teamArr = teammate.ansArray
        for (var i = 0 ; i < userArr.length ; i++) {
            userInt = parseAnswers(userArr[i])
            teamInt = parseAnswers(teamArr[i])
            console.log(`USER INT ${userInt} TEAM INT ${teamInt}`)
            matchResult = Math.abs(userInt - teamInt)
            matchArr.push(matchResult)

        }
        console.log(`MATCH ARR ${matchArr}`)
        return matchArr
    }
}