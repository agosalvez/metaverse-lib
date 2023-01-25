
import client, {Channel, Connection} from 'amqplib'


/**
 * @public
 * @returns Some example component
 */
// @Component('exampleComponent')
export class ExampleComponent {
  private connection: Promise<Connection>
  private channel: Channel
  private queue: string

  constructor(public host: string, public user: string, public pass: string, public port: number) {
    const cadConn = 'amqp://' + user+':' + pass + '@' + host + ':' + port.toString()
    console.info(cadConn)
    this.connection = client.connect(cadConn)
    this.createChannel()
  }

  private async createChannel() {
    this.channel = await (await this.connection).createChannel()
  }

  public async sendMsg(queue: string, msg: string) {
    this.queue = queue
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
  return 'some-value'
}