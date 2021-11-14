import React from 'react';
import { MDBCardGroup,MDBTypography,MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow,MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


function AboutUs(){
    return(
    <div>
        <MDBTypography tag='h1'>About Us</MDBTypography>
        <p>
        We deliver the best care. A better way to shop for health & beauty. Healthcare for life. A pharmacy your family can trust.
        </p>
        <MDBCardGroup>
      <MDBCard>
        <MDBCardImage src="assets/images/Store.png" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Locally Owned</MDBCardTitle>
          <MDBCardText>
          Serving the community for over 49 years.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src="assets/images/Delivery.png" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Home Delivery</MDBCardTitle>
          <MDBCardText>
          Available for medical equipment.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src="assets/images/Call.png" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Personalized Care</MDBCardTitle>
          <MDBCardText>
            When you call, you speak to a person.
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
        
        <MDBTypography tag='h3'>Opening Hours:</MDBTypography>  
        <MDBTable>
      <MDBTableHead color="dark">
        <tr>
          <th>Day</th>
          <th>Working Hours</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>Monday</td>
          <td>8am-8pm</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>8am-8pm</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>8am-8pm</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>8am-8pm</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>8am-8pm</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>8am-8pm</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>8am-4pm</td>
        </tr>
        
                </MDBTableBody>
            </MDBTable>
            
        </div>
    )
  }



    
export default AboutUs;