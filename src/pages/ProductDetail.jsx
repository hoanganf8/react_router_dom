import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { path } = useParams();
  const [, slug, id] = path.match(/(.+)-(\d+)$/);
  console.log(slug);
  console.log(id);
  return (
    <div>
      <h1>Chi tiết Sản phẩm: {id}</h1>
      <h1>Slug sản phẩm: {slug}</h1>
    </div>
  );
};

export default ProductDetail;
