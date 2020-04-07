var todo = $("#input-area").val()

var listItems = []

$("#priority-area").on("click", function(event){
    event.preventDefault()
    addItem()
})
$("#backburner-area").on("click", function(event){
    event.preventDefault()
    addItem()
})

$("#done-button").on("click", function(event){
    event.preventDefault()
    removeItem()
})

function addItem(){
    for (i=0; i<listItems.length; i++){
        var li = $("<li>").text(todo).addClass("list-item").addId(`item${[i]}`)
        var doneBtn = $("<button>").text("done").addId("done-button"+[i])
        todo.val("")
        
    if (listItems < 6){
        listItems.push(todo.val)
        $("#to-do-list").append(li, doneBtn)
    } else {
        alert("You can only have 5 items on the list")
    }
}}

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
    $(".modal-content").style.display= "block";
})

$(".close").on("click", function(event){
    event.preventDefault()
    $(".modal-content").style.display= "none";
})






