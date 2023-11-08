import { Grid, Text } from '@mantine/core';
import classes from './AccordionPanel.module.css';

interface AccordionPanelProps {
  content: {
    action: string;
    normalPrice: string;
    masterPrice: string;
  }[];
}

export const AccordionPanel = ({ content }: AccordionPanelProps) => {
  return (
    <>
      <Grid>
        <Grid.Col span={6}></Grid.Col>
        <Grid.Col span='auto' className={classes.priceCol}>
          <Text size='lg' py={2} fw='bold'>
            Geselle
          </Text>
        </Grid.Col>
        <Grid.Col span='auto' className={classes.priceCol}>
          <Text size='lg' py={2} fw='bold'>
            Meister
          </Text>
        </Grid.Col>
      </Grid>
      {content.map(({ action, normalPrice, masterPrice }, index) => (
        <Grid key={index}>
          <Grid.Col span={6}>
            <Text size='sm'>{action}</Text>
          </Grid.Col>
          <Grid.Col span='auto' className={classes.priceCol}>
            {normalPrice}
          </Grid.Col>
          <Grid.Col span='auto' className={classes.priceCol}>
            {masterPrice}
          </Grid.Col>
        </Grid>
      ))}
    </>
  );
};
