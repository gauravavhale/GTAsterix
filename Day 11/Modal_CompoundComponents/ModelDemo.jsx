const ModalDemo = () => {
  return (
    <Modal>
      <Modal.Open>
        <button style={{padding:"8px 16px", borderRadius:"8px", border:"none", background:"#ef4444", color:"white"}}>Open Modal</button>
      </Modal.Open>

      <Modal.Content>
        <Modal.Header>Delete Confirmation</Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this item?
        </Modal.Body>
        <Modal.Footer>
          <button>Cancel</button>
          <button>Delete</button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

window.ModalDemo = ModalDemo
