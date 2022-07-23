import { foods } from "../../food";

export default function handler(req, res){
  res.status(200).json(foods)
}