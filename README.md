## Flow to UML (Mermaid flowchart)

Convert the current flow tab to a Mermaid UML flowchart diagram.

**Warning**: will replace the contents of the clipboard, aka pasteboard.

Also this is best used with Node-RED 3.1.x because that has inbuilt support for rendering [Mermaid](https://mermaid.js.org/) diagrams. The generated UML can then be pasted to the info box for the flow.

## Generating diagram

Either use the Action List drop down, selecting *Convert flow to UML*:

![img](https://cdn.openmindmap.org/content/1697468701824_Screen_Shot_2023-10-16_at_17.04.58.png)

Or using the sidebar, first select the *Flow to UML* menu point

![img](https://cdn.openmindmap.org/content/1697469135942_Screen_Shot_2023-10-16_at_17.06.39.png)

Then select a drection - either TB - top to bottom or LR - left to right:

![img](https://cdn.openmindmap.org/content/1697468872117_Screen_Shot_2023-10-16_at_17.06.48.png)

After that the generate button will copy the UML to the pasteboard:

![img](https://cdn.openmindmap.org/content/1697468819760_Screen_Shot_2023-10-16_at_17.06.54.png)

## Discussion

This is a purely editor-based node with no interaction with the Node-RED server. The diagram generated is based on the current flow in the editor not the flow that has been deployed. Therefore any changes made in the editor will be reflected in the diagram generated.

## Mermaid Syntax

Beaware that Node-RED supports v9.4.3 of Mermaid, the [Mermaid live editor](https://mermaid.live), at time of writing, stands at 10.4.0 - there are differences.

Also the Node-RED editor sometimes shows an Mermaid Syntax error that can be resolved by doing a reload - your mileage might vary.

### Artifacts

- [Flow that maintains](https://flowhub.org/f/8e598f0f47194617) the codebase
- [GitHub repo](https://github.com/gorenje/node-red-contrib-flow2uml)
- [NPMjs node package](https://www.npmjs.com/package/@gregoriusrippenstein/node-red-contrib-flow2uml)
- [Node-RED node package](https://flows.nodered.org/node/@gregoriusrippenstein/node-red-contrib-flow2uml)

