import React from 'react'
import * as yup from 'yup';
import { Formik, useFormik } from 'formik';

const FormUscFormik = () => {

    const formik = useFormik({
        //innitial value set korte pari object akare mane{} er mordhe
        //object gulo separate korbo comma diye 
        // ekhane initialValue ekta object/ validationSchema ekta object
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        // validationSchema eta yup er ekta liabary object
        validationSchema: yup.object({
            name: yup.string().min(2, "Name minimun 2 charcter").required(),
            email: yup.string().required().email(),
            password: yup.string().min(3, "Password minimum 3 charecter")

        }),

        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm({ values: "" });
        }
    })


    // ekhne formik.handleSubmit/formik.handleChange default thake 
    return (
        <div className='bgColor'>
            <h2>Sign Up Form</h2>
            <p className="mb-2 text-muted">useing Formik & validation using yup</p>
            <form action="" onSubmit={formik.handleSubmit}>
                <div className='formStyle'>
                    <label>Name: </label>
                    <input type='text' name='name' onChange={formik.handleChange}
                        value={formik.values.name} />
                    <br />
                    {formik.touched.name && formik.errors.name && (<span style={{ color: "red" }}>{formik.errors.name}</span>)}
                </div>
                <div className='formStyle'>
                    <label>Email: </label>
                    <input type='email' name='email' onChange={formik.handleChange}
                        value={formik.values.email} />
                    <br />
                    {formik.touched.email && formik.errors.email && (<span style={{ color: "red" }}>{formik.errors.email}</span>)}
                </div>
                <div className='formStyle'>
                    <label>Password: </label>
                    <input type='password' name='password' onChange={formik.handleChange}
                        value={formik.values.password} />
                    <br />
                    {formik.touched.password && formik.errors.password && (<span style={{ color: "red" }}>{formik.errors.password}</span>)}
                </div>
                <button type='submit'>SignUp</button>
            </form>
        </div>
    )
}

export default FormUscFormik;