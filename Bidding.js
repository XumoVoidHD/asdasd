import React, { useState } from 'react'

function Bidding(){
    const [highest_bid, setHighestBid] = useState(0)
    const [highest_bid_id, setHighestID] = useState('')
    const [your_bid, setBid] = useState(0)
    const [your_id, setID] = useState('')
    const [result, setResult] = useState('')

    const place_bid = () => {
        const bid = parseFloat(highest_bid)
        const current_bid = parseFloat(your_bid)
        const id = your_id
        const highest_id = highest_bid_id

        if (highest_id != id) {
            if(bid < current_bid) {
                setHighestBid(your_bid)
                setHighestID(id)
                setResult("Your bid has been place!")
                console.log({your_bid})
            }
            else {
                setResult("Your should be higher than current bid!")
                console.log({highest_bid})
            }
        }
        else {
            setResult("You cannot bid against yourself!")
            console.log({highest_bid})
        }   
    }

    return (
        <div>
            <select value={your_id} onChange={(e) => setID(e.target.value)}>
                <option value="User1">User 1</option>
                <option value="User2">User 2</option>
                <option value="User3">User 3</option>
                <option value="User4">User 4</option>
            </select>
            <h1>{highest_bid}</h1>
            <input type='text' value={your_bid} onChange={(e) => setBid(e.target.value)}/>
            <h2>{result}</h2>
            <button onClick={place_bid}>Place bid</button>
        </div>
    )
}

export default Bidding