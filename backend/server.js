import app from './app.js'
import { connectDb } from './config/databasse.js';
import Razorpay from 'razorpay'

connectDb();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.get("/", function(req, res){
    res.send("<h1>Worlimg</h1>")
})




app.listen(process.env.PORT, () =>
  console.log(
    `Server is working on PORT: ${process.env.PORT}, in ${process.env.NODE_ENV} MODE`
  )
);
