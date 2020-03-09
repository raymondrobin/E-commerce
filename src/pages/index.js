import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, StaticQuery } from "gatsby"
import Post from '../components/Post'
// import Shop from './shop'

export const IndexQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id 
          frontmatter {
            title 
            date
            author
            path
         
          }
          excerpt
        }
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="examples">
      <div className="example">
        <p className="hover hover-3">Welcome to the best balloon shop in the world!!!</p>
      </div>
    </div>
    <h1>Recent Sales</h1>
    <StaticQuery query={IndexQuery} render={data =>  {
      return ( 
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post 
            title={node.frontmatter.title}
            author={node.frontmatter.author}
            path={node.frontmatter.path}
            date={node.frontmatter.date}
            featuredImage={node.frontmatter.featuredImage}
            body={node.excerpt}
            />
          ))}
       </div>
      )  
    }}/>
  </Layout>
)



export default IndexPage
