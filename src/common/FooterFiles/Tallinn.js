import React from 'react'



function Tallinn() {
  return (    
    <div className="footer-tallinn-container">      
      <div className="footer-tallinn-title-container">
        <h1> About Tallinn </h1>
      </div>
      <div className="card border-dark mb-3">
        <div className="row g-0">
          <div className='col-md-4'>
            <img src='../assets/wik-1.jpeg' className='card-img-top' alt='Keto Food' />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-title">About</h6>
              <p className="card-text">Tallinn, Estonia’s capital on the Baltic Sea, is the country’s cultural hub. It retains its walled, cobblestoned Old Town, home to cafes and shops, as well as Kiek in de Kök, a 15th-century defensive tower. Its Gothic Town Hall, built in the 13th century and with a 64m-high tower, sits in historic Tallinn’s main square. St. Nicholas Church is a 13th-century landmark exhibiting ecclesiastical art.
              </p>  
            </div>
          </div>
        </div>  
      </div>  
      
      <div className="card border-dark mb-3"> 
        <div className="row g-0">
          <div className='col-md-4'>
            <img src='../assets/wik-3.jpeg' className='card-img-top' alt='kitchen' />
          </div>
          <div className="col-md-8">
            <div className='card-body'>
              <h6 className="card-title">Little History</h6>          
              <p className="card-text">
              The first archaeological traces of a small hunter-fisherman communitys presence[8] in what is now Tallinns city centre are about 5,000 years old. The comb ceramic pottery found on the site dates to about 3000 BCE and corded ware pottery c. 2500 BCE.[28]


Toompea Castle (Toompea loss)
Around 1050, the first fortress was built on Tallinn Toompea.[15]

As an important port for trade between Novgorod and Scandinavia, it became a target for the expansion of the Teutonic Knights and the Kingdom of Denmark during the period of Northern Crusades in the beginning of the 13th century when Christianity was forcibly imposed on the local population. Danish rule of Tallinn and north Estonia started in 1219.
              </p>
              <h6 className="do-not-eat"> <strong>Do Not Eat</strong></h6>
              <div className='card'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <em>Grains - wheat, corn, rice, cerels, etc</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Sugar - honey, agave, maple syrup, etc</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Fruits - apples, bananas, oranges, etc</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Tubers - potato, yams, etc</em>
                  </li>
                </ul>                
              </div>
              <h6 className="do-eat"><strong>Do Eat</strong></h6>
              <div className="card do-eat">                
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <em>Meats - fish, beef, lamb, poultry, eggs, etc</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Leafy Greens - spinach, kale, etc</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Above ground vegetables - broccoli, cauliflower, etc</em>
                  </li>
                  <li className='list-group-item'>
                    <em>High Fat Dairy - hard cheeses, high fat cream, butter, etc</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Nuts and seeds - macadamias, walnuts, sunflower seeds, etc</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Avocado and berries - raspberries, blackberries and other low glycemic impact berries</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Sweeteners - stevia, erythritol, monk fruit and other low carb sweeteners</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Other fats - coconut oil, high-fat salad dressing, saturated fats, etc</em>
                  </li>
                </ul>
              </div>              
            </div>
          </div>
        </div>
      </div> 

      <div className="card border-dark mb-3">
        <div className="row g-0">
          <div className='col-md-4'>
            <img src='../assets/wik-5.jpeg' className='card-img-top' alt='weight measurement' />
          </div>
          <div className="col-md-8">
            <div className='card-body'>
              <h6 className="card-title">Benefits of a Ketogenic Diet</h6>
              <div className="card-text"> 
                <ul>           
                  <li> Weight Loss </li>                                    
                  <li> Control Blood Sugar </li>                           
                  <li> Mental Focus </li>                          
                  <li> Increase Energy </li>         
                  <li> Lower Cholesterol and Blood Pressure </li>             
                  <li> Insulin Resistance </li>             
                  <li> Decrease Acne </li>    
                </ul>      
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tallinn