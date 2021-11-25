import React from 'react';

import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpensesDate from './ExpensesDate';

const ExpenseItem = (props) => {

    return (
        <li>
            <Card className='expense-item'>
                <ExpensesDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>&#x20b9; {props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;