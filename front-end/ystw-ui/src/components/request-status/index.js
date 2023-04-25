import React from 'react'
import { useState } from 'react';
import Api from "../../apis"
import "./index.css"
import OutputModal from './output-modal';

function RequestStatus() {
    const getRequestById = (id) => {
        toggalModal(true);

        fetch(Api.V1.request + "/" + id, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((result) => getRequestData(result))
            .catch((err) => console.log('error'))
    }

    const [requestId, setRequestID] = useState(0);
    const [showModal, toggalModal] = useState(false);
    const [requestData, getRequestData] = useState(null);

    return (
        <section id="status" className="hero is-medium is-link">
            <div className="hero-body">
                <div className="field">
                    <p className="title is-size-2 is-family-sans-serif">
                        Get Request Status<span ></span><text className='ml-1 is-size-6'></text>
                    </p>
                    <label className="label has-text-white">Request ID</label>
                    <div className="control">
                        <input className="input " type="text" placeholder="Type Request ID"
                            onChange={e => setRequestID(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-primary has-text-weight-bold " onClick={() => getRequestById(requestId)}>Get Request Status</button>
                    </div>
                </div>            
                {requestData !== null && "id" in requestData ? <div>
                    <div><span>Request Id :- </span>{requestData.id}</div>                    
                    {showModal === true ? <OutputModal isActive = {showModal} data={requestData.status} closeModal={()=>toggalModal(!showModal)}/> : null}                    
                </div> : null}
            </div>
        </section>
    )
}

export default RequestStatus