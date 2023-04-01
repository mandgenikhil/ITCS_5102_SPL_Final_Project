import React from 'react'
import { useState } from 'react';
import "./index.css"
var validUrl = require('valid-url');

function AppBody() {
    function checkValidURL(value) {
        if (validUrl.isUri(value)) {
            isValidURL(true);
        } else {
            isValidURL(false);
        }
    }
    function submitInput() {
        console.log(inputURL);
        console.log(inputLang);
        console.log(outputLang);
        if(inputURL === true)
        {
            alert("All inputs are valid")
        }
        else
        {
            alert("Please verify Youtube URL")
        }
    }
    const optionsLang = ["en-US", "hi-IN"];

    const [inputURL, isValidURL] = useState(false);
    const [inputLang, setInputLang] = useState(optionsLang[0]);
    const [outputLang, setOutputLang] = useState(optionsLang[0]);

    return (
        <section id="app" className="hero is-medium is-link">
            <div className="hero-body">
                <div className="field">
                    <p className="title is-size-2 is-family-sans-serif">
                        Youtube Speech to Text Inputs<span ></span><text className='ml-1 is-size-6'></text>
                    </p>
                    <label className="label has-text-white">Youtube Video URL</label>
                    <div className="control">
                        <input className="input " type="text" placeholder="Valid Youtube URL"
                            onChange={e => checkValidURL(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-white">Input Language</label>
                    <div className="control">
                        <div className="select">
                            <select
                                value={inputLang}
                                onChange={e => setInputLang(e.target.value)}>
                                {optionsLang.map((value) => (
                                    <option value={value} key={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-white">Input Language</label>
                    <div className="control">
                        <div className="select">
                            <select
                                value={outputLang}
                                onChange={e => setOutputLang(e.target.value)}>
                                {optionsLang.map((value) => (
                                    <option value={value} key={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>




                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-primary has-text-weight-bold " onClick={submitInput}>Submit</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AppBody