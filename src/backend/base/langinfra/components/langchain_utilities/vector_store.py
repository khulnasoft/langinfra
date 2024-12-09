from langchain_core.vectorstores import VectorStoreRetriever

from langinfra.custom import CustomComponent
from langinfra.field_typing import VectorStore


class VectoStoreRetrieverComponent(CustomComponent):
    display_name = "VectorStore Retriever"
    description = "A vector store retriever"
    name = "VectorStoreRetriever"
    legacy: bool = True
    icon = "LangChain"

    def build_config(self):
        return {
            "vectorstore": {"display_name": "Vector Store", "type": VectorStore},
        }

    def build(self, vectorstore: VectorStore) -> VectorStoreRetriever:
        return vectorstore.as_retriever()