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
      <div>{this.state.date}</div>
    );
  }
}

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
    
  }

  render() {
      const numbers=[2,3,4,5,6];
      
      const listitems=numbers.map((number)=>
         <ListItem number={number}/>
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
    return (<li>{props.number}</li>);
}