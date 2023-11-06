// import connectDB from "./../../../utils/connectDB";
// import Customer from "./../../../models/Customer";

// export default async function handler(req, res) {
//   try {
//     await connectDB();
//   } catch (err) {
//     console.log(err.message);
//     res
//       .status(500)
//       .json({ status: "failed", message: "Error in connecting to DB" });
//   }

//   if (req.method === "PATCH") {
//     const id = req.query.customerId;
//     const data = req.body.data;
//     try {
//       const customer = await Customer.findOne({ _id: id });
//       customer.name = data.name;
//       customer.lastName = data.lastName;
//       customer.email = data.email;
//       customer.phone = data.phone;
//       customer.address = data.address;
//       customer.postalCode = data.postalCode;
//       customer.date = data.date;
//       customer.products = data.products;
//       customer.updatedAt = Date.now();
//       customer.save();
//       res.status(200).json({ status: "success", data: customer });
//     } catch (err) {
//       console.log(err.message);
//       res
//         .status(500)
//         .json({ status: "failed", message: "Error in retriving data from DB" });
//     }
//   }
// }


import { useEffect, useState } from 'react';
import CustomerEditPage from '../../components/template/CustomerEditPage';
import { useRouter } from 'next/router';

const Index = () => {
    const [data , setData]=useState(null);
    const router = useRouter();
    const {query: {customerId} , isReady}=router;

    useEffect(()=>{
        if(isReady){
            fetch(`/api/customer/${customerId}`)
                 .then((res)=> res.json())
                 .then((data) =>setData(data.data) );
        }

    },[isReady])

 if(data) return (
   
    <CustomerEditPage data={data} id={customerId} />
  
  )
}

export default Index;