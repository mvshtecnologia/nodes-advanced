export class Person {
  name: string

  constructor (name: string) {
    this.name = name
  }

  speak (name?: string): string {
    return `Olá ${name?.toUpperCase() ?? 'Fulano'}`
  }
}
