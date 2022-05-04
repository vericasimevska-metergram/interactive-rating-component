import styles from "./submitButton.module.css";

export function SubmitButton({ onSubmitClicked }) {
    return (
        <button className={styles.buttonSubmit} onClick={onSubmitClicked}>Submit</button>
    )
}