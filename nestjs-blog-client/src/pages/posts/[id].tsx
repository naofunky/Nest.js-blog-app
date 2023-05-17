import { getAllPosts, getPostById } from 'src/hooks/api';
import styles from 'src/styles/Home.module.css';
import { PostType, SecondPostProps } from 'src/types/type';

export async function getStaticProps({ params }: any) {
  const post: PostType = await getPostById(params.id);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post: PostType) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

const Post = ({ post }: SecondPostProps) => {
  return (
    <>
      <div className={styles.container} key={post.id}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.content}>{post.content}</p>
        <p className={styles.meta}>Author: {post.author}</p>
        <p className={styles.meta}>Created at: {post.createTime}</p>
      </div>
    </>
  );
};

export default Post;
