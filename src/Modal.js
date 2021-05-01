import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function ModalWindow(props) {
    const toggle = () => {
        props.setIsOpen(!props.isOpen);
    };
    return (
        <>

            <Modal isOpen={props.isOpen} toggle={toggle}>

                <ModalBody>
                    {props.children}

                    <Button color="primary" onClick={props.button === 'Update'
                        ? props.updateCard : props.button === 'Delete'
                            ? props.deleteCard : props.createCard}>
                        {props.button}
                    </Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>

                </ModalBody>


            </Modal>


        </>

    )
}


export default ModalWindow;