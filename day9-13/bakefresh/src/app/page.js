import { Career } from "./components/Career";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/Header";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const Page = () => {
  return (
    <>
      <NavBar fixed="top" />
      <Career />
      <Footer fixed="bottom" />
    </>

  )
}
export default Page;