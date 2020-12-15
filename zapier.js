// this is wrapped in an `async` function
// you can use await throughout the function

async function testing(inputData) {
  const {
    skus,
    potentialId,
    company,
    name,
    phone,
    street1,
    city,
    postalCode,
    state,
    customerEmail,
    orderDate,
    internalNotes,
  } = inputData;

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

  let items = [];

  await skuArray.forEach((sku) => {
    let name = products[sku];
    items.push({ sku, name, quantity: 1, price: 0.0 });
  });

  // you have to return an object. If you return an object with an array of objects zapier will execute the following step multiple times.
  return { items };
}
