import * as acorn from "npm:acorn";

const file = await Deno.readTextFile('./shared.js')

const result = acorn.parse(file);

await Deno.writeTextFile('./out.json', JSON.stringify(result, null, 2));
// debugger;