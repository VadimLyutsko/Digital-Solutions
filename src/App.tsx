import {Container} from './components/Container/Container';
import {Card} from './components/Card/Card';
import { fictitiousData } from './fictitiousData';
import styles from './App.module.scss'

function App() {

    const cards = fictitiousData.map(card => {
        return <Card key={card.id} id={card.id} title={card.title}
                     description={card.description}></Card>
    })

    return (
        <Container>
            <section className={styles.app}>
                {cards}
            </section>
        </Container>
    )
}

export default App;
