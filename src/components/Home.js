import React,{useState} from 'react'
import Nav from './nav';
import Rating from '@mui/material/Rating';

function Home() {
    let [cartValue,setCartValue] = useState(0);
    let [toggle1,setToggle1] = useState(true);
    let [toggle2,setToggle2] = useState(true);
    let [toggle3,setToggle3] = useState(true);
    const [value, setValue] = React.useState(0);
    const [value1, setValue1] = React.useState(2);
    const [value2, setValue2] = React.useState(2);

  return <>
  <Nav value={cartValue}/>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>


        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{"top": "0.5rem", "right": "0.5rem"}}>Sale</div>
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                   
                                    <h5 className="fw-bolder">Special Item</h5>
                                    
                                    <Rating
                                    name="simple-controlled"
                                    value={value}
                                     onChange={(event, newValue) => {
                                     setValue(newValue);
                                         }} />
                                   
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {
                                    toggle1?<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                        setCartValue(cartValue + 1)
                                    setToggle1(!toggle1)
                                }} >Add to cart</button></div>
                                :<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue - 1)
                                setToggle1(!toggle1)
                            }} >Remove from Cart</button></div>

                                }                            
                               </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                           
                            <div className="badge bg-dark text-white position-absolute" style={{"top": "0.5rem", "right": "0.5rem"}}>Sale</div>
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Sale Item</h5>
                                    <Rating
                                    name="simple-controlled"
                                    value1={value1}
                                     onChange={(event, newValue1) => {
                                     setValue1(newValue1);
                                         }} />
                                    
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            {
                                    toggle2?<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                        setCartValue(cartValue + 1)
                                    setToggle2(!toggle2)
                                }} >Add to cart</button></div>
                                :<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue - 1)
                                setToggle2(!toggle2)
                            }} >Remove from Cart</button></div>
                        }
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                           
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    
                                    <Rating
                                    name="simple-controlled"
                                    value2={value2}
                                     onChange={(event, newValue2) => {
                                     setValue2(newValue2);
                                         }} />
                                    
                                    $40.00
                                </div>
                            </div>
                    
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            {
                                    toggle3?<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                        setCartValue(cartValue + 1)
                                    setToggle3(!toggle3)
                                }} >Add to cart</button></div>
                                :<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue - 1)
                                setToggle3(!toggle3)
                            }} >Remove from Cart</button></div>
                        }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </>
}
export default Home