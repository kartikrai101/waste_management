import HeaderNavigatio from "../Navigation/headerNavigation";
import Link from 'next/link';

function login(props){
    return (
        <div>
            <HeaderNavigatio/>
            <Link href="/login/customer"><div>Customer Login</div></Link>
            <Link href="/login/collector"><div>Collector Login</div></Link>
            <Link href="/login/admin"><div>Admin Login</div></Link>
        </div>
    );
};

export default login;