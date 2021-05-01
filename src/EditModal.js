// import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
// import {useState} from "react";
// import {cardUpdate} from "./Redux/action";
// import {connect} from "react-redux";
//
// function EditModal(props) {
//
//     const [name, setName] = useState(props.card.name)
//     const [description, setDescription] = useState(props.card.description)
//     const [status, setStatus] = useState(props.card.status)
//     const [priority, setPriority] = useState(props.card.priority)
//
//     const toggle = () => {
//         props.setUpdateModal(!props.updateModal);
//     };
//
//     const body = {
//         name: name,
//         description: description,
//         status: status,
//         priority: priority
//     }
//     const updateCard = () => {
//         props.cardUpdate(body, props.card._id)
//         toggle()
//     }
//
//
//     return (
//
//         <div>
//             <Modal isOpen={props.updateModal} toggle={toggle}>
//                 <ModalHeader toggle={toggle}>Update Card</ModalHeader>
//                 <ModalBody>
//                     <ul className="list-group list-group-flush">
//                         <li className="list-group-item">Status : {props.card.status}
//
//                             <select onChange={e => setStatus(e.target.value)} className="form-select"
//                                     aria-label="Default select example">
//                                 <option selected>Change status</option>
//                                 <option value="to do">to do</option>
//                                 <option value="progress">progress</option>
//                                 <option value="review">review</option>
//                                 <option value="done">done</option>
//                             </select>
//
//                         </li>
//                         <li className="list-group-item">Priority : {props.card.priority};
//
//                             <select onChange={e => setPriority(e.target.value)} className="form-select"
//                                     aria-label="Default select example">
//                                 <option selected>Change Priority</option>
//                                 <option value="1">1</option>
//                                 <option value="2">2</option>
//                                 <option value="3">3</option>
//                                 <option value="4">4</option>
//                                 <option value="5">5</option>
//                             </select>
//
//                         </li>
//                         <li>
//                             <input value={name} onChange={(e) => setName(e.target.value)} type="text"
//                                    placeholder="name"/>
//                         </li>
//                         <li>
//                             <input value={description} onChange={(e) => setDescription(e.target.value)} type="text"
//                                    placeholder="description"/>
//                         </li>
//
//                     </ul>
//
//
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button onClick={updateCard} color="primary">Update</Button>{'  '}
//                     <Button color="secondary" onClick={toggle}>Cancel</Button>
//                 </ModalFooter>
//             </Modal>
//         </div>
//
//     );
// }
//
// const mapDispatchToProps = dispatch => ({
//
//     cardUpdate: (body, cardId) => dispatch(cardUpdate(body, cardId))
//
//
// })
// export default connect(null, mapDispatchToProps)(EditModal)
