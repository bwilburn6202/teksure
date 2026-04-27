/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface MagicLinkEmailProps {
  siteName: string
  confirmationUrl: string
}

export const MagicLinkEmail = ({
  siteName,
  confirmationUrl,
}: MagicLinkEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your login link for {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={logo}>TekSure</Heading>
        <Heading style={h1}>Your login link</Heading>
        <Text style={text}>
          Click the button below to log in to {siteName}. This link will expire
          shortly.
        </Text>
        <Button style={button} href={confirmationUrl}>
          Log In
        </Button>
        <Text style={footer}>
          If you didn't request this link, you can safely ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default MagicLinkEmail

const main = { backgroundColor: '#ffffff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }
const container = { padding: '32px 24px', maxWidth: '520px', margin: '0 auto' }
const logo = { fontSize: '24px', fontWeight: 'bold' as const, color: 'hsl(221, 83%, 53%)', margin: '0 0 28px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: 'hsl(0, 0%, 9%)', margin: '0 0 12px' }
const text = { fontSize: '15px', color: 'hsl(220, 13%, 33%)', lineHeight: '1.6', margin: '0 0 24px' }
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
