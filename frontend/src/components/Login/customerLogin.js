import HeaderNavigatio from "../Navigation/headerNavigation";
import axios from 'axios';

const customerLogin = (props) => {

    async function customerLogin(event){
        event.preventDefault();

        const data = {
            loginDetail: event.target.email.value,
            password: event.target.password.value,
            typeOfUser: "seller"
        }

        // const config = {
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   };
        
        //   const body = JSON.stringify(data);

        console.log(JSON.stringify(data));

        const response = await axios.post('http://localhost:4000/auth/', {
            body:data
        });

        response.then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err)
        })

        console.log(response);
    }

    return (
        <div className="customerLogin">
            <HeaderNavigatio/>

            <div className="customer-login-master-container">
                <form onSubmit={() => customerLogin(event)} className="customer-login-container">
                    <div className="customer-login-image-container">
                        <img className="customer-login-image" alt="loginCard" src="https://res.cloudinary.com/kartik09/image/upload/v1664141857/waste-management/loginCustomer_ebfpme.jpg" />
                    </div>
                    <div className="customer-login-info-container">
                        <div className="customer-login-email-container">
                            <input name="email" type="text" placeholder="Email/Phone Number" className="customer-login-input-field" required />
                        </div>
                        <div className="customer-login-password-container">
                            <input name="password" type="password" placeholder="Enter your password" className="customer-login-input-field" required />
                        </div>
                    </div>
                    <button type="submit" className="customer-login-login-btn">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default customerLogin;

