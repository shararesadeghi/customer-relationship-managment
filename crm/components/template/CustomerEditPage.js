// import { useState } from "react";
// import moment from "moment/moment";

// import { useRouter } from "next/router";
// import Form from "./../module/Form";

// const CustomerEditPage = ({ data, id }) => {
//   const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";
//   const [form, setForm] = useState({
//     name: data.name,
//     lastName: data.lastName,
//     email: data.email,
//     phone: data.phone || "",
//     address: data.address || "",
//     postalCode: data.postalCode || "",
//     products: data.products || "",
//     date: date,
//   });

//   const router = useRouter();

//   const cancelHandler = () => {
//     router.push("/");
//   };

//   const saveHandler = async () => {
//     const res = await fetch(`/api/edit/${id}`, {
//       method: "PATCH",
//       body: JSON.stringify({ data: form }),
//       headers: { "Content-type:": "application/json" },
//     });
//     const data = await res.json();
//     if (data.status === "success") router.push("/");
//   };
//   return (
//     <div className="customer-page">
//       <h4>Edit Customer</h4>
//       <Form form={form} setForm={setForm} />
//       <div className="customer-page__buttons">
//         <button className="first" onClick={cancelHandler}>
//           Cancel
//         </button>
//         <button className="second" onClick={saveHandler}>
//           Edit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomerEditPage;
import  { useState } from 'react'
import { useRouter } from 'next/router';
import moment from 'moment/moment';

import Form from './../module/Form';

const CustomerEditPage = ({data, id}) => {
console.log({data,id})
  const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";
   const[form , setForm]=useState({
        name : data.name,
        lastName : data.lastName,
        email : data. email,
        phone : data.phone || "",
        address : data.address || "",
        postalCode : data.postalCode || "",
        date : date,
        products : data.products || "",
   });

   const router =useRouter();

   const cancelHandler=()=>{
    router.push("/");
   }
   const saveHandler=async()=>{
    const res = await fetch(`/api/edit/${id}`, {
      method : "PATCH",
      body : JSON.stringify({data : form}),
      headers: {  'Content-type': 'application/json' },
    })
    const data = await res.json();
    if(res.status === "success") router.push("/")
   }



  return (
    <div className='customer-page'>
      <h4>Edit Customer</h4>
      <Form form={form} setForm={setForm} />

      <div className='customer-page__buttons'>
        <button className='first' onClick={cancelHandler}>Cancel</button>
        <button className='second' onClick={saveHandler}>Edit</button>

      </div>
      
    </div>
  )
}

export default CustomerEditPage
