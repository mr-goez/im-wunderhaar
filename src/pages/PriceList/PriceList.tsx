import { Accordion, Badge, rem } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { AccordionLabel } from '../../components/AccordionLabel/AccordionLabel';
import { AccordionPanel } from '../../components/AccordionPanel/AccordionPanel';
import priceListGents from '../../utils/priceList';

export const PriceList = () => {
  const items = priceListGents.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel style={{ width: '100%' }}>
        <AccordionPanel content={item.content} />
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <Badge
        fullWidth
        color='cyan'
        leftSection={
          <IconInfoCircle style={{ width: rem(14), height: rem(14) }} />
        }
        mb='md'
      >
        Änderungen/Irrtümer vorbehalten. Angaben ohne Gewähr.
      </Badge>
      <Accordion
        chevronPosition='left'
        variant='filled'
        transitionDuration={500}
      >
        {items}
      </Accordion>
    </>
  );
};
