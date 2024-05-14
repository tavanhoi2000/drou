import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function DialogOrder({
  handleClose,
  show,
  total,
  quantity,
  setOrderName,
  setOrderEmail,
  setOrderPhoneNumber,
  setOrderAddress,
  createOrder
}) {
  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => setOrderName(e.target.value)}
                type="text"
                placeholder="Nguyễn Văn A"
                autoFocus
              />

              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setOrderEmail(e.target.value)}
              />
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={(e) => setOrderPhoneNumber(e.target.value)}
                type="text"
                placeholder=""
              />

              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={(e) => setOrderAddress(e.target.value)}
                type="email"
                placeholder=""
              />

              <Form.Label>Quantity</Form.Label>
              <Form.Control value={quantity} type="text" placeholder="" />

              <Form.Label>Total</Form.Label>
              <Form.Control type="text" value={total} placeholder="" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={createOrder} variant="danger">
            Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DialogOrder;
