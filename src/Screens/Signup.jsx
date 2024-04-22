import React,{useState} from 'react'
import axios from 'axios';
import img from "../Assets/9 Gifts Every Book Nerd Wants Their Boyfriend To Get Them In Lieu Of Flowers This Valentine's Day.jpeg"
import { useNavigate, Link } from 'react-router-dom';
import Header from '../Components/Header';
import baseURL from '../baseUrl';

const Signup = () => {

  const navigate = useNavigate();
  const [formData] = useState({
      fullName: '',
      email: '',
      phoneNumber: '',
      gender: '',
      location: '',
      password: ''
  });

  // const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post(`${baseURL}api/signup`, formData); // Adjust the endpoint as per your backend setup
          console.log(response.data); // Log response for now
          navigate('/login'); // Navigate to login page after successful sign-up
      } catch (error) {
          console.error('Error signing up:', error);
          // Handle error (e.g., show error message to the user)
      }
  };

    // const saveItem = () => {
    //     navigate('/login')
    // }


  return (
    <div>
        <Header/>

    <div className='s-f'>
      <section className='signin'>

        <div className='signin-l'>
          <img src={img} alt="" />
        </div>

        <div className='signin-r'>
          {/* <img src={logo} alt="" /> */}
          <h3>Create Account</h3>

          <form className='sign'>

          <label htmlFor="fullname">
              <input type="text" placeholder='Full Name'/>
            </label>

            <label htmlFor="email">
              <input type="email" placeholder='Email Address'/>
            </label>

            <label htmlFor="phone number">
              <input type="tel" placeholder='Phone Number'/>
            </label>

            <label htmlFor="gender">
              <select name="" id="">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <label htmlFor="Address">
              <input type="text" placeholder='Location'/>
            </label>

            <label htmlFor="password" >
              <input type="password" placeholder='Password'/>
              {/* <FaEyeSlash className='s-i'/> */}
            </label>

            <div className="rem">
              <p>Already have an account? <Link to='/login'>Log In</Link></p>

            </div>

            <button type="submit" onClick={() => handleSubmit()}>Sign Up</button>

          </form>

        </div>

      </section>
    </div> 

    </div>
  
  )
}

export default Signup