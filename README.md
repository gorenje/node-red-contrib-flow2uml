## Flow to UML (Mermaid flowchart)

Convert the current flow tab to a Mermaid flowchart diagram.

**Warning**: will replace the contents the *info* panel of the node.

Also this is best used with Node-RED 3.1.x because that has inbuilt support for rendering [Mermaid](https://mermaid.js.org/) diagrams.

## Generating diagram

In the property panel, hit the generate button:

![img](https://cdn.openmindmap.org/content/1696066692869_Screen_Shot_2023-09-30_at_11.35.14.png)

Save the changes by clicking done and then there should be an image in the info box:

![img](https://cdn.openmindmap.org/content/1696066701424_Screen_Shot_2023-09-30_at_11.37.53.png)

## Discussion

This is a purely editor-based node with no interaction with the Node-RED server. The diagram generated is based on the current flow in the editor not the flow that has been deployed. Therefore any changes made in the editor will be reflected in the diagram generated.

## Mermaid Syntax

Beaware that Node-RED supports v9.4.3 of Mermaid and that the the [live editor](https://mermaid.live), at time of writing, at 10.4.0 - there are differences.

If there is a syntax error:

![img](https://cdn.openmindmap.org/content/1696066496021_Screen_Shot_2023-09-30_at_11.34.31.png)

Then you can edit the Mermaid code in the info tab:

![img](https://cdn.openmindmap.org/content/1696066696690_Screen_Shot_2023-09-30_at_11.35.57.png)

Save the changes and the info box will either show the image or not.

### Artifacts

- [Flow that maintains](https://flowhub.org/f/8e598f0f47194617) the codebase
- [GitHub repo]()
- [NPMjs node package]()
- [Node-RED node package]()

