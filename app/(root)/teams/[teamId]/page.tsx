import React from 'react'

const TeamDetails = ({params}:{params:{teamId:String}}) => {
  return (
    <div>TeamDetails for {params.teamId}</div>
  )
}

export default TeamDetails