import Layout from "./components/Layout";
import { ThemeContextProvider } from "./components/themeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <Layout>
        <h1>Ich bin eine Überschrift</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          dolores, dignissimos vero ratione distinctio excepturi natus nesciunt
          quibusdam earum mollitia autem temporibus, odio omnis a? Modi possimus
          deserunt neque ex eaque consequuntur voluptatibus totam, ipsa dolorum
          optio velit laudantium voluptatum voluptate, veritatis vitae. Id
          numquam enim reiciendis alias aut velit quaerat accusantium suscipit
          porro mollitia, impedit modi consequuntur sapiente, maiores qui nisi.
          Aspernatur qui aut ipsam amet excepturi? Natus, ipsam? Incidunt
          delectus vitae sint et ipsam architecto beatae illo inventore unde ex,
          est error saepe magni nemo porro dolorum, corporis deleniti
          consectetur dignissimos debitis aspernatur commodi. Quasi libero
          impedit saepe.
        </p>
      </Layout>
    </ThemeContextProvider>
  );
}

export default App;
