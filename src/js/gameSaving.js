import json from "./parser";
import read from "./reader";

export class GameSavingLoader {
    static async load() {
        try {
            const data = await read();
            const value = await json(data);
            return JSON.parse(value);
        } catch (error) {
            throw new Error(error)
        }
        
    }
}