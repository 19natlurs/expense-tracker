import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const expenseSlice = createSlice({
    name: "expense",
    initialState: {
        transactions: [
            { id: 1, text: "Flower", amount: -20 },
            { id: 2, text: "Salary", amount: 300 },
            { id: 3, text: "Book", amount: -10 },
            { id: 4, text: "Camara", amount: -20 }
        ]
    },
    reducers: {

        addTransaction(state, action) {
            const newItem = action.payload
            console.log(newItem)
            state.transactions.push({

                id: newItem.id,
                text: newItem.text,
                amount: newItem.amount

            })
        },

        deleteTransaction(state, action) {
            const id = action.payload

            const existingItem = state.transactions.find(transaction => {
                return transaction.id === id
            })

            console.log(existingItem)

            if (existingItem) {

                state.transactions = state.transactions.filter(transaction => transaction.id !== id)
            }
        }

    }
})

export default expenseSlice

export const expenseAction = expenseSlice.actions 