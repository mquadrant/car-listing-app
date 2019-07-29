import mongoose from "mongoose";

mongoose
  // .connect(
  //     "mongodb+srv://emm:emm@cluster0-9jokw.gcp.mongodb.net/test?retryWrites=true&w=majority"
  // )
  .connect("mongodb://localhost/orders", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch(err => console.error("Could not connect to MongoDB Atlas...", err));

const orderSchema = new mongoose.Schema<any>({
  name: String,
  noOfOrders: Number,
});

const Order = mongoose.model<any>("Order", orderSchema);

export async function getOrders() {
  const result = await Order.find();
  console.log(result);

  return result;
}

export async function createOrder(payload: any) {
  console.log("result");
  const order = new Order(payload);

  const result = await order.save();
  console.log(result);
  console.log("Contact was saved to the database");
  return order;
}

export async function removeOrder(payload: any) {
  const result = await Order.deleteOne({ _id: payload.orderID });
  console.log({ _id: payload.orderID });
  console.log(result);
  console.log("Order was removed from the database");
}

export default Order;
