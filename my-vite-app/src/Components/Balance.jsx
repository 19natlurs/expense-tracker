import React from 'react'
import { Fragment } from 'react'
import classes from "./Balance.module.css"
import { useSelector } from 'react-redux'
import store from '../store/reactIndex'

export const Balance = () => {

    const transactions = useSelector(state => state.expense.transactions)

    const amount = transactions.map(transaction => transaction.amount)

    const balancex = amount.reduce((total, amt) => {
        return total += amt
    }, 0).toFixed(2)

    const income = amount.filter(item => (item > 0)).reduce((total, amt) => (total + amt), 0)

    const expenses = amount.filter(item => (item < 0)).reduce((total, amt) => (total + amt), 0)

    console.log(expenses)






    return (
        <Fragment>
            <div className={classes.balance}>
                <p>YOUR BALANCE</p>
                <h3>${balancex}</h3>
            </div>

            <div className={classes.money}>
                <div className={classes.income}>
                    <p>INCOME</p>
                    <div>${income}</div>
                </div>
                <div className={classes.expense}>
                    <p>EXPENSE</p>
                    <div>${expenses}</div>
                </div>
            </div>
        </Fragment>
    )
}
