
import  React,{ useEffect, useState } from 'react'
import "./index.css"


 function OutputModal(props){  
  const [downloadLink, setDownloadLink] = useState('')  
  const makeTextFile = () => {

    var replacement = props.data.replace("kicking","Nikhil")
    
    const data = new Blob([replacement])
    
    if (downloadLink !== '') window.URL.revokeObjectURL(downloadLink)

    setDownloadLink(window.URL.createObjectURL(data))
  }
  
  useEffect(() => {
    makeTextFile()
  }, [props.data])
  if (!props.isActive)
  {
      return null;

  }
  return(
      <div className="modal is-active">
        <div className="modal-background" onClick={props.closeModal} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{"Please download your outputfile"}</p>
            <button className="delete" onClick={props.closeModal} />
          </header>
          <section className="modal-card-body">
          <a id="output" className="button is-primary has-text-weight-bold has-text-centered" download="Output.txt"   href={downloadLink}>Download</a>
          </section>
          <footer className="modal-card-foot">            
          </footer>
        </div>
      </div>
    ); 
}


    


export default OutputModal