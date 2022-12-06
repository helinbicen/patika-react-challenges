import "./index.css"

import BillGates from "../../assets/billgates.jpg"

function Header() {
  return (
    <div className="header">
        <img src={BillGates} alt="" className="bill-gates-icon"/>
        <p>Spend Bill Gates' Money</p>
    </div>
  )
}

export default Header