import {loadEnvConfig} from '@next/env'
import {StudioLogo, defineConfig} from 'sanity'
import StudioNav from './components/StudioNav'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {myTheme} from './lib/theme'
import {getDefaultDocumentNode} from './structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
basePath: '/studio',
  name: 'default',
  title: 'admin',

  projectId,
  dataset,

  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: StudioLogo,
      navbar: StudioNav,
    }
  },
  theme: myTheme,
})
