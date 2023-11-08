import {
  AspectRatio,
  Card,
  Group,
  Image,
  List,
  NavLink,
  Text,
} from '@mantine/core';
import { IconBrandInstagram, IconMail, IconMapPin } from '@tabler/icons-react';
import hero from '../../assets/contact-banner.png';

export const Contact = () => {
  return (
    <Card shadow='md' padding='lg' radius='sm' withBorder>
      <Card.Section>
        <Image src={hero} height={200} alt='Im Wunderhaar' />
      </Card.Section>
      <Group justify='space-between' mt='md' mb='xs'>
        <Text fw={500}>Im Wunderhaar</Text>
      </Group>
      <NavLink
        href='mailto:hallo@im-wunderhaar.de'
        label='Email: hallo@im-wunderhaar.de'
        leftSection={<IconMail />}
      />
      <NavLink
        href='https://www.instagram.com/imwunderhaar/?hl=de'
        target='_blank'
        rel='noopener noreferrer'
        label='Instagram: @imwunderhaar'
        leftSection={<IconBrandInstagram />}
      />
      <List ml='sm' my='xs'>
        <List.Item icon={<IconMapPin />}>
          <Text size='sm'>Karl-Friedrich-Straße 11</Text>
          <Text size='sm'>79312 Emmendingen</Text>
        </List.Item>
      </List>
      <Card.Section>
        <AspectRatio ratio={window.innerWidth < 768 ? 4 / 3 : 32 / 9}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.3909754792794!2d7.844221476422247!3d48.121983071241836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791189a6b855161%3A0xcafb6011e845805c!2sIm%20Wunderhaar!5e0!3m2!1sde!2sde!4v1699119862279!5m2!1sde!2sde'
            title='Im Wunderhaar auf Google Maps'
            style={{ border: 0 }}
            loading='lazy'
          ></iframe>
        </AspectRatio>
      </Card.Section>
    </Card>
  );
};
