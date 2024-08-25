let input = document.getElementById('inputBox');
let buttons = document.querySelector('button');

let string = "";
let arr  = Array.from(buttons);
arr.forEach(button => {
    button.addEventListner('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        string += e.target.innerHTML;
        input.value = string;
    })
})