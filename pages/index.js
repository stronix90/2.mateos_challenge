import Head from "next/head";
import LotteryTicket from "../src/components/LotteryTicket";
import styles from "../styles/pages/home.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Loteria</title>
                <meta name='description' content='Loteria. Desafío Mateos' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h2>Lottery ticket</h2>
                <LotteryTicket />
            </main>
        </div>
    );
}
