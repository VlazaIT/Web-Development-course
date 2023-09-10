import { Link } from 'react-router-dom';

function Navigation() {
 return (
<nav>
<ul>
 <li>
<Link to="/">Home</Link>
 </li>
 <li>
<Link to="/price-list">Price List</Link>
 </li>
 <li>
<Link to="/contact-us">Contact Us</Link>
 </li>
</ul>
</nav>
 );
}

export default Navigation;