/* eslint-disable react/react-in-jsx-scope */
import { GlobalStyles } from "@ui/theme/GlobalStyles";

const bg = "https://mariosouto.com/cursos/crudcomqualidade/bg";

const todos = [
  {
    id: "2bb2bdaa-ccc1-4363-b7f7-8a912c62b4fe",
    date: "2024-01-28T04:11:38.311Z",
    content: "Primeira TODO Waaaa",
    done: false,
  },
  {
    id: "65ccbeed-cff4-4797-9068-b7245db744c5",
    date: "2024-01-28T04:11:38.312Z",
    content: "Atualizada!",
    done: false,
  },
];

function HomePage() {
  console.log("todos", todos);
  return (
    <main>
      <GlobalStyles themeName="red" />
      <header
        style={{
          backgroundImage: `url('${bg}')`,
        }}
      >
        <div className="typewriter">
          <h1>O que fazer hoje?</h1>
        </div>
        <form>
          <input type="text" placeholder="Correr, Estudar..." />
          <button type="submit" aria-label="Adicionar novo item">
            +
          </button>
        </form>
      </header>

      <section>
        <form>
          <input type="text" placeholder="Filtrar lista atual, ex: Dentista" />
        </form>

        <table border={1}>
          <thead>
            <tr>
              <th align="left">
                <input type="checkbox" disabled />
              </th>
              <th align="left">Id</th>
              <th align="left">Conteúdo</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {todos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{todo.id.substring(0, 4)}</td>
                  <td>{todo.content}</td>
                  <td align="right">
                    <button data-type="delete">Apagar</button>
                  </td>
                </tr>
              );
            })}

            {/* <tr>
              <td colSpan={4} align="center" style={{ textAlign: "center" }}>
                Carregando...
              </td>
            </tr> */}

            {/* <tr>
              <td colSpan={4} align="center">
                Nenhum item encontrado
              </td>
            </tr> */}

            {/* <tr>
              <td colSpan={4} align="center" style={{ textAlign: "center" }}>
                <button data-type="load-more">
                  Carregar mais{" "}
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: "4px",
                      fontSize: "1.2em",
                    }}
                  >
                    ↓
                  </span>
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default HomePage;
