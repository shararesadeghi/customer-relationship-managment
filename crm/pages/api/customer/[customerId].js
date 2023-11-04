import connectDB from "./../../../utils/connectDB";
import Customer from "./../../../models/Customer";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ status: "failed", message: "Error in connectin to DB" });
  }

  if (req.method === "GET") {
    const id = req.query.customerId;
    try {
      const customer = await Customer.findOne({ _id: id });
      res.status(200).json({ status: "success", data: customer });
    } catch (err) {
      console.log(err.message);
      res
        .status(500)
        .json({
          status: "failed",
          message: "Error in retriving data from database",
        });
    }
  }
}
