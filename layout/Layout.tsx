import { FunctionComponent } from "react";
import {Header} from "../components";
import {Footer} from "../components/Footer/Footer";
import { LayoutProps } from "./Layout.props";

const Layout = ( {children} : LayoutProps): JSX.Element => {
  return(
    <div className="container mx-auto px-2">
      <Header/>
        {children}
      <Footer/>
    </div>
  )
}


export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T):JSX.Element {
    return(
      <Layout>
        <Component {...props} />
      </Layout>
    )
  };
};