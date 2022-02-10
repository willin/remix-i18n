import { JsonResponse } from './shared/utils';

export const onRequest: PagesFunction<{
  NODE_ENV: string;
}> = async function onRequest(context) {
  const { env } = context;
  const timestamp = Date.now();
  const res = await context.next().catch((e) => {
    const result = {
      status: 0,
      error: env.NODE_ENV === 'production' ? 'Server Error!' : (e as string)
    };

    return JsonResponse(result, 500);
  });
  const delta = Date.now() - timestamp;
  res.headers.set('x-response-timing', delta);
  return res;
};
