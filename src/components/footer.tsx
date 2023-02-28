import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="explanation">
          <p>
            This is a statically generated{' '}
            <ExtLink href="https://nextjs.org">Next.js</ExtLink> site with a{' '}
            <ExtLink href="https://notion.so">Notion</ExtLink> powered blog that
            is deployed with <ExtLink href="https://vercel.com">Vercel</ExtLink>
            .
          </p>
        </div>
      </footer>
    </>
  )
}
