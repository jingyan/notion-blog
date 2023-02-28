import Header from '../components/header'
import ExtLink from '../components/ext-link'
import SiteCards from '../components/site-cards'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>AIGC网址网址导航</h1>
        <h2>
          有用的AIGC网址{' '}
          <ExtLink
            href="https://github.com/vercel/next.js/issues/9524"
            className="dotted"
            style={{ color: 'inherit' }}
          >
            SSG
          </ExtLink>
        </h2>

        <SiteCards />
      </div>
    </>
  )
}
