import { Avatar, Group, Text } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

interface AccordionLabelProps {
  label: string;
  image?: string;
  description?: string;
}

export const AccordionLabel = ({
  label,
  image,
  description,
}: AccordionLabelProps) => {
  return (
    <Group wrap='nowrap'>
      {image ? (
        <Avatar src={image} radius='xl' size='lg' />
      ) : (
        <IconInfoCircle />
      )}
      <div>
        <Text>{label}</Text>
        {description ? (
          <Text size='sm' c='dimmed' fw={400}>
            {description}
          </Text>
        ) : null}
      </div>
    </Group>
  );
};
