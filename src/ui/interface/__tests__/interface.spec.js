

import handlePaginator from '../../paginator/paginator.js';
import {handleInterface, removePokemons} from '../interface.js';

jest.mock('../../paginator/paginator.js', () => jest.fn());


describe('it should manipulates the interface',()=>{
  it('it should remove pokemon cards',()=>{
    document.body.innerHTML ='<div class="card my-card"></div>'
    removePokemons()
    expect(document.querySelector('body')).not.toContainEqual('<div class="card my-card"></div>')
  })

  it('it should hidden and show parts of interface',()=>{
    document.body.innerHTML =`
      <div class="main-screen"></div>
      <header></header>
      <div id="results"></div>
    `
    handleInterface()
    expect(document.querySelector('.main-screen').className).toContain('hidden')
    expect(document.querySelector('header').className).not.toContain('hidden')
    expect(document.querySelector('#results').className).not.toContain('hidden')

    expect(handlePaginator).toHaveBeenCalledTimes(1)
  })
})