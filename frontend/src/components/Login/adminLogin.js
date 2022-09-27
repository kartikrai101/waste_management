import HeaderNavigatio from "../Navigation/headerNavigation";
import { useState, useRef } from "react";

const adminLogin = (props) => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const typeRef = useRef();

    const [emailValidation, setEmailValidation] = useState(true);
    const [passwordValidation, setPasswordValidation] = useState(true);

    async function dataSubmissionHandler(event){
        event.preventDefault();

        const data = {
            email: event.target.email.value,
            password: event.target.password.value,
            type: event.target.type.value
        }

        console.log(data);
    }

    return (
        <div className="collectorLogin">
            <HeaderNavigatio/>

            <div className="customer-login-master-container">
                <form onSubmit={(event) => dataSubmissionHandler(event)} className="admin-login-container">
                    <div className="customer-login-image-container">
                        <img className="customer-login-image" alt="loginCard" src="https://res.cloudinary.com/kartik09/image/upload/v1664214995/waste-management/adminLogin_iuljpm.jpg" />
                    </div>
                    <div className="customer-login-info-container">
                        <div className="customer-login-email-container">
                            <input type="text" name="email" placeholder="Admin Email Address" className="customer-login-input-field" required />
                        </div>
                        <div className="customer-login-password-container">
                            <input type="password" name="password" placeholder="Admin Password" className="customer-login-input-field" required />
                        </div>
                        <div className="admin-login-type-container">
                            <input type="radio" name="type" id="type" className="radio" required />
                            <label htmlFor="type" className="admin-login-authorize">Authorize as a Municipal Coorporation Admin</label>
                        </div>
                    </div>
                    <button type="submit" className="admin-login-login-btn" >Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default adminLogin;

