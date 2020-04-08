

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
    var todo = $("#input-area").val()
    backburnerItems.push(todo)
    for (i=0; i<backburnerItems.length; i++){}
    if (backburnerItems.length < 6){
        var li = $("<li>").text(todo).addClass("list-item").attr("id", `backburner-item${i}`)
        var doneBtn = $("<button>").text("done").addClass("doneButton").attr("id", i)
        // var doneBtn = $("<label>").addClass("checkbox").text("Finished!")
        // var checkBox= $("<input>").attr("type", "checkbox").attr("id", i)
        $("#input-area").val("").attr("style", "display: block")
        $("#to-do-list").append(li, doneBtn)
        doneBtn.append(checkBox)
    } else {
        $("#input-area").attr("style", "display: none")
    }
}

$("#to-do-list").on("click", ".doneButton", function(event){
    event.preventDefault()
    console.log($(this).attr("id"))
    removeBackburnerItem($(this).attr("id"))
    
})

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

function removeBackburnerItem(itemNumber){
    $(`#backburner-item${itemNumber}`).remove()
    $(`#${itemNumber}`).remove()
    backburnerItems.pop()
    console.log(backburnerItems)
}

// function removeItem(arr){
//     for (i=0; i<arr.length; i++){}
//     $(`#${arr}-number${[i]}`).remove()
//     $(`#${arr}-done-button${[i]}`).remove()
// }


$("#how-to-play-button").on("click", function(event){
    event.preventDefault()
    $(".modal-content").attr("style","display: block");
})

$(".close").on("click", function(event){
    event.preventDefault()
    $(".modal-content").attr("style","display: none");
    $(".drink-modal-content").attr("style","display: none");
})

$("#test-button").on("click", function(event){
    event.preventDefault()
    $("#drink-modal").attr("style", "display: block")
})

$("#alcoholic-button").on("click", function(){
    event.preventDefault()
$.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    method: "GET"
}).then(function(response){
    var drinkName= response.drinks[0].strDrink
    var drinkGlass= response.drinks[0].strGlass
    var drinkInstructions= response.drinks[0].strInstructions
    var drinkIngredients= [response.drinks[0].strIngredient1, response.drinks[0].strIngredient2, response.drinks[0].strIngredient3, response.drinks[0].strIngredient4, response.drinks[0].strIngredient5, response.drinks[0].strIngredient6, response.drinks[0].strIngredient7]
        $("#drink-modal-header").text(drinkName)
        $("#drink-glass").text(drinkGlass)
        $("#drink-ingredients").text(drinkIngredients)
        $("#drink-instructions").text(drinkInstructions)
        console.log(drinkName)
        console.log(drinkGlass)
        console.log(drinkInstructions)
        console.log(drinkIngredients)
    })
})

// if (backburnerItems.length===0){
//     $("#drink-modal").attr("style", "display: block")
// }

// $("#nonalcoholic-button").on("click", function(){
//     event.preventDefault()
// $.ajax({
//     url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
//     method: "GET"
// }).then(function(response){
//     console.log(response)
//     var drinkName= response.drinks[0].strDrink
//     var drinkGlass= response.drinks[0].strGlass
//     var drinkInstructions= response.drinks[0].strInstructions
//     var drinkIngredients= [response.drinks[0].strIngredient1, response.drinks[0].strIngredient2, response.drinks[0].strIngredient3, response.drinks[0].strIngredient4, response.drinks[0].strIngredient5, response.drinks[0].strIngredient6, response.drinks[0].strIngredient7]
//     var ul=$("<ul>")
//     var li=("<li>")
//         $(".drink-modal-body").append(ul)
//         $("#drink-modal-header").text(drinkName)
//         ul.append(li).text(drinkGlass)
//         ul.append(li).text(drinkInstructions)
//         ul.append(li).text(drinkIngredients)
//     })
// })


