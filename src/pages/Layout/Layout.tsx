import {
  AppShell,
  Avatar,
  Burger,
  Group,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/wunderhaar-logo.png';
import classes from './Layout.module.css';

const NavLinks = () => (
  <>
    <a
      key='home'
      href='/'
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      Home
    </a>
    <a
      key='pricelist'
      href='/pricelist'
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      Preisliste
    </a>
    <a
      key='contact'
      href='/contact'
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      Kontakt
    </a>
    <UnstyledButton className={classes.control} component='a' href='/'>
      Home
    </UnstyledButton>
    <UnstyledButton className={classes.control} component='a' href='/pricelist'>
      Preise
    </UnstyledButton>
    <UnstyledButton className={classes.control} component='a' href='/contact'>
      Kontakt
    </UnstyledButton>
  </>
);

export const Layout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding='md'
    >
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <Group justify='space-between' style={{ flex: 1 }}>
            <Group>
              <Avatar src={logo} />
              <Text>Im Wunderhaar</Text>
            </Group>
            <Group ml='xl' gap={0} visibleFrom='sm'>
              <NavLinks />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py='md' px={4}>
        <NavLinks />
      </AppShell.Navbar>

      <AppShell.Main className={classes.main}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
