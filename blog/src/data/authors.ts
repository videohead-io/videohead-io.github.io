export interface Props {
  name: string;
  id: string;
  url: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Rosa Castillo",
    id: "rosa-castillo",
    url: "https://www.linkedin.com/in/rosa-eva-castillo"
  },
];
