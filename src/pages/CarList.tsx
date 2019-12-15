import React, { FunctionComponent } from 'react';
import DefaultTemplate from '@components/templates/Default';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type CarListPageProps = {};

const CarListPage: FunctionComponent<CarListPageProps> = props => (
  <DefaultTemplate>
    <Row>
      <Col md={3}>md=4</Col>
      <Col md={9}>md=9</Col>
    </Row>
  </DefaultTemplate>
);

export default CarListPage;
