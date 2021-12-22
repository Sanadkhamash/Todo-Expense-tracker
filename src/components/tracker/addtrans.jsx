import React from 'react'

 const AddTrans = (props) => {
    return (
        <div className='AddTrans'>
            <form onSubmit = {
                (e)=> {
                e.preventDefault();
                props.data.push({
                name:e.target.name.value,
                category: e.target.category.value,
                amount: e.target.amount.value,
                transType: e.target.transType.value,
                time: (new Date()).toDateString(),
            })

            localStorage.setItem("trans", JSON.stringify(props.data));
            let sum = 0;
            const total = JSON.parse(localStorage.getItem("trans")).forEach(element => {

                element.transType == "Income" ? sum += Number(element.amount): sum -= Number(element.amount);
            });
            props.setamount(sum);
            props.setTrans(JSON.parse(localStorage.getItem("trans")));
            localStorage.setItem("amount", sum);
            }}>
                <label htmlFor="name">
                    Activity
                    <input required name = "name" type="text" placeholder='Activity' />
                </label>
                <label htmlFor="category">
                    Category
                    <select required id="category">
                        <option name='fuel' value = 'Fuel'>Fuel</option>
                        <option name='grossary' value = 'Grossary'>Grossary</option>
                        <option name='bills' value = 'Bills'>Bills</option>
                        <option name='salary' value = 'Salary'>Salary</option>
                    </select>
                </label>
                <label htmlFor="amount">
                    Amount: 
                    <input required type="number" name="amount" id="amount" />
                </label>
                <label htmlFor='transType' >
                    Transaction type: 
                <select required id="transType">
                        <option name='expenditures ' value = 'Expenditures '>Expenditure </option>
                        <option name='income' value = 'Income'>Income</option>
                    </select>
                </label>
                <br />
                <br />
                <input className='addSub' type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default AddTrans