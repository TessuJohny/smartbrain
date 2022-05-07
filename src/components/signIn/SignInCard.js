import React from "react";


class SignInCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailId : '',
            pwd : ''
        }
    }

    onEmaiIdChange = (event) => {
        this.setState({ emailId : event.target.value });
    }

    onPwdChange = (event) => {
        this.setState({ pwd : event.target.value });
    }

    onSignIn = () => {
        fetch('http://localhost:3000/signIn', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(data => {
            if (data === 'success') {
                this.props.changeRouterTo('home');
            } else {
                console.log(data);
            }
        });
    }

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset 
                            id="sign_up" 
                            className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address" 
                                    id="email-address" 
                                    onChange={this.onEmaiIdChange}/>
                            </div>
                            <div className="mv3">
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="password">Password</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    onChange={this.onPwdChange}/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                                onClick={this.onSignIn} 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                            <a href="#0" 
                                className="f6 link dim black db pointer" 
                                onClick={() => this.props.changeRouterTo('register')}>Register</a>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default SignInCard;