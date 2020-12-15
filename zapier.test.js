const formatItems = require("./helper");

const data =
  "sample-cln-acne-cleanser-aqua,sample-cln-shampoo-red,sample-cln-gentle-shampoo-orange";

test("format data", () => {
  expect(formatItems(data)).toStrictEqual([
    {
      sku: "sample-cln-acne-cleanser-aqua",
      name: "[Samples] Acne Cleanser 1 fl oz",
      quantity: 1,
      price: 0,
    },
    {
      sku: "sample-cln-shampoo-red",
      name: "[Samples] Shampoo 1 fl oz",
      quantity: 1,
      price: 0,
    },
    {
      sku: "sample-cln-gentle-shampoo-orange",
      name: "sample-cln-gentle-shampoo-orange",
      quantity: 1,
      price: 0,
    },
  ]);
});
