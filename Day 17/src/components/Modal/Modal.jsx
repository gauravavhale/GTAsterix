import React,{useState} from 'react'

const Modal = () => {

    const [open, setOpen] = useState(false)

  return (
    <div>
        <button onClick={()=>setOpen(true)}>On Click</button>
        {open && (
            <div>
                <p>Model Content</p>
                <button onClick={()=>setOpen(false)}>Close</button>
            </div>
        ) }
    </div>
  )
}

export default Modal