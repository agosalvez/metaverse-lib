import { Component } from 'decentraland-ecs'
import { constant, ExampleComponent } from '../src/exampleComponent'

describe('Example spec', () => {
  (globalThis as any).Component = Component

  it('Should return constant', () => {
    expect(constant).toBe('constant')
  })
  /*
  it('Should return component', () => {
    const component = new ExampleComponent('localhost', 'bots', 'bots', 5672, 'my-queue')
    expect(component.host).toBe('localhost')
  })
  */
})