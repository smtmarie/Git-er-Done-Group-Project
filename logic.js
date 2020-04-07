

var listItems = []

$("#priority-area").on("click", function(event){
    event.preventDefault()
    addItem()
})
$("#backburner-button").on("click", function(event){
    event.preventDefault()
    addItem()
    
})

$("#done-button").on("click", function(event){
    event.preventDefault()
    removeItem()
})

function addItem(){
    var todo = $("#input-area").val()
    listItems.push(todo)
    if (listItems.length < 6){
        console.log(todo)
        var li = $("<li>").text(todo).addClass("list-item")
        var doneBtn = $("<button>").text("done").addClass("doneButton")
        $("#input-area").val("").attr("style", "display: block")
        $("#to-do-list").append(li, doneBtn)

    } else {
        alert("You can only have 5 items on the list")
        $("#input-area").attr("style", "display: none")
    }
}

function removeItem(){
    for (i=0; i<listItems.length; i++){
    $("#done-button").on("click", function(event){
        event.preventDefault()
        $(`#item${[i]}`).empty
        $(`#done-button${[i]}`).empty
    })
}}


$("#how-to-play-button").on("click", function(event){
    event.preventDefault()
    $(".modal-content").attr("style", "display: block")
})

$(".close").on("click", function(event){
    event.preventDefault()
    $(".modal-content").attr("style", "display: none")
})






