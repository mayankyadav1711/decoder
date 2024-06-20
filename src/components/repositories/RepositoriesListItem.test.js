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
  return {repository};
}
test("Shows a link to the github homepage for repository", async () => {
  const {repository} =  renderComponent();
  await screen.findByRole('img', {name : 'python'});
  const link = screen.getByRole('link', {
    name: /github repository/i,
  })
  expect(link).toHaveAttribute('href', repository.html_url)

});

const pause = () =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve();
        },100)
    })
}
