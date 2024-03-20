import PriceOption from "../PriceOption/PriceOption";

 

const PriceOptions = () => {
     const priceOptions =[
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "30",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": "50",
          "features": [
            "Access to all gym equipment",
            "Unlimited group fitness classes",
            "Personal trainer session per month",
            "Locker with combination lock"
          ]
        },
        {
          "id": 3,
          "name": "Student Discount",
          "price": "25",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Locker room access",
            "Valid student ID required"
          ]
        },
        {
          "id": 4,
          "name": "Family Membership",
          "price": "8",
          "features": [
            "Access for up to 4 family members",
            "Access to all gym facilities",
            "Discounts on additional services",
            "Locker room access for each member"
          ]
        }
      ]
      
    return (
        <div className="m-12">
            <h1 className="text-2xl">Best Prices ever</h1>
           <div className="grid md:grid-cols-3 gap-6">
           {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;