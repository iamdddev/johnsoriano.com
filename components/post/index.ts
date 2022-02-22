export { Post as default } from "./Post";
export { Post } from "./Post";

export interface MetaProps {
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

export interface PostProps {
  meta: MetaProps;
}
