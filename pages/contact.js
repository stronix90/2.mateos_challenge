import Head from "next/head";
import ContactForm from "../src/components/ContactForm";
import styles from "../styles/pages/home.module.scss";

const Contact = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contactanos</title>
                <meta name='description' content='Formulario de contacto. Desafío Mateos' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1>Form</h1>
                <ContactForm />
            </main>
        </div>
    );
};

export default Contact;
