export type PostType = {
  id: string;
  title: string;
  content: string;
  author: string;
  createTime: string;
};

export type PostProps = {
  posts: PostType[];
};
