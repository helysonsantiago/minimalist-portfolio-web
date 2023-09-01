import * as React from 'react';
import { StyledFooterContainer } from './styles.footer';

export interface IFooterProps {}

const Footer = (props: IFooterProps): React.ReactElement => {
  return <StyledFooterContainer><p>2023 — Coded By Helyson  ☕︎ 🇧🇷 </p></StyledFooterContainer>;
};

export default Footer;
