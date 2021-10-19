import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className="">
            <h1 class="section-title text-center my-3 fw-bold">-Frequently Asked <span className="service-text">Questions-</span>
            </h1>
            <div class="row row-cols-1 row-cols-lg-2 row-cols-md-1 g-4">
                <div class="col rounded-3 my-5">
                    <div class="photo-frame my-5">
                        <div class="photo">
                            <img className="img-fluid w-100 h-100" src="https://i.ibb.co/rffdtGL/FAQ.jpg" alt="" />
                        </div>
                    </div>

                </div>
                <div class="col">
                    <div class="accordion accordion-flush p-3 my-5" id="accordionFlushExample">
                        <div class="accordion-item my-2 p-3 border">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed fw-bold fs-4" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    What type of toothbrush and toothpaste should I use?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Buy toothbrushes with soft bristles. Medium and firm ones can damage teeth and gums. Use soft pressure, for 2 minutes, two times a day.

                                    Both powered and manual toothbrushes clean teeth well. Manual brushes with mixed bristle heights or angled bristles clean better than those with all flat, even bristles. Powered toothbrushes may be easier if you have trouble using your hands.

                                    Set a reminder to replace your toothbrush every 3-4 months. Toss it sooner if the bristles look bent or splayed out. Bent bristles don't clean as well. (They're also a sign you may be brushing too hard.)

                                    Most toothpastes will clear away bacteria growth and acids from food and drinks. Toothpastes with the American Dental Association (ADA) Seal of Acceptance always have fluoride, which strengthens and protects teeth. If you want a non-fluoride option, stores carry toothpastes and powders made with natural ingredients that don't have ADA testing and approval.

                                    If cold or hot food or drinks make you cringe, pick a toothpaste for sensitive teeth and let your dentist know. </div>
                            </div>
                        </div>
                        <div class="accordion-item my-2 p-3 border">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed fw-bold fs-4" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    Do I really need to floss?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    There's no getting around the need to get around your teeth daily with dental floss. It clears food and plaque from between teeth and under the gumline. If you don't, plaque hardens into tartar, which forms wedges and widens the space between teeth and gums, causing pockets. Over time, gums pull away and teeth loosen.

                                    Either waxed or unwaxed floss will do the job. Using floss picks or interdental brushes is another easy option.</div>
                            </div>
                        </div>
                        <div class="accordion-item my-2 p-3 border">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed fw-bold fs-4" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                    aria-expanded="false" aria-controls="flush-collapseThree">
                                    Does a rinse or mouthwash help?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Mouthwashes for cavity protection, sensitivity, and fresh breath may help when you use them with regular brushing and flossing -- but not instead of daily cleanings. Your dentist can recommend the best type for you.

                                    Some people need twice-daily rinses for gum health or alcohol-free washes for dry mouth.

                                    Kids under 6 shouldn't use mouthwash to avoid the chance of them swallowing it</div>
                            </div>
                        </div>
                        <div class="accordion-item my-2 p-3 border">
                            <h2 class="accordion-header" id="flush-headingFour">
                                <button class="accordion-button collapsed fw-bold fs-4" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false"
                                    aria-controls="flush-collapseFour">
                                    What are early signs of dental trouble?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Visit a dentist if you have any of these issues or see your child having trouble chewing or complaining of soreness:

                                    Mouth sores
                                    Jaw pain
                                    Redness
                                    Swollen face or gums
                                    Tooth sensitivity
                                    Broken teeth
                                    Dry mouth
                                    Bleeding gums
                                    Bad breath or a bad taste in your mouth
                                    Getting checked out right away prevents more serious problems and infections.</div>
                            </div>
                        </div>
                        <div class="accordion-item my-2 p-3 border">
                            <h2 class="accordion-header" id="flush-headingFive">
                                <button class="accordion-button collapsed fw-bold fs-4" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false"
                                    aria-controls="flush-collapseFive">
                                    Are dental X-rays safe and needed?
                                </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Medical and dental experts study the use of X-rays and set limits for their safety. Your dentist should take as few as possible. Sometimes dentists may recommend X-rays to diagnose a special problem. Advancements in technology means today's digital X-rays release much less radiation and are safer than in the past.

                                    Expect to get them during a first exam after not seeing a dentist for a while. This helps check tooth and gum health. If you have gum disease, the dentist may want pictures every 6 months. For regular check-ups, it's about every 2 years, depending on your dentist's plan.

                                    Kids have more X-rays done than adults because their teeth are changing and because they get cavities more easily.</div>
                            </div>
                        </div>
                        <div class="accordion-item my-2 p-3 border">
                            <h2 class="accordion-header" id="flush-headingSix">
                                <button class="accordion-button collapsed fw-bold fs-4" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false"
                                    aria-controls="flush-collapseSix">
                                    How do fillings work?
                                </button>
                            </h2>
                            <div id="flush-collapseSix" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Cavities break through the surface enamel of teeth, and they'll probably get bigger unless you close them off with fillings.

                                    Your dentist will numb your mouth before drilling around the cavity to prep it. A combination of strong materials or a white mix called a composite goes into the cavity soft and then hardens as it dries. You may feel pain or pressure when getting the numbing shot and during the drilling.

                                    Once set, fillings can last a long time but need replacing if they break or wear down.</div>
                            </div>
                        </div>

                    </div>

                </div>



            </div>


        </div>
    );
};

export default FAQ;
