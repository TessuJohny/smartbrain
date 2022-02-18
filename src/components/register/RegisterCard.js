import React from "react";


const RegisterCard = ({changeRouterTo}) => {
    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="register" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="reg-email">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="reg-email" id="reg-email" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="reg-password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="reg-password" id="reg-password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input onClick={() => changeRouterTo('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" type="submit" value="Register" />
                    </div>
                </div>
            </main>
        </article>
    );
}

export default RegisterCard;