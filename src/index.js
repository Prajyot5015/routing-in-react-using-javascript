import ReactDom from "react-dom/client"
import Home from "./views/Home"
import About from "./views/About"
import Contact from "./views/Contact"

const root = ReactDom.createRoot(document.getElementById('root'))

const path = window.location.pathname

if(path == "/")
{
    root.render(<Home />)
}
else if(path == "/about")
{
    root.render(<About />)
}
else if(path == "/contact")
{
    root.render(<Contact />)
}
else
{
    root.render(<h1>404 page not found</h1>)
}

