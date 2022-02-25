import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostMeta } from "utils/api";
export { Post as default } from "./Post";
export { Post } from "./Post";

export interface MDXPost {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: PostMeta;
  }
  
export interface PostProps extends MDXPost {

}

