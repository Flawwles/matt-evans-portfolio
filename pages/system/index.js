import { Container, Button, ButtonGroup, ExampleDemo, Spacer, Snippet, ArticleTitle } from "../../components/";

export default function System() {

    return (
        <Container>
            <article>
                <ArticleTitle id="buttons">Buttons</ArticleTitle>
                <section>
                    <h3>Button type</h3>
                    <ExampleDemo>
                        <ButtonGroup>
                            <Button>Primary</Button>
                            <Button type='secondary'>Secondary</Button>
                        </ButtonGroup>
                    </ExampleDemo>
                    <h3>With jump</h3>
                    <p>Adding <Snippet>jump</Snippet> to the button will add a small hover animaton</p>
                    <ExampleDemo>
                        <ButtonGroup>
                            <Button jump>Primary</Button>
                            <Button jump type='secondary'>Secondary</Button>
                        </ButtonGroup>
                    </ExampleDemo>
                </section>
                <section>
                    <h3>Button groups</h3>
                    <p>Buttons work best when wrapped in a <Snippet>ButtonGroup</Snippet> component — This allows for smarter spacing and responsive behaviour.</p>
                    <ExampleDemo>
                        <ButtonGroup>
                            <Button>Primary</Button>
                            <Button type='secondary'>Secondary</Button>
                        </ButtonGroup>
                    </ExampleDemo>
                </section>
                <hr/>
            </article>
            <section>
                <ArticleTitle id="container">Page container</ArticleTitle>
                <h3>With a max width</h3>
                <ExampleDemo>
                    <Container>background white</Container>
                    <Container background="dark">background dark</Container>
                </ExampleDemo>
                <hr/>
            </section>
            <section>
                <ArticleTitle id="spacer">Spacer</ArticleTitle>
                <h3>Add some space between elements</h3>
                <ExampleDemo>
                    <div>A</div>
                    <Spacer x='3rem' />
                    <div>B</div>
                </ExampleDemo>
                <hr/>
            </section>
        
            <section>
                <ArticleTitle id="snippet">Snippet</ArticleTitle>
                <h3>Default snippet</h3>
                <ExampleDemo>
                    <p><Snippet>#demo</Snippet></p>
                    <p>I'm an <Snippet>inline</Snippet> snippet</p>
                </ExampleDemo>
            </section>
        

        </Container>
    )
}