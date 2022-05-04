import styles from "./submitButton.module.css";

export function SubmitButton({ whenSubmitClicked }) {
    return (
        <button className={styles.buttonSubmit} onClick={whenSubmitClicked}>Submit</button>
    )
}