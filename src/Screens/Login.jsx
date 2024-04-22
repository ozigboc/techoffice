import React,{useState} from 'react'
import img from "../Assets/9 Gifts Every Book Nerd Wants Their Boyfriend To Get Them In Lieu Of Flowers This Valentine's Day.jpeg"
import { useNavigate, Link } from 'react-router-dom';
import Header from '../Components/Header';
import axios from 'axios';
import baseURL from '../baseUrl';


const Login = () => {
    const navigate = useNavigate();

    const [formData] = useState({
      email: '',
      password: ''
  });

  // const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post(`${baseURL}/api/signin`, formData); // Adjust the endpoint as per your backend setup
          console.log(response.data); // Log response for now
          navigate('/dashboard'); // Navigate to dashboard page after successful login
      } catch (error) {
          console.error('Error signing in:', error);
          // Handle error (e.g., show error message to the user)
      }
  };


    // const saveItem = () => {
    //     navigate('/dashboard')
    //   }

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
          <h3>Log In</h3>

          <form className='sign'>
            <label htmlFor="email">
              <input type="email" placeholder='Email Address'/>
            </label>

            <label htmlFor="password" >
              <input type="password" placeholder='Password'/>
              {/* <FaEyeSlash className='s-i'/> */}
            </label>

            <div className="rem">
              <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>

            </div>

            {/* <button type="submit" onClick={() => saveItem() }>Log In</button> */}
            <button type="submit" onClick={() =>handleSubmit() }>Log In</button>

          </form>

        </div>

      </section>
    </div>

    </div>
     
  )
}

export default Login