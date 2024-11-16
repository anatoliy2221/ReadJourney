import { ErrorMessage, Field, Form, Formik } from 'formik';
import Logo from '../logo/Logo';
import css from "./RegisterForm.module.css";
import IconSvg from '../IconSvg/IconSvg';
import Title from '../title/Title';
import RegistrationButton from '../registrationButton/RegistrationButton';

const RegisterForm = () => {
    return (
        <div className={css.container}>
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
                        <Field className={css.input} type="text" name="name" placeholder="Name" />
                        <Field className={css.input} type="email" name="email" placeholder="Mail" />
                        <ErrorMessage name="email" component="div" />
                        <div className={css.inputWrapper}>
                            <Field className={css.input} type="password" name="password" placeholder="Password" />
                            <IconSvg className={css.iconStyle} width={'20px'} height={'20px'} iconName='icon-eye' />
                        </div>
                        <ErrorMessage name="password" component="div" />
                        <RegistrationButton disabled={isSubmitting} />

                        {/* <button className={css.btn} type="submit" disabled={isSubmitting}>
                            Registration
                        </button> */}
                        <a className={css.link} href='#'>Already have an account?</a>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegisterForm