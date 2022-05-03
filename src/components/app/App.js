import styles from "./app.module.css";
import { Card } from '../card/Card.js'

function App() {
    return (
        <div className={styles.container}>
            <Card />
        </div>
    )
}

export default App;
