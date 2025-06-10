## Flow to UML (Mermaid flowchart)

Convert the current flow tab to a Mermaid UML flowchart diagram.

## Generating diagram

Either use the Action List drop down, selecting *Convert flow to UML*:

![img](https://cdn.openmindmap.org/content/1697468701824_Screen_Shot_2023-10-16_at_17.04.58.png)

Or using the sidebar, first select the *Flow to UML* menu point

![img](https://cdn.openmindmap.org/content/1697469135942_Screen_Shot_2023-10-16_at_17.06.39.png)

Then select a drection - either TB - top to bottom or LR - left to right and press the generate button:

![img](https://cdn.openmindmap.org/content/1700942716281_Screen_Shot_2023-11-25_at_20.59.24.png)

There is a link to the [mermaid.live](https://mermaid.live) editor, the link incorporates the currently generated Mermaid diagram. This link is updated with each click on the generate button.

## Link to Mermaid.live

There is now a direct link to the Mermaid live editor with the UML diagram generated from the flow:

![img](https://cdn.openmindmap.org/content/1700942167953_flow2uml.gif)

## Discussion

This is a purely editor-based node with no interaction with the Node-RED server. The diagram generated is based on the current flow in the editor not the flow that has been deployed. Therefore any changes made in the editor will be reflected in the diagram generated.

This allows for the construction of flows in the editor that can be used for Mermaid diagrams *but* that are not deployed to the server.

## FlowChart Node

Now includes a flow chart node for naming links and defining shapes.

## Examples

- [Flow2UML node](https://flowhub.org/f/f7a7f51fb024538f)
- [Normal nodes](https://flowhub.org/f/666972381aaa960e)
- Group support including [nested groups](https://flowhub.org/f/4c19635d7c95e596)
- [Multiple labels](https://flowhub.org/f/ee56b79ce65025e8) for single wires

### Artifacts

- [Flow that maintains](https://flowhub.org/f/8e598f0f47194617) the codebase
- [GitHub repo](https://github.com/gorenje/node-red-contrib-flow2uml)
- [NPMjs node package](https://www.npmjs.com/package/@gregoriusrippenstein/node-red-contrib-flow2uml)
- [Node-RED node package](https://flows.nodered.org/node/@gregoriusrippenstein/node-red-contrib-flow2uml)

