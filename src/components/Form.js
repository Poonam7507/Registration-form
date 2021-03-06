import React from 'react';
import '../css/Form.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import {withRouter} from 'react-router-dom'
import {useState} from 'react';



 export default function Form() {
    
    const history=useHistory()
history.go(0);
    const [show, setShow] = useState(false);
    const [submit,setsubmit]=useState("");
    const showdiv = (e)=>{
        e.preventDefault();

        setShow(true);
};
  
        
    
       
 
    
   

  return(
      
      
        
             <div className="container" >
          
        <div className="screen" style={{display:show?"none":"block"}} >
        
            <div className="screen__content">
            <h1 id="heading">
              Registration
              </h1>
                <form className="login">
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="email" className="login__input" placeholder="Enter Email" onChange={(event)=>{setsubmit(event.target.value)}}/>
                    </div>
                  
                    <button className="button login__submit"  onClick={showdiv} >
                        {/* <span className="button__text" > */}
                        Generate OTP
                        {/* </span> */}
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>			
                </form>
            </div>
            <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>		
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
            </div>		
        </div>
    {/* </div> */}
    
    
    
    {/* <div className="container" > */}
          
          <div className="screen" style={{display:show?"block":"none"}} >
              <div className="screen__content">
              <h1 id="heading">
             Otp verification
              </h1>
              <form className="login">
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="number" className="login__input" placeholder="Enter Otp" />
                    </div>
                  
                    <Link to ="/form1" > 
                    {/* <a href='./Form1' > */}
                    <button  className="button login__submit"  >
                    <span  >
                        Send OTP		 
                         </span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>	
                         {/* </a> */}
                      </Link>
                </form>
              </div>
              <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>		
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
            </div>
            </div>
            </div>
            
    


  )
 
}

