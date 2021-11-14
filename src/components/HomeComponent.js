import {MDBRow, MDBCol, MDBIcon, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import React from 'react';

function Home(){
    return(
        <div>
        <MDBContainer>
<<<<<<< HEAD
        <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="assets/images/JumbotronBg.png"
                alt="First slide"
              />
            <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Our Mobile App is coming soon... Stay Tuned!</h3>
              
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="assets/images/Vaccine.png"
                alt="Second slide"
              />
            <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Get Vaccinated!</h3>
              
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="assets/images/Home.png"
                alt="Third slide"
              />
            <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Shop all your pharmacy supplies online</h3>
              
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      </MDBContainer>
      <MDBRow className="mb-3" size="lg">

            <MDBCol size="2">
              <MDBIcon icon="credit-card" size="3x" />
              <h5 className="font-weight-bold mb-3">Pay by cash or
                credit card</h5>
            </MDBCol>
          

            <MDBCol size="2">
              <MDBIcon icon="shopping-cart" size="3x" />
=======
        <MDBRow>
            <MDBCol>
            <MDBJumbotron style={{ padding: 0,width:"1024px",height:"700px"}}>
                <MDBCol className="text-black text-center py-5 px-4 my-5 " style={{backgroundImage: 'url(assets/images/JumbotronBg.png)',height:"700px",width:"1024px",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"}}>
                <MDBCol className="py-5">
                {/* <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Create your beautiful website with MDBootstrap</MDBCardTitle>
                    <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                    </p> */}
                   </MDBCol>
                </MDBCol>
            </MDBJumbotron>
>>>>>>> 0bceb36c1b882c90fa9241164513a8a875917a6c
            
              <h5 className="font-weight-bold mb-3">Wide variety of products</h5>
            </MDBCol>
          
          
            <MDBCol size="2">
              <MDBIcon icon="bicycle" size="3x" />
            
              <h5 className="font-weight-bold mb-3">Fitness
                    supplements</h5>
            </MDBCol>

            </MDBRow>          
      </div>  


    );
}
export default Home;