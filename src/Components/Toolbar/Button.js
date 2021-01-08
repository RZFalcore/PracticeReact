import React from "react";
import withTheme from "../../HOC/withTheme";

const Button = ({ label, theme }) => (
      <button
        className={theme === "light" ? "btn-light" : "btn-dark"}
        type="button"
      >
        {label}
      </button>
);

export default withTheme(Button);
