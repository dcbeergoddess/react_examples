import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

function Contact(props) {
  console.log(props.match.url)
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna.
        Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrices. Aenean
        pellentesque placerat lacus imperdiet efficitur. In felis nisl, luctus non ante euismod,
        tincidunt bibendum mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum faucibus. Quisque nec
        metus vestibulum, egestas massa eu, sollicitudin ipsum. Nulla facilisi. Sed ut erat ligula.
        Nam tincidunt nunc in nibh dictum ullamcorper. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at rhoncus.
        Etiam vel condimentum magna, quis tempor nulla.
      </p>

      {/* using link tab lets everyhting go through the router instead of <a> tags or href */}
      {/* prop.match.url is the current path.  */}
      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Learn Less
      </Link>

      {/* in app.js /contact is not an exact path */}
      {/* this is just listening, react router does not do anything until the route changes, route listener like in express */}
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
    </div>
  );
}

export default Contact;
