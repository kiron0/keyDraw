"use server"

import { headers } from "next/headers";

export default async function getBaseURL() {
          const host = headers().get('host');
          const baseURL = host === 'localhost:3000' ? `http://${host}` : `https://${host}`;
          return baseURL;
}