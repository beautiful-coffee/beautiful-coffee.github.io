const api_stem = "https://infinite-ravine-64088.herokuapp.com/translate/";
let place = 0;
function init(){
    if(localStorage.getItem("history")!=null){
        place = JSON.parse(localStorage.getItem("history")).length - 1
    }
}
function search(){
    let query = document.getElementById("dlookup").value
    console.log(query)
    document.getElementById("dlookup").value = ""
    console.log(api_stem+query)
    document.getElementById("whitakerframe").src = api_stem+query
    var history = JSON.parse(localStorage.getItem("history"))
    if (history == null){
        localStorage.setItem("history", JSON.stringify([query]))
    }
    else{
        history.push(query)
        localStorage.setItem("history",JSON.stringify(history))
    }
    place = history.length -1
}

function searchE(){
    let query = document.getElementById("dlookup").value
    console.log(query)
    document.getElementById("dlookup").value = ""
    console.log("https://infinite-ravine-64088.herokuapp.com/translate-english/"+query)
    document.getElementById("whitakerframe").src = "https://infinite-ravine-64088.herokuapp.com/translate-english/"+query
    var history = JSON.parse(localStorage.getItem("history"))
    if (history == null){
        localStorage.setItem("history", JSON.stringify([query]))
    }
    else{
        history.push(query)
        localStorage.setItem("history",JSON.stringify(history))
    }
    place = history.length -1
}

function search_history(word){
    document.getElementById("whitakerframe").src = api_stem+word
}

function previous(){
    var history = JSON.parse(localStorage.getItem("history"))
    if(place>=1){
        search_history(history[place-1])
        place = place - 1
    }
}

function next(){
    var history = JSON.parse(localStorage.getItem("history"))
    if(place<=history.length-2){
        search_history(history[place+1])
        place = place + 1
    }
}

function showhistory(){
    document.getElementById("history").innerHTML = "Your lookups: "+JSON.parse(localStorage.getItem("history"))
}

function hidehistory(){
    document.getElementById("history").innerHTML = ""
}