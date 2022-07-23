import Link from "next/link"

function Banner() {
  return (
    <div>
      <div className="hero min-h-screen" style={{"background-image": 'url(https://i.ibb.co/4Pv90Fd/bg.jpg?w=1000&h=600)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
          <h1 className="mb-3 text-5xl font-bold">Always Choose Good</h1>
          <p className="mb-5">Online Shopping Store In Usa - Discover At Shopwebly! Find Easily. Compare Products. Easy Acces. Quick Results. Search and Discover. Types: 24/7 Accessible, Big Variaty, Instant Results, Products Online.</p>
          <Link href="/resgistration"><a className="btn btn-primary">Registration</a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner