import { NodeType } from "@/types/flow";
import { cloneDeep } from "lodash";
import { LANGINFRA_SUPPORTED_TYPES } from "../../../constants/constants";

export const getNodesWithDefaultValue = (nodes: NodeType[]) => {
  const filteredNodes: NodeType[] = [];

  nodes.forEach((node) => {
    if (node?.data?.node?.template && node?.type === "genericNode") {
      const templateKeys = Object.keys(node.data.node.template).filter(
        (templateField) =>
          templateField.charAt(0) !== "_" &&
          node!.data!.node!.template[templateField]?.show &&
          LANGINFRA_SUPPORTED_TYPES.has(
            node!.data!.node!.template[templateField].type,
          ) &&
          templateField !== "code",
      );
      const newNode = cloneDeep(node);
      if (newNode?.data?.node?.template) {
        newNode.data.node.template = templateKeys.reduce((acc, key) => {
          acc[key] = cloneDeep(node?.data?.node?.template[key]);
          return acc;
        }, {});
      }
      filteredNodes.push(newNode);
    }
  });
  return filteredNodes;
};