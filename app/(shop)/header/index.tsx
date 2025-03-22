import { findHeaderNavs } from '@/app/services/layout';
import NavBar from './nav-bar';
import TopBar from './top-bar';

export default async function Header() {
  const navs = await findHeaderNavs();

  return (
    <header>
      <TopBar />
      <NavBar navs={navs} />
    </header>
  );
}
