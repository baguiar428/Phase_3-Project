import React from 'react'

function Rewards ({reward, setReward}){

    return(
        <div onClick={()=>setReward(reward)}>
              <div className="bg-black hover:bg-blue-800 active:bg-00 focus:outline-none focus:ring focus:ring-violet-300 text-white justify-center text-sm mx-6 bg-black rounded-xl p-7">
                <table>
                    <thead>
                        <tr>
                            <td className='text-center text-green-500'>{reward.item_name}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Health Boost: </td>
                            <td className='text-green-500'> {reward.health_boost}</td>
                        </tr>
                        <tr>
                            <td>Strength Boost: </td>
                            <td className='text-green-500'> {reward.strength_boost}</td>
                        </tr>
                        <tr>
                            <td>Agility Boost: </td>
                            <td className='text-green-500'> {reward.agility_boost}</td>
                        </tr>
                        <tr>
                            <td>Intellect Boost: </td>
                            <td className='text-green-500'> {reward.intellect_boost}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Rewards