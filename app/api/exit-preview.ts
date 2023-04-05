import type { nextApiRequest, NextApiResponse } from 'next';

export default function exit(req: nextApiRequest, res: NextApiResponse) {
	res.setPreviewData({});
	res.writeHead(307, { Location: "/"});
	res.end();
}