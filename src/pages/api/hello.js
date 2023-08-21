// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// File in api, each file has its end point
// can easily read it from localhost:3000/api/hello

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
