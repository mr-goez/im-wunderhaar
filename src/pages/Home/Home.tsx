// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import classes from './Home.module.css';

import { Carousel } from '@mantine/carousel';
import { Paper, rem, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const images = [
  'src/assets/women-wash.png',
  'src/assets/women-cut.png',
  'src/assets/blonde.png',
  'src/assets/coloring.png',
  'src/assets/color-tech.png',
  'src/assets/men-cut.png',
  'src/assets/permanent-mod.png',
  'src/assets/highlights.png',
  'src/assets/kid-cut.png',
];

export function Home() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Paper
        shadow='md'
        p='xl'
        radius='md'
        style={{ backgroundImage: `url(${url})` }}
        className={classes.card}
      />
    </Carousel.Slide>
  ));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align='start'
      slidesToScroll={mobile ? 1 : 2}
      loop
      withIndicators
    >
      {slides}
    </Carousel>
  );
}
