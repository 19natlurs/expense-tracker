import React from 'react'
import { Fragment, useEffect, useState } from 'react'
import classes from './Transaction.module.css'
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { expenseAction } from '../store/expense-slice'

const TransactionList = () => {

    const dispatch = useDispatch()
    const transactions = useSelector(state => state.expense.transactions)







    // const btnHandler = () => {
    //     console.log("delete")
    //     dispatch(expenseAction.deleteTransaction(transactions.id))
    // }





    return (
        <Fragment>

            <div className={classes.somedude}>
                <div className={classes.transaction}>
                    <div className={classes.history}>
                        <h4>History</h4>
                    </div>

                    {transactions.map((transaction) => {
                        return (
                            <div className={`${classes.items} ${transaction.amount > 0 ? classes.itemsx : classes.itemsy} `} key={transaction.id}>
                                <div className={classes.book}>{transaction.text}</div>
                                <div className={classes.fee}>{transaction.amount}</div>
                                <button className={classes.btn}
                                    onClick={() => {
                                        dispatch(expenseAction.deleteTransaction(transaction.id))
                                    }} >X</button>
                            </div>
                        )
                    })}



                </div>

            </div>


        </Fragment>
    )
}

export default TransactionList;