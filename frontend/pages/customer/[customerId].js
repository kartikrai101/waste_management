import HeaderNavigatio from "../../src/components/Navigation/headerNavigation";
import {useState} from 'react';


function customerPickup(props){

    const [dropdown, setDropdown] = useState(false);
    const [bioActive, setBioActive] = useState(false);
    const [nonActive, setNonActive] = useState(false);
    const [hazActive, setHazActive] = useState(false);

    const [addressValidation, setAddressValidation] = useState(true);
    const [pinValidation, setPinValidation] = useState(true);
    const [wasteValidation, setWasteValidation] = useState(true);

    async function submitPickupDataHandler(event){
        event.preventDefault();

        const address1 = event.target.address1.value;
        const address2 =  event.target.address2.value;
        const pin =  event.target.pin.value;
        const typeOfWaste = {
            biodegradable: event.target.bioAmount.value ? event.target.bioAmount.value : "0",
            nonBiodegradable: event.target.nonAmount.value ? event.target.nonAmount.value : "0",
            hazardous: event.target.hazAmount.value ? event.target.hazAmount.value : "0"
        }

            const data = {
                addressLine1: address1,
                addressLine2: address2,
                pinCode: pin,
                type: typeOfWaste
            }

            console.log(data);
        

    }

    return(
        <div className="customer-pickup-request-master">
            <HeaderNavigatio/>
            <div className="customer-pickup-form-container">
                <div className="customer-pickup-form-header">Pickup <span className="grey-text">Details</span></div>
                <hr className="white-bold-line"></hr>
                <form onSubmit={() => submitPickupDataHandler(event)} className="customer-pickup-form">
                    <div className="customer-pickup-form-item">
                        <div className="customer-pickup-form-item-name">Address of pickup point</div>
                        <input name="address1" onChange={() => setAddressValidation(true)} type="text" className={ addressValidation ? "customer-pickup-form-input" : "customer-pickup-form-input-invalid"} placeholder="First Line of Address" />
                    </div>

                    <div className="customer-pickup-form-item">
                        <input name="address2" type="text" className="customer-pickup-form-input" placeholder="Landmark" />
                    </div>

                    <div className="customer-pickup-form-item">
                        <div className="customer-pickup-form-item-name">Enter the Pin Code</div>
                        <input name="pin" onChange={() => setPinValidation(true)} className={ addressValidation ? "customer-pickup-form-input" : "customer-pickup-form-input-invalid"} type="number" placeholder="Pincode" />
                    </div>

                    <div className="customer-pickup-form-item">
                        <div className="customer-pickup-form-item-name">Select the types of waste you want to dispose</div>
                        <div onClick={() => setDropdown(!dropdown)} className={ wasteValidation ? "customer-pickup-form-waste-type-master" : "customer-pickup-form-waste-type-master-invalid" }>
                            <div>-- Select --</div>
                            <div>
                                {
                                    dropdown ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                                        </svg>
                                    )
                                }

                            </div>
                        </div>
                        {
                            dropdown ? (
                                <div className="customer-pickup-waste-dropdown">
                                    <div onClick={() => {
                                        setBioActive(true) 
                                        setDropdown(false)
                                    }} className="customer-pickup-waste-dropdown-item-bio">Biodegradable</div>
                                    <div onClick={() => {
                                        setNonActive(true) 
                                        setDropdown(false)
                                    }} className="customer-pickup-waste-dropdown-item-non">Non-Biodegradable</div>
                                    <div onClick={() => {
                                        setHazActive(true) 
                                        setDropdown(false)
                                    }} className="customer-pickup-waste-dropdown-item-haz">Hazardous</div>
                                </div>
                            ) : null
                        }
                    </div>
                    
                    <div className={ (bioActive || nonActive || hazActive) ? "waste-quantity-boxes-container" : ""}>
                                <div className={ bioActive ? "customer-pickup-form-item" : "customer-pickup-form-item2"}>
                                    <div className="customer-pickup-form-item-name">Enter the quantity of your Biodegradable Waste (in Kgs)</div>
                                    <input name="bioAmount" type="number" className="customer-pickup-form-input-bio" placeholder="Amount of Biodegradable Waste" min={0} max={100} />
                                </div>

                                <div className={ nonActive ? "customer-pickup-form-item" : "customer-pickup-form-item2"}>
                                    <div className="customer-pickup-form-item-name">Enter the quantity of your Non-Biodegradable Waste (in Kgs)</div>
                                    <input name="nonAmount" type="number" className="customer-pickup-form-input-non" placeholder="Amount of Non-Biodegradable Waste" min={0} max={100} />
                                </div>
                                <div className={ hazActive ? "customer-pickup-form-item" : "customer-pickup-form-item2"}>
                                    <div className="customer-pickup-form-item-name">Enter the quantity of your Hazardous Waste (in Kgs)</div>
                                    <input name="hazAmount" type="number" className="customer-pickup-form-input-haz" placeholder="Amount of Hazardous Waste" min={0} max={500} />
                                </div>
                        
                    </div>


                    <div className="customer-pickup-form-item-btn">
                        <button type="submit" className="customer-pickup-form-send-button">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default customerPickup;