import React from "react";
import { useRouteError } from "react-router";

function ErrorElement(){
    const error = useRouteError()
    console.log(error)
    return(
        <>
            <section className="error-container">
            <h2>
                Error: {error.message}
            </h2>
            <pre>{ error.status } - {error.statusText} !!!</pre>
            </section>
        </>
    )
}
export default ErrorElement;