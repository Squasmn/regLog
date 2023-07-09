const products = [
    {
      type: "t-shirt",
      color: "white",
      price: 19.99,
    },
    {
      type: "jeans",
      color: "blue",
      price: 39,
    },
    {
      type: "hat",
      color: "red",
      price: 9,
    },
    {
      type: "t-shirt",
      color: "yellow",
      price: 19,
    },
    {
      type: "t-shirt",
      color: "red",
      price: 29,
    },
  {
      type: "jeans",
      color: "blue",
      price: 19,
    },
    {
      type: "shirt",
      color: "yellow",
      price: 19,
    },
    {
      type: "shoes",
      color: "green",
      price: 49,
    },
    {
      type: "sandals",
      color: "brown",
      price: 12,
    },
    {
      type: "jeans",
      color: "grey",
      price: 22,
    },
    {
      type: "hat",
      color: "red",
      price: 19,
    },
  ];

  let resultRed = products.reduce((acc, product)=>{
    if (product.color=="red") {
    return acc + product.price
  }
return acc
},0)
  console.log(resultRed)

  let resultJeans = products.reduce((acc, product)=>{
    if (product.type=="jeans") {
    return acc+=1
  }
return acc
},0)
  console.log(resultJeans)