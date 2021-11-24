import images from "../../assets/images/pic1.jpg"
import "./CardName.css"

function cardName() {

    // My Card Name
    return (
        <div className="row__cardname">
          <div className="col-md-12">
            <div className="name__card">
              <div className="profile__sidebar">
                  <img src={images} alt="ImamHilmi" />
                  <p className="profile__contact"><i className="fas fa-phone-square-alt"></i>0851 - 5745 - 5371</p>
                  <p className="profile__contact"><i className="far fa-envelope"></i>imam.hilmi253@gmail.com</p>
              </div>
               <div className="profile__main">
                <h2 className="profile__name">
                   Imam Hilmi
                </h2>
                 <p className="profile__position">
                   Website Developer
                 </p>
                 <p className="profile__body">
                  I do something in my freetime and I have an interest to continue developing my designing ablities for any applications.
                 </p>
               </div>
             </div>   
          </div>
        </div>
    );
  }
  
  export default cardName;