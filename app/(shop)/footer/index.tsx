import Links from './links';
import Services from './services';
import SiteInfo from './site-info';

export default function Footer() {
  return (
    <footer>
      <section>
        <Services />
        <Links />
      </section>
      <SiteInfo />
    </footer>
  );
}
