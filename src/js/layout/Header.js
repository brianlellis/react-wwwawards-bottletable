import Logo           from '../components/general/Logo';
import HamburgerMenu  from '../components/general/HamburgerMenu';

export default function Header() {
  return (
    <header className="App-header">
      <Logo />
      <HamburgerMenu />
    </header>
  );
}