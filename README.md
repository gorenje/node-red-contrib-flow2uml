## Flow to UML (Mermaid flowchart)

Convert the current flow tab to a Mermaid flowchart diagram.

**Warning**: will replace the contents the *info* panel of the node.

Also this is best used with Node-RED 3.1.x because that has inbuilt support for rendering [Mermaid](https://mermaid.js.org/) diagrams.


## Discussion

This is a purely editor-based node with no interaction with the Node-RED server. The diagram generated is based on the current flow in the editor not the flow that has been deployed. Therefore any changes made in the editor will be reflected in the diagram generated.

## Mermaid Syntax

Beaware that Node-RED supports v9.4.3 of Mermaid and that the the [live editor](https://mermaid.live), at time of writing, at 10.4.0 - there are differences.


### Artifacts

- [Flow that maintains](https://flowhub.org/f/8e598f0f47194617) the codebase
- [GitHub repo]()
- [NPMjs node package]()
- [Node-RED node package]()

