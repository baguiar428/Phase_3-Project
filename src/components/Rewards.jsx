import React from 'react'

function Rewards ({reward, setReward}){

    return(
        <div onClick={()=>setReward(reward)}>
              <div className="text-white flex justify-center">
                <table>
                    <thead>
                        <tr>
                            <td>Item Name: </td>
                            <td>{reward.item_name}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Health Boost: </td>
                            <td> {reward.health_boost}</td>
                        </tr>
                        <tr>
                            <td>Strength Boost: </td>
                            <td> {reward.strength_boost}</td>
                        </tr>
                        <tr>
                            <td>Agility Boost: </td>
                            <td> {reward.agility_boost}</td>
                        </tr>
                        <tr>
                            <td>Intellect Boost: </td>
                            <td> {reward.intellect_boost}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Rewards