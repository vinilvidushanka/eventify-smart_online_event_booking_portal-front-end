import './MainContent.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Services} from "../../pages/services/Services.tsx";
import {Contact} from "../../pages/contact/Contact.tsx";
import {TicketCart} from "../../pages/TicketCart/TicketCart.tsx";
import {Users} from "../../pages/Users/Users.tsx";
import {ConcertsManage} from "../../pages/ConcertsManage/ConcertsManage.tsx";
export function MainContent() {
    return (
        <section>
            <div className="flex justify-center items-center min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/services" element={<Services />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/shopping-cart" element={<TicketCart  />}></Route>
                    <Route path="/users" element={<Users />}></Route>
                    <Route path="/concerts-manage" element={<ConcertsManage />}></Route>
                </Routes>
            </div>
        </section>


    );
}