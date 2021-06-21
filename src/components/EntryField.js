export default function EntryField() {
    let list = [];
    list = JSON.parse(localStorage.getItem("transactionList"));
    return ( 
        <div>
            {list != null && list.map(item => {
                return (
                    <div className='List-Filled'>
                        <div className='list-single'>
                            <div><span>Tue Jan 05 2021 14:36:56 GMT+0530 (India Standard Time)</span></div>
                            <div><span>{item.name}</span></div>
                        </div>
                        <div className='list-single IN'>
                            <div><h2>IN</h2></div>
                            <div>
                                <span >{item.in}</span>
                            </div>
                        </div>

                        <div className='list-single OUT'>
                            <div><h2>OUT</h2></div>
                            <div>
                                <span >{item.out}</span>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}