// This is the Zapier version of our helper function b/c Zapier syntax is different. We use the helper function for jest test.

async function testing(inputData) {
  const { skus, quantities } = inputData;

  const products = {
    "sample-cln-acne-cleanser-aqua": "[Samples] Acne Cleanser 1 fl oz",
    "sample-cln-shampoo-red": "[Samples] Shampoo 1 fl oz",
    "sample-cln-gentle-shampoo-orange": "sample-cln-gentle-shampoo-orange",
    "sample-cln-sportwash-blue": "[Samples] SportWash 1 fl oz",
    "sample-cln-bodywash-green": "[Samples] BodyWash 1 fl oz",
    "sample-cln-handwash-magenta": "[Samples] HandWash 1 fl oz",
    "sample-cln-facial-cleanser-teal": "[Samples] Facial Cleanser 1 fl oz",
    "sample-cln-facial-moisturizer-purple": "[Samples] Facial Moisturizer 1 fl oz",
  };

  //create array of skus
  const skuArray = skus.split(",");
  const quantityArray = quantities.split(",");

  let items = [];

  await skuArray.forEach((sku, index) => {
    let name = products[sku];
    let quantity = +quantityArray[index];

    items.push({ sku, name, quantity, price: 0.0 });
  });

  // you have to return an object. If you return an object with an array of objects zapier will execute the following step multiple times.
  return { items };
}
