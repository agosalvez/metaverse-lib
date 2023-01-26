import * as amqp from 'amqplib'
import { Channel, Connection } from 'amqplib'

/**
 * @public
 * @returns Some example component
 */
// @Component('exampleComponent')
export class ExampleComponent {
  private connection: Promise<Connection>
  private channel: Channel
  private URI: string

  constructor(public host: string, public user: string, public pass: string, public port: number, public queue: string) {
    this.URI = 'amqp://' + user+':' + pass + '@' + host + ':' + port.toString()
    console.info(this.URI)
    this.initialize(queue)
  }

  initialize(queue: string) {
    return amqp.connect(this.URI)
              .then(conn => conn.createChannel())
              .then(channel => {
                this.channel = channel
                return this.channel.assertQueue(this.queue)
              })
              .then(q => this.queue = q.queue)
              .catch(err => console.error(err.stack))
  }

  public async sendMsg(msg: string) {
    this.channel.sendToQueue(this.queue, Buffer.from(msg))
  }
}


/**
 * @public
 * @returns Some constant
 * This is constan variable
 */
export const constant = 'constant'

/**
 * @public
 * @returns Some value
 * This is a public function that does something
 */
export function someFn() {
  return 'some-value-modified'
}