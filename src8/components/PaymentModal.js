// import { Button, ListGroup, Modal } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { updateRefPayment } from "../redux/PaymentReducer";

// export function PaymentModal() {
//   const state = useSelector((state) => state);
//   const dispatch = useDispatch();

//  const updateRefObj = () => {
//     dispatch(updateRefPayment({}));
//   };

//   return (
//     <Modal show={state.payment.refemp.id} onHide={() => updateRefObj()}>
//       <Modal.Header closeButton>
//         <Modal.Title>Payment Status {state.payment.success}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <ListGroup>
          
//           <ListGroup.Item>
//             <h6>paymentId</h6>- {state.payment.refemp.paymentId}
//           </ListGroup.Item>
//           <ListGroup.Item>
//             <h6>billAmount</h6>- {state.payment.refemp.billAmount}
//           </ListGroup.Item>
         
//         </ListGroup>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={() => updateRefObj()}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }
