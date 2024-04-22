import React, {useState} from 'react'
// import Header2 from '../Components/Header2';
import Sidebar from '../Components/Sidebar';
import Modal from "react-modal";
import Header2 from '../Components/Header2';
import DisplayDataByCategory from '../Components/DisplayDataByCategory';

const Products = ({category}) => {


    const data = JSON.parse(localStorage.getItem('formData')) || [];
  const filteredData = data.filter(item => item.category === category);


    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const toggleModal1 = () => {
      setIsModalOpen1(!isModalOpen1);
    };


    // const [formData, setFormData] = useState({
    //     name: '',
    //     price: '',
    //     category: '',
    //     image: null // To store the image file
    //   });
    
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({
    //       ...prevState,
    //       [name]: value
    //     }));
    //   };
    
    //   const handleImageChange = (e) => {
    //     const imageFile = e.target.files[0];
    //     setFormData(prevState => ({
    //       ...prevState,
    //       image: imageFile
    //     }));
    //   };

    //   const handleSelectChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({
    //       ...prevState,
    //       [name]: value
    //     }));
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Convert form data to JSON
    //     const formDataJson = {
    //       name: formData.name,
    //       price: formData.price,
    //       category: formData.category,
          
    //       imageName: formData.image ? formData.image.name : null

          
    //     };
    
    //     // You can then send formDataJson to a server or store it locally
    //     console.log(formDataJson);
    
    //     // Reset the form after submission
    //     setFormData({
    //       name: '',
    //       price: '',
    //       category: '',
    //       image: null
    //     });
    //   };
    



    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        image: null
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevState => ({
          ...prevState,
          image: file
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const existingData = JSON.parse(localStorage.getItem('formData')) || [];
        localStorage.setItem('formData', JSON.stringify([...existingData, formData]));
        console.log('Form data saved to local storage:', formData);
        setFormData({
          name: '',
          price: '',
          category: '',
          image: null
        });
      };

      console.log(formData);

    

  return (
    <div className='dashb'>

        <section className='dashboard'>
            <Sidebar/>
            <main>
                <Header2/>
                <div className='add'>
                    <h2>Books</h2>

                    <button onClick={toggleModal}>Add Book</button>
                </div>

                <table>
                    <tr className='heading'>
                        <th>Book Name</th>
                        <th>Price</th>
                        <th className='dt'></th>
                    </tr>

                    <tr>
                        <td>book1</td>
                        <td>$30</td>
                        <td className='dt'><button onClick={toggleModal1}>See Details</button></td>
                    </tr>

                    <tr>
                        <td>book2</td>
                        <td>$45</td>
                        <td className='dt'><button onClick={toggleModal1}>See Details</button></td>
                    </tr>

                </table>

                

            </main>
        </section>


        {/* FIRST MODAL */}


        <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='modal1'>
              <div className='modal1-content'>
                <div className='close'>
                  <button onClick={() => setIsModalOpen(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <form className='product-form' onSubmit={handleSubmit}>

                    <div>
                        <p>Book Name</p>
                        <input type="text"
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        />
                    </div>

                    <div>
                        <p>Price</p>
                        <input type="text"
                        name="price" 
                        value={formData.price} 
                        onChange={handleChange} 
                        placeholder='$32' />
                    </div>

                    <div>
                        <p>Images</p>
                        <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange} 
                        />
                    </div>

                    <div>
                        <p>Catergory</p>
                        <select 
                        name="category" 
                        value={formData.category} 
                        onChange={handleChange}
                        >
                            <option value="">Select Category</option>
                            <option value="men">Fiction</option>
                            <option value="women">Fantasy</option>
                            <option value="teens">Science</option>
                            <option value="kids">Literature</option>
                        </select>
                    </div>


                    <div>
                        <button type="submit">SEND</button>
                    </div>
                
                </form>
                

              </div>

            </div>
            
          </Modal>



          {/* SECOND MODAL */}

        
        <Modal
            isOpen={isModalOpen1}
            onRequestClose={toggleModal1}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='modal1'>
              <div className='modal1-content'>
                <div className='close'>
                  <button onClick={() => setIsModalOpen1(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <section className='product-info'>
                    <div className='product-images'>

                        {/* <img src={m1} alt="" />
                        <img src={m2} alt="" />
                        <img src={m3} alt="" /> */}

                    </div>

                    <div className='others'>

                        <p>Product Name: <span>Product1</span></p>
                        <p>Product Price: <span>$30</span></p>
                        <p>Quantity: <span>4</span></p>
                        <p>Size: <span>Medium</span></p>
                        <p>Color: <span>Red</span></p>
                        <p>Catergory: <span>Clothes</span></p>
                        <p>Shop: <span>Shop1</span></p>

                    </div>
                </section>
                

              </div>

            </div>
            
          </Modal>


          
          {/* <DisplayDataByCategory category="category1" /> */}

          
        
    </div>
  )
}

export default Products