import React from "react";
import './card.css';
import { BookmarkCheck } from 'lucide-react';


const Card = (props) => {
    return (
    <>

    <div className="card-wrapper">
        <div className="card">
            <div className="top">
                <img src={props.logo} alt="logo" className="logo" />
            <button>Save <BookmarkCheck size={12} /></button>
            </div>
            <div className="center">
                <h3>{props.title} <span>{props.date} days ago</span></h3>
                <h2>{props.dis}</h2>
                <div className="tag">
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag2}</h4>
                </div>
            </div>
            <div className="bottom">
                <div>
            
                    <h3>{props.amount}</h3>
                    <p>{props.add}</p>
                </div>
                <button>Apply Now</button>
               
            </div>

        </div>
    </div>

    </>
    )
}

export default Card;