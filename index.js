console.log("hello world");

// const express = require("express")
// const app = express()
// app.use(express.json())

// app.get("/", (req, res) => {
//     res.send("Hello World")
// });

// app.listen(3000, () => {`Sever is running on port${3000}!!!!`})

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();
const productRoute = require("./routes/product.route.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute)



app.get("/", function (req, res) {
  res.send("Hello from npm run devvv");
});



// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.json(500).json({ message: error.message });
//   }
// });

// //Update a product
// app.put("/api/products/:id", async (req, res) => {
  // try {
  //   const { id } = req.params;
  //   const product = await Product.findByIdAndUpdate(id, req.body);

  //   if (!product) {
  //     return res.status(404).json({ message: "Product not found" });
  //   }
  //   const updatedProduct = await Product.findById(id);
  //   res.status(200).json(updatedProduct);
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
// });

// //Delete a product
// /app.delete("/api/products/:id", async (req, res) => 
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

mongoose
  .connect(
    "mongodb+srv://admin:1234@cluster0.taefg.mongodb.net/Node-APII?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!!!");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch(() => {
    console.log("Error connecting to database!!!!");
  });
