import { Container, Button, ExampleDemo, Spacer, Snippet } from "../../components/";

export default function System() {

    return (
        <Container>
            <section>
                <h1>Buttons</h1>
                <h3>Button type</h3>
                <ExampleDemo>
                    <Button>Primary</Button>
                    <Spacer x="1rem" />
                    <Button type='secondary'>Secondary</Button>
                </ExampleDemo>
                <h3>With jump</h3>
                <p>Adding <Snippet>jump</Snippet> to the button will add a small hover animaton</p>
                <ExampleDemo>
                    <Button jump>Primary & jump</Button>
                    <Spacer x="1rem" />
                    <Button jump  type='secondary'>Secondary & jump</Button>
                </ExampleDemo>
                <hr/>
            </section>

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