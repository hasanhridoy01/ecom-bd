
function contectus() {
  return (
    <div className="mt-10 mb-10 mr-5 ml-5 p-5">
      <div className="title">
        <h2 className="titleText"><span>C</span>ontect Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, perferendis!</p>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 lg:p-5 mt-10">
        <img src={'https://i.ibb.co/N2cjTDQ/img1.jpg'} alt="" />
        <div className="card lg:p-10 p-5 bg-base-100 shadow-xl">
        <input type="text" placeholder="Type Your Name" className="input input-bordered w-full mt-2 mb-3" />
        <input type="text" placeholder="Type Your Email" className="input input-bordered w-full mt-2 mb-3" />
        <textarea className="textarea textarea-accent" placeholder="Your Address"></textarea>
        <button className="btn btn-info mt-5">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default contectus