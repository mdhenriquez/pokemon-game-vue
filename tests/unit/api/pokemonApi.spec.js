import pokemonApi from '@/api/pokemonApi';

describe('pokemonApi', () => {
  it('Axios debe de estar configurado, con el api de Pokemon', async () => {
    expect(pokemonApi.defaults.baseURL).toBe(
      'https://pokeapi.co/api/v2/pokemon'
    );
  });
});
