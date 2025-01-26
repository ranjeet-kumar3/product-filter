let products ={
    data:[
        {
         
            productName: "Black women-Shorts",
            Category: "Bottomwear",
            price: "89",
            image: "img-index3/black-short.webp",
           
        },

        {
            productName: "Slim Pant",
            Category: "Bottomwear",
            price:"49",
            image:"img-index3/Bottom-wear.webp",
        },

        {
            productName: "Smart-Watch",
            Category: "Watch",
            price: "50",
            image: "img-index3/watch.jpg",
        },
        {
            productName:"Basic Knitted Top",
            Category: "Topwear",
            price: "40",
            image: "img-index3/top-wear2.webp",

        },

        {
            productName: "Brown Leather",
            Category: "Jacket",
            price: "123",
            image:"img-index3/jacket.jpeg",
        
        },

        {
            productName: "Stylish Brown Trousers",
            Category: "Bottomwear",
            price: "80",
            image: "img-index3/Bottom-wear2.webp",
        },
        {
            productName: "Black Men's Jacket",
            Category: "jacket",
            price: "90",
            image: "img-index3/Black-jacket.webp",

        },
        {
            productName: "Comfy cream Pants",
            Category: "Bottomwear",
            price: "134",
            image: "img-index3/pant.webp",
        },
        {
            productName: "Printed-Women T-Shirt",
            Category: "Topwear",
            price: "199",
            image: "img-index3/T-shirt.webp",
        },
        
        {
            productName: " White Shirt",
            Category: "Topwear",
            price: "30",
            image: "img-index3/Shirt.jpeg", 

        },
        {
            productName: "Dark-blue Short",
            Category: "Bottomwear",
            price: "99",
            image: " img-index3/Short.webp",
        },

    ],
};

for(let i of products.data) {
    //Create card
    let card = document.createElement("div");
    //card should have category and should stay hidden
    card.classList.add("card", i.Category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    //image tag
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer );

    //Container
    let container = document.createElement("div");
    container.classList.add("container");
    //Product name
    let name = document.createElement("h4");
    name.classList.add("Product-name");
    name.innerText = i.productName.toLowerCase();
    container.appendChild(name);
   
    //price
    let price = document.createElement("h5");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    
    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}

//parameter passed from button (parameter same as category)
function filterProduct(value){
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equal innertext

        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");

        }else{
            button.classList.remove("active");
        }
    });

    //selects all card
    let elements = document.querySelectorAll(".card");
    //loop through all card
    elements.forEach((element) => {
        //display all card on all button click
        if(value == "all"){
            element.classList.remove("hide");
        }else{
            //check if element contains category class
            if(element.classList.contains(value)){
                //display element based on category
                element.classList.remove("hide");
            }
            else{
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

// Search button click
document.getElementById("search").addEventListener("input", () =>{
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards =document.querySelectorAll(".card");
    
    //loop through all elements
     elements.forEach((element, index) =>{
        //check if text include the search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching card
            cards[index].classList.remove("hide");
        }else{
            //hide others
            cards[index].classList.add("hide");
        }
     });
});





//initially display all products
window.onload =() => {
    filterProduct("all");
};




// initially display all