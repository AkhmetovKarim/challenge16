//Task 2
function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((products) => {
        products.forEach((product) => {
            console.log(product.fields.name); //log each product name
        });
    })
    .catch((error) => {
        console.error("Fetch error:", error);
    });
}

fetchProductsThen();

//Task 3
async function fetchProductsAsync() {
    try {
        const res = await fetch("https://www.course-api.com/javascript-store-products");
        const products = await res.json();
        displayProducts(products); //call displya function
    } catch (error) {
        handleError(error);//handle erros
    }
}
fetchProductsAsync();

function handleError(error) {
    console.error(`An error occured:`, error.message);
}


//Task 4
function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    products.slice(0, 5).forEach((product) => { //loop thru firtst five products
        const { name, price, image } = product.fields;
        const imageUrl = image[0].url;

        const productDiv = document.createElement("div");//create product container
        productDiv.classList.add("product");

        const title = document.createElement("h3");//create title element
        title.textContent = name;

        const priceTag = document.createElement("p");//create price element
        priceTag.textContent = `$${(price / 100).toFixed(2)}`;

        const img = document.createElement("img");//create image element
        img.src = imageUrl;
        img.alt = name;
        img.width = 200;

        productDiv.appendChild(img); //append elements
        productDiv.appendChild(title);
        productDiv.appendChild(priceTag);

        container.appendChild(productDiv);
    });
}

//Task 5
function handleError(error) { //create a function
    console.error("An error occured:", error.message); //log
}

//Task 6
fetchProductsThen();
fetchProductsAsync();

