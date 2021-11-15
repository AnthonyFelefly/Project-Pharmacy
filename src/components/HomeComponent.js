import {MDBCol, MDBContainer, MDBJumbotron, MDBRow } from 'mdbreact';
import React from 'react';

function Home(){
    return(
        <MDBContainer>
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
            
            </MDBCol>
        </MDBRow>
</MDBContainer>


    );
}
export default Home;