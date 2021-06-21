import React, { useRef } from 'react'

export default function Modal(props) {

    const amountRef = useRef()
    const descRef = useRef()



    function confirmHandler() {
        const amount = amountRef.current.value;
        const desc = descRef.current.value;
        const pack_obj = {
            "amount": amount,
            "desc": desc
        };
        props.onConfirm(pack_obj);
    }

    return (
        <div>


            <div className='modal'>
                <div>
                    <label htmlFor='amount'> Enter amount</label>
                    <input type='number' required id='amount' ref={amountRef} />
                </div>
                <div>
                    <label htmlFor='desc'> Enter Description</label>
                    <input type='text' required id='desc' ref={descRef} />
                </div>
                <button className='btn' onClick={confirmHandler}>Confirm</button>
            </div>
        </div>
    )
}
