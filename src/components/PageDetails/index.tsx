import { Wrapper } from "./styles";

interface PageDetailsProps {
  children: React.ReactNode;
}

export function PageDetails({ children }: PageDetailsProps) {
  return <Wrapper>{children}</Wrapper>;
}
