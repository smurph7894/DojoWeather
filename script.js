function acceptCookie() {
    var element = document.querySelector("."+"lower")
    element.remove()
}

function burbank() {
    alert("Burbank is cold!")
}

function chicago() {
    alert("Chicago is windy!")
}

function Dallas() {
    alert("Dallas is hot!")
}

function changeTempCalc(element) {
    console.log(element.value)

    if (element.value === "celsius") {

        var highTempEls = document.querySelectorAll("."+"highTemp")

        //this is the better way to name and use variable so they don't cross over and get complex
        for (var i=0; i<=3; i++) {
            let element = highTempEls[i]
            let value = element.innerHTML
            let newValue = Math.round((value-32)*5/9)
            element.innerHTML = newValue
        }

        //this way reuses variables and ends up causing confusion
        var lowTemp = document.querySelectorAll("."+"lowTemp")
        for (var i=0; i<=3; i++) {
            let lT = lowTemp[i]
            lT = lT.innerHTML
            lT = Math.round((lT-32)*5/9)
            lowTemp[i].innerHTML = lT
        }

    }
    else {
        var highTempEls = document.querySelectorAll("."+"highTemp")
        for (var i=0; i<=3; i++) {
            let hT = highTempEls[i]
            hT = hT.innerHTML
            hT = Math.round((hT*9/5)+32)
            highTempEls[i].innerHTML = hT
        }

        var lowTemp = document.querySelectorAll("."+"lowTemp")
        for (var i=0; i<=3; i++) {
            let lT = lowTemp[i]
            lT = lT.innerHTML
            lT = Math.round((lT*9/5)+32)
            lowTemp[i].innerHTML = lT
        }

        console.log(highTempEls)
        console.log(lowTemp)
    }

    }

