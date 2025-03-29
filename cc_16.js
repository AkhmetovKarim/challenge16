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
            console.log(product.fields.name);
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
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}
fetchProductsAsync();

function handleError(error) {
    console.error(`An error occured:`, error.message);
}
