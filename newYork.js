fetch("https://api.unsplash.com/photos/?client_id=4jzMXlRvzYuoLSEubYDKu8PZKxDQ6p5C9RmFgapJd-o&page=1&per_page=100&page=2")
.then((fetchedData)=>{
    return fetchedData.json();
})
.then((data)=>{
    data.forEach(element => {
        let  ryan = document.querySelector("#contenet");

        let meCreate = document.createElement("img")

        meCreate.src = element.urls.small;

        meCreate.alt = "images";

        let messi = document.createElement("div")

        messi.classList = "five";

        messi.appendChild(meCreate)


        ryan.appendChild(messi);




        console.log(element.urls.regular);
    });
})