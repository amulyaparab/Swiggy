import ReactDOM from "react-dom/client";
import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import RestaurantPage from "./body/RestaurantPage"
import About from "./about/About"
import Contact from "./contact/Contact"
import Cart from "./cart/Cart"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";


const App = () => {
    
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>Error</h1>,
        children: [{
            path: "/",
            element: <Body />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/cart",
            element: <Cart />
        },
        {
            path: "/restaurants/:id",
            element: <RestaurantPage />
        }
    ]

    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
