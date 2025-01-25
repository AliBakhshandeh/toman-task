import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  placeholder?: string;
  iconClassName?: string;
  className?: string;
  inputClassName?: string;
}