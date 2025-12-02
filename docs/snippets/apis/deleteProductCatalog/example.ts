api
    .deleteProductCatalog({
        productIds: ["productId1", "productId2"],
        catalogId: "catalogId1"
    })
    .then(console.log).catch(console.error);