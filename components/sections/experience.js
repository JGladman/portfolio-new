import {
  Text,
  Stack,
  Spacer,
  Center,
  Heading,
  Flex,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react"
import React from "react"
import { ChevronRightIcon } from "@chakra-ui/icons"

const Experience = ({ fixed }) => {
  // TODO: Turn these cards into components
  return (
    <Center>
      <Stack direction="column" spacing={35} m="2.5rem">
        <Stack direction="column" spacing={10}>
          <Stack
            className="card"
            color="white"
            p={10}
            boxShadow="dark-lg"
            rounded="2xl"
            bg="gray.700"
          >
            <Heading>Simulation Team Lead</Heading>
            <Heading fontSize="lg">Queen's AutoDrive</Heading>
            <Flex>
              <Text>September 2021 - Present</Text>
              <Spacer />
              <Text>Kingston, ON</Text>
            </Flex>
            <List w={{ base: "auto", lg: "650px" }}>
              <ListItem mt="20px">
                <ListIcon as={ChevronRightIcon} />
                Led team responsible for developing an autonomous vehicle
                simulation environment to test algorithms before competition
                using MATLAB and Simulink.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Managed AWS EC2 instances across multiple subteams to provide
                access to high performance computers for members training AI
                models or running simulations.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Planned roadmap and timelines for competition tasks such as
                object avoidance and route planning.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Led team of 15 members by delegating tasks, performing code
                reviews, and leading weekly meetings.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Managed team using agile concepts such as sprints, weekly
                stand-ups, and small teams for subtasks.
              </ListItem>
            </List>
          </Stack>
          <Stack
            className="card"
            color="white"
            p={10}
            boxShadow="dark-lg"
            rounded="2xl"
            bg="gray.700"
          >
            <Heading>5G RAN System Developer</Heading>
            <Heading fontSize="lg">Ericsson</Heading>
            <Flex>
              <Text>May 2021 - Aug 2022</Text>
              <Spacer />
              <Text>Ottawa, ON</Text>
            </Flex>
            <List w={{ base: "auto", lg: "650px" }}>
              <ListItem mt="20px">
                <ListIcon as={ChevronRightIcon} />
                Developed various software tools used for 5G radio access
                network simulation using Java and Jenkins, such as the key
                performance indicator testing framework and user equipment
                location tracking tool.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Collaborated with a team that developed a web application used
                to run simulation tasks.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Single-handedly re-engineered outdated frontend of web
                application utilizing React.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Implemented database and API to store results of simulations
                using MongoDB, Node.JS and Express.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Project delivery resulted in increased performance, scalability,
                and usability of the web application.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Presented web application frontend enhancements and database
                implementation to over 200 engineers.
              </ListItem>
            </List>
          </Stack>
          <Stack
            className="card"
            color="white"
            p={10}
            boxShadow="dark-lg"
            rounded="2xl"
            bg="gray.700"
          >
            <Heading>Full-Stack Developer</Heading>
            <Heading fontSize="lg">Royal York Property Management</Heading>
            <Flex>
              <Text>May 2020 - Aug 2020</Text>
              <Spacer />
              <Text>Toronto, ON</Text>
            </Flex>
            <List w={{ base: "auto", lg: "650px" }}>
              <ListItem mt="20px">
                <ListIcon as={ChevronRightIcon} />
                Developed application which streamlines the process of various
                property needs for tenants and landlords.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Tenants indicated properties of interest and requested services
                from real estate agents similarly to Uber.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Landlords could view information for prospective tenants and
                select the most suitable option.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Backend developed using Typescript, Apollo Server, MySQL,
                Node.JS and Express.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Frontend developed using Ionic, React, and Apollo Client.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Application deployed and usable on the company website.
              </ListItem>
            </List>
          </Stack>
          <Stack
            className="card"
            color="white"
            p={10}
            boxShadow="dark-lg"
            rounded="2xl"
            bg="gray.700"
          >
            <Heading>Android Developer</Heading>
            <Heading fontSize="lg">Betalab</Heading>
            <Flex>
              <Text>May 2019 - Aug 2020</Text>
              <Spacer />
              <Text>Kingston, ON</Text>
            </Flex>
            <List w={{ base: "auto", lg: "650px" }}>
              <ListItem mt="20px">
                <ListIcon as={ChevronRightIcon} />
                Developed native Android applications for various clients under
                contract using Kotlin.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Delivered application which allows students to find houses
                fitting their customized profiles.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Led development of an application that managed logistics for
                competition hosted by Queen’s University.
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={ChevronRightIcon} />
                Applications deployed to Google Play Store with hundreds of
                downloads.
              </ListItem>
            </List>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  )
}

export default Experience
