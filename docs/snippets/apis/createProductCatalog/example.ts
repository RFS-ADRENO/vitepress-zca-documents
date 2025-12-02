api
    .createProductCatalog({
        catalogId: "catelog_id",
        productName: "Sản phẩm mới",
        price: "500000",
        description: "Đây là sản phẩm mới",
        files: [
            "./san_pham_moi1.jpg",
            "./san_pham_moi2.jpg"
        ]
    })
    .then(console.log)
    .catch(console.error);