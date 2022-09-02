import { useEffect, useState } from "react";
import createLotteryTicket from "../../aux/createLotteryTicket";
import styles from "./index.module.scss";

const LotteryTicket = () => {
    const [ticket, setTicket] = useState([]);

    const createTicket = () => {
        setTicket(createLotteryTicket);
    };

    useEffect(() => {
        createTicket();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.ticket}>
                {ticket.map((row, rowIndex) => {
                    return row.map((col, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={
                                col !== "" ? styles.number : styles.empty
                            }
                        >
                            {col}
                        </div>
                    ));
                })}
            </div>
            <button onClick={createTicket}>Generate new ticket</button>
        </div>
    );
};

export default LotteryTicket;
