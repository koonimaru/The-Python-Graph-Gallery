import "./basic.css";

import React from "react";
import { graphql } from "gatsby";
import PropTypes from 'prop-types';

import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import TitleAndDescription from "../components/TitleAndDescription";
import ChartFamilySection from "../components/ChartFamilySection";
import Contact from "../components/Contact";
import Spacing from "../components/Spacing";

export default function Template({ data }) {
  const {
    title,
    description,
    family,
    chartType,
    slug
  } = data.jupyterNotebook.metadata;
  return (
    <Layout title={title} isTocEnabled>

      <TitleAndDescription
        title={title}
        description={description}
        chartType={chartType}
      />

      {/* Blog content */}
      <Container>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.jupyterNotebook.html }}
        />
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <ChartFamilySection chartFamily={family} hasGreyBackground />
        </Container>
      </div>

      <Spacing />

      <Container>
        <Contact pageSlug={slug} isNotebook />
      </Container>

      <Spacing />

    </Layout>
  );
}

Template.propTypes = {
  data: PropTypes.object
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    jupyterNotebook(fields: { slug: { eq: $slug } }) {
      html
      metadata {
        title
        description
        seoDescription
        family
        chartType
        keywords
        slug
      }
    }
  }
`;
