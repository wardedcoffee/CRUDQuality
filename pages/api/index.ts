/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log(request.headers);
  response.status(200).json({ message: "Hello World" });
}
