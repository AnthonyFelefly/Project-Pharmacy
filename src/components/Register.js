import React,{Component} from 'react';
import { MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdbreact';


class RegisterPage extends Component {
  state = {
    name: '',
    password: '',
    email: '',
    
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += ' was-validated';
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div >
        <form
          className='needs-validation'
          onSubmit={this.submitHandler}
          noValidate
        >
            <p className="h5 text-center mb-4">Sign up</p>
        <div className="grey-text">
          <MDBRow>
            <MDBCol md='15'>
              <MDBInput
                icon='user'
                value={this.state.name}
                name='name'
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterNameEx'
                label='Your name'
                
                required
              >
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>


              </MDBInput>
              <MDBInput
                icon='lock'
                value={this.state.password}
                name='password'
                onChange={this.changeHandler}
                type='password'
                id='materialFormRegisterNameEx'
                label='Your password'
                
                required
              >
                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
              </MDBInput>

              <MDBInput
                icon='envelope'
                value={this.state.email}
                onChange={this.changeHandler}
                type='email'
                id='materialFormRegisterConfirmEx3'
                name='email'
                label='Your Email address'
                
                required
              >
                <small id='emailHelp' className='form-text text-muted '>
                  We'll never share your email with anyone else.
                </small>
              </MDBInput>
              
             
      
            </MDBCol>



          </MDBRow>
          </div>
          <MDBRow>
          <MDBCol md='4' className='mb-3'>
            <div className='custom-control custom-checkbox pl-3'>
              <input
                className='custom-control-input'
                type='checkbox'
                value=''
                id='invalidCheck'
                required
              />
              <label className='custom-control-label' htmlFor='invalidCheck'>
                Agree to terms and conditions
              </label>
              <div className='invalid-feedback'>
                You must agree before submitting.
              </div>
            </div>
          </MDBCol>
          <MDBCol md='4' className='mb-3'>
            <div className='custom-control custom-checkbox pl-3'>
              <input
                className='custom-control-input'
                type='checkbox'
                value=''
                id='invalidAge'
                required
              />
              <label className='custom-control-label' htmlFor='invalidAge'>
                I confirm that i am 18 years old or over.
              </label>
              <div className='invalid-feedback'>
                You must agree before submitting.
              </div>
            </div>
          </MDBCol>
          </MDBRow>
          <div className="text-center">
          <MDBBtn color='primary' type='submit'>
            Register
          </MDBBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;