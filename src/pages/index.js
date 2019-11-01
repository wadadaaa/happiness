import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const advices = data.allContentfulAdvice.edges.map((edge) => edge.node);
  const image = data.allContentfulMainImage.edges.map((edge) => edge.node);
  // const conclusion = data.allContentfulConclusion.edges.map((edge) => edge.node);
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ marginBottom: `1.45rem` }}>
        <div className="headLiner" style={{float:`right`}}>
        <p style={{backgroundColor:'#ff5678', width: `415px`, padding: `15px`}}>Быстрый чекап, из на научных исследований</p>
          <img src={image[0].pic.file.url} alt="img" width='300px' height='300px' style={{margin: `50px`}}/>
          </div>
        <ul>
          {advices.map((advice, index) => {
            return <li key={index}>{advice.description}</li>
          })}</ul>
        {/* <div>{conclusion[0].childContentfulConclusionDescriptionRichTextNode.description}</div> */}
      </div>
    </Layout>
  );
}

export default IndexPage
export const indexPageQuery = graphql`
  query IndexPageQuery {
    allContentfulMainImage {
      edges {
        node {
          pic {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulConclusion {
      edges {
        node {
          childContentfulConclusionDescriptionRichTextNode {
            description
          }
        }
      }
    }
    allContentfulAdvice {
      edges {
        node {
          description
        }
      }
    }
  }
`