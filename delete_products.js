const stripe = require("stripe")(
  "sk_test_51Naeu3Eh0kcTfsxtURSCi7TZwGF121IpKpPJESpIvbk8S2Qe12Q0cNDIP4kjAUDCEi5HtJoGuCeSfL8F9oGq5qQr00VCHEzEt0"
);

async function deleteAllProducts() {
  try {
    // Retrieve a list of all products in your Stripe account
    const products = await stripe.products.list({ limit: 100 });

    // Delete each product one by one
    for (const product of products.data) {
      // Retrieve a list of prices associated with the product
      const prices = await stripe.prices.list({ product: product.id });

      // Delete each price one by one
      for (const price of prices.data) {
        try {
          await stripe.prices.del(price.id);
          console.log(`Deleted price with ID: ${price.id}`);
        } catch (error) {
          console.error(
            `Error deleting price with ID ${price.id}: ${error.message}`
          );
        }
      }

      try {
        // Delete the product
        await stripe.products.del(product.id);
        console.log(`Deleted product with ID: ${product.id}`);
      } catch (error) {
        console.error(
          `Error deleting product with ID ${product.id}: ${error.message}`
        );
      }
    }

    console.log("All products and prices deleted successfully.");
  } catch (error) {
    console.error("Error deleting products and prices:", error.message);
  }
}

// Call the function to delete all products and prices
deleteAllProducts();
