import CategoryContainer from "../../src/components/category/dweb"
import { useMobile } from "../../src/components/common/checkMobileView";
import Header from "../../src/layout/header/dweb";
import MobileHeader from "../../src/layout/header/mweb";

const Category = () =>{
    const isMobile = useMobile();

return(
  <>
        {isMobile ? <MobileHeader /> : <Header />}

    <CategoryContainer/>
  </>

)
}
export default Category