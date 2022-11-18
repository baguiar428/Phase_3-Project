import React, { useState } from 'react'

function Rewards ({reward, setReward}){

    const [selectColor, setSelectColor] = useState(false)

    function handleClick() {
        setReward(reward)
        setSelectColor(!selectColor)
    }

    return(
        <div onClick={handleClick}>
              <div className={`flex hover:bg-blue-800 focus:ring-blue-800 text-white justify-center text-sm mx-6 bg-black rounded-xl px-24} ${selectColor ? "bg-red-500" : "bg-black"} `}>
                <table>
                    <thead>
                        <tr>
                            <td className='text-center text-green-500'>{reward.item_name}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Health: </td>
                            <td className='text-green-500'> {reward.health_boost}</td>
                        </tr>
                        <tr>
                            <td>Strength: </td>
                            <td className='text-green-500'> {reward.strength_boost}</td>
                        </tr>
                        <tr>
                            <td>Agility: </td>
                            <td className='text-green-500'> {reward.agility_boost}</td>
                        </tr>
                        <tr>
                            <td>Intellect: </td>
                            <td className='text-green-500'> {reward.intellect_boost}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Rewards