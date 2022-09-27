import HeaderNavigatio from "../Navigation/headerNavigation";

const collectorLogin = (props) => {
    return (
        <div className="collectorLogin">
            <HeaderNavigatio/>

            <div className="customer-login-master-container">
                <div className="collector-login-container">
                    <div className="customer-login-image-container">
                        <img className="customer-login-image" alt="loginCard" src="https://res.cloudinary.com/kartik09/image/upload/v1664141857/waste-management/loginCollector_zgptya.jpg" />
                    </div>
                    <div className="customer-login-info-container">
                        <div className="customer-login-email-container">
                            <input type="text" placeholder="Email/Phone Number" className="customer-login-input-field" required />
                        </div>
                        <div className="customer-login-password-container">
                            <input type="password" placeholder="Enter your password" className="customer-login-input-field" required />
                        </div>
                    </div>
                    <div className="customer-login-login-btn">Sign In</div>
                </div>
            </div>
        </div>
    );
};

export default collectorLogin;

