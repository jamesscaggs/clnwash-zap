// Helper function that we are testing
const formatItems = require("./helper");

// This is the mock payload from Zoho
const payload = {
  skus: "sample-cln-acne-cleanser-aqua,sample-cln-shampoo-red,sample-cln-gentle-shampoo-orange",
  quantities: "3,2,1",
};

// This tests formatItems(payload);
test("format data", () => {
  expect(formatItems(payload)).toStrictEqual([
    {
      sku: "sample-cln-acne-cleanser-aqua",
      name: "[Samples] Acne Cleanser 1 fl oz",
      quantity: 3,
      price: 0,
    },
    {
      sku: "sample-cln-shampoo-red",
      name: "[Samples] Shampoo 1 fl oz",
      quantity: 2,
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
