import useScreenSize from '../../hooks/useScreenSize';

import Mobile from './Mobile/Mobile';
import Desktop from './Desktop/Desktop';

function Navbar() {

    const width = useScreenSize();

    return width <= 900 ? <Mobile /> : <Desktop />;
}

export default Navbar