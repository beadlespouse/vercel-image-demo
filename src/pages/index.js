import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby"


// markup
const IndexPage = ({ data }) => {
  return (
    <section>
      <h1>Demo of Gatsby Image and Vercel</h1>
      <GatsbyImage
        image={data.imageSharp.gatsbyImageData}
        alt={"artist image"}
        objectFit="contain"
        style={{ height: "380px" }}
      />
    </section>
  );
};

export const query = graphql`
  query Image {
    imageSharp {
      gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
    }
  }
`

export default IndexPage;
