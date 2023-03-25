//select all the html elements.
let content = document.querySelector(".content");
let data = document.querySelector("#data");
let subBtn = document.querySelector(".subBtn");


// we want the content which is our input on the current ui after clicking on submit button. So, put an eventListener on submit button with function (e).
subBtn.addEventListener("click", function (e) {

// in line no. 9: the value or the input we have, has stored in variable contValue.
    let contValue = content.value;
    if (contValue == " ") {        // this line is checking that what is the input value ? if it is blank (execute next line).
        alert("Please Enter Content!");       // this line gives an alert when tha input is blank and return.
        return;
    }
    else {
        let list = document.createElement("list");  // here we creating a new element in the grid of ui.
        list.innerHTML = contValue;     // and storing the content in the new element.
        data.append(list);              // appending with an element of HTML.

    }
});
