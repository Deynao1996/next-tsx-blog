import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text
} from '@react-email/components'
import * as React from 'react'

interface VerifyEmailProps {
  email: string
  verifyLink: string
}

export const VerifyEmail = ({ email, verifyLink }: VerifyEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Agency Blog - Verify Your Email Address.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hi {email},</Text>
        <Text style={paragraph}>
          Welcome to Agency Blog, your go-to platform for all things
          agency-related, from insightful articles to invaluable resources to
          supercharge your agency's growth.
        </Text>
        <Text style={paragraph}>
          To unlock the full potential of Agency Blog and access exclusive
          content, we kindly ask you to verify your email address. Simply click
          the button below to complete the verification process:
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={verifyLink}>
            Verify my email
          </Button>
        </Section>
        <Text style={paragraph}>
          Once verified, you'll gain unrestricted access to a wealth of
          resources tailored to elevate your agency's success.
        </Text>
        <Text style={paragraph}>
          Best regards,
          <br />
          The Agency Blog Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
)

export default VerifyEmail

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px'
}

const logo = {
  margin: '0 auto'
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px'
}

const btnContainer = {
  textAlign: 'center' as const
}

const button = {
  backgroundColor: '#6d28d9',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px'
}

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0'
}

const footer = {
  color: '#8898aa',
  fontSize: '12px'
}
