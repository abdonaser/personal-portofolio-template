
//> 1-  with Bure JS
// var prevScrollpos = window.pageYOffset;
//window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.querySelector(".navBar").style.top = "0";
//         document.querySelector(".navBar").style.background = "#333"
//         document.querySelector(".navBar").style.boxShadow = "0 1px 3px rgba(50, 50, 50, 0.4)"
//         console.log("downe", currentScrollPos);
//         if (currentScrollPos == 0) {
//             document.querySelector(".navBar").style.top = "0";
//             document.querySelector(".navBar").style.background = "none"
//             document.querySelector(".navBar").style.boxShadow = "none"
//         }


//     } else {
//         document.querySelector(".navBar").style.top = "-60px";
//         console.log("up", currentScrollPos);
//     }
//     prevScrollpos = currentScrollPos;
// }



//> 2- My Way with Bure JS
// window.addEventListener("scroll", function (e) {
//     if (window.pageYOffset < 606) {
//         console.log(window.pageYOffset);
//         $(".navBar").css("position", "relative")
//         $(".navBar").css("backgroundColor", "transparent")
//     } else if (window.pageYOffset > 606) {
//         console.log(window.pageYOffset);
//         $(".navBar").css("position", "fixed")
//         $(".navBar").css("backgroundColor", "#333333")
//         $(".navBar").css("transition", "all 1s")
//     }
// })

//> 2-with Jquery
//& hide navBarWhene scroll Down After a frist setion
// $(window).scroll(function () {
//     if ($(window).scrollTop() >= window.innerHeight) {
//         $(".navBar").css("position", "fixed")
//         $(".navBar").css("backgroundColor", "#333333")
//     } else {
//         $(".navBar").css("position", "relative")
//         $(".navBar").css("backgroundColor", "transparent")
//     }

// })

//& another way to hide navBar Whene scroll Down After a frist setion
$(window).scroll(function () {
    if ($(window).scrollTop() === 0) {
        $(".navBar").slideDown(500)
        $(".navBar").css("backgroundColor", "transparent")
    }
    else if ($(window).scrollTop() > 0 && $(window).scrollTop() < window.innerHeight - $(".navBar").outerHeight()) {
        $(".navBar").slideUp(500)
        $(".navBar").css("backgroundColor", "transparent")
    }
    else if ($(window).scrollTop() > window.innerHeight - $(".navBar").outerHeight() * 2 && $(window).scrollTop() < window.innerHeight) {
        $(".navBar").fadeOut(600)
        $(".navBar").css("backgroundColor", "#333333")
        // console.log(window.innerHeight - $(".navBar").outerHeight());

    }
    else if ($(window).scrollTop() >= window.innerHeight) {
        $(".navBar").slideDown(500)
        $(".navBar").css("backgroundColor", "#333333")
    }
})

//& Hide Nave Bar in A certain Section In page using{Offset()}
// $(window).scroll(function () {
//     if ($(window).scrollTop() === 0) {
//         $(".navBar").slideDown(500)
//     }
//     else if ($(window).scrollTop() < $(".OurPortfolio").offset().top) {
//         $(".navBar").slideUp(500)
//     }
//     else if ($(window).scrollTop() >= $(".OurPortfolio").offset().top) {
//         $(".navBar").slideDown(500)
//         $(".navBar").css("backgroundColor", "#333333")
//     }
// })


//& Hide arrow-up Whene scroll Down After a frist setion
$(window).scroll(function () {
    if ($(window).scrollTop() < window.innerHeight) {
        $(".arrow-up").hide(500)
    } else {
        $(".arrow-up").show(500)
    }
})

$(".arrow-up").click(function () {
    $('html , body').animate({ scrollTop: 0 }, 2000)
})


//& P17 Animating to top with specific time  // a[href^='#'] it is mean "any anchor must start with #"
$(".navList a[href^='#']").click(function () {
    const selectedHref = $(this).attr("href")
    $('html , body').animate({ scrollTop: $(selectedHref).offset().top }, 1500)
})



//& Loading Screen

//> with JavaScript
// window.addEventListener("load", function () {
//     $(".loadingScreen").fadeOut(500, function () {
//         $("body").css("overflow", "visible");
//     })
// })

//> with Jquery

$(document).ready(function () {
    $(".loadingScreen").fadeOut(500, function () {
        $("body").css("overflow", "visible");
    })
})




$(".parentColorBox span").eq(0).css("backgroundColor", "#ff305b")
$(".parentColorBox span").eq(1).css("backgroundColor", "rgb(0,0,200)")
$(".parentColorBox span").eq(2).css("backgroundColor", "rgb(0,155,0)")
$(".parentColorBox span").eq(3).css("backgroundColor", "rgb(55,0,0)")

$(".parentColorBox span").click(function () {
    const selectedColor = $(this).css("backgroundColor")
    $(".colorChanged").css("color", selectedColor)
    $(".bgChanged").css("backgroundColor", selectedColor)
})
const parentColorBoxWidth = $(".parentColorBox").outerWidth()


$(".boxSettigns").click(function () {
    console.log(parentColorBoxWidth);
    if ($(".parentColorBox").css("left") == "0px") {
        // $(".parentColorBox").css("left", -parentColorBoxWidth)
        $(".parentColorBox").animate({ left: -parentColorBoxWidth }, 700)
        $(".boxSettigns .angles").removeClass("fa-angles-left")
        $(".boxSettigns .angles").addClass("fa-angles-right")
        $(".boxSettigns .angles").css("color", "#fff")

    } else {
        $(".parentColorBox").animate({ left: 0 }, 700)
        $(".boxSettigns .angles").removeClass("fa-angles-right")
        $(".boxSettigns .angles").addClass("fa-angles-left")
        $(".boxSettigns .angles").css("color", "#ff305b")
        $(".boxSettigns .angles").css("transition", "all 5s")
    }
})





// function sayHello({ name = 'abdo', age = 50 }) {
//     console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// }

// // Example usage:
// sayHello(); // Output: Hello, my name is abdo and I am 50 years old.
// sayHello({ name: 'Alice' }); // Output: Hello, my name is Alice and I am 50 years old.
// sayHello({ age: 30 }); // Output: Hello, my name is abdo and I am 30 years old.
// sayHello({ name: 'Bob', age: 25 }); // Output: Hello, my name is Bob and I am 25 years old.


function hello({empName = "abdo" , age = 25}) {
    console.log("hello ", empName, " yout are ", age, " years old");
}

hello({empName :"asc"})