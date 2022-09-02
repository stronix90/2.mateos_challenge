import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './index.module.scss';
import validation from "./validation"
import swal from 'sweetalert';


const ContactForm = () => {
  return (
    <div className={styles.container}> 
        <Formik
                initialValues={{ name: '', email: '', password: '', textarea: '' }}
                validate={validation}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        swal("Form result", JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting, errors}) => (
                    <Form>
                        <label htmlFor='name'>Name</label>
                        <Field type="text" name="name" placeholder="Woody Allen"  required className={errors.name && styles.error}/>
                        <ErrorMessage name="name" component="div" />

                        <label htmlFor='email'>Email</label>
                        <Field type="email" name="email" placeholder="contoso@domain.com" required className={errors.email && styles.error}/>
                        <ErrorMessage name="email" component="div" />

                        <label htmlFor='password'>Password</label>
                        <Field type="password" name="password" placeholder="Provide a password" required className={errors.password && styles.error}/>
                        <ErrorMessage name="password" component="div" />

                        <label htmlFor='textarea'>Text Area</label>
                        <Field type="textarea" name="textarea" component="textarea" />
                        <ErrorMessage name="textarea" component="div" />

                        <button type='submit' disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
    </div>
  )
}

export default ContactForm