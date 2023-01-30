import Head from "next/head"
import { Box, Flex, Hide } from "@chakra-ui/react"
import Navbar from "../components/navbar"
import Section from "../components/section"
import HomeSec from "../components/sections/home"
import About from "../components/sections/about"
import Projects from "../components/sections/projects"
import Experience from "../components/sections/experience"
import Contact from "../components/sections/contact"
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hide below="md">
          <Navbar />
        </Hide>
        <Flex ml={{ base: "0px", md: "200px" }} direction="column">
          <Section title="Home" element="home">
            <HomeSec />
          </Section>
          <Section title="About Me" element="about">
            <About />
          </Section>
          <Section title="Projects" element="projects">
            <Projects />
          </Section>
          <Section title="Experience" element="experience">
            <Experience />
          </Section>
          <Section title="Contact" element="contact">
            <Contact />
          </Section>
        </Flex>
      </main>
    </>
  )
}
