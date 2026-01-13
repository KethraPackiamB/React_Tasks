const ErrorFallbackComponent = ({error, resetErrorBoundary}) => {

    return(
        <div>
            <p>Something went wrong</p>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    )
}
export default ErrorFallbackComponent;