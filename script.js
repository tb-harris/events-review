// get references
let div1 = document.getElementById("one");
let div2 = document.getElementById("two");

// set up onmouseover for div1
div1.onmouseover = function() {
    div2.style.backgroundColor = "orange";
}

// set up onmouseout for div1
div1.onmouseout = function() {
    div2.style.backgroundColor = "purple";
}

// set up onmouseover for div2
div2.onmouseover = function() {
    div1.style.backgroundColor = "purple";
}

// set up onmouseout for div2
div2.onmouseout = function() {
    div1.style.backgroundColor = "orange";
}