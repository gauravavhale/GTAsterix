const ModalContext = React.createContext()

const Modal=({children})=>{
    const [ isOpen, setIsOpen] = React.useState(false)

    return (
        <ModalContext.Provider value={{isOpen,setIsOpen}}> 
            {children}
        </ModalContext.Provider>
    )
}

Modal.Open=({children})=>{
    const { setIsOpen } = React.useContext(ModalContext)

    return (
        <span onClick={()=>setIsOpen(true)}>
            {children}
        </span>
    )
}

Modal.Content=({children})=>{
    const {isOpen, setIsOpen} = React.useContext(ModalContext)

    if(!isOpen) return null

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                {children}
            <button onClick={() => setIsOpen(false)}>Close</button>
            </div>
        </div>
    )

}

Modal.Header=({children})=>{
    return <h2>{children}</h2>
}

Modal.Body=({children})=>{
    return <div>{children}</div>
}

Modal.Footer=({children})=>{
    return <div>{children}</div>
}

window.Modal = Modal;