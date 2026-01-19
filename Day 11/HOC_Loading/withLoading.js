
const withLoading = (WrappedComponent) => {
    return function WithLoading(props){
        const { isLoading, ...rest } = props;
        if (isLoading) {
            return <h2>Loading...</h2>;
        }
        return <WrappedComponent {...rest} />;
    };
};

window.withLoading = withLoading;