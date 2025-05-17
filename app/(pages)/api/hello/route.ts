/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 *         content:
 *           text/plain:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello World!
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: Request) {
  // Do whatever you want
  return new Response(JSON.stringify({ message: "Hello World!" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
