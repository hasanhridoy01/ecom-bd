
function Testimonial() {
  return (
    <div className="mt-10 mb-10 p-5" style={{ "background-image": 'url(https://i.ibb.co/zPhKZbD/bg2.jpg?w=1000&h=400)' }}>
      <div className="title white">
        <h2 className="titleText">They <span>S</span>aid About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, perferendis!</p>
      </div>
      <div className="TContent grid sm:grid-cols-1 lg:grid-cols-4 gap-5 mt-5 p-5">
        <div className="Tbox">
          <div className="Timgbox">
            <img src={'https://i.ibb.co/NZfn5Fv/testi1.jpg'} alt="" />
          </div>
          <div className="Ttext">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Facere pariatur quos repellat architecto veniam vitae dicta molestias repudiandae explicabo aut.</p>
            <h3>Someone Famouse</h3>
          </div>
        </div>
        <div className="Tbox">
          <div className="Timgbox">
            <img src={'https://i.ibb.co/xDftTfc/testi2.jpg'} alt="" />
          </div>
          <div className="Ttext">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Facere pariatur quos repellat architecto veniam vitae dicta molestias repudiandae explicabo aut.</p>
            <h3>Someone Famouse</h3>
          </div>
        </div>
        <div className="Tbox">
          <div className="Timgbox">
            <img src={'https://i.ibb.co/P4R3TDN/testi3.jpg'} alt="" />
          </div>
          <div className="Ttext">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Facere pariatur quos repellat architecto veniam vitae dicta molestias repudiandae explicabo aut.</p>
            <h3>Someone Famouse</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial