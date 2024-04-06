import "dotenv/config";
import Stripe from "stripe";

//// Always use ECMA script 6 Lang instead of require in react
export async function handler(event, context) {
  if (event.body) {
    //// Body is not always available
    const {
      products: { product },
      totalAmount,
      shipping,
    } = JSON.parse(event.body);
    /// Stripe package
    const stripe = new Stripe(process.env.VITE_STRIPE_SECRET_KEY);
    /// Order total calculation
    const calculateOrderTotal = () => {
      // Replace this constant with a calculation of the order's amount
      // Calculate the order total on the server to prevent
      // people from directly manipulating the amount on the client
      // In production setup: iterate over the products via id and get the real price via api and calculate total

      return totalAmount + shipping;
    };

    /// Amount calculation requires the amount in cents

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        shipping: {
          name: "Jenny Rosen",
          address: {
            line1: "510 Townsend St",
            postal_code: "98140",
            city: "San Francisco",
            state: "CA",
            country: "US",
          },
        },
        amount: calculateOrderTotal() * 100,
        currency: "usd",
        description: "Ecommerce store purchase",
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  }
  return {
    statusCode: 200,
    body: "Payment Intent",
  };
}
