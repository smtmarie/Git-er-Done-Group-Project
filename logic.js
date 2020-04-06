var todo = $("#input-area").val()

var number = "12345".split()


function addItem(){
    for (i=0; i<number.length; i++){
        var li = $("<li>").text(todo).addClass("list-item").addId(`item${[i]}`)
        todo.val("")
        $("#to-do-list").append(li)
    }
}

function removeItem(){
    for (i=0; i<number.length; i++){
    $("#done-button").on("click", function(event){
        event.preventDefault()
        $(`#item${[i]}`).empty
    })
}
}