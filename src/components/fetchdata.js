import React, {useEffect, useState } from 'react'

fetch('', {
    headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa("eric:eric")}`,
    },
})
.then(function(response) {
    return response.json()
})
.then(function (data) {
    console.log(data)
})
.catch(function (error) {
    console.error(error)
})


function Fetch(){
const [users, setUsers] = useState([''])
useEffect(() => {
    console.log('helloooo')
    // this is a loop
    setUsers([])
}, [])

    return (
        <div>
            <h1>Fetch data</h1>
            <ul>
{/* map is a higher order array method */}
        {/* users.map(fucntion (user) {
            return (
                <li>
                    
                    {user.username}: {user.url}
                </li>
            )
        }); */}
            </ul>
        </div>
    )
}

export default Fetch