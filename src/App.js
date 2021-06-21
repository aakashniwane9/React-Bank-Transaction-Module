import React, { useState, useEffect } from 'react';
import Modal from './components/Modal'
import './App.css';
import EntryField from './components/EntryField';
import Backdrop from './components/Backdrop';

function App() {

	let transactionList = [];
	let totalBalance = "";
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const [state, setState] = useState();

	function transactionIn() {
		setModalIsOpen(true);
		setState(true);
	}

	function transactionOut() {
		setModalIsOpen(true);
		setState(false);

	}

	function closeAndSaveModalHandler(rec_obj) {

		//if 1 it is from trasaction IN
		if (state) {
			transactionList = JSON.parse(localStorage.getItem("transactionList")) || [];
			transactionList.push({ "name": rec_obj.desc, "in": rec_obj.amount, "out": "-" });
			localStorage.setItem("transactionList", JSON.stringify(transactionList));
		} else {
			transactionList = JSON.parse(localStorage.getItem("transactionList")) || [];
			transactionList.push({ "name": rec_obj.desc, "in": "-", "out": rec_obj.amount });
			localStorage.setItem("transactionList", JSON.stringify(transactionList));
		}
		setModalIsOpen(false);
	}

	function closeModalHandler() {
		setModalIsOpen(false);
	}


	return (
		<div className='header-container'>
			<div className='header-sub-container'>
				<div>

				</div>
				<div>
					<h1 className='title'>My Cashbook</h1>
				</div>

				<div className="App">
					<span>0 INR</span>
					<br />
					<span>Today's Balance</span>
				</div>
			</div>
			<div className='list-view-cotainer'>
				<EntryField />
			</div>
			<div className='bottom-btn-container'>
				<div className='mybutton'>
					<button className='btn-in' onClick={transactionIn}>IN</button>
				</div>
				<div className='mybutton'>
					<button className='btn-out' onClick={transactionOut}>OUT</button>
				</div>
			</div>

			{modalIsOpen && <Modal onConfirm={closeAndSaveModalHandler} />}
			{modalIsOpen && <Backdrop onClick={closeModalHandler} />}
		</div >

	);
}

export default App;
