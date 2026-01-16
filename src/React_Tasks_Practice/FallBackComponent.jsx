const FallBackComponent = ({error, resetErrorBoundary}) => {

    return(
        <div>
            <p>Something went wrong</p>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Reset</button>
        </div>
    )
}
export default FallBackComponent;