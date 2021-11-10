import React,{useState}from "react";
import './ExpenseForm.css'
 const ExpenseForm=(props)=>{
	 const[enteredTitle,setEnteredTitle]=useState('');
	 const[enteredAmount,setenteredAmount]=useState('');
	 const[enteredDate,setenteredDate]=useState('');
	// const [userInput, setUserInput]=useState({
	// 	enteredTitle:'',
	// 	enteredAmount:'',
	// 	enteredDate:''

	// })
	
	 const tittleChangeHandler=(event)=>{
		 setEnteredTitle(event.target.value)
		//  setUserInput((prevState)=>{
		// 	 return {...prevState,
		// 	 enteredTitle:event.target.value}

		//  })
		 //console.log(setEnteredTitle)

	 };
	 const amountChangeHandler=(event)=>{
		setenteredAmount(event.target.value)
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount:event.target.value

		// })
		// setUserInput((prevState)=>{
		// 	return{...prevState,enteredAmount:event.target.value}
		// })
	 }
	 const dateChangeHandler=(event)=>{
		setenteredDate(event.target.value)
		// setUserInput((prevState)=>{

		// 	return{...prevState,
		// 	enteredDate:event.target.value}

		// })
	 
	}
	const submitHandeler=(event)=>{
		event.preventDefault();
		const expenseData={
			title:enteredTitle,
			amount:enteredAmount,
			date:new Date(enteredDate),
		}
		props.onSaveExpenseData(expenseData);//component
		setEnteredTitle('');//setting these things empty again
		setenteredAmount('');
		setenteredDate('');

	}

	return <form onSubmit={submitHandeler}>
		<div className="new-expense__controls">
			<div className="new-expense__control">
				<label>Title</label>
				<input type='text' 
				value={enteredTitle} 
				onChange={tittleChangeHandler}/>
			</div>
			<div className="new-expense__control">
				<label>Amount</label>
				<input type='number' 
				min="0.01" step="0.01" 
				value={enteredAmount} 
				onChange={amountChangeHandler}/>
			</div>
			<div className="new-expense__control">
				<label>Date</label>
				<input type='date' 
				min="2019-01-01"max="2022-12-31" 
				value={enteredDate} 
				onChange={dateChangeHandler}/>
			</div>
		</div>
		<div className='new-expense__action'>
			<button type='submit'>Add Expense</button>
		</div>
	</form>
 }
 export default ExpenseForm;