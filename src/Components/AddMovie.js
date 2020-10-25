import React,{useState,useEffect} from 'react'
import { Button,Modal} from 'react-bootstrap'




function AddMovie({add}) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterurl, setPosterurl] = useState("");
    const [rate, setRate] = useState("");
    const [trailerurl, setTrailerurl] = useState("")

  const initialise_inputs = () => {
    setTitle('') ;setDescription('');setPosterurl('');setRate('');setTrailerurl('');
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    setShow(false)
  },[add])
    return (
        <div>
        <div style={{display:"flex",marginTop:"90px",marginLeft:"22%",fontFamily:'arial',color:"#526044"}} >
            <h4 style={{marginTop:'10px'}}>Share your movie experience with us and add it to our collection</h4>
            <Button style={{marginLeft:'30px'}} onClick={handleShow}>Add a movie</Button>
       </div>
            <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <h3 style={{textAlign:"center",marginLeft:'100px'}}>   Add your best movie</h3>
        </Modal.Header>
        <Modal.Body>
            
        <img style={{width:"25%",height:'25%',marginLeft:'auto',marginRight:'auto',display:'block'}}  src="https://cdn2.iconfinder.com/data/icons/interactive-shadow-pack/100/_-5-512.png" alt='' />
        <div style={{textAlign:'center',color:'green'}}>
        <label for="fname"><h5>Title (starts with capital letter):</h5></label>
  <input type="text" id="fname" name="fname" className="form-control" placeholder="Movie title.." onChange={(e)=>setTitle(e.target.value)}></input><br/>
  <label for="fname"><h5>Description (From 10 to 24 words ):</h5></label>
  <input type="text" id="fname" name="fname" className="form-control" placeholder="Movie description.." onChange={(e)=>setDescription(e.target.value)}></input><br/>
  <label for="fname"><h5>Poster url:</h5></label>
  <input type="text" id="fname" name="fname"className="form-control" placeholder="Movie poster url.." onChange={(e)=>setPosterurl(e.target.value)} ></input><br/>
  <label for="fname"><h5>Rate (from 0 to 5):</h5></label>
  <input type="text" id="fname" name="fname" className="form-control" placeholder="Movie rate.." onChange={(e)=>setRate(e.target.value)}></input><br/>
  <label for="fname"><h5>Trailer url:</h5></label>
  <input type="text" id="fname" name="fname" className="form-control" placeholder="Movie trailer url.." onChange={(e)=>setTrailerurl(e.target.value)}></input>
  </div>
        
        
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" style={{marginRight:'180px',width:'100px'}} onClick={()=>{add({title:title,description:description,Src:posterurl,rate:rate,trailer_url:trailerurl});initialise_inputs()}}>
            Add
          </Button>
          
        </Modal.Footer>
      </Modal>

            
        </div>
    )
}

export default AddMovie
