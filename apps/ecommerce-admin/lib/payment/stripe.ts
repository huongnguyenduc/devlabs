import Stripe from 'stripe';
import * as process from 'process';

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: '2022-11-15',
  typescript: true,
});
