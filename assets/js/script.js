let btn = document.getElementById("run")
btn.addEventListener("click", () => {
    
    //Create the XHR Object
    let xhr = new XMLHttpRequest;
    
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('GET', 'https://thatsthespir.it/api', true)
    
    //call the onload 
    xhr.onload = function() {
        //check if the status is 200(means everything is okay)
        if (this.status === 200) {
            const data = JSON.parse(xhr.response);
            //return server response as an object with JSON.parse
            console.log(data);
        }
    }
    
    //call send
    xhr.send();

    let quote = document.querySelector("#quote")

    quote.src = src.getAttribute('xhr');

})