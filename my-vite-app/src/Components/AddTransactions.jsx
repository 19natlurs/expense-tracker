import React from 'react'
import { Fragment } from 'react'
import classes from "./AddTransaction.module.css"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { expenseAction } from '../store/expense-slice'

const AddTransactions = () => {



    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")
    const dispatch = useDispatch();

    const formTextHandler = (e) => {

        setText(e.target.value)
    }



    const formAmountHandler = (e) => {

        setAmount(e.target.value)
    }

    const formHandler = (e) => {
        e.preventDefault()

        dispatch(expenseAction.addTransaction(
            {
                text,
                amount: +amount,
                id: Math.floor(Math.random() * 100000)

            }
        ))

        setText("")
        setAmount("")

    }







    return (
        <Fragment>
            <div className={classes.addtransaction}>
                <div className={classes.transac}>
                    <h4>Add new transaction</h4>
                </div>

                <form onSubmit={formHandler}>
                    <div className={classes.textInput}>
                        <div>Text</div>
                        <input
                            type="text"
                            onChange={formTextHandler}
                            value={text}
                        />
                    </div>

                    <div className={classes.amountInput}>
                        <div>Amount <br /> (negative - expense, positive - income) </div>
                        <input
                            type="number"
                            onChange={formAmountHandler}
                            value={amount}

                        />
                    </div>

                    <button>Add transactions</button>
                </form>
            </div>
        </Fragment>
    )
}

export default AddTransactions
