import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

//只会跑在服务器端
//Next.js will pre-render this page at build time using the props returned by getStaticProps.
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  console.log(postData);
  return {
    props: {
      postData
    }
  }
}

//只会跑在服务器端
//If a page has dynamic routes (documentation) and uses getStaticProps 
//it needs to define a list of paths that have to be rendered to HTML at build time (in production scenario).
export async function getStaticPaths() {
  const paths = getAllPostIds()
  console.log(paths);
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}