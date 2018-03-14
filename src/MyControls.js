import React from 'react';

export class Clock extends React.Component
{
   constructor(props) {
    super(props);
       
    this.updateDate = this.updateDate.bind(this);
    
    this.state = {
      date: new Date().toLocaleTimeString(),
    }
    this.interval = setInterval(this.updateDate, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  updateDate() {
    this.setState({
      date: new Date().toLocaleTimeString(),
    });
  }
  
  render() {
    return(
      this.state.date
    );
  }
}

// Toggle between login and logout button. Shows the functionality of changing a state between two items only
export class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    
    const button = isLoggedIn ? (
      <LogoutButton onClick={this.handleLogoutClick} />
    ) : (
      <LoginButton onClick={this.handleLoginClick} />
    );

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export class DisplayArray extends React.Component {

  constructor(props) {
    super(props);
    this.state={numbers:[2,3,4,5,6]};
  }

  render() {
      //const numbers=[2,3,4,5,6];
      
      const listitems=this.state.numbers.map((number,index)=>
         <ListItem key={index} number={number}/>
        );
    return (
      <div>
        {listitems}
      </div>
    );
  }
}

function ListItem(props)
{
    return (<li key={props.id}>{props.number}</li>);
}

// Display array of objects in a list using an element ListUsers
export class DisplayObjectArray extends React.Component {

  constructor(props) {
    super(props);
    
  }

  render() {
      const users=[{id:1, firstname:"Mark", lastname:"Mbithi"},{id:2, firstname:"John", lastname:"Doe"}];
      
      const userslist=users.map((user)=>
         <ListUsers key={user.id} user={user}/>
        );
    return (
      <div>
        {userslist}
      </div>
    );
  }
}

function ListUsers(props)
{
    return (<li>{props.user.firstname} {props.user.lastname}</li>);
}
            
export class UserForm extends React.Component 
{
      constructor(props)
      {
         super(props);
         
         this.state = {name: '', essay:'',favoritefruit:'coconut'};
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
          if(event.target.name==="name") //Get's where the change is coming from and updating relevant states
          {
             this.setState({name: event.target.value});
          }
          
          else if(event.target.name==="essay") // Handles change from essay textarea component
          {
             this.setState({essay: event.target.value});
          }
          else if(event.target.name==="favoritefruit") // Handles change from select favoritefruit component
          {
             this.setState({favoritefruit: event.target.value});
          }
          else if(event.target.name==="myfiles") // Handles change from file component
          {
             this.setState({favoritefruit: event.target.value});
          }
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
      }

      render() {
        return (
            <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </label>
            <label>
            Essay:
            <textarea name="essay" value={this.state.essay} onChange={this.handleChange} />
            </label>
            <label>
            Who is your prefered mobile provider
            <select name="favoritefruit" value={this.state.favoritefruit} onChange={this.handleChange}>
              <option value="Select favorite fruit">Select favorite fruit</option>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
            </label>
            <input id="uploadInput" type="file" name="myFiles" onChange={this.handleChange} multiple/>
            <input type="submit" value="Submit" />
          </form>
            <div>
            <p>Name: {this.state.name}</p>
            <p>Essay: {this.state.essay}</p>
            <p>Favorite Fruit: {this.state.favoritefruit}</p>
            </div>
            </div>
        );
      }
}