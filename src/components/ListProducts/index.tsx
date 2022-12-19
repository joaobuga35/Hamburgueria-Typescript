import { UlStyle } from "./styles";

interface iList {
  children?: React.ReactNode;
}

export const ListProducts = ({ children }: iList) => {
  return <UlStyle>{children}</UlStyle>;
};
