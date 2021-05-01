import {useEffect, useState} from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import axios from "axios";
import {connect} from "react-redux";
import {cardDeleteById, cardUpdate} from "./Redux/action";
import ModalWindow from "./Modal";

function Card(props) {
    const [delModal, setDelModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const statuses = ['todo', 'progress', 'review', 'done'];

    const [name, setName] = useState(props.cards.name)
    const [description, setDescription] = useState(props.cards.description)
    const [status, setStatus] = useState(props.cards.status)
    const [priority, setPriority] = useState(props.cards.priority)

    const toggle = () => {
        setUpdateModal(!updateModal);
    };

    const body = {
        name: name,
        description: description,
        status: status,
        priority: priority
    }
    const updateCard = () => {
        props.cardUpdate(body, props.cards._id)
        toggle()

    }


    // console.log(props.cards.status)
    const move = (direction) => {
        let status = '';

        let index = statuses.indexOf(props.cards.status);

        if (direction === 'right')
            status = statuses[index + 1];
        else
            status = statuses[index - 1];


        // console.log(props.card.status)
        props.cardUpdate({status: status}, props.cards._id);
    }

    const deleteCard = () => {
        props.cardDeleteById(props.cards._id);
        toggle();

    }
    // console.log(updateModal)


    return (
        <div>
            <div className="card">

                <div className="card-body">
                    <h5 className="card-title">{props.cards.name}</h5>
                    <p className="card-text">{props.cards.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Status : {props.cards.status} </li>
                    <li className="list-group-item">Priority : {props.cards.priority}</li>
                </ul>

                <div className="card-body">
                    <button disabled={props.cards.status === statuses[0]} type="button"
                            className="btn btn-outline-primary" onClick={() => move('left')}>←
                    </button>
                    <button disabled={props.cards.status === statuses[statuses.length - 1]} type="button"
                            className="btn btn-outline-primary" onClick={() => move('right')}>→
                    </button>

                    <button type="button" className="btn btn-outline-primary"
                            onClick={() => setUpdateModal(true)}>Update
                    </button>

                    {updateModal &&


                    <ModalWindow isOpen={updateModal} setIsOpen={setUpdateModal} button={props.buton[1]} updateCard={updateCard}>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Status : {props.cards.status}

                                <select onChange={e => setStatus(e.target.value)} className="form-select"
                                        aria-label="Default select example">
                                    <option selected>Change status</option>
                                    <option value="todo">to do</option>
                                    <option value="progress">progress</option>
                                    <option value="review">review</option>
                                    <option value="done">done</option>
                                </select>

                            </li>
                            <li className="list-group-item">Priority : {props.cards.priority};

                                <select onChange={e => setPriority(e.target.value)} className="form-select"
                                        aria-label="Default select example">
                                    <option selected>Change Priority</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>

                            </li>
                            <li>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text"
                                       placeholder="name"/>
                            </li>
                            <li>
                                <input value={description} onChange={(e) => setDescription(e.target.value)} type="text"
                                       placeholder="description"/>
                            </li>

                        </ul>

                    </ModalWindow>

                        // <EditModal updateModal={updateModal} setUpdateModal={setUpdateModal} card={props.cards}/>

                    }

                    <button type="button" className="btn btn-outline-danger"
                            onClick={() => setDelModal(true)}>Delete
                    </button>


                    {delModal &&

                    <ModalWindow isOpen={delModal} setIsOpen={setDelModal} button={props.buton[0]} deleteCard={deleteCard}>
                        <p> Do you want to delete {props.cards.name}</p>
                    </ModalWindow>

                        // <DeleteModal delModal={delModal} deleteCard={props.deleteCard} cards={props.cards}
                        //              setDelModal={setDelModal}/>
                    }


                </div>
            </div>

        </div>
    )

}

const mapDispatchToProps = dispatch => ({

    cardUpdate: (body, cardId) => dispatch(cardUpdate(body, cardId)),
    cardDeleteById: (cardId) => dispatch(cardDeleteById(cardId))



})
const mapStateToProps = state => ({
    buton: state.button

})
export default connect(mapStateToProps, mapDispatchToProps)(Card);

