import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const gridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
};

// markup
const IndexPage = ({ data }) => {
  return (
    <section>
      <h1>Demo of Gatsby Image and Vercel</h1>
      <p>redeploy test</p>
      <div style={gridStyles}>
        {data.allAirtable.edges.map((img) => {
          return (
            <GatsbyImage
              image={img.node.data.Image.localFiles[0].childImageSharp.gatsbyImageData}
              objectFit="contain"
            />
          );
        })}
      </div>
    </section>
  );
};

export const query = graphql`
  query Images {
    allAirtable {
      edges {
        node {
          data {
            Image {
              localFiles {
                childImageSharp {
                  gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
