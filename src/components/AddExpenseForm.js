import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { v4 as uuidv4 } from 'uuid'

const AddExpenseForm = () => {

    const { dispatch } = useContext(AppContext)

    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()

        const expense = {
            id: uuidv4(),
            cost: parseInt(cost),
            name: name
        }

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense
        })

        setName('')
        setCost('')
        event.target.name.focus()
    }

    return (
        <form onSubmit = { onSubmit }>
            <div className = "row">
                <div className = "col-sm">
                    <label htmlFor = "name">Name</label>
                    <input 
                        required = "required"
                        type = "text"
                        className = "form-control"
                        id = "name"
                        value = { name }
                        onChange = {(event) => setName(event.target.value)}
                    />
                </div>
            </div>
            <div className = "row">
                <div className = "col-sm">
                    <label htmlFor = "cost">Cost</label>
                    <input 
                        type = "text"
                        required = "required"
                        id = "cost"
                        className = "form-control"
                        value = { cost }
                        onChange={(event) => setCost(event.target.value)}
                    />
                </div>
            </div>
            <div className = "row">
                <div className = "col-sm">
                    <button 
                        type = "submit" 
                        className = "btn btn-primary mt-3"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm
