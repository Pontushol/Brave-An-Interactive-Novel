//-----------------------------Stats Dashboard
var jay = [
    { stat: "str", value: 1 },
    { stat: "spd", value: 1 },
    { stat: "dex", value: 1 },
    { stat: "sth", value: 1 },
    { stat: "wit", value: 1 },
    { stat: "pre", value: 1 },

];

var h = 100;
var w = 150;
var barPadding = 1;
var colWidth = w / jay.length;
var barWidth = colWidth - barPadding;
var svg = d3.select("#stats-chart")
    .append("svg")
    .attr("height", h)
    .attr("width", w)
// First Call to change_data will plot the initial chart
change_data();
// Generates a Random set of data and plots it as a bar chart
// Called once on page load, then each time the button is clicked.
function change_data() {
    var data = jay;
    plot_data(data);
}

function plot_data(data) {
    var bars = svg.selectAll("rect")
        .data(data);
    var labels = svg.selectAll("text")
        .data(data);
    bars.exit().remove();
    labels.exit().remove();
    create_bars(bars);
    create_labels(labels);
    resize_bars(bars, data);
    position_labels(labels, data);
}

function create_bars(bars) {
    bars.enter()
        .append("rect");
}

function resize_bars(bars, data) {
    bars.transition()
        .duration(500)
        .attr("x", function(d, i) {
            return i * colWidth;
        })
        .attr("y", function(d) {
            return h - d.value;
        })
        .attr("width", barWidth)
        .attr("height", function(d) {
            return d.value;
        });
}

function create_labels(labels) {
    labels.enter()
        .append("text")
        .attr("text-anchor", "middle")
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "black");
}

function position_labels(labels, data) {
    labels.transition()
        .duration(500)
        .text(function(d) {
            return d.value;
        })
        .attr("x", function(d, i) {
            return i * colWidth + barWidth / 2;
        })
        .attr("y", function(d) {
            return h - d.value;
        });
}

function position_stat_labels(labels, data) {
    labels.transition()
        .duration(500)
        .text(function(d) {
            return d.stat;
        })
        .attr("x", function(d, i) {
            return i * colWidth + barWidth / 2;
        })
        .attr("y", function(d) {
            return h;
        });
}




//Jquerry events

$(document).ready(function() {

    //Start Screen  
    $("#openGame-btn").click(function() {
        $("#start-screen").hide('fast');
        $("#home-screen").show('medium');
    });

    //Home Screen
    $("#newGame-btn").click(function() {
        $(".active").addClass("hidden");
        $(".active").removeClass("active");
        $("#home-screen").hide('fast');
        $("#introduction").show('medium');
        $("#introduction").addClass('active');
        $("header").removeClass('push-down-75');
        $("#return-btn").show('medium');
        $(".choice-display").show();
        $("#content").hide('medium');
        $(".ig-navbar").show('medium');
    });


    //Introduction
    $("#introStart-btn").click(function() {
        $("#introduction").hide('fast');
        $("#introduction").removeClass('active');
        $("#content").show('medium');
        $("#p1").show('medium');
        $("#p1").addClass('active');
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });


    // Home Btn - Nav
    $(".navHome-btn").click(function() {
        $(".active").hide('fast');
        $(".ig-navbar").hide('fast');
        $("#home-screen").show('medium');
    });


    //Return Btn
    $("#return-btn").click(function() {
        $("#home-screen").hide('fast');
        $(".active").show('medium');
        $(".ig-navbar").show('medium');
    });


    $(".next").click(function() {
        $(".active").hide("fast");
        $(".active").removeClass("active");
        $(this).closest(".page").hide("fast");
        $(this).closest(".page").next(".page").show('medium');
        $(this).closest(".page").next(".page").addClass('active');
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $(".next-chapter").click(function() {
        $(".active").hide("fast");
        $(".active").removeClass("active");
        $(this).closest("section").hide("fast");
        $(this).closest("section").next("section").show('medium');
        $(this).closest("section").next("section").addClass('active');
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    //Content Navgation Buttons

    // $(".c-btn-1").click(function() {
    //     $(this).parent().closest(".text-section").next().children(".c-1").show('medium');
    //     $(this).parent().closest(".text-section").next().children(".c-1").addClass('active');
    // });

    // $(".c-btn-2").click(function() {
    //     $(this).closest(".text-section").next().children(".c-2").show('medium');
    //     $(this).closest(".text-section").next().children(".c-2").addClass('active');
    // });

    // $(".c-btn-3").click(function() {
    //     $(this).closest(".text-section").next().children(".c-3").show('medium');
    //     $(this).closest(".text-section").next().children(".c-3").addClass('active');
    // });

    // $(".c-btn-4").click(function() {
    //     $(this).closest(".text-section").next().children(".c-4").show('medium');
    //     $(this).closest(".text-section").next().children(".c-4").addClass('active');
    // });

    $("[class^='c-btn']").click(function() {
        var lc = $(this).attr('class').split(' ').pop();
        lc = lc.replace('-btn', '');
        $(this).closest(".text-section").next().children("." + lc).show('medium');
        $(this).closest(".text-section").next().children("." + lc).addClass('active');
    });
    $(".cp-btn").click(function() {
        $(this).closest(".text-section").next().children(".choice-plus").show('medium');
        $(this).closest(".text-section").next().children(".choice-plus").addClass('active');
    });

    //Hide Choice List
    $(".c-btn").click(function() {
        $(this).parent().hide('slow');
    })
    //Stats 

    $(".str-btn").click(addStr);
    $(".spd-btn").click(addSpd);
    $(".dex-btn").click(addDex);
    $(".sth-btn").click(addSth);
    $(".wit-btn").click(addWit);
    $(".pre-btn").click(addPre);
    $("#newGame-btn").click(resetStats);

})

function addStr() {
    jay[0]["value"]++
}

function addSpd() {
    jay[1]["value"]++
};

function addDex() {
    jay[2]["value"]++
}

function addSth() {
    jay[3]["value"]++
}

function addWit() {
    jay[4]["value"]++
}

function addPre() {
    jay[5]["value"]++
}

function resetStats() {
    jay[0]["value"] = 1
    jay[1]["value"] = 1
    jay[2]["value"] = 1
    jay[3]["value"] = 1
    jay[4]["value"] = 1
    jay[5]["value"] = 1
}




// --------------------------- Modal
// Get Modal Element
var modal = document.getElementById("stats-modal");

// Get open modal button
var modalBtn = document.getElementById("modal-btn");

// Get close btn
var closeBtn = document.getElementsByClassName("close-btn")[0];

// Listen for Open modal
modalBtn.addEventListener('click', change_data);
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside Click
window.addEventListener('click', clickOutside)


//Function to open modal
function openModal() {
    modal.style.display = "block"
}

//Function to close modal
function closeModal() {
    modal.style.display = "none"
}

function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}
