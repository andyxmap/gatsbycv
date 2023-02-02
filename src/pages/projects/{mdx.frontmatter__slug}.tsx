import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql,PageProps } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const BlogPost = ({data,children}:PageProps) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      {image && <GatsbyImage
      image={image}
      alt=""
    />}
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image
      }
    }
}`

export default BlogPost