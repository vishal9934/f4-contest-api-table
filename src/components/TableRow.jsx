import React from 'react'
import "./TableRow.css"

const TableRow = ({data}) => {
    // console.log(data.symbol)
    // console.log(data.name)
  return (
    <div className='row'>
      <tr>
         <td>
         <img src={data.image} alt={data.name} width="40" height="40" />
         <span>{` ${data.name}`}</span>
         </td>
         <td>{data.name}</td>
         <td>{(data.symbol).toUpperCase()}</td>
         <td>{`$${data.current_price}`}</td>
         <td>{`Mkt Cap: $${data.market_cap}`}</td>
      </tr>
    </div>
  )
}

export default TableRow
