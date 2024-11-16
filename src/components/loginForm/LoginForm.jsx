import { ErrorMessage, Field, Form, Formik } from "formik";
import Logo from "../logo/Logo"
import Title from "../title/Title"
import IconSvg from "../IconSvg/IconSvg";
import css from './LoginForm.module.css'
import LoginButton from "../loginButton/LoginButton";

const LoginForm = () => {
    return (
        <div>
            <Logo />
            <Title />
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field className={css.input} type="email" name="email" placeholder="Mail" />
                        <ErrorMessage name="email" component="div" />
                        <div className={css.inputWrapper}>
                            <Field className={css.input} type="password" name="password" placeholder="Password" />
                            <IconSvg className={css.iconStyle} width={'20px'} height={'20px'} iconName='icon-eye' />
                        </div>
                        <ErrorMessage name="password" component="div" />
                        <LoginButton disabled={isSubmitting} />

                        {/* <button className={css.btn} type="submit" disabled={isSubmitting}>
                            Log in
                        </button> */}
                        <a className={css.link} href='#'>Don’t have an account?</a>
                    </Form>
                )}
            </Formik>


        </div>
    )
}

export default LoginForm