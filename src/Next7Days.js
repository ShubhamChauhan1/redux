import React from 'react'
import ListRender from './ListRender'

export default function Next7Days(props) {
  const date = new Date()
  const filteredList = props.list.filter((task)=>{
    const diffTime = task.date - date
    const diffDays = (diffTime)/(1000*60*60*24)
    if(diffDays < 8 && diffDays > 0){
      return true
    }
    else{
      return false
    }
  })
  return (
    <div>
       <ListRender list = {filteredList}/>
    </div>
  )
}
