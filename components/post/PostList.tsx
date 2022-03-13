import Link from "next/link";
import React from "react";
import { PostListProps } from ".";

export const PostList: React.FC<PostListProps> = ({ posts }): React.ReactElement => {
  return (
    <div className="space-y-8">
      {posts.map((post) => {
        return (
          <div key={post.slug}>
            <h2 className="text-lg font-semibold text-pink-500">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className="text-slate-500 font-thin leading-normal dark:text-slate-50 font-sans">{post.excerpt}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
