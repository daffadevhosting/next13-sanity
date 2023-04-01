import {defineCliConfig} from 'sanity/cli'

const projectId = proses.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = proses.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineCliConfig({
  api: {
    projectId,
    dataset
  }
})
