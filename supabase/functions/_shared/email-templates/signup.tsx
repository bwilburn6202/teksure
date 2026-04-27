/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface SignupEmailProps {
  siteName: string
  siteUrl: string
  recipient: string
  confirmationUrl: string
}

export const SignupEmail = ({
  siteName,
  siteUrl,
  recipient,
  confirmationUrl,
}: SignupEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Confirm your email for {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={logo}>TekSure</Heading>
        <Heading style={h1}>Welcome aboard! 👋</Heading>
        <Text style={text}>
          Thanks for signing up for{' '}
          <Link href={siteUrl} style={link}>
            <strong>{siteName}</strong>
          </Link>
          — we're here to make tech simple.
        </Text>
        <Text style={text}>
          Please confirm your email address (
          <Link href={`mailto:${recipient}`} style={link}>
            {recipient}
          </Link>
          ) by clicking the button below:
        </Text>
        <Button style={button} href={confirmationUrl}>
          Confirm My Email
        </Button>
        <Text style={footer}>
          If you didn't create an account, you can safely ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default SignupEmail

const main = { backgroundColor: '#ffffff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }
const container = { padding: '32px 24px', maxWidth: '520px', margin: '0 auto' }
const logo = { fontSize: '24px', fontWeight: 'bold' as const, color: 'hsl(221, 83%, 53%)', margin: '0 0 28px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: 'hsl(0, 0%, 9%)', margin: '0 0 12px' }
const text = { fontSize: '15px', color: 'hsl(220, 13%, 33%)', lineHeight: '1.6', margin: '0 0 24px' }
const link = { color: 'hsl(221, 83%, 53%)', textDecoration: 'underline' }
const button = {
  backgroundColor: 'hsl(221, 83%, 53%)',
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: '500' as const,
  borderRadius: '0.75rem',
  padding: '12px 24px',
  textDecoration: 'none',
}
const footer = { fontSize: '13px', color: '#999999', margin: '30px 0 0' }
