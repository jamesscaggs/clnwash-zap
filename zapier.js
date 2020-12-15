// this is wrapped in an `async` function
// you can use await throughout the function

async function testing(inputData) {
  const { skus } = inputData;

  console.log(skus);
  const productTitles = {
    "sample-cln-acne-cleanser-aqua": "[Samples] Acne Cleanser 1 fl oz",
    "sample-cln-shampoo-red": "[Samples] Shampoo 1 fl oz",
    "sample-cln-gentle-shampoo-orange": "sample-cln-gentle-shampoo-orange",
    "sample-cln-sportwash-blue": "[Samples] SportWash 1 fl oz ",
    "sample-cln-bodywash-green": "[Samples] BodyWash 1 fl oz",
    "sample-cln-handwash-magenta": "[Samples] HandWash 1 fl oz",
    "sample-cln-facial-cleanser-teal": "[Samples] Facial Cleanser 1 fl oz",
    "sample-cln-facial-moisturizer-purple": "[Samples] Facial Moisturizer 1 fl oz",
  };

  //create array of skus
  const skuArray = skus.split(",");

  console.log(skuArray);

  let output = [];

  await skuArray.forEach((sku) => {
    let name;

    // find title
    for (const [key, value] in productTitles) {
      if (sku === key) name = value;
    }

    output.push({ sku, name, quantity: 1, unitPrice: 0.0 });
  });

  console.log({ output });

  return output;
}

testing(
  "sample-cln-acne-cleanser-aqua,sample-cln-acne-cleanser-aqua,sample-cln-facial-cleanser-teal"
);
