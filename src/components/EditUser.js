import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useParams,useNavigate} from 'react-router-dom'
function EditUser(props) {

    let params = useParams();
    let navigate = useNavigate();
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [mobile,setMobile] = useState("");
    let [batch,setBatch] = useState("");

    useEffect(()=>{
        if(params.id<props.data.users.length)
        {
            setName(props.data.users[params.id].name)
            setEmail(props.data.users[params.id].email)
            setMobile(props.data.users[params.id].mobile)
            setBatch(props.data.users[params.id].batch)
        }
        else
        {
            navigate('/dashboard')
        }
    },[])

    /*
        without dependancy array - will be trrigered whenever the component renders
        useEffect(()=>{
            //do something
        })

        with empty dependancy array - will be triggered only for the first time when a component renders
         useEffect(()=>{
            //do something
        },[])


        with dependancy array = will be trrigred everytime when the dependent state value changes
         useEffect(()=>{
            //do something
        },[name,email])
    */

    let handleSubmit = ()=>{
      let newData = {name,email,mobile,batch}
      //take a deep clone of the state
      let data = [...props.data.users]
      //replace the data to the new clone
      data.splice(params.id,1,newData)
      //update the state with the new cloned variable
      props.data.setUsers(data)
      navigate('/dashboard')



    }
  return <div className='mx-auto col-10'>
  <Form>
  <Form.Group className="mb-3">
     <Form.Label>Name</Form.Label>
     <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
   </Form.Group>

   <Form.Group className="mb-3" >
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
   </Form.Group>

   <Form.Group className="mb-3" >
     <Form.Label>Mobile</Form.Label>
     <Form.Control type="text" placeholder="Enter Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
   </Form.Group>

   <Form.Group className="mb-3" >
     <Form.Label>Batch</Form.Label>
     <Form.Control type="text" placeholder="Enter Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
   </Form.Group>
  
   <Button variant="primary" onClick={()=>handleSubmit()}>
     Submit
   </Button>
 </Form>
</div>
}

export default EditUser