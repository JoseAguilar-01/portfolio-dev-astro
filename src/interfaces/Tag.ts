import type { JsxElement } from "typescript";

export interface Props {
  text: string;
  icon?: JsxElement;
  color?: "gray" | "blue" | "green";
}
