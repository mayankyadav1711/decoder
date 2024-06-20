import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import RepositoriesListItem from "./RepositoriesListItem";


function renderComponent() {
  const repository = {
    full_name: "facebook/react",
    language: "python",
    description: "good project",
    owner: "myk",
    name: "react",
    html_url: "https://github.com/facebook/react",
  };
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
}
test("Shows a link to the github homepage for repository", async () => {
  renderComponent();
  await screen.findByRole('img', {name : 'python'});

});

const pause = () =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve();
        },100)
    })
}
