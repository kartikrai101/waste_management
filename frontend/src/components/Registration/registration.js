import HeaderNavigatio from "../Navigation/headerNavigation";
import Link from 'next/link';

export default function Registration(props){
    return (
        <div>
            <HeaderNavigatio />
            <div>
                <Link href="/register/customer"><div>Customer</div></Link>
                <Link href="/register/collector"><div>Garbage Collector</div></Link>
            </div>
        </div>
    );
};