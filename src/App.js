import './App.css';
import axios from "axios";
import {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {cardColumn, cardGet, cardUpdate, createCard} from "./Redux/action";
import CreateModal from "../../kanban/src/CreateModal";
import {connect} from "react-redux";
import Card from "./Card";
import Column from "./Column";
import ModalWindow from "./Modal";
import {ModalBody} from "reactstrap";


function App(props) {

    const [createModal, setCreateModal] = useState(false);
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const [priority, setPriority] = useState('')


    const toggle = () => {
        setCreateModal(!createModal);
    };


    const createCard = () => {
        props.createCard({
            name: name,
            description: description,
            status: status,
            priority: priority,

        })
        toggle()
        setName('')
        setDescription('')
    }


    useEffect(() => {
        props.cardGet()
        props.cardColumn()

    }, []);


    return (

        <>

            <button type="button" className="btn btn-outline-primary" onClick={() => setCreateModal(true)}>Create Card
            </button>

            {createModal &&

            <ModalWindow isOpen={createModal} setIsOpen={setCreateModal} button={props.buton[2]}
                         createCard={createCard}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Status

                        <select onChange={e => setStatus(e.target.value)} className="form-select"
                                aria-label="Default select example">
                            <option selected>Change status</option>
                            <option value="todo">to do</option>
                            <option value="progress">progress</option>
                            <option value="review">review</option>
                            <option value="done">done</option>
                        </select>

                    </li>
                    <li className="list-group-item">Priority

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

                // <CreateModal createModal={createModal} setCreateModal={setCreateModal} />

            }

            <div className="container">
                <div className="row align-items-start">

                    {props.columns.map(el => <Column key={el._id} columns={el}/>)}
                </div>
            </div>
        </>
    );
}


const mapDispatchToProps = dispatch => ({

    cardGet: () => dispatch(cardGet()),
    cardColumn: () => dispatch(cardColumn()),
    createCard: (body) => dispatch(createCard(body))


})
const mapStateToProps = state => ({
    columns: state.get_Column,
    buton: state.button

})


export default connect(mapStateToProps, mapDispatchToProps)(App);

