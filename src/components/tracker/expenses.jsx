import React from 'react'

 const Expenses = (props) => {
    return (
        <div className='expenses'>
            <h2>
                Amount left:
            </h2>
            <h2 style={{color:props.amountState >=0 ? "green":"red"}} >
            {props.amountState}
            </h2>
            <table border cellSpacing="35px">
                <thead>
                    <th>Transaction</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Transaction Type</th>
                    <th>Transaction Date</th>
                </thead>
                <tbody>
                    {props.data.map((trans)=>{
                        return <tr>
                                    <td>{trans.name}</td>
                                    <td>{trans.amount}</td>
                                    <td>{trans.category}</td>
                                    <td style={{color:trans.transType == "Income" ? "green":"red"}}>{trans.transType}</td>
                                <td>{trans.time}</td>
                            </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Expenses