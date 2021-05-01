// import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
// import {useState} from "react";
// import {connect} from "react-redux";
// import {createCard} from "./Redux/action";
//
// function CreateModal(props) {
//
//     const [name, setName] = useState('')
//     const [description, setDescription] = useState('')
//     const [status, setStatus] = useState('')
//     const [priority, setPriority] = useState('')
//
//
//     const toggle = () => {
//         props.setCreateModal(!props.createModal);
//     };
//
//
//     const createCard = () => {
//         props.createCard({
//             name: name,
//             description: description,
//             status: status,
//             priority: priority,
//
//         })
//         toggle()
//     }
//
//
//     return (
//
//         <div>
//             <Modal isOpen={props.createModal} toggle={toggle}>
//                 <ModalHeader toggle={toggle}>Create Card</ModalHeader>
//                 <ModalBody>
//                     <ul className="list-group list-group-flush">
//                         <li className="list-group-item">Status
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
//                         <li className="list-group-item">Priority
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
//
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
//                     <Button disabled={!name || !description || !status || !priority} onClick={createCard}
//                             color="primary">Create</Button>{'  '}
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
//     createCard: (body) => dispatch(createCard(body))
//
//
// })
// export default connect(null, mapDispatchToProps)(CreateModal)
