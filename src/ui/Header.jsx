import { Link } from 'react-router-dom';
import Username from '../features/user/Username';
import SearchOrder from '../features/order/SearchOrder';
// import Username from '../features/user/Username';

function Header() {
  return (
    <header>
      <Link to='/' className='tracking-widest'>
        Fast React Pizza Co.
      </Link>
      <SearchOrder />

      {/* <SearchOrder />
      <Username /> */}
      <Username />
    </header>
  );
}

export default Header;
