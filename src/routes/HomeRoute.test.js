import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { MemoryRouter } from 'react-router';
import HomeRoute from './HomeRoute';

const handlers = [
  rest.get('/api/repositories', (req, res, ctx) => {
    const langauge = req.url.searchParams.get('q').split('language:')[1];
    console.log(langauge);

    return res(
      ctx.json({
        items: [
          { id: 1, full_name: `${langauge}_one` },
          { id: 2, full_name: `${langauge}_two` },
        ],
      })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

test('renders two repo(links) for each language', async () => {
  render(
    <MemoryRouter>
      <HomeRoute />
    </MemoryRouter>
  );

  //loop over each language
  const languages = [
    'javascript',
    'typescript',
    'rust',
    'go',
    'python',
    'java',
  ];
  //for each langauge, make sure we see two links
  //assert that the links should have full_name

  for (let langauge of languages) {
    const links = await screen.findAllByRole('link', {
      name: new RegExp(`${langauge}_`),
    });
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveTextContent(`${langauge}_one`)
    expect(links[1]).toHaveTextContent(`${langauge}_two`)
    expect(links[0]).toHaveAttribute('href',`/repositories/${langauge}_one`)
    expect(links[1]).toHaveAttribute('href',`/repositories/${langauge}_two`)
  }
});
