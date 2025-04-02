import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';

const Add = ({url}) => {


  const  [image,setImage] = useState(false)
  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"salad",
  })

  const onChangeHander = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data => ({...data,[name]:value}))
  }

  const onSubmitHabdler = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("name",data.name)
      formData.append("description",data.description)
      formData.append("price",Number(data.price))
      formData.append("category",data.category)
      formData.append("image",image)

      const responce = await axios.post(`${url}/api/food/add`,formData);
      if(responce.data.success){
          setData({
            name:"",
            description:"",
            price:"",
            category:"salad",
          })
          setImage(false)
          toast.success(responce.data.message)
      }else{
          toast.error(responce.data.message)
      }
  }



  return (
    <div>
      <form action="" onSubmit={onSubmitHabdler}>
        <div>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img className='im' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required/>
        </div>

        <div>
          <p>Product Name</p>
          <input onChange={onChangeHander} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>

        <div>
          <p>Product Discription</p>
          <textarea onChange={onChangeHander} value={data.description}  name="description" placeholder='write content here' required rows='6' id=""></textarea>
        </div>

        <div>
          <div>
            <p>Product Category</p>
            <select onChange={onChangeHander} name="category" id="">
              <option value="salad">salad</option>
              <option value="Rolls">Rolls</option>
              <option value="deserts">deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="pure veg">pure veg</option>
              <option value="pasta">pasta</option>
              <option value="noodles">noodles</option>
            </select>
          </div>

          <div>
            <p>Product Price</p>
            <input onChange={onChangeHander} value={data.price} type="number" name='price' placeholder='$20' />
          </div>
        </div>

        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Add