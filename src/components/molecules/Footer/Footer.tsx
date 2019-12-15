import React, { FunctionComponent } from 'react';
import Anchor from './../../atoms/Anchor';

export type Props = {};

const Footer: FunctionComponent<Props> = props => (
  <footer>
    <ul>
      <li>
        <Anchor url={`/company`} title="About">
          About
        </Anchor>
      </li>
    </ul>
  </footer>
);

export default Footer;
