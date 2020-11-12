import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import ChartFamilySection from "../components/ChartFamilySection";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";

const siteDescription =
  "<p>Welcome to the Python Graph Gallery, a collection of hundreds of charts made with <code>Python</code>. Charts are organized in about 40 sections and always come with their associated reproducible code. They are mostly made with <code>Matplotlib</code> and <code>Seaborn</code> but other library like <code>Plotly</code> are sometimes used.</p>";

export default function Home(props) {
  return (
    <Layout title="Python Graph Gallery">
      <TitleAndDescription
        title="The Python Graph Gallery"
        description={siteDescription}
      />
      <Container>
        <ChartFamilySection chartFamily="distribution" />
        <ChartFamilySection chartFamily="correlation" />
        <ChartFamilySection chartFamily="ranking" />
        <ChartFamilySection chartFamily="partOfAWhole" />
        <ChartFamilySection chartFamily="evolution" />
        <ChartFamilySection chartFamily="map" />
        <ChartFamilySection chartFamily="flow" />
        <ChartFamilySection chartFamily="general" />
        <Contact />
      </Container>
    </Layout>
  );
}