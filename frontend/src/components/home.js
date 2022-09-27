import HeaderNavigatio from "./Navigation/headerNavigation";
import Link from 'next/link';

const home = (props) => {
    return (
        <div className="home">
            <HeaderNavigatio/>



            <div className="home-page-section-2">
                <div className="home-page-section-2-header">
                    What are we doing?
                </div>
                <div>
                    <hr className="home-page-section-2-line"></hr>
                </div>
                
                <div className="home-page-section-2-content-container">
                    <div className="home-page-section-2-content-1">
                        India has ranked 168th out of 180 countries in the 2020 Environmental Performance Index (EPI), according to researchers at Yale and Columbia universities, who say Indias decarbonization agenda needs to accelerate, and the country faces a number of serious environmental health risks, including poor air quality.
                    </div>
                    <div className="home-page-section-2-content-1">
                        Things like these need to be worked upon fast and we are doing just that. We are a team of tech enthusiasts who are trying to contribute to this cause in our own way. In India if we simply tackle the problem of how the household waste is managed, we will solve a major part of the equation. Urban India generates 62 million tonnes of waste (MSW) annually, and it has been predicted that this will reach 165 million tonnes in 2030. 43 million tonnes of municipal solid waste is collected annually, out of which 31 million is dumped in landfill sites and just 11.9 million is treated. There is not enough public bins, and the available bins are not even covered and, in many cases, waste overflows out of those bins and ends up going all over the streets. Waste transporting vehicles are not even covered in many cases which also causes littering of the streets. Many citizens in India recklessly litter the streets too. Probably, they only littered the streets with banana leaves or bowls made of dried leaves a few years earlier, those kinds of litters were not that harmful as they were biodegradable and could even be eaten by stray animals. But in India today, what is mostly littered is plastic and in any society, it’s not easy to bring a quick cultural change.
                    </div>
                    <div className="home-page-section-2-content-1">
                        We, here at WM are trying to come up with a perfect solution to help the municipal organisations have a organised way of managing things digitally and more efficiently. The project has a number of functionalities that will make it a lot easier of collect and segregate waste in a much efficient way. 
                    </div>
                </div>
            </div>

            <div className="home-page-section-1">
                <img className="home-page-section-1-img" alt="crisisImage" src="https://res.cloudinary.com/kartik09/image/upload/v1664223394/waste-management/home1_jvlxjl.jpg" />

                <div className="place-cards-container">


                    <div className="place-card-1-container">
                        <div>
                            <img alt="crisisImage" className="place-card-1-image" src="https://res.cloudinary.com/kartik09/image/upload/v1664224358/waste-management/TOI_image_xnqnbh.webp" />
                        </div>
                        <div className="place-card-1-content-container">
                            <div className="place-card-1-content-header">
                                <img className="place-card-1-content-header-image" src="https://res.cloudinary.com/kartik09/image/upload/v1664224147/waste-management/TOI_logo_ji3xgm.png" />
                            </div>
                            <div className="place-card-1-content-header-text">
                                "Poor AQI cutting life short by 5.2 years in Kolkata"
                            </div>
                            <div className="place-card-1-content-header-content">
                                The average life expectancy of Kolkata’s citizens can improve by 5.2 years if the city meets the WHO standards of PM2.5 concentrations (5 µg/m³ ), according to the recently published Air Quality Life Index (AQLI) annual report by the Energy Policy Institute at the University of Chicago (EPIC).
                            </div>
                        </div>
                    </div>

                    <div className="place-card-2-container">
                        <div className="place-card-1-content-container">
                            <div className="place-card-1-content-header">
                                <img className="place-card-1-content-header-image" src="https://res.cloudinary.com/kartik09/image/upload/v1664225758/waste-management/guardianLogo_xpy3c2.jpg" />
                            </div>
                            <div className="place-card-1-content-header-text">
                                "About 26,000 tonnes of plastic Covid waste pollutes world’s oceans – study"
                            </div>
                            <div className="place-card-1-content-header-content">
                            Plastic waste from the Covid-19 pandemic weighing 25,900 tonnes, equivalent to more than 2,000 double decker buses, has leaked into the ocean, research has revealed. The mismanaged plastic waste, consisting of personal protective equipment such as masks and gloves, vastly exceeded the capability of countries to process it properly, researchers said.
                            </div>
                        </div>
                        <div>
                            <img alt="crisisImage" className="place-card-1-image" src="https://res.cloudinary.com/kartik09/image/upload/v1664225972/waste-management/water_wrnr6z.jpg" />
                        </div>
                    </div>

                    <div className="place-card-3-container">
                        <div>
                            <img alt="crisisImage" className="place-card-1-image" src="https://res.cloudinary.com/kartik09/image/upload/v1664226449/waste-management/hermes-rivera-R1_ibA4oXiI-unsplash_cjt1vm.jpg" />
                        </div>
                        <div className="place-card-1-content-container">
                            <div className="place-card-1-content-header">
                                <img className="place-card-1-content-header-image" src="https://res.cloudinary.com/kartik09/image/upload/v1664226356/waste-management/theHindu_vwcfkb.png" />
                            </div>
                            <div className="place-card-1-content-header-text">
                                "Pollution from waste burning may linger for days"
                            </div>
                            <div className="place-card-1-content-header-content">
                            The Health department in the district, which has done an assessment of the health hazards posed to the people owing to the burning of plastic at the Brahmapuram solid waste treatment plant, has said that many persons had complained of respiratory problems in the city, but there has not been any acute cases so far. A medical camp was conducted at Irimpanam, Thripunithura, the day after smoke enveloped the city. The field staff of the department have been going around in Vadavukode-Puthenkurisu panchayat and nearby areas and have set up a unit at the Vyttila mobility hub for any emergency action required.


                            </div>
                        </div>
                    </div>


                </div>
            </div>
 
            <div className="home-page-section-3">
                <div className="home-page-section-3-header">
                    How do we function?
                </div>
                <div>
                    <hr className="home-page-section-2-line"></hr>
                </div>
                <div className="home-page-section-3-content-container">
                    <div className="home-page-section-3-content-1-container">
                        <div className="home-page-section-3-content-1-header">Citizens</div>
                        <div className="home-page-section-3-content-1-text">
                            Anyone with a valid email address and/or a mobile number can register on our application where they can then simply go to the pickup request page and make a request for garbage pickup from the location they want. The user will have to provide basic information like, 1) Pickup Address, 2) Pin Code of the area, 3) Select the Type of waste they want to dispose and then simply mention the approximate amount of waste and Voila! The request will be sent to the nearest administration zone where the authorities will assign the pickup task to our other heroes, the garbage collectors.
                        </div>
                    </div>
                    <div className="home-page-section-3-content-1-container">
                        <div className="home-page-section-3-content-1-header">Collectors</div>
                        <div className="home-page-section-3-content-1-text">
                            The next part of our equation that we are solving are our garbage collectors. The job for them will be at least a little more easier with our project so that they can be benefited through our project. The collectors can register on our application where they will have to provide a little bit of background information for registering them with the Administration board. Once they are a registered member of the Organisation, they can simply login on the "Collector Portal" through their credentials and password and will have the following informations on their dashboard, 1) A map that will show the most optimal route from their location to all the pickup addressses that have been assigned to that particular collector for the day, 2) A detail card of every Citizen from where the collector has to pick up the waste which includes the address, contact info and name of the citizen, 3) Once the collector reports back to the Administration office, they will be marked "Completed" on the administration portal.
                        </div>
                    </div>
                    <div className="home-page-section-3-content-1-container">
                        <div className="home-page-section-3-content-1-header">Administration (Municipal Administrations)</div>
                        <div className="home-page-section-3-content-1-text">
                            The final part of the equation are the nine Administration Centers that are each assigned a specific zone of operation so that any request that comes on their area will be automatically assigned to them by us. The administrations also have a UUID and Password through which they can login on our application on the Administration portal and get the following informations: 1) The list of pickup requests that were made to them in their zone, 2) Record of the trucks and the garbage collectors who work for that particular Administration Zone, 3) The record of all the garbage collectors, 4) The record of all the waste that they are operating through their zone, 5) A list of all the completion records of the garbage collectors.
                        </div>
                    </div>
                </div>
            </div>


            <div className="home-page-section-4">
                <div className="home-page-section-3-header">
                    Our Team
                </div>
                <div>
                    <hr className="home-page-section-2-line"></hr>
                </div>
                <div className="home-page-section-4-content-container">
                    <div className="home-page-section-4-content-1">
                        <div><img className="team-member-image" alt="teamMemberImage" src="https://res.cloudinary.com/kartik09/image/upload/v1664263773/waste-management/jatin_znpz3t.jpg" /></div>
                        <div className="team-member-name">Jatin Khandelwal</div>
                        <div className="team-member-description">Backend Developer</div>
                    </div>

                    <div className="home-page-section-4-content-1">
                        <div><img className="team-member-image" alt="teamMemberImage" src="https://res.cloudinary.com/kartik09/image/upload/v1664264113/waste-management/kamal_ikbxwd.jpg" /></div>
                        <div className="team-member-name">Kamal Karatia</div>
                        <div className="team-member-description">Backend Developer</div>
                    </div>

                    <div className="home-page-section-4-content-1">
                        <div><img className="team-member-image" alt="teamMemberImage" src="https://res.cloudinary.com/kartik09/image/upload/v1664264830/waste-management/radhika2_hwtxli.jpg" /></div>
                        <div className="team-member-name">Radhika Khetan</div>
                        <div className="team-member-description">UI/UX Designer</div>
                    </div>

                    <div className="home-page-section-4-content-1">
                        <div><img className="team-member-image" alt="teamMemberImage" src="https://res.cloudinary.com/kartik09/image/upload/v1664264358/waste-management/kartik_i71prw.jpg" /></div>
                        <div className="team-member-name">Kartik Rai</div>
                        <div className="team-member-description">Frontend Developer</div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footer-left">
                    <div className="footer-left-upper"> 
                        <div className="contact-us-header">Connect With Us</div>
                        <div className="contact-us-icons-container">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                </svg>
                            </div>
                        </div>
                    </div> 
                    <div className="footer-navigation-logo">  
                        <img alt="companyLogo" className="header-navigation-logo-image" src="https://res.cloudinary.com/tamely-app/image/upload/v1664114942/petmojo-website/Waste-management.svg_efrl7y.png" />
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-right-login">
                        <div className="footer-right-login-header">Login</div>
                        <hr className="footer-line"></hr>
                        <div className="footer-link-text">Citizen Login</div>
                        <div className="footer-link-text">Garbage Collector Login</div>
                        <div className="footer-link-text">Administration Login</div>
                    </div>
                    <div className="footer-right-login">
                        <div className="footer-right-login-header">Register</div>
                        <hr className="footer-line"></hr>
                        <div className="footer-link-text">Citizen Register</div>
                        <div className="footer-link-text">Garbage Collector Login</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default home;
