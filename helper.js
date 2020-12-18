function formatItems(data) {
  // convert string to array
  const { skus, quantities } = data;

  const skuArray = skus.split(",");
  const quantitiesArray = quantities.split(",");

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

  skuArray.forEach((sku, index) => {
    let name = products[sku];
    let quantity = +quantitiesArray[index];
    items.push({ sku, name, quantity, price: 0.0 });
  });

  console.log({ items });
  return items;
}

const payload = {
  skus: "sample-cln-acne-cleanser-aqua,sample-cln-shampoo-red,sample-cln-gentle-shampoo-orange",
  quantities: "3,2,1",
};

formatItems(payload);

module.exports = formatItems;
