import ThemeContext from "../Context/Context";

const withContext = (WrappedComponent) => {
  return function WithContext(props) {
    return (
      <ThemeContext.Consumer>
        {(theme) => <WrappedComponent {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  };
};

export default withContext;
