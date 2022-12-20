import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    try {
      const contents = await readFile('messages.json', 'utf-8');
      const messages = JSON.parse(contents);

      return messages[id];
    } catch (e) {
      return null;
    }
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');

    try {
      const messages = JSON.parse(contents);

      return messages;
    } catch (e) {
      return {};
    }
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8');

    try {
      const messages = JSON.parse(contents);

      const id = Math.floor(Math.random() * 999);

      messages[id] = { id, content };

      await writeFile('messages.json', JSON.stringify(messages));
    } catch (e) {}
  }
}
