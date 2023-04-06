import {loadEnvConfig} from '@next/env'
import Iframe from 'sanity-plugin-iframe-pane'
import type { DefaultDocumentNodeResolver } from 'sanity/desk'

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
	S,
	{ schemaType }
	) => {
	if (schemaType === 'post') {
		return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `S{process.env.NEXT_PUBLIC_VERCEL_URL}/api/preview`,
            defaultSize: `desktop`,
            reload: {
            	button: true,
            },
            atribute: {},
          })
          .title("Preview"),
      ]);
	}
}
