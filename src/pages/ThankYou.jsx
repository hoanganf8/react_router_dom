import { useLocation } from "react-router-dom";
const ThankYou = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Đặt hàng thành công</h1>
    </div>
  );
};

export default ThankYou;
