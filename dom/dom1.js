let btn =document.querySelector('.btn')

let change =() =>{
    if (btn.textContent=="Dark Mode") {
        document.body.style.backgroundColor="black";
        document.body.style.color="white"
        btn.textContent="Light Mode"        
    } else {
        document.body.style.backgroundColor="white";
        document.body.style.color="black"
        btn.textContent="Dark Mode" 
    }
}