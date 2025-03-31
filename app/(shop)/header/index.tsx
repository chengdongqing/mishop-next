import { findHeaderNavs } from '@/app/services/layout';
import NavBar from './nav-bar';
import TopBar from './top-bar';

export default function Header() {
  const navsPromise = findHeaderNavs();

  return (
    <header>
      <TopBar />
      <NavBar navsPromise={navsPromise} />
    </header>
  );
}
