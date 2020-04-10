

var backburnerItems = []

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

var backburnerId = 1

function addBackburnerItem(){
    var todo = $("#input-area").val()
    backburnerItems.push(todo)
    if (backburnerItems.length < 6){
        var li = $("<li>").text(todo).addClass("list-item").attr("id", `backburner-item${backburnerId}`)
        var doneBtn = $("<button>").text("done").addClass("doneButton").attr("id", backburnerId)
        $("#input-area").val("").attr("style", "display: block")
        $("#backburner-to-do-list").append(li, doneBtn)
        backburnerId++
    } else {
        $("#input-area").attr("style", "display: none").attr("text", "no")
    }
    if (backburnerItems.length===0){
        $(".drink-modal-content").attr("style", "display: block")
    } else{
        $(".drink-modal-content").attr("style", "display: none")
    }
}

function removeBackburnerItem(itemNumber){
    $(`#backburner-item${itemNumber}`).remove()
    $(`#${itemNumber}`).remove()
    backburnerItems.pop()
    if (backburnerItems.length===0){
        $(".drink-modal-content").attr("style", "display: block")
    } else{
        $(".drink-modal-content").attr("style", "display: none")
    }
}

$("#how-to-play-button").on("click", function(event){
    event.preventDefault()
    $(".modal-content").attr("style","display: block");
})

$("#close-gif").on("click", function(){
        $("#gif-modal").attr("style", "display: none")
    })
    
$("#close-how-to").on("click", function(event){
        event.preventDefault()
        $(".howto-modal-content").attr("style","display: none");
    })
        
$(".close").on("click", function(event){
        event.preventDefault()
        $(".drink-modal-content").attr("style","display: none");
    })
            
$("#how-to-play-button").on("click", function(event){
    event.preventDefault()
    $(".howto-modal-content").attr("style","display: block");
})
$("#test-button").on("click", function(event){
    event.preventDefault()
    $(".drink-modal-content").attr("style", "display: block")
})
$("#input-area").on("click", function(){
    $("#gif-modal").attr("style", "display: none;")
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
        $("#drink-modal-header").text(`Drink name: ${drinkName}`)
        $("#drink-glass").text(`Glass needed: ${drinkGlass}`)
        $("#drink-ingredients").text(`Ingredients needed: ${drinkIngredients}`)
        $("#drink-instructions").text(`Instructions: ${drinkInstructions}`)
        $("#drink-image").attr("src", response.drinks[0].strDrinkThumb).attr("style", "height: 150px;")
    })
})

$("#nonalcoholic-button").on("click", function(){
    event.preventDefault()
$.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
    method: "GET"
}).then(function(response){
    var i = Math.floor(Math.random()*response.drinks.length)
    var drinkName= response.drinks[i].strDrink
    $("#drink-modal-header").text(`Drink name: ${drinkName}`)
    $("#drink-glass").text("")
    $("#drink-ingredients").text("")
    $("#drink-instructions").text("")
    $("#drink-image").attr("src", response.drinks[i].strDrinkThumb).attr("style", "height: 150px")
    })
})

$("#backburner-to-do-list").on("click", ".doneButton", function(event){
    event.preventDefault()
    removeBackburnerItem($(this).attr("id"))
    $("#gif-modal").attr("style", "display: block")
    $.ajax({
        url: "https://api.tenor.com/v1/search?key=XCBAJP1CF1AR&q=good+job",
        method: "GET"
    }).then(function(response){
        var i = Math.floor(Math.random() * response.results.length)
        $("#gif").attr("src", response.results[i].media[0].gif.url)
    })
})

