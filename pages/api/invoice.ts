// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { jsPDF } from "jspdf";

type Data = {
  uri: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const doc = new jsPDF();

  doc.setFontSize(40);
  doc.text("Devfolio Shop Invoice", 10, 10);
  const uri = doc.output("datauristring");

  res.status(200).json({ uri });
}
