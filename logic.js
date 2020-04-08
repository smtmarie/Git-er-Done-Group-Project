

var backburnerItems = []
var priorityItems = []

$("#priority-button").on("click", function(event){
    event.preventDefault()
    addPriorityItem()
})
$("#backburner-button").on("click", function(event){
    event.preventDefault()
    addBackburnerItem()
})

// function addItem(arr){
//     var todo = $("#input-area").val()
//     arr.push(todo)
//     for(i=0; i<arr.length; i++){}
//     if(arr.length<6){
//         var li = $("<li>").text(todo).addClass("list-item").attr("id", `${arr}-number${[i]}`)
//         var doneBtn = $("<button>").text("done").addClass("doneButton").attr("id", `${arr}-done-button${[i]}`)
//         $("#input-area").val("").attr("style", "display: block")
//         $(`#${arr}`).append(li, doneBtn)
//     } else{
//         $("#input-area").attr("style", "display: none")
//     }
//     $(`#${arr}-done-button${[i]}`).on("click", function(event){
//         event.preventDefault()
//         removeItem(arr)
//     })

// }

function addBackburnerItem(){
    var todo = $("#backburner-input-area").val()
    backburnerItems.push(todo)
    for (i=0; i<backburnerItems.length; i++){}
    if (backburnerItems.length < 6){
        var li = $("<li>").text(todo).addClass("list-item").attr("id", `backburner-item${[i]}`)
        var doneBtn = $("<button>").text("done").addClass("doneButton").attr("id", `backburner-done-button${[i]}`)
        $("#backburner-input-area").val("").attr("style", "display: block")
        $("#backburner-list").append(li, doneBtn)
    } else {
        $("#backburner-input-area").attr("style", "display: none")
    }
    $(`#backburner-done-button${[i]}`).on("click", function(event){
        event.preventDefault()
        removeBackburnerItem()
    })
}

function addPriorityItem(){
    var todo = $("#priority-input-area").val()
    priorityItems.push(todo)
    for (i=0; i<priorityItems.length; i++){}
    if (priorityItems.length < 6){
        var li = $("<li>").text(todo).addClass("list-item").attr("id", `priority-item${[i]}`)
        var doneBtn = $("<button>").text("done").addClass("doneButton").attr("id", `priority-done-button${[i]}`)
        $("#priority-input-area").val("").attr("style", "display: block")
        $("#priority-list").append(li, doneBtn)
    } else {
        $("#priority-input-area").attr("style", "display: none")
    }

    $(`#priority-done-button${[i]}`).on("click", function(event){
        event.preventDefault()
        removePriorityItem()
    })
}

function removePriorityItem(){
    for (i=0; i<priorityItems.length; i++){}
    $(`#priority-item${[i]}`).remove()
    $(`#priority-done-button${[i]}`).remove()
}

function removeBackburnerItem(){
    for (i=0; i<backburnerItems.length; i++){}
    $(`#backburner-item${[i]}`).remove()
    $(`#backburner-done-button${[i]}`).remove()
}

// function removeItem(arr){
//     for (i=0; i<arr.length; i++){}
//     $(`#${arr}-number${[i]}`).remove()
//     $(`#${arr}-done-button${[i]}`).remove()
// }


$("#how-to-play-button").on("click", function(event){
    event.preventDefault()
    $(".modal-content").attr("style", "display: block")
})

$(".close").on("click", function(event){
    event.preventDefault()
    $(".modal-content").attr("style", "display: none")
})






