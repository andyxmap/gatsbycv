import * as React from 'react'
import { graphql,Link,PageProps } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'


const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
                      <h2>
              <Link to={`/projects/${node.frontmatter?.slug}`}>
                {node.frontmatter?.title}
              </Link>
            </h2>
          <p>Posted: {node.frontmatter?.date || "None"}</p>
          <p>{node.excerpt}</p>
        </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query BlogPage {
  allMdx(sort: {frontmatter: {date: ASC}}) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        slug
      }
      id
      excerpt
    }
  }
}
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage