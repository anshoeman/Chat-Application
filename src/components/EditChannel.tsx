import React from 'react'


interface IEditChannelProps{
    setIsEditing:React.Dispatch<React.SetStateAction<boolean>>
}
const EditChannel:React.FC<IEditChannelProps> = () => {
  return (
    <div>EditChannel</div>
  )
}

export default EditChannel