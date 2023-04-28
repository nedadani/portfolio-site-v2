import OnlineStoreMobile1 from 'public/images/online-store/mobile-online-store-1.png';
import OnlineStoreMobile2 from 'public/images/online-store/mobile-online-store-2.png';
import OnlineStoreMobile3 from 'public/images/online-store/mobile-online-store-3.png';
import OnlineStoreDesktop1 from 'public/images/online-store/desktop-online-store-1.png';
import OnlineStoreDesktop2 from 'public/images/online-store/desktop-online-store-2.png';
import OnlineStoreDesktop3 from 'public/images/online-store/desktop-online-store-3.png';
import MinesweeperMobile1 from 'public/images/minesweeper/mobile-minesweeper-1.png';
import MinesweeperMobile2 from 'public/images/minesweeper/mobile-minesweeper-2.png';
import MinesweeperMobile3 from 'public/images/minesweeper/mobile-minesweeper-3.png';
import MinesweeperDesktop1 from 'public/images/minesweeper/desktop-minesweeper-1.png';
import MinesweeperDesktop2 from 'public/images/minesweeper/desktop-minesweeper-2.png';
import MinesweeperDesktop3 from 'public/images/minesweeper/desktop-minesweeper-3.png';
import TetrisMobile1 from 'public/images/tetris/mobile-tetris-1.png';
import TetrisMobile2 from 'public/images/tetris/mobile-tetris-2.png';
import TetrisMobile3 from 'public/images/tetris/mobile-tetris-3.png';
import TetrisDesktop1 from 'public/images/tetris/desktop-tetris-1.png';
import TetrisDesktop2 from 'public/images/tetris/desktop-tetris-2.png';
import TetrisDesktop3 from 'public/images/tetris/desktop-tetris-3.png';

const PROJECTS = [
  {
    name: 'Online Store',
    mobileImages: [OnlineStoreMobile1, OnlineStoreMobile2, OnlineStoreMobile3],
    desktopImages: [OnlineStoreDesktop1, OnlineStoreDesktop2, OnlineStoreDesktop3],
    summary: 'An e-commerce website for a flower store in Lithuania.',
    description:
      'Server-side rendering and static site generation support via Next.js. Multi-language integration using React-intl. State management using Recoil. E2E testing using Cypress. Payments integration with Stripe.',
    link: 'https://www.jusuziedas.lt/en',
    github: '',
  },
  {
    name: 'Tetris',
    mobileImages: [TetrisMobile1, TetrisMobile2, TetrisMobile3],
    desktopImages: [TetrisDesktop1, TetrisDesktop2, TetrisDesktop3],
    summary: 'A simple tetris game.',
    description:
      'No scoring, no levels, just mindless block building. Took me way too long to build as every debugging session would turn into a playing session. Hooks-based implementation. State management using Jotai. The game is mobile and desktop-friendly.',
    link: 'https://profound-squirrel-37a56e.netlify.app',
    github: 'https://github.com/nedakinduryte/tetris',
  },
  {
    name: 'Minesweeper',
    mobileImages: [MinesweeperMobile1, MinesweeperMobile2, MinesweeperMobile3],
    desktopImages: [MinesweeperDesktop1, MinesweeperDesktop2, MinesweeperDesktop3],
    summary: 'A simple minesweeper game.',
    description:
      "No impressive tech here, built for a sole purpose to practice algorithms (DFS specifically). State management implemented using Jotai. App's theme auto-adjusts to the user's preferred color scheme. The game is mobile and desktop-friendly.",
    link: 'https://celebrated-mousse-6e442a.netlify.app',
    github: 'https://github.com/nedakinduryte/minesweeper',
  },
];

export { PROJECTS };
