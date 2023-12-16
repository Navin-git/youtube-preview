import React from "react";

type ButtonProps = {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
};

/**
 * This is a component for a button with various optional props.
 * @property {string} text - The text property is a required string that represents the text content of
 * the button.
 * @property onClick - The onClick property is a function that will be called when the button is
 * clicked.
 * @property {"submit" | "button" | "reset"} type - The `type` property is used to specify the type of
 * the button. It can have one of three values: "submit", "button", or "reset". By default, it is set
 * to "button".
 * @property {boolean} disabled - The `disabled` property is a boolean that determines whether the
 * button should be disabled or not.
 * @property icon - The `icon` property is a React node that represents an icon to be displayed
 * alongside the button text.
 * @property {boolean} loading - The `loading` property is a boolean that indicates whether the button
 * should display a loading spinner.
 */
const Button = ({
  text,
  onClick = () => {},
  type = "button",
  disabled = false,
  icon = <></>,
  loading = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      className="card-button"
    >
      {icon}
      {text}
      {loading && <div className="spinner"></div>}
    </button>
  );
};

export default Button;
