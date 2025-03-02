import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Header from "../components/Header/Header";
import Features from "../components/Features/Features";
import Pricing from "../components/Pricing/Pricing";
import Contributors from "../components/Contributors/Contributors";
import FloatingBackground from "../components/FloatingBackground/FloatingBackground";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (


<Header/>


  );
}
