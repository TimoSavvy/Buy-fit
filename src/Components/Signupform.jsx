import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignupForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    function onSubmit (data) {
        alert(`Form submitted email: ${data.email} and passworld: ${data.password}`);
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-header">
                <h2>Sign Up</h2>
                <p>Create an account to get started.</p>
            </div>
        
            <div>
                <label>
                    Email:
                    <input type="email" {...register("email"), 
                        {required: 'Email is required'}} />
                </label>
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            </div>
            
            <div>
                <label>
                    Password:
                    <input type="password" {...register("password"), 
                    {required: 'Password is required'},  
                    {minLength: {
                        value: 6, 
                        message: 'Password must be at least 6 characters'},
                    maxLength: {
                        value: 15,
                        message: 'Password must not exceed 15 characters'
                    }
                } } />
                </label>
                {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
            </div>
            
            <div>
                <button type="submit">Sign Up</button>
            </div>
        </form>
    );
}
  
  