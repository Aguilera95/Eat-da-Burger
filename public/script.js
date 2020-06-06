$(function(){

    $(".create-form").on("submit", function(event){
        event.preventDefault();
        var newBurger = {
            burger_name: $("#newBurger")
            .val()
            .trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Added new burger");
            location.reload();
        });

    });
// burger click event 
    $(".eatBurger").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");
        var devouredState ={
            devoured:1
        };

         // post

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
    }).then(function(){
        console.log("Burger devoured");
        location.reload();
    });
    
    });

    $(".trashburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).then("id");

        // delete request

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

   
});