import React from 'react'

function Rewards ({reward, setReward}){

    return(
        <div onClick={()=>setReward(reward)}>
              <div className="bg-black hover:bg-blue-800 active:bg-red-500 focus:outline-none focus:ring focus:ring-white-300 text-white justify-center text-sm mx-6 rounded-xl px-24">
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