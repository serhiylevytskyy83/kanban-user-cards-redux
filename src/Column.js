// import Card from "./Card";
import axios from "axios";
import {connect} from "react-redux";
import Card from "../../kanban/src/Card";


function Column (props) {


    return (
        <div className="col">


            <h3>{props.columns.title}</h3>

            {props.card.filter(el => el.status === props.columns.title)
                .sort((a, b) => a.priority - b.priority)
                .map(el => <Card cards={el} key={el._id} deleteCard={props.deleteCard} updateCard={props.updateCard}/>)}
        </div>

    )

}


const mapStateToProps = state => ({
    card: state.get_Cards

})
export default connect(mapStateToProps,null)(Column)
