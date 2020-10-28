import React from "react";
import { Redirect } from "react-router-dom";
// export default Home;
// this overrides the default behaviour, and redirects to the docs page.
function TeamRedirct() {
    return <Redirect to="/team" />;
}

export default TeamRedirct;
