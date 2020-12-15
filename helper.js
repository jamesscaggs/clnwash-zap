function formatItems(string) {
  // convert string to array
  const skuArray = string.split(",");

  // create an empty array
  const items = [];

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

  skuArray.forEach((sku) => {
    let name = products[sku];
    items.push({ sku, name, quantity: 1, price: 0.0 });
  });

  console.log({ items });
  return items;
}

formatItems(
  "sample-cln-acne-cleanser-aqua,sample-cln-shampoo-red,sample-cln-gentle-shampoo-orange"
);

module.exports = formatItems;
