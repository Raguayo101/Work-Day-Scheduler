// current date and hour showing in the jumbo tronw
$("#currentDate").text(moment().format('MMMM Do YYYY'));




// check if function is past,present, or future
function colorChange() {

    // tells us current hour
    var currentHour = moment().hour();
    console.log(currentHour)
    
    // goes through each staticHour class
    $(".staticHour").each(function(){

        // goes through each class and checks the ID, then turns it into a int.
        var staticTime = parseInt($(this).attr("id"));
        // console.log(this);
    
        // statement that change the color of the background depending on the hour.
        if(staticTime < currentHour){
            $('.staticHour').css('background-color','rgb(255, 94, 0)');
        }
        else if (staticTime === currentHour){
            $('.staticHour').css('background-color','rgb(0, 255, 98)');
        }
        else{
            $('.staticHour').css('background-color', 'rgb(37, 124, 223)');
        }

    });
  
}

// // this will store the data that is input by the user 
// var savebtn = document.querySelector('.savebtn');

// // savebtn.addEventListener("click", function(event){
// //     event.preventDefault();
// //     // looks for the parent element of our savebtn and then looks for the IDs
// //     var hour = $(this).parent().attr("id");
// //     console.log(hour);
// //     var plan = document.querySelector('.plan').value;

// //     localStorage.setItem(hour, plan);

// // })

$(document).ready(function () {
    // we go through each! save button class
    $(".savebtn").on("click", function () {
        // Get nearby values of the users plan 
        var text = $(this).siblings(".plan").val();
        var time = $(this).parent().attr("id");

        console.log(time);

        // Save text in local storage
        localStorage.setItem(time, text);
    })
})




$("#hour9 .plan").val(localStorage.getItem("hour9"));
$("#hour10 .plan").val(localStorage.getItem("hour10"));
$("#hour11 .plan").val(localStorage.getItem("hour11"));
$("#hour12 .plan").val(localStorage.getItem("hour12"));
$("#hour13 .plan").val(localStorage.getItem("hour13"));
$("#hour14 .plan").val(localStorage.getItem("hour14"));
$("#hour15 .plan").val(localStorage.getItem("hour15"));
$("#hour16 .plan").val(localStorage.getItem("hour16"));
$("#hour17 .plan").val(localStorage.getItem("hour17"));




colorChange();

