import React from 'react'


interface ICreateChannel{
    createType:string|undefined,
    setIsCreating: React.Dispatch<React.SetStateAction<boolean>>
    // createType={createType} setIsCreating={setIsCreating}
}
const CreateChannel: React.FC<ICreateChannel>= () => {
  return (
    <div>CreateChannel</div>
  )
}

export default CreateChannel