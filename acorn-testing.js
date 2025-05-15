import * as acorn from "npm:acorn";
import * as walk from "npm:acorn-walk";
import { generate } from "jsr:@davidbonnet/astring";

const file = await Deno.readTextFile('./shared.js')

const result = acorn.parse(file);

await Deno.writeTextFile('./out.json', JSON.stringify(result, null, 2));

function renameSymbol(ast, oldName, newName) {
    walk.full(ast, node => {
        if (node.name === oldName) {
            console.log(node);
            node.name = newName;
        }
    });
}

// Example usage
// renameSymbol(result, "Yt", "Yt_Base")

/*
  Object.defineProperty\(__dcg_chunk_exports__, "(.+)", \{
    get: \(\) => (.+),
  \}\);
*/

/*
modifiedCode = modifiedCode.replaceAll('"$1"', '"$2"')
*/

// result = result.replaceAll()


// Generate the modified code
let modifiedCode = generate(result);

// console.log(modifiedCode);
// Write the modified code to a file
await Deno.writeTextFile('./renamed.js', modifiedCode);
// Run deno fmt on the modified code
await Deno.run({
    cmd: ["deno", "fmt", "./renamed.js"],
}).status();