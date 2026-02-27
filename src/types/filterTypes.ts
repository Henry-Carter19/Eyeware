export type SelectionType = "multi" | "single";

export interface SelectionData {
  id?: string;
  title: string;
  type: SelectionType;
  options: {
    label: string;
    value: string;
  }[];
  applyButton?: boolean;
  clearAll?: boolean;
}
