import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function FoodId() {
  const router = useRouter();
  const [food, setFood] = useState({})
  const foodId = router.query.foodId;
  useEffect(() => {
    fetch(`/api/${foodId}`)
      .then(res => res.json())
      .then(data => setFood(data))
  }, []);
  return (
    <div className="mt-5 mb-5 mr-5 ml-5 p-5">
      <div className="card lg:card-side bg-base-100 shadow-xl p-5">
        <figure>
          <img className="singleFoodImg" src={food.img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{food.name}</h2>
          <p>{food.shortDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodId