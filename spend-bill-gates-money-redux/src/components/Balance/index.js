import "./index.css"
import { useSelector, useDispatch } from 'react-redux';

function Balance() {
  const balance = useSelector((state) => state.products.money);

  return (
    <div className='balance'>
      ${balance}
    </div>
  )
}

export default Balance