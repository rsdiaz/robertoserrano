import { FollowCard } from "@/components"
import { PullRequest } from "@/components/PullRequest"

const PostFooter = () => (
  <footer className='mt-24'>
    <section className='mb-8'>
      <PullRequest />
    </section>
    <FollowCard />
  </footer>
)

export { PostFooter }