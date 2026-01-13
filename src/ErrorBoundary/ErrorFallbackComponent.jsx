const ErrorFallbackComponent = ({error, resetErrorBoundary}) => {

    console.log(error);

    return(
        <div>
            <p>Something went wrong</p>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    )
}
export default ErrorFallbackComponent;