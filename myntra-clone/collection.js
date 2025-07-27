

 var productcontainer = document.getElementById("product")
 var productlist= productcontainer.querySelectorAll("div")
var search = document.getElementById("search")
search.addEventListener("keyup",function(event){
    var enteredvalue = event.target.value.toUpperCase()
    for (let count = 0; count < productlist.length; count++) {
            var productname = productlist[count].querySelector("p").textContent
            if (productname.toUpperCase().indexOf(enteredvalue)<0) {
                productlist[count].style.display="none"
                
                
            }
            else{
                productlist[count].style.display="block"
            }
        
    }
})
