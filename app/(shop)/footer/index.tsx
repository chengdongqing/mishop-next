import Links from './links';
import Services from './services';
import SiteInfo from './site-info';

export default function Footer() {
  return (
    <footer>
      <Services />
      <Links />
      <SiteInfo />
    </footer>
  );
}
