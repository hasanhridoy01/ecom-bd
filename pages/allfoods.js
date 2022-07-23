import { useEffect, useState } from "react";
import Link from "next/link";

function AllFoods() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch('/api/foods')
      .then(res => res.json())
      .then(data => setFoods(data))
  },[]);
  return (
    <div className="mt-5 mb-5 mr-5 ml-5 p-5">
      <div className="title">
        <h2 className="titleText">Our <span>M</span>enu</h2>
        <p>Enjoy Our Good & Healthy Food</p>
      </div>
      <div className="mt-5 mb-5 p-3 mr-5 ml-5">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
          {
            foods.map(food => {
              return (
                <>
                  <div className="card lg:w-96 bg-none shadow-xl image-full">
                    <figure><img src={food.img} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{food.name}</h2>
                      <p></p>
                      <div className="card-actions justify-end">
                      <Link href={`/${food.id}`}><a className="btn btn-primary">ORDER NOW</a></Link>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default AllFoods