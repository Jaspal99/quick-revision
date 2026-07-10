import { useMemo } from "react";

const products = [
  {
    name: "jaspal",
  },
];
const search = "k";
const filteredProducts = useMemo(() => {
  return products.filter((product) => product.name.includes(search));
}, [products, search]);
