import { SelectionData, SelectionType } from "../types/filterTypes";

export const mapToSelectionData = (data: any): SelectionData => {
  return {
    id: data.id,
    title: data.title,
    type: data.type as SelectionType, // safely narrow
    options: data.options,
    applyButton: data.applyButton,
    clearAll: data.clearAll,
  };
};