import { Container, Button, ButtonGroup, ExampleDemo, Spacer, Snippet } from "../../components/";

export default function System() {

    return (
        <Container>
            <article>
                <h1>Buttons</h1>
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
                <h1>Page container </h1>
                <h3>With a max width</h3>
                <Container>background white</Container>
                <Container background="dark">background dark</Container>
            </section>
            <section>
                <h1>Spacer</h1>
                <h3>Add some space between elements</h3>
                <ExampleDemo>
                    <div>A</div>
                    <Spacer x='3rem' />
                    <div>B</div>
                </ExampleDemo>
            </section>
        
            <section>
                <h1>Snippet</h1>
                <h3>Add some space between elements</h3>
                <ExampleDemo>
                    <Snippet>Test</Snippet>
                </ExampleDemo>
            </section>
        

        </Container>
    )
}