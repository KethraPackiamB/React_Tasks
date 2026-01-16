import { useState } from "react";
import Message from "./Message";
import ErrorFallbackComponent from "../ErrorFallbackComponent";
import { ErrorBoundary } from "react-error-boundary";

const ErrorBoundaryComponent = () => {

    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        setMessage();
    }

    return(
        <div>
            <h1>Do not type "Crash"</h1>
            <h3>{message}</h3>

            <ErrorBoundary FallbackComponent={ErrorFallbackComponent} onReset={() => setMessage("")} resetKeys={{message}}>
                <Message message={message} onSubmit={handleSubmit}/>
            </ErrorBoundary>
        </div>
    )
}

export default ErrorBoundaryComponent;