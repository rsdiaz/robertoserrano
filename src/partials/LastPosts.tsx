import type { MarkdownInstance } from 'astro';
import { GradientText, PostCard, Section } from '@/components';
import { Post } from '@/components/types/Post';
import { BlogGallery } from '@/components/BlogGallery';

type RecentPostsProps = {
  postList: MarkdownInstance<Post>[];
};

const LastPosts = (props: RecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Últimos <GradientText>Posts</GradientText>
        </div>

        <div className="text-sm">
          <a href="/posts">Ver todos los posts →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { LastPosts };