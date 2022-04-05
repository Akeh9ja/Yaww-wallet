document.querySelector("#connect-btn").addEventListener("click", function(){
    document.querySelector(".pop-up").classList.add("active")
});
document.querySelector(".pop-up .close").addEventListener("click", function(){
    document.querySelector(".pop-up").classList.remove("active")
});