import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link,
  VStack,
  Icon,
  HStack,
  chakra,
  useColorModeValue,
  Stack,
  VisuallyHidden,
  Divider,
} from "@chakra-ui/react";
import { MdLockOutline } from "react-icons/md";
const KnifeGamePrivacy = () => {
  return (
    <>
      <Container maxW={"7xl"} p="12">
        <HStack>
          <Icon boxSize={"8"} as={MdLockOutline} />
          <Heading as="h1" marginTop="5" fontSize={"3xl"}>
            Privacy Policy for Knife Finger Game by Simplay Studio
          </Heading>
        </HStack>
        <Divider marginTop="5" />

        <VStack paddingTop="40px" spacing="4" alignItems="flex-start">
          <Text fontStyle="italic" color="gray.600">
            <strong>Last Updated:</strong> April 10, 2025
          </Text>

          <Text>
            This Privacy Policy applies to the mobile application{" "}
            <strong>Knife Finger Game</strong> (hereinafter referred to as "the
            App"), developed and operated by <strong>Simplay Studio</strong>{" "}
            (hereinafter referred to as "we," "us," or "our"), the legal entity
            responsible for the App as listed in the Google Play Store. We are
            committed to protecting your privacy and ensuring transparency about
            how your information is handled when you use the App. This policy
            explains our data practices in detail and applies to all users of
            the App.
          </Text>

          <Text>
            By using Knife Finger Game, you acknowledge and consent to the terms
            of this Privacy Policy.
          </Text>

          <Heading as="h2" fontSize="xl">
            1. Information We Collect
          </Heading>
          <Text>
            We do not directly collect personal information from you through the
            App. However, third-party service providers we use to operate and
            improve the App may collect certain data on our behalf.
          </Text>

          <Heading as="h3" fontSize="lg">
            1.1 Information Collected Automatically by Third Parties
          </Heading>
          <UnorderedList pl={4}>
            <ListItem>
              <strong>App Activity and Game Progress:</strong> Data about your
              interactions with the App, such as game progress (e.g., scores,
              levels completed in Classic, Audition, Timer, or Memory modes),
              session duration, and in-game actions.
            </ListItem>
            <ListItem>
              <strong>App Info and Performance:</strong> Crash logs and
              diagnostics data to help us identify and fix technical issues.
            </ListItem>
            <ListItem>
              <strong>Device or Other IDs:</strong> Information about your
              device, such as device name, operating system (e.g., Android
              version), browser type and language (if applicable), IP address,
              and mobile device identifiers (e.g., device ID, advertising ID,
              MAC address, IMEI).
            </ListItem>
            <ListItem>
              <strong>Analytics Data:</strong> We use third-party analytics
              tools, such as Unity 3D, to collect anonymized data about App
              usage. This includes metrics like the number of users, session
              lengths, and feature usage to help us improve the App.
            </ListItem>
          </UnorderedList>

          <Heading as="h3" fontSize="lg">
            1.2 Information You Provide Directly
          </Heading>
          <UnorderedList pl={4}>
            <ListItem>
              <strong>Support Communications:</strong> If you contact us
              directly (e.g., via email at{" "}
              <Link
                href="mailto:contact@simplaystudio.com"
                color="blue.500"
                textDecoration="underline"
              >
                contact@simplaystudio.com
              </Link>{" "}
              for support), we may collect the information you provide, such as
              your email address and any details included in your message.{" "}
            </ListItem>
          </UnorderedList>

          <Heading as="h3" fontSize="lg">
            1.3 Information We Do Not Collect
          </Heading>
          <UnorderedList pl={4}>
            <ListItem>
              The App does not collect sensitive personal information such as
              your location, contacts, photos, or financial data.
            </ListItem>
            <ListItem>
              We do not require you to create an account or provide personal
              information like your name, email address, or phone number to use
              the App.{" "}
            </ListItem>
          </UnorderedList>

          <Heading as="h3" fontSize="lg">
            1.4 In-App Purchases
          </Heading>
          <Text>
            The App offers in-app purchases (e.g., items priced between ₫69,000
            - ₫115,000). These transactions are processed by the Google Play
            Store, and we do not collect or store your payment information.
            Google Play’s privacy policy applies to these transactions.
          </Text>

          <Heading as="h2" fontSize="xl" pt={6}>
            2. How We Use Your Information
          </Heading>
          <Text>
            We and our third-party service providers use the information
            collected for the following purposes:
          </Text>
          <UnorderedList pl={4}>
            <ListItem>
              <strong>To Provide and Improve:</strong>App activity and game
              progress data are used to save your progress and ensure the App
              functions properly across its modes (Classic, Audition, Timer,
              Memory). Crash logs and diagnostics help us identify and fix bugs
              to improve the App’s performance.
            </ListItem>
            <ListItem>
              <strong>To Analyze Usage:</strong> Analytics data (via Unity 3D)
              helps us understand how users interact with the App, allowing us
              to enhance its design, features, and user experience.
            </ListItem>
            <ListItem>
              <strong>To Support Purchases:</strong> We use device information
              to facilitate in-app purchases through the Google Play Store.
            </ListItem>
            <ListItem>
              <strong>To Communicate:</strong> If you contact us, we use your
              provided information (e.g., email address) to respond to your
              inquiries or provide support.
            </ListItem>
            <ListItem>
              <strong>To Comply with Law:</strong> : We may use your information
              to comply with applicable laws, regulations, or legal requests.
            </ListItem>
          </UnorderedList>
          <Text>
            <strong>Note:</strong> The app does not display ads. If that
            changes, this policy will be updated.
          </Text>

          <Heading as="h2" fontSize="xl" pt={6}>
            3. How We Share Your Information
          </Heading>
          <Text>
            We do not sell, trade, or rent your information to third parties.
            However, we may share your information in the following ways:
          </Text>
          <UnorderedList pl={4}>
            <ListItem>
              <strong>With Third-Party Service Providers:</strong> We share data
              with third-party providers that help us operate the App, such as:
              <UnorderedList pl={4} mt={2}>
                <ListItem>
                  <strong>Unity 3D:</strong> For analytics purposes, Unity
                  collects app activity, device information, and performance
                  data (e.g., crash logs) to help us improve the App.
                </ListItem>
                <ListItem>
                  <strong>Google Play Services:</strong> For in-app purchases,
                  Google Play may collect device information to process
                  transactions.
                </ListItem>
                <ListItem>
                  These providers are contractually obligated to protect your
                  data and use it only for the purposes we specify.
                </ListItem>
              </UnorderedList>
            </ListItem>

            <ListItem>
              <strong>For Legal Reasons:</strong> We may disclose your
              information if required by law, such as in response to a court
              order, subpoena, or government request.
            </ListItem>

            <ListItem>
              <strong>In Case of Business Transfers:</strong> If Simplay Studio
              is involved in a merger, acquisition, or sale of assets, your
              information may be transferred to the new entity, subject to this
              Privacy Policy.
            </ListItem>
          </UnorderedList>

          <Heading as="h2" fontSize="xl" pt={6}>
            4. Data Retention and Security
          </Heading>

          <UnorderedList pl={4}>
            <ListItem>
              <strong>Retention:</strong> We retain data only as long as
              necessary to fulfill the purposes outlined in this Privacy Policy.
              For example:
              <UnorderedList pl={4} mt={2}>
                <ListItem>
                  Analytics data collected by Unity 3D is retained for up to 14
                  months.
                </ListItem>
                <ListItem>
                  Support-related communications (e.g., emails) are retained for
                  up to 2 years.
                </ListItem>
              </UnorderedList>
              After these periods, we delete or anonymize the data.
            </ListItem>

            <ListItem>
              <strong>Security:</strong> Data is encrypted in transit to protect
              it from unauthorized access during transmission. We implement
              reasonable technical and organizational measures to safeguard your
              information. However, no system is completely secure, and we
              cannot guarantee the absolute security of your data.
            </ListItem>
          </UnorderedList>

          <Text pt={2}>
            <strong>Note:</strong> We do not provide a mechanism for you to
            request data deletion because the App does not collect personally
            identifiable information. Data collected by third parties (e.g.,
            Unity) is managed according to their retention policies.
          </Text>

          <Heading as="h2" fontSize="xl" pt={6}>
            5. Your Choices and Rights
          </Heading>
          <UnorderedList pl={4}>
            <ListItem>
              <strong>In-App Purchases:</strong> You can choose whether to make
              in-app purchases. These are optional and processed by Google Play.
            </ListItem>
            <ListItem>
              <strong>Analytics:</strong> The App uses Unity 3D for analytics,
              which collects anonymized data. You cannot opt out of this data
              collection, as it is necessary for the App’s operation and
              improvement. However, no personally identifiable information is
              collected.
            </ListItem>
            <ListItem>
              <strong>EU/EEA Residents (GDPR):</strong> If you are in the
              European Union or European Economic Area, you have rights under
              the General Data Protection Regulation (GDPR), including the right
              to access, rectify, or erase your data, and the right to object to
              or restrict processing. Since we do not collect personally
              identifiable information, we may not have any data to provide or
              delete. Contact us for assistance.
            </ListItem>
            <ListItem>
              <strong>California Residents (CCPA):</strong> If you are a
              California resident, you have rights under the California Consumer
              Privacy Act (CCPA), including the right to know what data we
              collect and to request deletion. Since we do not collect
              personally identifiable information, we may not have any data to
              provide or delete. Contact us for assistance.
            </ListItem>
          </UnorderedList>
          <Text pt={2}>
            <strong>Note:</strong> The App does not currently serve ads. If we
            introduce ads in the future, we will provide options to opt out of
            personalized ads through your device settings.
          </Text>

          <Heading as="h2" fontSize="xl" pt={6}>
            6. Children’s Privacy
          </Heading>
          <Text>
            Knife Finger Game is rated for ages 3+ on the Google Play Store, but
            it is not specifically designed to target children under the age of
            13 (or 16 in the EU/EEA). We do not knowingly collect personal
            information from children under this age. The App does not require
            users to provide personal information, and the data collected by
            third parties (e.g., Unity 3D) is anonymized and used solely for
            analytics and performance improvement.
          </Text>
          <Text>
            If we learn that we have collected personal information from a child
            under 13 (or 16 in the EU/EEA) without parental consent, we will
            delete it promptly. If you believe a child under this age has
            provided us with personal information, please contact us at{" "}
            <Link
              href="mailto:contact@simplaystudio.com"
              color="blue.500"
              textDecoration="underline"
            >
              contact@simplaystudio.com
            </Link>
            .
          </Text>

          <Heading as="h2" fontSize="xl" pt={6}>
            7. Responsibilities and Safety Disclaimer
          </Heading>
          <Text>
            Knife Finger Game is a virtual simulation of the classic "Five
            Finger Fillet" game, designed for entertainment purposes only. The
            App challenges your precision, reflexes, and memory through various
            game modes (Classic, Audition, Timer, Memory). However, we strongly
            advise against attempting this game in real life with a knife or any
            sharp object.
          </Text>
          <UnorderedList pl={4}>
            <ListItem>
              <strong>User Responsibility:</strong> You are responsible for your
              own health and safety. We do not take responsibility for any harm
              to your mental or physical health caused by playing the App or
              attempting the game in real life.
            </ListItem>
            <ListItem>
              <strong>Safety Warning:</strong> Do not attempt to stab between
              your fingers or engage in any dangerous activities in real life.
              We assume no responsibility for any injuries caused by attempting
              this game outside the virtual world.
            </ListItem>
          </UnorderedList>

          <Heading as="h2" fontSize="xl" pt={6}>
            8. Changes to This Privacy Policy
          </Heading>
          <Text>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will notify you
            of significant changes by posting the updated policy on this page
            and updating the "Last Updated" date at the top. We encourage you to
            review this policy periodically.
          </Text>
          <Link
            href="https://simplaystudio.com/knifegame/privacy"
            color="blue.500"
            isExternal
          >
            https://simplaystudio.com/knifegame/privacy
          </Link>

          <Heading as="h2" fontSize="xl" pt={6}>
            9. Contact Us
          </Heading>
          <Text>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us at:
          </Text>
          <UnorderedList pl={4}>
            <ListItem>
              <strong>Email:</strong>{" "}
              <Link
                href="mailto:contact@simplaystudio.com"
                color="blue.500"
                textDecoration="underline"
              >
                contact@simplaystudio.com
              </Link>
            </ListItem>
          </UnorderedList>
          <Text>We will respond to your inquiries as soon as possible.</Text>
        </VStack>
      </Container>
    </>
  );
};

export default KnifeGamePrivacy;
