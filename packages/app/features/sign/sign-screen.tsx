import React from 'react'
import { Button, Input, XStack, YStack, Text, H3 } from '@my/ui'
import { useLink } from 'solito/link'

export function SignInScreen() {
  const goToHome = useLink({
    href: '/',
  })
  return (
    <YStack space flex={1} backgroundColor="$gray1" justifyContent="center" p="$6">
      <H3>WaitToFit</H3>

      <Input placeholder="Email" keyboardType="email-address" returnKeyType="next" />
      <Input placeholder="Password" secureTextEntry={true} />

      <Button chromeless {...goToHome}>
        Sign In
      </Button>
      <Button chromeless>Recover Password</Button>
    </YStack>
  )
}
