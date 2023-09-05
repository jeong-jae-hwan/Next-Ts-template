/** @jsxImportSource @emotion/react */
import React, {
  ForwardedRef,
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";
import { Interpolation, Theme } from "@emotion/react";
import { colors, borderRadius, fontSize } from "../../theme/_index";

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "medium" | "large";
}

// ------------------------------------
// -------------- Button --------------
// ------------------------------------
export const Button = forwardRef(function Button(
  { variant = "primary", size = "medium", children, ...props }: Props,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      css={
        {
          ...buttonStyle,
          ...TYPE_VARIANTS[variant],
          ...SIZE_VARIANTS[size],
        } as Interpolation<Theme>
      }
      {...props}
    >
      {children}
    </button>
  );
});

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const TYPE_VARIANTS = {
  primary: {
    color: colors.grey100,
    backgroundColor: colors.keyColor,
    "&:hover": {
      backgroundColor: colors.keyColor,
    },
  },
  secondary: {
    color: colors.grey500,
    backgroundColor: colors.grey100,
    "&:hover": {
      backgroundColor: colors.grey300,
    },
  },
};

const SIZE_VARIANTS = {
  medium: {
    fontSize: fontSize.s15,
    padding: "11px 16px",
  },
  large: {
    fontSize: fontSize.s16,
    padding: "11px 22px",
  },
};

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "54px",
  outline: "none",
  border: "0 solid transparent",
  borderRadius: borderRadius.s600,
  whiteSpace: "nowrap",
  cursor: "pointer",
  transition: "0.3s ease-in-out",
  fontWeight: 500,
  lineHeight: "26px",

  "&:hover": { opacity: "0.9" },

  "&:disabled": {
    opacity: "0.25",
  },
};
