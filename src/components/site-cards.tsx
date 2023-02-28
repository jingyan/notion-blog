import Lightning from './svgs/lightning'
import Jamstack from './svgs/jamstack'
import Wifi from './svgs/wifi'
import Lighthouse from './svgs/lighthouse'
import Plus from './svgs/plus'
import Notion from './svgs/notion'
import Edit from './svgs/edit'
import Scroll from './svgs/scroll'

const sites = [
  {
    text: 'NovelAI',
    url: 'https://novelai.net/',
    desc: 'AI故事写作, 二次元图片生成',
    icon: Lightning,
  },
  {
    text: 'Midjourney',
    url: 'https://midjourney.com/',
    desc: 'AI绘图工具',
    icon: Jamstack,
  },
  {
    text: 'DeepAI Text2Img',
    url: 'https://deepai.org/machine-learning-model/text2img',
    desc: 'DeepAI 图片生成工具',
    icon: Lighthouse,
  },
  {
    text: 'Stable Diffusion',
    url: 'https://stablediffusionweb.com/',
    desc: 'AI绘图工具',
    icon: Wifi,
  },
  {
    text: 'PlaygroundAI',
    url: 'https://playgroundai.com/',
    desc: 'AI绘图工具, 基于Stable Diffusion',
    icon: Scroll,
  },
  {
    text: 'DALL-E 2',
    url: 'https://openai.com/dall-e-2/',
    desc: 'OpenAI的绘图模型',
    icon: Notion,
  },
  {
    text: '文心一格',
    url: 'https://yige.baidu.com/',
    desc: 'AI绘图工具, 百度出品',
    icon: Edit,
  },
  {
    text: '造梦日记',
    url: 'https://printidea.art/',
    desc: 'AI绘图工具, 西湖心辰',
    icon: Plus,
  },
  {
    text: 'CIVITAI',
    url: 'https://civitai.com/',
    desc: 'AI图片交流社区,C站',
    icon: Plus,
  },
  {
    text: 'AITUTS',
    url: 'https://aituts.com/',
    desc: 'AI图片交流社区,C站',
    icon: Plus,
  },
]

const SiteCards = () => (
  <div className="features">
    {sites.map(({ text, url, desc, icon: Icon }) => (
      <div className="feature" key={text}>
        <a href={url}>
          <h2>{text}</h2>
        </a>
        <p>{desc}</p>
        <h4>
          <a href={url}>{url}</a>
        </h4>
      </div>
    ))}
  </div>
)

export default SiteCards
