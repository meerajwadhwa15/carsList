import React, { FunctionComponent, ReactNode } from 'react';
import Container from 'react-bootstrap/Container';
import Header from '@components/molecules/Header';
import Footer from '@components/molecules/Footer';

export type Props = {
  children: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
);

export default Layout;
