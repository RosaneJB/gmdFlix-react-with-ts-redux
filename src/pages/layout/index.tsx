import { LayoutProp } from "../../ts/layout"
import { Footer } from "./footer"
import { Header } from "./header"

export const Layout = ({children}: LayoutProp) => {
    return (
        <>
            <Header />
            <main>
                <section className="p-2">
                    {children}
                </section>
            </main>
            <Footer />
        </>
    )
}
