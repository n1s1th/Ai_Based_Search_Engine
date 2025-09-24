import { InferenceClient } from "@huggingface/inference";
import { config } from "dotenv";
import path from "path";
config({ path: path.resolve(__dirname, "../../../.env.local") }); 


const seedPinecone = async () => {
    try {
        const indexName = process.env.PINECONE_INDEX_NAME || "";
        const pipecone = getPineconeClient();
        const index = pipecone.Index(indexName);
        const hf = new InferenceClient(process.env.HF_TOKEN);

    } catch (error) {}

};