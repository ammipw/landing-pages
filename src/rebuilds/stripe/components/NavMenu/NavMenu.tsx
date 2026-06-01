import { createContext, useContext, useEffect, useState } from 'react';
import styles from './NavMenu.module.css';
import Button from '../Button/Button';
import { ChevronDown } from 'lucide-react';

const NavMenuContext = createContext<any>(null);

interface NavMenuProps {
  children: React.ReactNode;
}

function NavMenu({ children }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [titles, setTitles] = useState<string[]>([]);

  // console.log('isOpen:', isOpen, 'titles:', titles);

  return (
    <NavMenuContext.Provider value={{ isOpen, setIsOpen, titles, setTitles }}>
      <nav className={styles['nav-menu'] + (isOpen && titles.includes(isOpen) ? ` ${styles['open']}` : '')}>
        <div className={styles['nav-container']}>
          <div>
            <span className={styles.logo}>stripe</span>
            <ul>
              <li><NavLink title="products" href="#products" onMouseEnter={() => setIsOpen('products')} onMouseLeave={() => setIsOpen(null)}>Products</NavLink></li>
              <li><NavLink title="solutions" href="#solutions" onMouseEnter={() => setIsOpen('solutions')} onMouseLeave={() => setIsOpen(null)}>Solutions</NavLink></li>
              <li><NavLink title="developers" href="#developers" onMouseEnter={() => setIsOpen('developers')} onMouseLeave={() => setIsOpen(null)}>Developers</NavLink></li>
              <li><NavLink title="resources" href="#resources" onMouseEnter={() => setIsOpen('resources')} onMouseLeave={() => setIsOpen(null)}>Resources</NavLink></li>
              <li><NavLink title="pricing" href="#pricing" onMouseEnter={() => setIsOpen('pricing')} onMouseLeave={() => setIsOpen(null)}>Pricing</NavLink></li>
            </ul>
          </div>
          <div className={styles['nav-actions']}>
            <Button>Sign in</Button>
            <Button fill="light" arrow>Contact sales</Button>
          </div>
        </div>
        <div className={isOpen && titles.includes(isOpen) ? styles['nav-expanded'] : ''}>
          <NavContent title="products">
            <h3>Products</h3>
          </NavContent>
          <NavContent title="solutions">
            <h3>Solutions</h3>
          </NavContent>
        </div>
      </nav>
    </NavMenuContext.Provider>
  );
}

interface NavLinkProps {
  title?: string;
  href: string;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function NavLink({ title, href, children, onMouseEnter, onMouseLeave }: NavLinkProps) {
  const { titles } = useContext(NavMenuContext);

  return (
    <a title={title} href={href} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{children}{titles.includes(title || '') ? <ChevronDown size={16} className="inline-block" /> : ''}</a>
  )
}

interface NavContentProps {
  title: string;
  children: React.ReactNode;
  show?: boolean;
}

function NavContent({ title, children }: NavContentProps) {
  const { isOpen, setTitles } = useContext(NavMenuContext);
  
  useEffect(() => {
    setTitles((prev: string[]) => {
      if (!prev.includes(title)) {
        return [...prev, title];
      }
      return prev;
    });
  }, [title, setTitles]);
  
  if (!isOpen || isOpen !== title) return null;
  return (
    <div title={title}>{children}</div>
  )
}

NavMenu.Link = NavLink;
NavMenu.Content = NavContent;

export default NavMenu;