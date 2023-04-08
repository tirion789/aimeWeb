export interface FilterProps {
  title: string;
  items: string[];
  handleClickCurrentInput: (value: string) => void;
  header: string;
  disabled: boolean;
}
