import React, { useContext, useState } from 'react'
import { TiDelete } from 'react-icons/ti'
import { AppContext } from '../context/AppContext' 

const ExpenseItem = (props) => {

    const { dispatch } = useContext(AppContext)

    const [editNameFlag, setEditNameFlag] = useState(false)
    const [editCostFlag, setEditCostFlag] = useState(false)

    const [name, setName] = useState(props.name)
    const [cost, setCost] = useState(props.cost)

    const handleDelete = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id
        })
    }

    const updateExpense = (event) => {

        event.preventDefault()

        setEditNameFlag(false)
        setEditCostFlag(false)

        dispatch({
            type: "UPDATE_EXPENSE",
            payload: {
                id: props.id,
                cost: parseInt(cost),
                name: name
            }
        })
    }

    return (
        <li className = "list-group-item d-flex justify-content-between align-items-center">
            <span 
                onDoubleClick={() => setEditNameFlag(!editNameFlag)}
                data-toggle="tooltip" 
                data-placement="top" 
                title="DOUBLE CLICK TO EDIT"
            >
                { 
                    editNameFlag ?
                    <form onSubmit={updateExpense}>
                        <input 
                            className = "form-control"
                            type = "text"
                            value = {name}
                            onChange = { (e) => setName(e.target.value) }
                        />
                    </form>
                    : props.name
                }
            </span>
            <div>
                <span onDoubleClick={() => setEditCostFlag(!editCostFlag)} >
                    {
                        editCostFlag ?
                        <form onSubmit={updateExpense} style={{float: 'left', width: '5em'}}>
                            <input
                                className="form-control"
                                type="text"
                                value={cost}
                                onChange={(e) => setCost(e.target.value)}
                            />
                        </form>
                        :
                        <span 
                            className = "badge badge-primary badge-pill mr-3"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="DOUBLE CLICK TO EDIT"
                        >
                            { "£" + props.cost }
                        </span>
                    }
                </span>
                <TiDelete 
                    data-toggle="tooltip"
                    data-placement="top"
                    title="CLICK TO DELETE"
                    size = "1.5em"
                    onClick = {handleDelete}
                >
                </TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem
