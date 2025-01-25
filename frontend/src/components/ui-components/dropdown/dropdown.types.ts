export interface Option {
  value: string;
  label: string;
}

export interface IDropdownProps {
  options: Option[];
  placeholder: string;
  className?: string;
  value?: string[] | Option | null;
  onChange?: (value: string[] | Option | null) => void;
  isMultiSelect?: boolean;
  isShowSearch?: boolean;
}