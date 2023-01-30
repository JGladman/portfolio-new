import { Center, Stack } from "@chakra-ui/react"
import React from "react"
import Project from "../project"

import seekr from "../../public/seekr.png"
import cheffle from "../../public/cheffle.png"
import portfolio from "../../public/portfolio.png"

const Projects = () => {
  const cheffleDesc =
    "Allows users to create and store recipes. Additionally allows users to track the contents of their fridges. Recipes can be filtered based on contents of fridge. Developed as solo developer, planned stretch goals can be viewed on Github"
  const cheffleFrontend = ["Javascript", "React", "Material UI", "Next.js"]
  const cheffleBackend = ["Python", "Django", "MongoDB"]

  const portfolioDesc =
    "Website created to present my projects and experience. Utilizing the Static Site Generation pattern from Next.js. Designed and developed solo."
  const portfolioFrontend = ["Javascript", "React", "Chakra UI", "Next.js"]

  const seekrDesc =
    "Allows users to track jobs they have applied to. Stores information about company, job title, interview dates and more. Created in 36 hours for QHacks 2021. Participated as Full-Stack Developer and Team Lead."
  const seekrFrontend = ["React", "Redux", "Tailwind CSS"]
  const seekrBackend = ["Node.js", "Express", "MongoDB"]

  return (
    <Center m="2.5rem">
      <Stack direction="column" color="white" spacing={35}>
        <Project
          img={cheffle}
          title="Cheffle"
          description={cheffleDesc}
          frontend={cheffleFrontend}
          backend={cheffleBackend}
          frontendGithub="https://github.com/JGladman/Cheffle-Client"
          backendGithub="https://github.com/JGladman/Cheffle-API"
          // linkText="Visit Website"
          // link="https://drive.google.com/file/d/1p5moAiHou_mAUeCdkJgXnT1CY7LaKvHq/view"
        />

        <Project
          img={portfolio}
          title="Portfolio"
          description={portfolioDesc}
          frontend={portfolioFrontend}
          frontendGithub="https://github.com/JGladman/portfolio"
          linkText="Visit Website"
          link="https://jgladman.tech"
        />

        <Project
          img={seekr}
          title="Job Seekr"
          description={seekrDesc}
          frontend={seekrFrontend}
          backend={seekrBackend}
          frontendGithub="https://github.com/JGladman/seekr_client"
          backendGithub="https://github.com/JGladman/seekr_server"
          // linkText="Visit Website"
          // link="https://drive.google.com/file/d/1p5moAiHou_mAUeCdkJgXnT1CY7LaKvHq/view"
        />
      </Stack>
    </Center>
  )
}

export default Projects
