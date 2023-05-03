import { useQuery } from "react-query";
import { QueryKeys, fetcher } from "../../queryClient";
import { Product } from "../../types";
import ProductItem from "../../components/product/item";

const ProductList = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );
  console.log(data);

  return (
    <div>
      <div>
        {data?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
