//select all the html elements.
let content = document.querySelector(".content");
let data = document.querySelector("#data");
let subBtn = document.querySelector(".subBtn");


// we want the content which is our input on the current ui after clicking on submit button. So, put an eventListener on submit button with function (e).
subBtn.addEventListener("click", function () {

// in line no. 11: the value or the input we have, has stored in variable contValue.
    let contValue = content.value;
    if (contValue == "") {        // this line is checking that what is the input value ? if it is blank (execute next line).
        alert("Empty Content Box!");
        return;  // this line gives an alert when tha input is blank and return.
    }
    else {
        let li = document.createElement("li");  // here we creating a new element in the grid of ui.
        li.innerHTML = contValue;     // and storing the content in the new element.
        data.append(li);              // appending with an element of HTML.

    }



    content.value = "";
});
