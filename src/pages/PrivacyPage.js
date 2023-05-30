import React from "react";
import {
  Container,
  Heading,
  Divider,
  Text,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { MdPrivacyTip } from "react-icons/md";
const PrivacyPage = () => {
  return (
    <>
      <Container maxW={"7xl"} p="12">
        {/* <Heading as="h1">Simplay Studio</Heading> */}
        <HStack>
          <Icon boxSize={"6"} as={MdPrivacyTip} />
          <Heading as="h2" marginTop="5" fontSize={"4xl"}>
            Privacy Policy
          </Heading>
        </HStack>
        {/* Agreement */}
        <Divider marginTop="5" />
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h3" fontSize={"2xl"}>
            Agreement
          </Heading>
          <Text as="p" fontSize="lg">
            By using our games, you acknowledge and consent to the terms of this
            privacy policy.
          </Text>
        </VStack>
        {/* Collecting Data */}
        <Divider marginTop="3" />
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h3" fontSize={"2xl"}>
            Collecting data
          </Heading>
          <Text as="p" fontSize="lg">
            To operate and manage our services we need to use third party
            service providers. The type of information that might be collected
            by them includes:
          </Text>
          <Text as="p" fontSize="lg">
            * Data about your game progress
          </Text>
          <Text as="p" fontSize="lg">
            * Data about your device, such as device name and operating system,
            browser type and language * Your IP addresses, and mobile device
            identifiers (such as your device ID, advertising ID, MAC address,
            IMEI)
          </Text>
          <Text as="p" fontSize="lg" textDecoration={"underline"}>
            Advertising Campaigns
          </Text>
          <Text as={"p"}>
            The data and information may be used for advertising purposes, such
            as targeting advertising campaigns based on the sites visited, a
            practice that is currently widely used and used in the market. In
            this way the advertising content becomes more direct and attractive
            to your tastes and interest. It should be noted that your data and
            information may only be used for the exclusive handling of the ads
            and that in no case will be sold or made available in full to third
            parties.
          </Text>
          <Text as="p" fontSize="lg" textDecoration={"underline"}>
            Analytics
          </Text>
          <Text as={"p"}>
            Our apps may also contain APIs from analytics third parties such as
            Unity 3D.
          </Text>
        </VStack>
        {/* Personal information */}
        <Divider marginTop="3" />
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h3" fontSize={"2xl"}>
            Personal information
          </Heading>
          <Text as={"p"}>
            We will not sell, trade, rent or disclose any of the personal
            information you provide to us for any reason, without your prior
            consent. Otherwise, your Personal Information will only be disclosed
            where required or allowable by law.
          </Text>
        </VStack>
        {/* Responsibilities */}
        <Divider marginTop="3" />
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h3" fontSize={"2xl"}>
            Responsibilities
          </Heading>
          <Text as={"p"}>
            You are the one who controls and takes care of your health. We don't
            take responsibility for any harm to your mental or physical health
            by playing our game or trying at home.
          </Text>
        </VStack>
        {/* Responsibilities */}
        <Divider marginTop="3" />
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h3" fontSize={"2xl"}>
            Privacy updates
          </Heading>
          <Text as={"p"}>
            This Policy may change from time to time. We will always keep this
            up to date so that you know what information we will collect from
            you, how we may use it.
          </Text>
        </VStack>
        {/* Questions */}
        <Divider marginTop="3" />
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h3" fontSize={"2xl"}>
            Questions
          </Heading>
          <HStack>
            <Text as={"p"}>
              If you have any questions about this Policy, please contact us at
            </Text>
            <Text fontSize={"md"} fontWeight={"bold"}>
              <a
                style={{
                  textDecoration: "underline",
                }}
                href="mailto:bluedotsofts@gmail.com"
              >
                Our Mail
              </a>
            </Text>
          </HStack>
        </VStack>
      </Container>
    </>
  );
};

export default PrivacyPage;
