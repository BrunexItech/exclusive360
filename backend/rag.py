import os
from langchain_community.document_loaders import PyPDFLoader
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings.fastembed import FastEmbedEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_groq import ChatGroq
from dotenv import load_dotenv

load_dotenv()

# Load and split PDF
loader = PyPDFLoader("Exclusive360_Knowledge_Base.pdf")
documents = loader.load_and_split()

# Create vector store
embeddings = FastEmbedEmbeddings(model_name="BAAI/bge-small-en-v1.5")
vector_store = Chroma.from_documents(documents, embeddings)

# Query function
def get_response(query):
    # Retrieve context
    results = vector_store.similarity_search(query, k=3)
    context = '\n\n'.join([doc.page_content for doc in results])
    
    # Generate response with Groq
    llm = ChatGroq(
        model="llama-3.3-70b-versatile",
        api_key=os.getenv("GROQ_API_KEY"),
        temperature=0.3
    )
    
    prompt = f"""
You are a helpful assistant for Exclusive 360 Journeys, a luxury safari company.
Use the context below to answer the question accurately.
If you don't know the answer, say "I don't have that information. Please call 0729 140 646 for assistance."

Context:
{context}

Question: {query}
Answer:"""
    
    response = llm.invoke(prompt)
    return response.content