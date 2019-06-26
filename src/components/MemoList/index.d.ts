export interface WorkItemInterface {
  id: number;
  text: string;
  checked: boolean;
  created: string;
  updated: string;
}

export interface WorkItemProps {
  item: WorkItemInterface;
  index: number;
  changeHandler(wi: WorkItemInterface): (event) => void;
}

export type InputValueType = string | undefined;
