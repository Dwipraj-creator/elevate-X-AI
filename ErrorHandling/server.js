const express = require("express");

const app = express();

app.use(express.json());

let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 800 }
];

app.get("/products", (req, res) => {
    res.json(products);
});

app.get("/products/:id", (req, res, next) => {

    const id = Number(req.params.id);
    const product = products.find((p) => p.id === id);

    if (!product) {
        return next({
            status: 404,
            message: "Product not found"
        });
    }

    res.json(product);
});
app.post("/products", (req, res, next) => {

    const { name, price } = req.body;

    if (!name) {
        return next({
            status: 400,
            message: "Name is required"
        });
    }

    if (price === undefined) {
        return next({
            status: 400,
            message: "Price is required"
        });
    }

    if (typeof price !== "number") {
        return next({
            status: 400,
            message: "Price must be a number"
        });
    }

    const newProduct = {
        id: products.length + 1,
        name,
        price
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});

app.use((err, req, res, next) => {

    res.status(err.status || 500).json({
        error: err.message || "Something went wrong"
    });

});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});