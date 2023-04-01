import React from 'react'
import { useState } from 'react';
import "./index.css"

function RequestStatus() {
    function GetRequestStatus() {    

        console.log(requestId);
        
    }

    const [requestId, setRequestID] = useState(0);

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
                        <button className="button is-primary has-text-weight-bold " onClick={GetRequestStatus}>Get Request Status</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default RequestStatus