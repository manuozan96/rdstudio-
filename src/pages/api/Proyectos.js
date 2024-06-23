// pages/api/strapi.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const response = await axios.get("http://localhost:1337/proyectos");
      res.status(200).json(response.data);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al realizar la solicitud a Strapi" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
