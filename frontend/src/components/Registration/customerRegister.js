import NavigationBar from "../Navigation/headerNavigation";
import {useState} from "react";

const customerRegister = (props) => {

    const [activeName, setActiveNameInput] = useState(false);

    return (
        <div className="customerRegister">
            <NavigationBar />
            <div className="customer-registration-form-section-master-container">
                <div className="customer-registration-master-image-container">
                    <img className="customer-registration-master-image" alt="masterImage" src="https://res.cloudinary.com/kartik09/image/upload/v1664128531/waste-management/customer-registration_rmmrkb.jpg" />
                </div>
                <div className="collector-registration-form-master">
                    <div>
                        <div className="customer-registration-form-tagline">Save <span className="green">Earth</span>, Go <span className="yellow">Green</span></div>
                        <hr className="white-bold-line"></hr>
                    </div>

                    <div className="collector-registration-form-field-binder">
                        <div className="customer-registration-form-field">
                            <input type="text" className="input-field" placeholder="Name" required />
                        </div>
                        <div className="customer-registration-form-field">
                            <input type="email" className="input-field" placeholder="Email Address" required />
                        </div>
                    </div>
                    <div className="collector-registration-form-field-binder">

                        <div className="customer-registration-form-field">
                            <input type="password" className="input-field" placeholder="Password" required />
                        </div>
                        <div className="customer-registration-form-field">
                            <input type="password" className="input-field" placeholder="Confirm Password" required />
                        </div>
                    </div>


                    <div className="collector-registration-form-field-binder">
                        <div className="customer-registration-form-field">
                            <input type="number" className="input-field" placeholder="Phone Number" required />
                        </div>
                        <div className="customer-registration-form-field">
                            <input type="text" className="input-field" placeholder="Address" required />
                        </div>
                    </div>


                    <div className="collector-registration-form-field-binder">
                        <div className="customer-registration-form-field">
                            <input type="text" className="input-field" placeholder="Landmark" required />
                        </div>
                        <div className="customer-registration-form-field">
                            <input type="number" className="input-field" placeholder="Pincode" required />
                        </div> 
                    </div>


                    <div className="agreement-line-customer-registration">
                        <input type="checkbox" className="collector-checkbox" id="aggrement-line-customer-registration-box" required />
                        <label className="aggrement-line-customer-registration-box" htmlFor="aggrement-line-customer-registration-box">I agree to the terms and conditions and privacy policy of WM</label>
                    </div>
                    <div className="registration-form-button">Register</div>
                </div>

            </div>
        </div>
    );
};

export default customerRegister;

