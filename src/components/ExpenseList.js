import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'

const ExpenseList = () => {

    const { expenses } = useContext(AppContext)

    return (
        <ul className = "list-group">
            {
                expenses.map((expense) => (
                    <ExpenseItem key = {expense.id} id = {expense.id}  cost = {expense.cost} name = {expense.name} />
                ))
            }
        </ul>
    )
}

export default ExpenseList

