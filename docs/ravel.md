# RAVEL

## INTRODUCTION

On an average the 9.3 million foreign tourists have visited India in the year 2023. And more than 100 cr people in India uber in a year. Similarly, 4.8 million people used car rental services in India in the year 2023.  
The average target audience of car services is 338 million.  

With Ravel you can:
1. Lend out your own vehicle and earn through it  
2. Rent a vehicle of your choice posted by someone and enjoy your trip  
3. Search vehicles as per location (destination of travel)  
4. Reviews and ratings for the vehicle  
5. Payment Integration  

Self-driving, or exploring destinations by car, offers several advantages for regular users or tourists:  

Users have the freedom to create their own schedule and itinerary. They can choose where to go, when to go there, and how long to stay at each location without being tied to group tours or public transportation schedules. It's convenient to have their own transportation at hand. Users can easily access remote locations or attractions that may not be well-connected by public transport.  

Travelling by car offers comfort, especially on longer journeys. It allows users to control the temperature, play music to their liking, and travel at their own pace. You can enjoy privacy and intimacy during travels, which is especially beneficial for couples or families who prefer to explore independently.  

Depending on the destination and group size, self-driving can sometimes be more cost-effective compared to hiring taxis or joining organised tours, especially for families or small groups. Driving yourself gives a more immersive experience of local culture, as users can interact with locals at gas stations, restaurants, or markets along the way.  

Lending your car as a rental vehicle to someone else can be advantageous for several reasons:  

- Renting out one's car can provide an additional stream of income.  
- If the car is sitting idle for extended periods, renting it out can help offset ownership costs such as insurance, maintenance, and depreciation.  
- Renting out a car ensures that it is being used regularly, which can prevent issues that arise from prolonged inactivity, such as battery drain or mechanical problems.  
- In areas with high demand for rental cars, especially during peak travel seasons or events, cars can help meet the needs of travellers.  
- Users can choose when to make their car available for rent, ensuring availability for personal use when needed.  
- Renting out cars can foster community engagement and connections.  

---

## PRELIMINARY INVESTIGATION

### Problems with Existing System

- Rental applications may not have widespread coverage in all regions.  
- User experience can vary widely; some platforms have complex interfaces.  
- Service fees or commissions increase the overall cost for users.  
- Lack of real-time updates in availability and pricing may cause misunderstandings.  

### Proposed System

- Implement real-time availability and pricing updates.  
- Enhance trust and safety with robust rating and review systems.  
- Offer instant booking options for rentals that meet certain criteria.  
- Improve UI for better user experience and ease of use.  

---

## FEASIBILITY STUDY

A feasibility study is a comprehensive analysis of the viability of a proposed project, venture, or idea. It aims to determine whether the project is technically, economically, and operationally feasible before committing resources.

### Technical Feasibility

- Assess if the required technology is available and effective.  
- Expertise in developing mobile and web apps, backend and frontend.  
- Efficient databases to manage user data, vehicles, bookings, and payments.  
- Integration with third-party services like payment gateways, GPS, and insurance.  
- Secure login mechanisms (e.g., multi-factor authentication).  

### Operational Feasibility

- Efficient processes for managing bookings, cancellations, and modifications.  
- Seamless integration with payment gateways.  
- Intuitive and user-friendly interface.  
- Mechanisms for feedback and service improvement.  

### Economic Feasibility

- Evaluate financial viability and revenue potential.  
- Licensing, subscription, and infrastructure costs.  
- Marketing campaigns and early user promotions.  
- Revenue from short-term and long-term rentals.  

---

## TECHNOLOGY STACK

We are using **Flutter** for building the application.  

Flutter offers:
- Cross-platform development (iOS, Android, web, desktop).  
- Uniform look and feel across all platforms.  
- Customizable widgets for quick UI development.  

**Backend:**
- **Node.js:** Fast, scalable, and ideal for real-time apps.  
- **MongoDB:** Flexible NoSQL database for unstructured data.  

These technologies provide a robust, scalable, and efficient backend solution.

---

## STAKEHOLDERS

1. **Customers:**  
   Individuals or businesses renting cars; tourists and corporate clients.

2. **Car Owners:**  
   Individuals or companies listing vehicles for rent.

3. **Technology Partners:**  
   Providers of software, hardware, and payment services.

4. **Marketing & Advertising Agencies:**  
   Promote the application and attract users.

5. **Competitors:**  
   Other rental companies monitoring the market.

6. **Community:**  
   Local areas where services operate.

---

## DESCRIPTION OF MODULES

### User Module
- Registration and Authentication (email, OTP, social login)  
- Profile Management (personal info, payment methods, rental history)  
- User Dashboard (current, past, upcoming rentals)  

### Car Module
- Car Listing (add/edit/remove cars with details and photos)  
- Car Details View (specifications, pricing, availability, reviews)  
- Car Availability (real-time schedule tracking)  

### Booking Module
- Search and Filter (by location, price, dates, type, etc.)  
- Booking Process (select dates, confirm, pay)  
- Booking Management (confirmation emails, view/manage bookings)  

### Payment Module
- Payment Gateway Integration (credit/debit, wallets, bank transfers)  
- Invoicing and Receipts (auto-generated and emailed)  
- Refunds and Cancellations (partial/full refunds based on policy)  
