import React from "react"
import Layout from "../components/layout"
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
        <p style={{backgroundColor:'#ff5678', width: `240px`, padding: `15px`, position: `relative`, left:`80px`}}>Быстрый чекап от науки</p>
          <img src={image[0].pic.file.url} alt="img" width='300px' height='300px' style={{margin: `50px`}}/>
          </div>
        <ul>
          {advices.map((advice, index) => {
            return <li key={index}>{advice.description}</li>
          })}</ul>
        <p style={{font: `italic`}}>ТИПА ИТОГИ.</p>
        <p><b>Cтрайк из всех пунктов?</b> -  <span role="img" aria-label="rocket">🚀</span> поздравляю, осознанный счастливчик!</p>
        <p><b>Меньше трети пунктов?</b> -  <span role="img" aria-label="hammer">🔨</span> теперь знаешь, над чем работать!</p>
        <p><b>Вроде все выполняешь, но настроение не оч?</b> -  <span role="img" aria-label="sos">🆘</span> возможно, тебе нужна помощь психолога.</p>
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