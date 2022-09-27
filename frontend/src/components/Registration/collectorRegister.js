import HeaderNavigatio from "../Navigation/headerNavigation";
import NavigationBar from "../Navigation/headerNavigation";
import {useState, useEffect, useRef} from "react";

const collectorRegister = (props) => {

    const [name, setName] = useState(true);
    const [email, setEmail] = useState(true);
    const [password, setPassword] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState(true);
    const [number, setNumber] = useState(true);
    const [address, setAddress] = useState(true);
    const [landmark, setLandmark] = useState(true);
    const [pin, setPin] = useState(true);
    const [type, setType] = useState(true);
    const [regNo, setRegNo] = useState(true);
    const [aadhar, setAadhar] = useState(true);
    const [dob, setDob] = useState(true);

    async function registerCollectorHandler(event){
        event.preventDefault();

        const name= event.target.name.value;
        const email= event.target.email.value;
        const password= event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        const phone= event.target.phone.value;
        const pincode= event.target.pin.value;
        const address= event.target.address.value;
        const landmark= event.target.landmark.value;
        const vehicleType= event.target.vehicleType.value;
        const regNumber= event.target.regNo.value;
        const aadhar= event.target.aadhar.value;
        const dob= event.target.dob.value;

        if(name !== "" && email !== "" && password.length > 7 && password.length <15 && password === confirmPassword && pincode.length === 6 && address != "" && vehicleType && regNumber.length === 10 && aadhar.length === 16 && dob){
            console.log("Everything is fine!")
        }else{
            if(name === ""){
                setName(false);
            }
            if(email === ""){
                setEmail(false);
            }
            if(password === ""){
                setPassword(false);
            }
            if(confirmPassword !== password){
                setConfirmPassword(false);
            }
            if(phone.length !== 10){
                setNumber(false);
            }
            if(pincode.length !== 6){
                setPin(false);
            }
            if(address ===""){
                setAddress(false);
            }
            if(vehicleType === ""){
                setType(false);
            }
            if(regNumber.length !== 10){
                setRegNo(false);
            }
            if(aadhar.length !== 16){
                setAadhar(false);
            }
            if(dob === ""){
                setDob(false);
            }
        }

        const collectorRegistrationData = {
            name, email, password, phone, pincode, address, landmark, vehicleType, regNumber, aadhar, dob
        }

        console.log(collectorRegistrationData);
    }

    return (
        <div className="customerRegister">
            <NavigationBar />
            <div className="collector-registration-form-section-master-container">
                <div className="collector-registration-form-master">
                    <div>
                        <div className="customer-registration-form-tagline">The <span className="green">Heroes</span> We <span className="yellow">Need</span>!</div>
                        <hr className="white-bold-line"></hr>
                    </div>
                    <form onSubmit={(event) => registerCollectorHandler(event)} className="customer-registration-form" >
                        <div className="collector-registration-form-field-binder">
                            <div className="customer-registration-form-field">
                                <input type="text" name="name" className={name ? "input-field" : "input-field-invalid"} onChange={() => setName(true)} placeholder="Name"  />
                            </div>
                            <div className="customer-registration-form-field">
                                <input type="email" name="email" className="input-field" placeholder="Email Address" required />
                            </div>
                        </div>
                        <div className="collector-registration-form-field-binder">

                            <div className="customer-registration-form-field">
                                <input type="password" name="password" className="input-field" placeholder="Password" required />
                            </div>
                            <div className="customer-registration-form-field">
                                <input type="password" name="confirmPassword" className="input-field" placeholder="Confirm Password" required />
                            </div>
                        </div>


                        <div className="collector-registration-form-field-binder">
                            <div className="customer-registration-form-field">
                                <input type="number" name="phone" className="input-field" placeholder="Phone Number" required />
                            </div>
                            <div className="customer-registration-form-field">
                                <input type="text" name="address" className="input-field" placeholder="Address" required />
                            </div>
                        </div>


                        <div className="collector-registration-form-field-binder">
                            <div className="customer-registration-form-field">
                                <input type="text" name="landmark" className="input-field" placeholder="Landmark" required />
                            </div>
                            <div className="customer-registration-form-field">
                                <input type="number" name="pin" className="input-field" placeholder="Pincode" required />
                            </div> 
                        </div>



                        <div className="collector-registration-form-field-binder">
                            <div className="customer-registration-form-field">
                                <select name="vehicleType" className="input-field">
                                    <option className="select-vehicle-input">Select the type of vehicle</option>
                                    <option onClick={() => setType("truck")}>Truck</option>
                                    <option onClick={() => setType("mini-truck")}>Mini Truck</option>
                                </select>
                            </div>
                            <div className="customer-registration-form-field">
                                <input type="number" name="regNo" className="input-field" placeholder="Vehicle Reg Number" required />
                            </div> 
                        </div>
                        <div className="collector-registration-form-field-binder">
                            <div className="customer-registration-form-field">
                                <input type="text" name="aadhar" className="input-field" placeholder="Aadhar Number" required />
                            </div>
                            <div className="customer-registration-form-field">
                                <input type="date" name="dob" className="input-field" placeholder="DOB" required />
                            </div> 
                        </div>
                        <div className="agreement-line-customer-registration">
                            <input type="checkbox" className="collector-checkbox" id="aggrement-line-customer-registration-box" required />
                            <label className="aggrement-line-customer-registration-box" htmlFor="aggrement-line-customer-registration-box">I agree to the terms and conditions and privacy policy of WM</label>
                        </div>
                        <button type="submit" className="registration-form-button">Register</button>
                    </form>




                </div>
                <div className="customer-registration-master-image-container">
                    <img className="collector-registration-master-image" alt="masterImage" src="https://res.cloudinary.com/kartik09/image/upload/v1664132305/waste-management/collector_aug6vb.jpg" />
                </div>
            </div>
        </div>
    );
};

export default collectorRegister;

