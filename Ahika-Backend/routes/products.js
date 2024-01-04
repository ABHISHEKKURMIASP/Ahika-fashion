const express = require("express");
const multer = require("multer");
const { Product } = require("../models/product");
const { Category } = require("../models/category");
const mongoose = require("mongoose");
var fs = require('fs');

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    const uploadError = isValid ? null : new Error("Invalid image type");
    cb(uploadError, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});

const uploadOptions = multer({ storage: storage });
const router = express.Router();

router.get("/", async (req, res) => {
  const filters = req.query;
  console.log(Object.keys(filters).length != 0);
  try {
    const productList = await Product.find();
    if (Object.keys(filters).length != 0) {
      for (key in filters) {
        if (key == "category") {
          const filterCategory = productList.filter(function (item) {
            return item.category === filters[key];
          });
          res.send(filterCategory);
        } else if (key == "name") {
          const filterCategory = productList.filter(function (item) {
            return item.name === filters[key];
          });
          res.send(filterCategory);
        }
      }
    } else {
      res.send(productList);
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) {
      res.status(404).json({ success: false, message: "Product not found" });
    } else {
      res.send(product);
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post(`/`, uploadOptions.single("images"), async (req, res) => {
  try {
    const basePath = `${req.protocol}://${req.get("host")}/public/upload/`;

    let product = new Product({
      name: req.body.name,
      description: req.body.description,
      richDescription: req.body.richDescription,
      images: String(`${basePath}${req.file.filename}`),
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      isFeatured: req.body.isFeatured,
    });

    product = await product.save();

    if (!product) return res.status(500).send("The product cannot be created");

    res.send(product);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).send("Invalid Product Id");
    }
    const category = await Category.findById(req.body.category);
    if (!category) {
      return res.status(400).send("Invalid Category");
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: req.body.image,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(500).send("The product cannot be updated!");
    }

    res.send(updatedProduct);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.id);

    if (deletedProduct) {
      return res
        .status(200)
        .json({ success: true, message: "The product is deleted!" });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Product not found!" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/get/count", async (req, res) => {
  try {
    const productCount = await Product.countDocuments();
    res.send({ productCount: productCount });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/get/featured/:count", async (req, res) => {
  try {
    const count = req.params.count ? req.params.count : 0;
    const products = await Product.find({ isFeatured: true }).limit(+count);
    res.send(products);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put(
  "/gallery-images/:id",
  uploadOptions.array("images", 10),
  async (req, res) => {
    try {
      if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send("Invalid Product Id");
      }

      const files = req.files;
      const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;

      const imagesPaths = files.map((file) => `${basePath}${file.filename}`);

      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          images: imagesPaths,
        },
        { new: true }
      );

      if (!updatedProduct) {
        return res.status(500).send("The gallery cannot be updated!");
      }

      res.send(updatedProduct);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
);

module.exports = router;
