import styles from '@/styles/Home.module.css'
import SearchButton from '@/components/elements/button/SearchButton'

export default function TodayWF() {

    return (
        <>
        <main className={styles.main}>
            <h1 className={styles.card}> Don't forget to bring umbrella today! </h1>
            <SearchButton/>

        </main>
        
        </>

    )
}