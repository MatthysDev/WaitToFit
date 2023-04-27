import {
  Anchor,
  Button,
  H1,
  Paragraph,
  ScrollView,
  Separator,
  Sheet,
  XStack,
  YStack,
  useToast,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import { palette } from '@my/ui/src/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/WaitToFitUser',
  })
  const linkProps2 = useLink({
    href: '/sign',
  })
  const { top } = useSafeAreaInsets()

  return (
    <YStack backgroundColor={palette.colors.lapis} f={1} ai="center" space>
      <H1 paddingTop={top} color={palette.colors.white}>
        WaitToFit.
      </H1>
      <YStack
        backgroundColor={palette.colors.wheat}
        marginHorizontal={'$-1'}
        padding={'$4'}
        f={0.95}
      >
        <ScrollView>
          <Paragraph>
            Bienvenue dans l'univers du fitness Manga, une application de workout unique en son
            genre !
          </Paragraph>

          <Paragraph>
            Nous savons que les amateurs de Manga sont passionnés par cet art japonais et passent
            souvent de longues heures à lire et à regarder leurs personnages préférés se battre
            contre le mal.
          </Paragraph>
          <Paragraph>
            Mais saviez-vous que ces personnages ont également des corps incroyablement toniques et
            athlétiques ?
          </Paragraph>

          <Paragraph>
            Notre application de workout Manga vous permet de suivre des programmes d'entraînement
            inspirés des personnages les plus populaires de vos Manga préférés. Vous pourrez ainsi
            vous entraîner comme un guerrier Saiyan, un ninja de Konoha ou un pirate de Grand Line.
          </Paragraph>
          <Paragraph>
            Chaque programme est conçu pour cibler des groupes musculaires spécifiques et utilise
            des mouvements de combat dynamiques pour vous aider à développer la force, la
            flexibilité et l'endurance nécessaires pour ressembler à votre personnage Manga préféré.
          </Paragraph>

          <Paragraph>
            En plus des programmes d'entraînement, notre application propose également des conseils
            nutritionnels pour vous aider à adopter une alimentation saine et équilibrée, ainsi
            qu'une communauté en ligne pour partager vos progrès, vos succès et votre passion pour
            le fitness Manga avec d'autres fans.
          </Paragraph>
          <Paragraph>
            Prêt à rejoindre la ligue des combattants Manga ? Téléchargez dès maintenant notre
            application de workout Manga et devenez un héros de votre propre histoire !
          </Paragraph>

          <Separator />
          <Paragraph>
            Made by{' '}
            <Anchor color="$color12" href="https://twitter.com/natebirdman" target="_blank">
              @natebirdman
            </Anchor>
            ,{' '}
            <Anchor
              color="$color12"
              href="https://github.com/tamagui/tamagui"
              target="_blank"
              rel="noreferrer"
            >
              give it a ⭐️
            </Anchor>
          </Paragraph>
        </ScrollView>
      </YStack>

      <XStack>
        <Button {...linkProps}>Link to user</Button>

        <Button {...linkProps2}>Sign</Button>
      </XStack>

      <SheetDemo />
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToast()
  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
