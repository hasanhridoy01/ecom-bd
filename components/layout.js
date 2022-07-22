import Banner from "./Banner"
import Footer from "./Footer"
import Header from "./Header"

function layout({children}) {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
        {children}
      <Footer></Footer>
    </div>
  )
}

export default layout