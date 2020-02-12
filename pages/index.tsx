import { Container, Jumbotron } from 'reactstrap';

function HomePage() {
  return (
    <Container>
      <Jumbotron>
        <h1>Instructions</h1>
        <p>We will be creating a new page that will list all of Facebook's github repositories.</p>
        <ul>
            <li>Path to page should be /repos</li>
            <li>API endpoint: <a href='https://api.github.com/orgs/facebook/repos'>https://api.github.com/orgs/facebook/repos</a></li>
            <li>Ability to navigate there from this page</li>
        </ul>
        <h2>Extra Notes</h2>
        <ul>
            <li>This is a Next.js application</li>
            <li>This app uses <a href='https://reactstrap.github.io/components/alerts/'>reactstrap</a> for some basic styling</li>
            <li>You are free to pull in any libraries you would like</li>
        </ul>
      </Jumbotron>
    </Container>
  );
}

export default HomePage;