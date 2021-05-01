// import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
// import {useState} from "react";
// import {cardDeleteById} from "./Redux/action";
// import {connect} from "react-redux";
//
// function DeleteModal(props) {
//
//
//     const toggle = () => {
//         props.setDelModal(!props.delModal);
//     };
//
//     const deleteCard = () => {
//         props.cardDeleteById(props.cards._id);
//         toggle();
//
//     }
//     return (
//
//
//             <Modal isOpen={props.delModal} toggle={toggle}>
//                 <ModalHeader toggle={toggle}>Are you sure?</ModalHeader>
//
//                 <ModalBody>
//                     <p>Do you want to delete card '{props.cards.name}'</p>
//                 </ModalBody>
//
//                 <ModalFooter>
//                     <Button color="primary" onClick={deleteCard}>Delete</Button>
//                     <Button color="secondary" onClick={toggle}>Cancel</Button>
//                 </ModalFooter>
//             </Modal>
//
//     );
//
// }
// const mapDispatchToProps = dispatch => ({
//
//     cardDeleteById: (cardId) => dispatch(cardDeleteById(cardId)),
//
//
//
// })
// export default connect(null, mapDispatchToProps)(DeleteModal);
//
