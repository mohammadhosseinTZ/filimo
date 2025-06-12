import styles from "./styles.module.css"

function Buttons() {
  return (
    <div className={styles.buttons_wrapper}>
        <button className={styles.my_list}>لیست های من <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.21 3.426c-.043.16-.043.353-.043.74h11.666c0-.387 0-.58-.042-.74a1.25 1.25 0 0 0-.884-.883c-.16-.043-.353-.043-.74-.043H5.833c-.387 0-.58 0-.74.043a1.25 1.25 0 0 0-.884.883M1.666 10c0-2.357 0-3.536.732-4.268S4.309 5 6.667 5h6.666c2.357 0 3.536 0 4.268.732s.732 1.911.732 4.268v2.5c0 2.357 0 3.535-.732 4.268s-1.91.732-4.268.732H6.667c-2.357 0-3.536 0-4.268-.732-.732-.733-.732-1.911-.732-4.268zM7.5 9.167c0-.786 0-1.179.244-1.423S8.381 7.5 9.167 7.5h1.666c.786 0 1.179 0 1.423.244s.244.637.244 1.423v4.075c0 .761 0 1.142-.238 1.255-.239.113-.533-.128-1.123-.61l-.084-.069c-.505-.413-.758-.62-1.055-.62s-.55.207-1.055.62l-.084.068c-.59.483-.885.724-1.123.611s-.238-.494-.238-1.255z" clip-rule="evenodd"></path></svg></button>
        <button className={styles.subscription}>خرید اشتراک <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></path><path d="M12.4 11 9 8.74a1.25 1.25 0 0 0-2 1.05v4.42a1.26 1.26 0 0 0 2 1.06l3.44-2.21A1.26 1.26 0 0 0 12.4 11"></path><circle cx="16" cy="9" r="1"></circle><circle cx="16" cy="15" r="1"></circle><circle cx="16" cy="12" r="1"></circle></svg></button>
        <div className={styles.login_btn}>ی</div>
    </div>
  )
}

export default Buttons