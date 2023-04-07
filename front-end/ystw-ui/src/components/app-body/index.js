import React from 'react'
import { useState } from 'react';
import "./index.css"
import Api from '../../apis'

var validUrl = require('valid-url');

function AppBody() {
    function checkValidURL(value) {
        if (validUrl.isUri(value)) {
            isValidURL(value);
        } else {
            isValidURL("");
        }
    }
    function submitInput() {
        console.log(inputURL);
        console.log(inputLang);
        console.log(outputLang);
        if(inputURL.length >0)
        {
            saveRequest()
        }
        else
        {
            alert("Please verify Youtube URL")
        }
    }

    // useEffect(() => {
    //     fetchRequests() //
    //   }, [])

    //   const fetchRequests = () => {
    //     fetch(Api.V1.request, {
    //       method: 'GET',
    //     })
    //       .then((res) => res.json())
    //       .then((result) => setData(result))
    //       .catch((err) => console.log('error'))
    //   }

      const saveRequest = () => {
        fetch(Api.V1.request, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
             {
                "name": "Sample Request",
                "youtube_url": inputURL,
                "input_lang": inputLang,
                "output_lang": outputLang,
                "status":""
              },
          ),
        })
          .then((res) => res.json())
          .then((result) => setData(result))
          .catch((err) => console.log(err))

          console.log(requestResult)
      }
    const optionsLang = ["en-US", "hi-IN"];

    const [requestResult, setData] = useState({})

    const [inputURL, isValidURL] = useState("");
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