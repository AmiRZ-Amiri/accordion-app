import { useState, FC, ReactElement } from "react";
import { CaretCircleDown } from "phosphor-react";
import {CaretCircleUp} from "phosphor-react";
import {QuestionProps} from '../App.type'
import './Accordion.css'


const Accordion: FC<QuestionProps> = ({title,info}: QuestionProps):ReactElement => {
    const [showInfo, setShowInfo] = useState<boolean>(false);
    return(
        <div className="app">
            <div className="accordian">
                <header className="accordian-header">
                    <h4>{title}</h4>
                    <button
                    type="button"
                    className="btn"
                    onClick={() => setShowInfo(!showInfo)}
                    >
                    {showInfo ? <CaretCircleDown size={20} /> : <CaretCircleUp size={20} />}
                    </button>
                </header>
                <p >{showInfo &&( <div className="accordian-body">{info}</div>)}</p>
            </div>
        </div>
    )


}
export default Accordion