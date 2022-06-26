import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components'
import { GradientText, Section } from '@/components';

type RecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const LastPosts = (props: RecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Posts</GradientText>
        </div>

        <div className="text-sm">
          <a href="/posts">View all Posts →</a>
        </div>
      </div>
    }
  >
    {/* <BlogGallery postList={props.postList} /> */}
  </Section>
);

export { LastPosts };