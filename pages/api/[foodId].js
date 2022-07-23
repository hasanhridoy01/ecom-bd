import { foods } from "../../food";

export default function handler(req, res){
  const { foodId } = req.query;
  const food = foods.find(food => food.id == parseInt(foodId));
  res.status(200).json(food);
  console.log(food)
}