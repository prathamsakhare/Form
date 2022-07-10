import React,{useState, useEffect} from "react";
import validator from 'validator';
import Radio from '@mui/material/Radio';
import axios from 'axios'
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";


const SignUp = () => {
  
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("")
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')
  const [referral, setReferral] = useState('')
  const [data, setData]=useState([]);
  

  const handleInputEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }
  const handleAddress = (e) => {
    setAddress(e.target.value)
  }
  const handleCity = (e) => {
    setCity(e.target.value)
  }
  const handleState = (e) => {
    setState(e.target.value)
  }
  const handlePincode = (e) => {
    setPincode(e.target.value)
  }
  const handleReferral = (e) => {
    setReferral(e.target.value)
  }
 
  const [gender, setGender] = useState("no")
  const handleYesNo = (e) => {
    console.warn(e.target.value)
    setGender(e.target.value)
  }
  const paperStyle = {
    padding: 20,
    height: "115vh",
    width: 600,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, username, phone, address, city, state, pincode, referral, gender)
    const data = {
      Email: email,
      Name: username,
      Phone: phone,
      Address: address,
      City: city,
      State: state,
      Pincode: pincode,
      Referral: referral,
      Gender: gender

    }
    axios.post('https://sheet.best/api/sheets/393de4da-a942-454f-a786-5112a1c4e8ab', data).then(response => {
      console.log(response);
      setEmail("");
      setUsername("");
      setPhone("");
      setAddress("");
      setCity("");
      setState("");
      setPincode("");
      setReferral("");
      setGender("no")

    })

  }
  const getData=()=>{
    axios.get('https://sheet.best/api/sheets/393de4da-a942-454f-a786-5112a1c4e8ab').then((response)=>{
      setData(response.data);
    })
  }

  // triggering function
  useEffect(()=>{
    getData();
  },[data])
  

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}></Avatar>
            <h2>Sign Up</h2>
          </Grid>
          <TextField
            // label="Email"
            autoComplete="off"
            placeholder="Your Email"
            fullWidth
            required
            value={email}
            onChange={handleInputEmail}
            
          />{" "}
          <br></br>
          <br></br>
          <TextField
            // label="Name"
            autoComplete="off"
            placeholder="Your Name"
            fullWidth
            required
            value={username}
            onChange={handleUsername}
          />
          <br></br>
          <br></br>
          <TextField
            // label="Mobile Number"
            placeholder="Your Mobile Number"
            type="number"
            fullWidth
            required
            value={phone}
            autoComplete="off"
            onChange={handlePhone}
          />
          <br></br>
          <br></br>
          <TextField
            // label="Address"
            placeholder="Your Address"
            type="text"
            fullWidth
            required
            value={address}
            autoComplete="off"
            onChange={handleAddress}
          />
          <br></br>
          <br></br>
          <TextField
            // label="City"
            placeholder="Your City"
            type="text"
            fullWidth
            required
            value={city}
            autoComplete="off"
            onChange={handleCity}
          />
          <br></br>
          <br></br>
          <TextField
            // label="State"
            placeholder="Your State"
            type="text"
            fullWidth
            required
            value={state}
            autoComplete="off"
            onChange={handleState}
          />
          <br></br>
          <br></br>
          <TextField
            // label="Pin Code"
            placeholder="Your Pincode"
            type="number"
            fullWidth
            required
            value={pincode}
            autoComplete="off"
            onChange={handlePincode}
          />
          <br></br>
          <br></br>
          <TextField
            // label="Referral Code"
            placeholder="Referral Code"
            type="number"
            fullWidth
            required
            value={referral}
            autoComplete="off"
            onChange={handleReferral}
          />
          <br></br>
          
          <h5>Are you willing to enroll as a service provider? </h5>
        
          
          <span>Yes</span>
          <Radio 
            value='yes'
            checked={gender==='yes'}
            onChange={handleYesNo}
          />
          <span>No</span>
          <Radio 
            value='no'
            checked={gender==='no'}
            onChange={handleYesNo}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
           
            
          >
            Sign Up
          </Button>
        </Paper>
      </Grid>
    </form>
  );
};

export default SignUp;

